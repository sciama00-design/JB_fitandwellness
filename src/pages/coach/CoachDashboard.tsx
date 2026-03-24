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

/** Group sessions by relative day label */
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" />
        </div>
        <p className="text-muted-foreground/60 animate-pulse font-semibold uppercase tracking-[0.2em] text-[10px]">Sincronizzazione Dashboard...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as any } }
  };

  const filteredLogs = latestLogs?.filter((session: any) => 
    `${session.profiles?.first_name} ${session.profiles?.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (session.workout_plans?.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dayGroups = groupByDay(filteredLogs || []);

  const stats = [
    { label: 'Atleti', val: athletes?.length || 0, icon: Users, gradient: 'from-primary/20 to-primary/5', iconColor: 'text-primary' },
    { label: 'Sessioni 7gg', val: latestLogs?.length || 0, icon: TrendingUp, gradient: 'from-blue-500/20 to-blue-500/5', iconColor: 'text-blue-400' },
    { label: 'Esercizi', val: '150+', icon: Dumbbell, gradient: 'from-emerald-500/20 to-emerald-500/5', iconColor: 'text-emerald-400' },
  ];

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
      >
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground/40 mt-1.5 font-semibold tracking-wide text-xs">Panoramica attività e performance</p>
        </div>

        <Link 
          to="/coach/plans/new" 
          className="btn btn-primary h-12 px-6 rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2.5 group"
        >
          <Plus className="w-4 h-4" />
          <span className="font-bold text-[11px] tracking-wide">Nuovo Piano</span>
        </Link>
      </motion.div>

      {/* Stats Grid */}
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
            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/30 backdrop-blur-xl p-5 group hover:border-white/[0.1] transition-all duration-300"
          >
            {/* Background gradient blob */}
            <div className={clsx("absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-500", stat.gradient)} />
            
            <div className="relative z-10 flex items-center gap-4">
              <div className={clsx("w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.06] group-hover:scale-105 transition-transform", stat.iconColor)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-muted-foreground/50 text-[10px] font-semibold uppercase tracking-[0.15em]">{stat.label}</p>
                <h3 className="text-2xl font-black tracking-tight mt-0.5 text-foreground">{stat.val}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Search & Activity Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center">
            <Activity className="text-primary w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-foreground tracking-tight">Attività Recente</h2>
        </div>
        <div className="relative w-full sm:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Cerca atleta o scheda..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 h-11 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Day-Grouped Activity Feed */}
      <div className="space-y-8">
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
                  <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em] first-letter:capitalize">{group.label}</span>
                  <div className="flex-1 h-px bg-white/[0.04]" />
                  <span className="text-[10px] font-semibold text-muted-foreground/30">{group.sessions.length} sessioni</span>
                </div>

                {group.sessions.map((session: any) => (
                  <motion.div 
                    key={session.id} 
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    className="group rounded-xl border border-white/[0.05] bg-card/20 hover:bg-card/40 hover:border-white/[0.1] transition-all duration-300 p-4 sm:p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-11 h-11 bg-gradient-to-br from-primary/80 to-accent/60 rounded-xl flex items-center justify-center font-black text-white text-[11px] shadow-md shadow-primary/15 shrink-0">
                          {session.profiles?.first_name?.[0]}{session.profiles?.last_name?.[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-[15px] text-foreground tracking-tight leading-none">
                            {session.profiles?.first_name} {session.profiles?.last_name}
                          </h4>
                          <p className="text-[11px] text-muted-foreground/50 font-medium mt-1.5 flex items-center gap-1.5">
                            <Dumbbell className="w-3 h-3 text-primary/50" />
                            {session.workout_plans?.name || 'Sessione Personalizzata'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                        {/* Duration badge */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                          <Timer className="w-3 h-3 text-muted-foreground/40" />
                          <span className="text-[11px] font-semibold text-muted-foreground/60">
                            {Math.floor(session.duration_seconds / 60)} min
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setSelectedSessionId(session.id)}
                            className="h-9 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-foreground/80 rounded-lg font-semibold text-[11px] tracking-wide border border-white/[0.06] transition-all hover:border-white/[0.1] active:scale-95"
                          >
                            Analisi
                          </button>
                          <Link 
                            to={`/coach/athletes/${session.athlete_id}`}
                            className="w-9 h-9 bg-primary/[0.08] hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all border border-primary/15 active:scale-95"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
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
              className="rounded-2xl border-2 border-dashed border-white/[0.06] p-16 text-center"
            >
              <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-muted-foreground/20" />
              </div>
              <p className="text-muted-foreground/40 font-semibold text-sm">Nessun allenamento recente trovato</p>
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
