import { supabase } from '../lib/supabase';
import type { BodyMeasurement } from '../types/database';

export const measurementService = {
  async getAthleteMeasurements(athleteId: string) {
    const { data, error } = await supabase
      .from('body_measurements')
      .select('*')
      .eq('athlete_id', athleteId)
      .order('recorded_at', { ascending: false });
    
    if (error) throw error;
    return data as BodyMeasurement[];
  },

  async addMeasurement(measurement: Partial<BodyMeasurement>) {
    const { data, error } = await supabase
      .from('body_measurements')
      .insert([measurement])
      .select()
      .single();
    
    if (error) throw error;
    return data as BodyMeasurement;
  },

  async deleteMeasurement(id: string) {
    const { error } = await supabase
      .from('body_measurements')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
