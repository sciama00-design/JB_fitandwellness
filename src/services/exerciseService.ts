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
  }
};
