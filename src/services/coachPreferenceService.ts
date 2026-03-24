import { supabase } from '../lib/supabase';
import type { CoachPreference } from '../types/database';

export const coachPreferenceService = {
  async getPreferences(coachId: string) {
    const { data, error } = await supabase
      .from('coach_preferences')
      .select('*')
      .eq('coach_id', coachId)
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    return data as CoachPreference[];
  },

  async createPreference(preference: Omit<CoachPreference, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('coach_preferences')
      .insert([preference])
      .select();

    if (error) throw error;
    return data?.[0] as CoachPreference;
  },

  async updatePreference(id: string, content: string) {
    const { data, error } = await supabase
      .from('coach_preferences')
      .update({ content })
      .eq('id', id)
      .select();

    if (error) throw error;
    return data?.[0] as CoachPreference;
  },

  async deletePreference(id: string) {
    const { error } = await supabase
      .from('coach_preferences')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
