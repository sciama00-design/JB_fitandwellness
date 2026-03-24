import { supabase } from '../lib/supabase';

export const athleteService = {
  async getAthletes(coachId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*, workout_plans!athlete_id(id, name, created_at)')
      .eq('coach_id', coachId)
      .eq('role', 'athlete');

    if (error) throw error;
    return data;
  },

  async getAthlete(id: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async updateFocusObjectives(id: string, focusObjectives: string) {
    const { data, error } = await supabase
      .from('profiles')
      .update({ focus_objectives: focusObjectives })
      .eq('id', id);

    if (error) throw error;
    return data;
  }
};
