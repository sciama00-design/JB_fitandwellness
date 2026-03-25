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
    const { data, error } = await supabase.rpc('match_exercises', {
      query_embedding: embedding,
      match_threshold: threshold,
      match_count: limit,
    });
    if (error) throw error;
    return data;
  },

  async searchExercises(query: string, embedding?: number[] | null, _coachId?: string, threshold: number = 0.25, limit: number = 20) {
    // 1. Text-based search (Keywords AND logic)
    const keywords = query.split(/\s+/).filter(w => w.length > 1);
    
    let textQuery = supabase
      .from('exercise_library')
      .select('id, name, name_it, muscle_group, equipment, coach_id, forked_from');

    if (keywords.length > 0) {
      // Per ogni parola chiave, aggiungiamo un filtro .or() che deve essere soddisfatto (AND tra i vari .or)
      keywords.forEach(w => {
        textQuery = textQuery.or(`name.ilike.%${w}%,name_it.ilike.%${w}%`);
      });
    } else {
      textQuery = textQuery.or(`name.ilike.%${query}%,name_it.ilike.%${query}%`);
    }

    const { data: textMatches, error: textError } = await textQuery.limit(50);





    if (textError) throw textError;

    // 2. Vector-based search (if embedding is provided)
    let vectorMatches: any[] = [];
    if (embedding) {
      vectorMatches = await this.searchSimilarExercises(embedding, threshold, limit);
    }

    // 3. Merge and Deduplicate
    const resultsMap = new Map<string, any>();

    // Add text matches first with high pseudo-similarity (1.0 for exact, 0.9 for partial)
    textMatches?.forEach(ex => {
      const nameLower = ex.name.toLowerCase();
      const itLower = ex.name_it?.toLowerCase() || '';
      const qLower = query.toLowerCase();

      const isExact = nameLower === qLower || itLower === qLower;
      
      // Smart check for plural/singular (more flexible)
      const checkPlural = (a: string, b: string) => {
        const lo = a.length < b.length ? a : b;
        const hi = a.length < b.length ? b : a;
        if (hi.startsWith(lo)) {
          const rest = hi.substring(lo.length);
          return rest === 's' || rest === 'es';
        }
        return false;
      };

      const isPluralVariation = checkPlural(nameLower, qLower) || checkPlural(itLower, qLower);

      resultsMap.set(ex.id, {
        ...ex,
        similarity: isExact ? 1.0 : (isPluralVariation ? 0.98 : 0.9)
      });
    });



    // Add/Update with vector matches
    vectorMatches.forEach(ex => {
      if (!resultsMap.has(ex.id)) {
        resultsMap.set(ex.id, ex);
      } else {
        // If it's already there (from text search), maybe update similarity if vector is higher?
        // Actually, text match is usually more intent-aligned for specific names.
        const existing = resultsMap.get(ex.id);
        if (ex.similarity > existing.similarity) {
          resultsMap.set(ex.id, { ...existing, similarity: ex.similarity });
        }
      }
    });

    return Array.from(resultsMap.values()).sort((a, b) => b.similarity - a.similarity);
  }
};

