import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import { 
  Users, 
  Plus, 
  Loader2, 
  Clock,
  Dumbbell,
  Activity,
  ChevronRight,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sessionService } from '../../services/sessionService';
import { useState } from 'react';
import WorkoutSessionDetailModal from '../../components/workout/WorkoutSessionDetailModal';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

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
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-xs">Sincronizzazione Dashboard...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredLogs = latestLogs?.filter((session: any) => 
    `${session.profiles?.first_name} ${session.profiles?.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (session.workout_plans?.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1"
      >
        <div>
          <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent italic leading-[0.8]">
            Coach Panel
          </h1>
          <p className="text-muted-foreground mt-4 font-black tracking-[0.3em] uppercase text-[10px] opacity-50">Operation Master Protocol</p>
        </div>

        <Link 
          to="/coach/plans/new" 
          className="btn btn-primary h-14 px-8 rounded-2xl shadow-[0_20px_50px_rgba(6,182,212,0.3)] flex items-center gap-3 group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <Plus className="w-5 h-5 relative z-10" />
          <span className="font-black uppercase tracking-widest text-[10px] relative z-10 italic">Nuovo Piano</span>
        </Link>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
      >
        {[
          { label: 'Totale Atleti', val: athletes?.length || 0, icon: Users, color: 'text-primary' },
          { label: 'Sessioni 7gg', val: latestLogs?.length || 0, icon: Clock, color: 'text-blue-500' },
          { label: 'Esercizi Totali', val: '150+', icon: Dumbbell, color: 'text-emerald-500' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-10 group-hover:opacity-30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <stat.icon className={clsx("w-14 h-14 sm:w-20 sm:h-20", stat.color)} />
            </div>
            <div className="flex items-center gap-4 sm:gap-6 relative z-10">
              <div className={clsx("w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/5 bg-white/5 group-hover:bg-white/10 transition-all shadow-inner", stat.color)}>
                <stat.icon className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div>
                <p className="text-muted-foreground text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-50">{stat.label}</p>
                <h3 className="text-2xl sm:text-4xl font-black italic tracking-tighter mt-1">{stat.val}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-1">
        <h2 className="text-2xl font-black text-foreground italic flex items-center gap-4">
          <Activity className="text-primary w-8 h-8" />
          Attività Recente
        </h2>
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="CERCA ATLETA O SCHEDA..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-minimal pl-14 h-14 font-black text-[10px] tracking-[0.2em] italic"
          />
        </div>
      </div>

      {/* Latest Logs List */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredLogs && filteredLogs.length > 0 ? (
            filteredLogs.map((session: any) => (
              <motion.div 
                key={session.id} 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card group hover:bg-white/5 transition-all p-5 rounded-[1.8rem] border-white/5 hover:border-primary/20"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-400 rounded-2xl flex items-center justify-center font-black text-white text-xs shadow-lg shadow-primary/20 border border-white/10 uppercase italic">
                      {session.profiles?.first_name?.[0]}{session.profiles?.last_name?.[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-foreground italic tracking-tight leading-none">
                        {session.profiles?.first_name} {session.profiles?.last_name}
                      </h4>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Dumbbell className="w-3 h-3 text-primary/60" />
                        {session.workout_plans?.name || 'Sessione Personalizzata'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                    <div className="text-left md:text-right">
                      <p className="text-xs text-foreground font-black italic tracking-wide">
                        {new Date(session.started_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}
                      </p>
                      <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest mt-1 opacity-60">
                        {Math.floor(session.duration_seconds / 60)} min totali
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                       <button 
                        onClick={() => setSelectedSessionId(session.id)}
                        className="btn h-12 px-5 bg-secondary/50 hover:bg-secondary text-foreground rounded-xl font-black text-[10px] tracking-widest uppercase border border-border transition-all hover:scale-105 active:scale-95"
                      >
                        Analisi
                      </button>
                      <Link 
                        to={`/coach/athletes/${session.athlete_id}`}
                        className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm border border-primary/20 active:scale-95"
                        title="Vedi Atleta"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-16 text-center border-dashed border-2 border-border/40 rounded-[2.5rem]"
            >
              <div className="w-16 h-16 bg-muted/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-muted-foreground opacity-20" />
              </div>
              <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-xs opacity-50">Nessun allenamento recente trovato.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

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
