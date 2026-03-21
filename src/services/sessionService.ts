import { supabase } from '../lib/supabase';
import type { WorkoutSession, ExerciseLog } from '../types/database';

export const sessionService = {
  async startSession(planId: string, athleteId: string) {
    const { data, error } = await supabase
      .from('workout_sessions')
      .insert([{ plan_id: planId, athlete_id: athleteId }])
      .select()
      .single();
    if (error) throw error;
    return data as WorkoutSession;
  },

  async logExercise(log: Partial<ExerciseLog>) {
    const { data, error } = await supabase
      .from('exercise_logs')
      .insert([log])
      .select()
      .single();
    if (error) throw error;
    return data as ExerciseLog;
  },

  async completeSession(sessionId: string, durationSeconds: number, notes?: string) {
    const { data, error } = await supabase
      .from('workout_sessions')
      .update({ 
        completed_at: new Date().toISOString(),
        duration_seconds: durationSeconds,
        notes: notes 
      })
      .eq('id', sessionId)
      .select()
      .single();
    if (error) throw error;
    return data as WorkoutSession;
  },

  async getAthleteHistory(athleteId: string) {
    const { data, error } = await supabase
      .from('workout_sessions')
      .select('*, workout_plans(name), exercise_logs(*)')
      .eq('athlete_id', athleteId)
      .order('started_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  async getCoachAthletesHistory(coachId: string) {
    // First get all athlete IDs for this coach
    const { data: athletes, error: athletesError } = await supabase
      .from('profiles')
      .select('id')
      .eq('coach_id', coachId)
      .eq('role', 'athlete');

    if (athletesError) throw athletesError;
    if (!athletes || athletes.length === 0) return [];

    const athleteIds = athletes.map(a => a.id);

    // Then get sessions for those athletes
    const { data, error } = await supabase
      .from('workout_sessions')
      .select('*, profiles!athlete_id(first_name, last_name), workout_plans(name)')
      .in('athlete_id', athleteIds)
      .order('started_at', { ascending: false })
      .limit(20);

    if (error) throw error;
    return data;
  },

  async getLastExerciseLogs(athleteId: string, exerciseLibraryId: string) {
    // 1. Find the last session that contained this exercise
    const { data: lastSession, error: sessionError } = await supabase
      .from('workout_sessions')
      .select('id, started_at')
      .eq('athlete_id', athleteId)
      .not('completed_at', 'is', null)
      .order('started_at', { ascending: false })
      .limit(10); // Check recent sessions

    if (sessionError) throw sessionError;
    if (!lastSession || lastSession.length === 0) return null;

    // 2. For each session, check if it had the exercise
    for (const session of lastSession) {
      const { data: logs, error: logsError } = await supabase
        .from('exercise_logs')
        .select('*, exercises!inner(exercise_library_id)')
        .eq('session_id', session.id)
        .eq('exercises.exercise_library_id', exerciseLibraryId)
        .order('set_number', { ascending: true });

      if (logsError) continue;
      if (logs && logs.length > 0) {
        return {
          session_date: session.started_at,
          logs
        };
      }
    }

    return null;
  },

  async getSessionDetail(sessionId: string) {
    const { data, error } = await supabase
      .from('workout_sessions')
      .select(`
        *,
        workout_plans(name),
        exercise_logs(
          *,
          exercises(*)
        )
      `)
      .eq('id', sessionId)
      .single();

    if (error) throw error;
    return data;
  },

  async cancelSession(sessionId: string) {
    const { error } = await supabase
      .from('workout_sessions')
      .delete()
      .eq('id', sessionId);
    if (error) throw error;
  }
};
