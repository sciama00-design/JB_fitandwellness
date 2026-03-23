import { supabase } from '../lib/supabase';
import type { WeeklyPlannerEntry } from '../types/database';

export const weeklyPlannerService = {
  async getEntries(athleteId: string, startDate: string, endDate: string) {
    const { data, error } = await supabase
      .from('weekly_planner')
      .select('*')
      .eq('athlete_id', athleteId)
      .gte('date', startDate)
      .lte('date', endDate);

    if (error) throw error;
    return data as WeeklyPlannerEntry[];
  },

  async getEntry(athleteId: string, date: string) {
    const { data, error } = await supabase
      .from('weekly_planner')
      .select('*')
      .eq('athlete_id', athleteId)
      .eq('date', date)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') throw error;
    return data as WeeklyPlannerEntry | null;
  },

  async saveEntry(entry: Partial<WeeklyPlannerEntry>) {
    const { data, error } = await supabase
      .from('weekly_planner')
      .upsert({
        athlete_id: entry.athlete_id,
        date: entry.date,
        commitments: entry.commitments,
        meals: entry.meals,
        daily_preferences: entry.daily_preferences,
        ai_suggestions: entry.ai_suggestions,
      }, { onConflict: 'athlete_id, date' })
      .select()
      .single();

    if (error) throw error;
    return data as WeeklyPlannerEntry;
  },

  async deleteEntry(id: string) {
    const { error } = await supabase
      .from('weekly_planner')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};

