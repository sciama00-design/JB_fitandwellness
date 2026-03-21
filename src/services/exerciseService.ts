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
      .select()
      .single();
    if (error) throw error;
    return data as ExerciseLibrary;
  },

  async updateExercise(id: string, exercise: Partial<ExerciseLibrary>) {
    const { data, error } = await supabase
      .from('exercise_library')
      .update(exercise)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as ExerciseLibrary;
  },

  async deleteExercise(id: string) {
    const { error } = await supabase
      .from('exercise_library')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
