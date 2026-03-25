import { supabase } from '../../../../../lib/supabase';

export const tools = {
  get_weight_history: {
    name: 'get_weight_history',
    description: 'Ottiene lo storico delle pesate dell\'atleta per analizzare la tendenza del peso corporeo.',
    parameters: {
      type: 'OBJECT',
      properties: {
        athleteId: { type: 'STRING', description: 'ID dell\'atleta' },
        limit: { type: 'NUMBER', description: 'Numero di misurazioni da recuperare (default 10)' }
      },
      required: ['athleteId']
    },
    execute: async ({ athleteId, limit = 10 }: { athleteId: string, limit?: number }) => {
      const { data: measurements, error: mError } = await supabase
        .from('body_measurements')
        .select('recorded_at, weight, body_fat_percentage')
        .eq('athlete_id', athleteId)
        .order('recorded_at', { ascending: false })
        .limit(limit);
      
      if (mError) throw mError;

      const { data: logs, error: lError } = await supabase
        .from('daily_logs')
        .select('date, weight_kg')
        .eq('athlete_id', athleteId)
        .not('weight_kg', 'is', null)
        .order('date', { ascending: false })
        .limit(limit);

      if (lError) throw lError;

      const merged = [
        ...(measurements || []).map(m => ({ date: m.recorded_at, weight: m.weight, source: 'coach' })),
        ...(logs || []).map(l => ({ date: l.date, weight: l.weight_kg, source: 'athlete' }))
      ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
       .slice(0, limit);

      return merged;
    }
  },

  get_exercise_progression: {
    name: 'get_exercise_progression',
    description: 'Recupera lo storico dei carichi e delle prestazioni per un esercizio specifico (es: "Squat", "Bench Press").',
    parameters: {
      type: 'OBJECT',
      properties: {
        athleteId: { type: 'STRING', description: 'ID dell\'atleta' },
        exerciseName: { type: 'STRING', description: 'Nome dell\'esercizio da analizzare' },
        limit: { type: 'NUMBER', description: 'Numero di sessioni passate da analizzare (default 10)' }
      },
      required: ['athleteId', 'exerciseName']
    },
    execute: async ({ athleteId, exerciseName, limit = 10 }: { athleteId: string, exerciseName: string, limit?: number }) => {
      // Find the library exercise first (to handle slang)
      const { data: exercises, error: searchError } = await supabase
        .from('exercise_library')
        .select('id, name, name_it')
        .or(`name_it.ilike.%${exerciseName}%,name.ilike.%${exerciseName}%`)
        .limit(1);

      if (searchError || !exercises || exercises.length === 0) return { error: "Esercizio non trovato in libreria." };
      const libId = exercises[0].id;

      // Get logs for this exercise library id
      const { data, error } = await supabase
        .from('exercise_logs')
        .select(`
          weight,
          reps,
          set_number,
          rpe,
          workout_sessions!inner(started_at, athlete_id),
          exercises!inner(exercise_library_id)
        `)
        .eq('workout_sessions.athlete_id', athleteId)
        .eq('exercises.exercise_library_id', libId)
        .order('started_at', { foreignTable: 'workout_sessions', ascending: false });

      if (error) throw error;

      // Group by session
      const sessionsMap: Record<string, any> = {};
      data.forEach((log: any) => {
        const date = log.workout_sessions.started_at.split('T')[0];
        if (!sessionsMap[date]) {
          sessionsMap[date] = { date, sets: [] };
        }
        sessionsMap[date].sets.push({
          set: log.set_number,
          weight: log.weight,
          reps: log.reps,
          rpe: log.rpe
        });
      });

      return Object.values(sessionsMap).slice(0, limit);
    }
  },

  get_wellness_trends: {
    name: 'get_wellness_trends',
    description: 'Analizza i dati quotidiani di benessere (sonno, kcal, peso) per identificare cali di performance o problemi di recupero.',
    parameters: {
      type: 'OBJECT',
      properties: {
        athleteId: { type: 'STRING', description: 'ID dell\'atleta' },
        days: { type: 'NUMBER', description: 'Numero di giorni da analizzare (default 14)' }
      },
      required: ['athleteId']
    },
    execute: async ({ athleteId, days = 14 }: { athleteId: string, days?: number }) => {
      const { data, error } = await supabase
        .from('daily_logs')
        .select('date, sleep_hours, weight_kg, kcal_eaten')
        .eq('athlete_id', athleteId)
        .order('date', { ascending: false })
        .limit(days);
      
      if (error) throw error;
      return data;
    }
  },

  get_adherence_report: {
    name: 'get_adherence_report',
    description: 'Calcola l\'aderenza al piano di allenamento (percentuale di sessioni completate rispetto a quelle pianificate).',
    parameters: {
      type: 'OBJECT',
      properties: {
        athleteId: { type: 'STRING', description: 'ID dell\'atleta' },
        days: { type: 'NUMBER', description: 'Arco temporale dell\'analisi in giorni (default 30)' }
      },
      required: ['athleteId']
    },
    execute: async ({ athleteId, days = 30 }: { athleteId: string, days?: number }) => {
      const sinceDate = new Date();
      sinceDate.setDate(sinceDate.getDate() - days);

      // Count completed sessions
      const { count: completedCount, error: completedError } = await supabase
        .from('workout_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('athlete_id', athleteId)
        .not('completed_at', 'is', null)
        .gte('started_at', sinceDate.toISOString());

      if (completedError) throw completedError;

      // This is simplified as we don't have a rigid "planned count" in the DB easily identifiable
      // but we can look at the active plan's workout_groups
      const { data: activePlan } = await supabase
        .from('workout_plans')
        .select('*, exercises(id, group_id)')
        .eq('athlete_id', athleteId)
        .eq('active', true)
        .maybeSingle();

      const workoutsPerWeek = activePlan?.exercises ? new Set(activePlan.exercises.map((e: any) => e.group_id)).size : 3;
      const expectedTotal = Math.floor((days / 7) * workoutsPerWeek);

      return {
        completed_sessions: completedCount,
        expected_sessions: expectedTotal,
        adherence_percentage: expectedTotal > 0 ? (completedCount! / expectedTotal) * 100 : 100
      };
    }
  }
};
