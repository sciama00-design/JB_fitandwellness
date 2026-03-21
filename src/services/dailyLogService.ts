import { supabase } from '../lib/supabase';

export interface DailyLog {
  id?: string;
  athlete_id: string;
  date: string;
  weight_kg: number | null;
  kcal_eaten: number | null;
  sleep_hours: number | null;
  water_liters: number | null;
}

export const dailyLogService = {
  async getTodayLog(athleteId: string) {
    // Get YYYY-MM-DD in local time
    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localDate = new Date(today.getTime() - (offset * 60 * 1000)).toISOString().split('T')[0];
    
    const { data, error } = await supabase
      .from('daily_logs')
      .select('*')
      .eq('athlete_id', athleteId)
      .eq('date', localDate)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') throw error;
    return data as DailyLog | null;
  },

  async getLogsByDateRange(athleteId: string, startDate: string, endDate: string) {
    const { data, error } = await supabase
      .from('daily_logs')
      .select('*')
      .eq('athlete_id', athleteId)
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: true });

    if (error) throw error;
    return data as DailyLog[] || [];
  },

  async saveLog(log: DailyLog) {
    const { data, error } = await supabase
      .from('daily_logs')
      .upsert({
         athlete_id: log.athlete_id,
         date: log.date,
         weight_kg: log.weight_kg,
         kcal_eaten: log.kcal_eaten,
         sleep_hours: log.sleep_hours,
         water_liters: log.water_liters
      }, { onConflict: 'athlete_id,date' })
      .select()
      .single();

    if (error) throw error;
    return data as DailyLog;
  }
};
