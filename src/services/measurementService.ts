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
    // First, check if a measurement already exists for this athlete and date
    // to handle the missing unique constraint on the database level.
    const { data: existing } = await supabase
      .from('body_measurements')
      .select('id')
      .eq('athlete_id', measurement.athlete_id)
      .eq('recorded_at', measurement.recorded_at)
      .maybeSingle();

    const payload = {
      athlete_id: measurement.athlete_id,
      recorded_at: measurement.recorded_at,
      weight: measurement.weight,
      body_fat_percentage: measurement.body_fat_percentage,
      neck: measurement.neck,
      chest: measurement.chest,
      waist: measurement.waist,
      hips: measurement.hips,
      biceps: measurement.biceps,
      thighs: measurement.thighs,
      calves: measurement.calves,
      notes: measurement.notes
    };

    // If it exists, we include the ID to perform a PK-based upsert
    const { data, error } = await supabase
      .from('body_measurements')
      .upsert(existing ? { ...payload, id: existing.id } : payload)
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
