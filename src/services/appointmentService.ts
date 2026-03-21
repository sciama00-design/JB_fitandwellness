import { supabase } from '../lib/supabase';
import type { Appointment } from '../types/database';

export const appointmentService = {
  async getCoachAppointments(coachId: string) {
    const { data, error } = await supabase
      .from('appointments')
      .select(`
        *,
        profiles:athlete_id (
          first_name,
          last_name,
          email
        )
      `)
      .eq('coach_id', coachId)
      .order('start_time', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getAthleteAppointments(athleteId: string) {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('athlete_id', athleteId)
      .order('start_time', { ascending: true });

    if (error) throw error;
    return data;
  },

  async createAppointment(appointment: Partial<Appointment>) {
    const { data, error } = await supabase
      .from('appointments')
      .insert([appointment])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateAppointment(id: string, updates: Partial<Appointment>) {
    const { data, error } = await supabase
      .from('appointments')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteAppointment(id: string) {
    const { error } = await supabase
      .from('appointments')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};
