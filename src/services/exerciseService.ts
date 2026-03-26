import { supabase } from '../lib/supabase';
import type { ExerciseLibrary } from '../types/database';

export const exerciseService = {
  async getAllExercises() {
    const { data, error } = await supabase
      .from('exercise_library')
      .select('*')
      .order('name');
    if (error) throw error;
    return data as ExerciseLibrary[];
  },

  async getPersonalExercises(userId: string) {
    const { data, error } = await supabase
      .from('exercise_library')
      .select('*')
      .eq('coach_id', userId)
      .order('name');
    if (error) throw error;
    return data as ExerciseLibrary[];
  },

  async createExercise(exercise: Partial<ExerciseLibrary>) {
    const { data, error } = await supabase
      .from('exercise_library')
      .insert([exercise])
      .select();
    if (error) throw error;
    if (!data || data.length === 0) throw new Error('Errore durante la creazione: nessuna riga inserita');
    return data[0] as ExerciseLibrary;
  },

  async updateExercise(id: string, exercise: Partial<ExerciseLibrary>) {
    const { data, error } = await supabase
      .from('exercise_library')
      .update(exercise)
      .eq('id', id)
      .select();
    if (error) throw error;
    if (!data || data.length === 0) throw new Error('Errore durante l\'aggiornamento: permesso negato o risorsa non trovata');
    return data[0] as ExerciseLibrary;
  },

  async deleteExercise(id: string) {
    const { error } = await supabase
      .from('exercise_library')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async searchSimilarExercises(embedding: number[], threshold: number = 0.5, limit: number = 10) {
    const { data: matches, error } = await supabase.rpc('match_exercises', {
      query_embedding: embedding,
      match_threshold: threshold,
      match_count: limit,
    });
    if (error) throw error;
    if (!matches || matches.length === 0) return [];

    // Fetch full data for these IDs to ensure we have all columns (coach_id, images, etc.)
    const ids = matches.map((m: any) => m.id);
    const { data: fullExercises, error: fetchError } = await supabase
      .from('exercise_library')
      .select('*')
      .in('id', ids);

    if (fetchError) throw fetchError;

    // Merge similarity back into full exercise objects
    return matches.map((m: any) => {
      const full = fullExercises?.find(f => f.id === m.id);
      return {
        ...full,
        similarity: m.similarity
      };
    }).filter((ex: any) => !!ex?.id); // Guard against missing records
  },

  async searchExercises(query: string, embedding?: number[] | null, coachId?: string, threshold: number = 0.25, limit: number = 20) {
    if (!query || query.trim().length === 0) {
      return this.getAllExercises();
    }

    const cleanQuery = query.trim().toLowerCase();
    const keywords = cleanQuery.split(/\s+/).filter(w => w.length > 1);
    
    // 1. Text-based search (Keywords AND logic)
    let textQuery = supabase
      .from('exercise_library')
      .select('*');

    if (keywords.length > 0) {
      // Per ogni parola chiave, aggiungiamo un filtro .or()
      // Nota: Multiple .or() su Supabase JS agiscono come AND tra di loro
      keywords.forEach(w => {
        textQuery = textQuery.or(`name.ilike.%${w}%,name_it.ilike.%${w}%`);
      });
    } else {
      textQuery = textQuery.or(`name.ilike.%${cleanQuery}%,name_it.ilike.%${cleanQuery}%`);
    }

    // Filter by coach if needed (show personal + global)
    if (coachId) {
      textQuery = textQuery.or(`coach_id.is.null,coach_id.eq.${coachId}`);
    }

    const { data: textMatches, error: textError } = await textQuery.limit(50);
    if (textError) throw textError;

    // 2. Vector-based search (if embedding is provided)
    let vectorMatches: any[] = [];
    if (embedding) {
      vectorMatches = await this.searchSimilarExercises(embedding, threshold, limit);
      // Filter vector matches by coach if needed
      if (coachId) {
        vectorMatches = vectorMatches.filter(ex => !ex.coach_id || ex.coach_id === coachId);
      }
    }

    // 3. Merge and Deduplicate
    const resultsMap = new Map<string, any>();

    // Add text matches first with high pseudo-similarity (1.0 for exact, 0.9 for partial)
    textMatches?.forEach((ex: any) => {
      const nameLower = ex.name.toLowerCase();
      const itLower = ex.name_it?.toLowerCase() || '';

      const isExact = nameLower === cleanQuery || itLower === cleanQuery;
      
      // Smart check for plural/singular (more flexible)
      const checkPlural = (a: string, b: string) => {
        const lo = a.length < b.length ? a : b;
        const hi = a.length < b.length ? b : a;
        if (hi.startsWith(lo)) {
          const rest = hi.substring(lo.length);
          return rest === 's' || rest === 'es' || rest === 'i' || rest === 'e'; // Added Italian plurals
        }
        return false;
      };

      const isPluralVariation = checkPlural(nameLower, cleanQuery) || checkPlural(itLower, cleanQuery);
      
      // Boost for keyword match
      let similarity = isExact ? 1.0 : (isPluralVariation ? 0.98 : 0.92);
      
      // Bonus if it's a personal exercise
      if (coachId && ex.coach_id === coachId) {
        similarity += 0.05;
      }

      resultsMap.set(ex.id, {
        ...ex,
        similarity
      });
    });

    // Add/Update with vector matches
    vectorMatches.forEach(ex => {
      const existing = resultsMap.get(ex.id);
      if (!existing) {
        resultsMap.set(ex.id, ex);
      } else {
        // If it's already there, use the best score
        const bestSim = Math.max(existing.similarity, ex.similarity);
        resultsMap.set(ex.id, { ...existing, similarity: bestSim });
      }
    });

    // Final sorting and formatting
    const finalResults = Array.from(resultsMap.values())
      .sort((a, b) => b.similarity - a.similarity);

    // Filter out system exercises if a personal fork of the SAME exercise is in the results
    const personalForkedIds = new Set(
      finalResults
        .filter(ex => ex.coach_id === coachId && ex.forked_from)
        .map(ex => ex.forked_from)
    );

    return finalResults.filter((ex: any) => {
      if (ex.coach_id === null && personalForkedIds.has(ex.id)) {
        return false;
      }
      return true;
    }).slice(0, limit);
  }
};

