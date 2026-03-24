import { supabase } from '../lib/supabase';
import type { ExerciseMapping } from '../types/database';

export const mappingService = {
  async getMappings(coachId: string) {
    const { data, error } = await supabase
      .from('exercise_mappings')
      .select('*')
      .eq('coach_id', coachId);
    
    if (error) throw error;
    return data as ExerciseMapping[];
  },

  async createMapping(mapping: Omit<ExerciseMapping, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('exercise_mappings')
      .upsert([mapping], { onConflict: 'coach_id,slang_name' })
      .select();

    if (error) throw error;
    return data?.[0] as ExerciseMapping;
  },

  async deleteMapping(id: string) {
    const { error } = await supabase
      .from('exercise_mappings')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
