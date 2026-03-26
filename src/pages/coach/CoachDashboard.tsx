import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import {
  Users,
  Plus,
  Loader2,
  Dumbbell,
  Activity,
  ChevronRight,
  Search,
  TrendingUp,
  Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sessionService } from '../../services/sessionService';
import { useState } from 'react';
import WorkoutSessionDetailModal from '../../components/workout/WorkoutSessionDetailModal';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

function groupByDay(sessions: any[]): { label: string; sessions: any[] }[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.getTime() - 86400000);
  const groups: Record<string, any[]> = {};
  const order: string[] = [];

  for (const s of sessions) {
    const d = new Date(s.started_at);
    const day = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    let label: string;
    if (day.getTime() === today.getTime()) label = 'Oggi';
    else if (day.getTime() === yesterday.getTime()) label = 'Ieri';
    else label = d.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'short' });
    if (!groups[label]) { groups[label] = []; order.push(label); }
    groups[label].push(s);
  }
  return order.map(label => ({ label, sessions: groups[label] }));
}

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const itemVariants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] as any } }
};

export default function CoachDashboard() {
  const { user } = useAuth();
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { data: athletes, isLoading: isLoadingAthletes } = useQuery({
    queryKey: ['coach-athletes', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*, workout_plans!athlete_id(id, name, created_at)')
        .eq('coach_id', user?.id)
        .eq('role', 'athlete');
      if (error) throw error;
      return data as any[];
    },
    enabled: !!user?.id,
  });

  const { data: latestLogs, isLoading: isLoadingLogs } = useQuery({
    queryKey: ['coach-latest-logs', user?.id],
    queryFn: () => sessionService.getCoachAthletesHistory(user!.id),
    enabled: !!user?.id,
  });

  const isLoading = isLoadingAthletes || isLoadingLogs;

  if (isLoading && !athletes && !latestLogs) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          Sincronizzazione Dashboard...
        </p>
      </div>
    );
  }

  const filteredLogs = latestLogs?.filter((session: any) =>
    `${session.profiles?.first_name} ${session.profiles?.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (session.workout_plans?.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dayGroups = groupByDay(filteredLogs || []);

  const stats = [
    { label: 'Atleti',      val: athletes?.length || 0,  icon: Users,      blobColor: 'bg-primary' },
    { label: 'Sessioni 7gg', val: latestLogs?.length || 0, icon: TrendingUp, blobColor: 'bg-blue-500' },
    { label: 'Esercizi',    val: '150+',                  icon: Dumbbell,   blobColor: 'bg-emerald-500' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-5"
      >
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground/50 mt-1 text-xs font-semibold tracking-wider uppercase">
            Panoramica attività e performance
          </p>
        </div>

        <Link
          to="/coach/plans/new"
          className="btn btn-primary px-5 text-[12px] tracking-wide self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Nuovo Piano
        </Link>
      </motion.div>

      {/* ── Stats Grid ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="surface relative overflow-hidden group"
          >
            {/* Accent blob */}
            <div className={clsx('stat-blob', stat.blobColor, 'opacity-30')} />

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary border border-border
                              flex items-center justify-center text-muted-foreground
                              group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-muted-foreground/50 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-black tracking-tight mt-0.5 text-foreground">{stat.val}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Search & Activity Header ── */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Activity className="text-primary w-4 h-4" />
          </div>
          <h2 className="text-lg font-bold text-foreground tracking-tight">Attività Recente</h2>
        </div>

        <div className="relative w-full sm:w-72 group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40
                             group-focus-within:text-primary transition-colors duration-200" />
          <input
            type="text"
            placeholder="Cerca atleta o scheda..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10 text-sm"
          />
        </div>
      </div>

      {/* ── Day-Grouped Feed ── */}
      <div className="space-y-7">
        <AnimatePresence mode="popLayout">
          {dayGroups.length > 0 ? (
            dayGroups.map((group) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                {/* Day label */}
                <div className="flex items-center gap-3 px-1">
                  <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.18em] first-letter:capitalize">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-border/60" />
                  <span className="text-[10px] font-semibold text-muted-foreground/30">
                    {group.sessions.length} sessioni
                  </span>
                </div>

                {/* Session rows */}
                {group.sessions.map((session: any) => (
                  <motion.div
                    key={session.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="surface group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center
                                      font-black text-primary-foreground text-[11px] shrink-0">
                        {session.profiles?.first_name?.[0]}{session.profiles?.last_name?.[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-[15px] text-foreground tracking-tight leading-none">
                          {session.profiles?.first_name} {session.profiles?.last_name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground/50 font-medium mt-1 flex items-center gap-1.5">
                          <Dumbbell className="w-3 h-3 text-primary/50" />
                          {session.workout_plans?.name || 'Sessione Personalizzata'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3">
                      {/* Duration */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border">
                        <Timer className="w-3 h-3 text-muted-foreground/50" />
                        <span className="text-[11px] font-semibold text-muted-foreground/60">
                          {Math.floor(session.duration_seconds / 60)} min
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedSessionId(session.id)}
                          className="btn btn-secondary h-9 px-4 text-[11px] tracking-wide"
                        >
                          Analisi
                        </button>
                        <Link
                          to={`/coach/athletes/${session.athlete_id}`}
                          className="w-9 h-9 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground
                                     rounded-xl flex items-center justify-center
                                     transition-all duration-200 border border-primary/20 hover:border-primary active:scale-90"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border-2 border-dashed border-border/50 p-16 text-center"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-5 h-5 text-muted-foreground/30" />
              </div>
              <p className="text-muted-foreground/40 font-semibold text-sm">
                Nessun allenamento recente trovato
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selectedSessionId && (
        <WorkoutSessionDetailModal
          sessionId={selectedSessionId}
          isOpen={!!selectedSessionId}
          onClose={() => setSelectedSessionId(null)}
        />
      )}
    </div>
  );
}
