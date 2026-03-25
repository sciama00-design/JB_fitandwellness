import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { planService } from '../../services/planService';
import { sessionService } from '../../services/sessionService';
import { dailyLogService } from '../../services/dailyLogService';
import { useAuth } from '../../lib/auth';
import { 
  Play, 
  ChevronRight, 
  Loader2, 
  Dumbbell, 
  History, 
  Trophy, 
  TrendingUp,
  Calendar as CalendarIcon,
  Flame,
  ArrowRight,
  Eye,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow, format } from 'date-fns';
import { it } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';
import WorkoutPlanView from '../../components/athlete/WorkoutPlanView';
import WorkoutSessionDetailModal from '../../components/workout/WorkoutSessionDetailModal';
import DailyCheckInModal from '../../components/athlete/DailyCheckInModal';
import clsx from 'clsx';

type TabType = 'home' | 'train';

export default function AthleteDashboard() {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = (searchParams.get('tab') as TabType) || 'home';
  const [viewingPlanId, setViewingPlanId] = useState<string | null>(null);
  const [viewingSessionId, setViewingSessionId] = useState<string | null>(null);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const queryClient = useQueryClient();

  const deleteSessionMutation = useMutation({
    mutationFn: (sessionId: string) => sessionService.cancelSession(sessionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-history'] });
    },
  });

  const handleDeleteSession = (e: React.MouseEvent | null, sessionId: string) => {
    e?.stopPropagation();
    if (confirm('Sei sicuro di voler eliminare questa sessione?')) {
      deleteSessionMutation.mutate(sessionId);
    }
  };

  const { data: todayLog } = useQuery({
    queryKey: ['daily-log', user?.id],
    queryFn: () => dailyLogService.getTodayLog(user!.id),
    enabled: !!user?.id,
  });

  const { data: plans, isLoading: isLoadingPlans } = useQuery({
    queryKey: ['athlete-plans', user?.id],
    queryFn: () => planService.getAthletePlans(user!.id),
    enabled: !!user?.id,
  });

  const { data: history, isLoading: isLoadingHistory } = useQuery({
    queryKey: ['athlete-history', user?.id],
    queryFn: () => sessionService.getAthleteHistory(user!.id),
    enabled: !!user?.id,
  });

  if (isLoadingPlans || isLoadingHistory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse font-medium">Carico la tua palestra...</p>
      </div>
    );
  }

  const lastSession = history?.[0];
  const totalWorkouts = history?.length || 0;
  
  const totalVolume = history?.reduce((acc, session) => {
    const sessionVolume = (session as any).exercise_logs?.reduce((sAcc: number, log: any) => {
      return sAcc + (log.reps * (log.weight || 0));
    }, 0) || 0;
    return acc + sessionVolume;
  }, 0) || 0;

  const volumeInTons = (totalVolume / 1000).toFixed(1);

  const activeDaysLastWeek = history?.filter(s => {
    const date = new Date(s.started_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date > weekAgo;
  }).length || 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-10">
      {/* Header & Welcome */}
      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="px-1"
      >
        <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent italic leading-[0.8]">
          Ciao, {user?.email?.split('@')[0]}
        </h1>
        <p className="text-muted-foreground mt-4 font-black tracking-[0.3em] uppercase text-[10px] opacity-50">Elite Training Protocol Active</p>
      </motion.header>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        
        {/* --- HOME TAB --- */}
        {activeTab === 'home' && (
          <motion.div 
            key="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-10"
          >
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {[
                { label: 'Attività', val: activeDaysLastWeek, unit: '/7gg', icon: Flame, color: 'text-orange-500' },
                { label: 'Totali', val: totalWorkouts, unit: 'sessioni', icon: Trophy, color: 'text-amber-500' },
                { label: 'Volume', val: volumeInTons, unit: 'ton', icon: TrendingUp, color: 'text-emerald-500' },
                { label: 'Prossimo', val: 'Domani', unit: '', icon: CalendarIcon, color: 'text-primary' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="glass-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl relative overflow-hidden group min-h-[140px] flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <stat.icon className={clsx("w-12 h-12 sm:w-20 sm:h-20", stat.color)} />
                  </div>
                  <p className="text-muted-foreground text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">{stat.label}</p>
                  <div className="flex items-baseline gap-1 sm:gap-2 relative z-10 mt-auto">
                    <span className={clsx("text-2xl sm:text-4xl font-black italic tracking-tighter", stat.color)}>{stat.val}</span>
                    <span className="text-muted-foreground text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">{stat.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Daily Check-in Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Daily Check-in Card - Full Width now */}
              <motion.div variants={itemVariants} className="group">
                <div className="card h-full flex flex-col justify-between gap-8 relative overflow-hidden">
                   <div className="flex items-center gap-5">
                      <div className={clsx(
                        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                        todayLog 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-gradient-to-br from-primary to-emerald-400 text-primary-foreground shadow-xl shadow-primary/20 scale-110'
                      )}>
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-foreground italic">{todayLog ? 'Check-in Completato' : 'Check-in Giornaliero'}</h3>
                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-1">
                          {todayLog ? `Peso attuale: ${todayLog.weight_kg}kg` : 'Registra i tuoi progressi'}
                        </p>
                      </div>
                   </div>
                   <button
                     onClick={() => setIsCheckInOpen(true)}
                     className={clsx(
                       "btn w-full h-14 rounded-2xl font-black text-sm tracking-widest uppercase transition-all",
                       todayLog 
                         ? 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border' 
                         : 'btn-primary shadow-2xl shadow-primary/30'
                     )}
                   >
                     {todayLog ? 'Aggiorna Dati' : 'Registra Ora'}
                   </button>
                   
                   {/* Background Decoration */}
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
                </div>
              </motion.div>
            </div>

            {/* Resume / Suggestion Card */}
            <motion.div variants={itemVariants}>
              {lastSession ? (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-accent rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative card p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 overflow-hidden">
                    <div className="space-y-4 sm:y-6 text-center md:text-left relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 border border-primary/20 backdrop-blur-md">
                        Next Mission
                      </div>
                      <h2 className="text-3xl sm:text-5xl font-black text-foreground leading-[0.9] italic tracking-tighter uppercase">
                        {(lastSession.workout_plans as any)?.name}
                      </h2>
                      <p className="text-muted-foreground font-medium text-sm sm:text-base tracking-wide opacity-70">
                        Ultima sessione completata {formatDistanceToNow(new Date(lastSession.started_at), { addSuffix: true, locale: it })}.<br className="hidden sm:block" /> Pronto a superare i tuoi limiti?
                      </p>
                    </div>
                    <Link 
                      to={`/athlete/workout/${(lastSession.workout_plans as any)?.id}`}
                      className="btn btn-primary h-20 sm:h-24 px-8 sm:px-12 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_50px_rgba(6,182,212,0.3)] flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl font-black transform hover:scale-105 active:scale-95 transition-all w-full md:w-auto overflow-hidden group/btn italic relative z-10"
                    >
                      <span className="relative z-10">START SESSION</span>
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-3 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </Link>
                    
                    {/* Inner Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  </div>
                </div>
              ) : (
                <div className="card p-12 text-center space-y-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <Dumbbell className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-black text-foreground italic">Inizia la Trasformazione</h2>
                  <p className="text-muted-foreground font-bold text-sm max-w-sm mx-auto uppercase tracking-widest opacity-60">Scegli una scheda e inizia a costruire la tua versione migliore.</p>
                  <button 
                    onClick={() => setSearchParams({ tab: 'train' })}
                    className="btn btn-primary px-10 h-14 rounded-2xl font-black tracking-widest uppercase"
                  >
                    Sfoglia Schede
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Recent Activity Mini-List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-2xl font-black text-foreground italic tracking-tight">Attività Recente</h3>
                <Link 
                  to="/athlete/calendar" 
                  className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                >
                  Vedi Archivio
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {history?.slice(0, 3).map((session, idx) => (
                  <motion.div 
                    key={session.id} 
                    variants={itemVariants}
                    custom={idx}
                    onClick={() => setViewingSessionId(session.id)}
                    className="glass-card p-6 rounded-3xl flex items-center justify-between group hover:bg-card/60 transition-all cursor-pointer border-white/5 hover:border-primary/20 shadow-xl"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-background/50 rounded-2xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors border border-border group-hover:border-primary/30">
                        <History className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-black text-foreground italic text-lg leading-none">{(session.workout_plans as any)?.name}</p>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2">
                          {format(new Date(session.started_at), "d MMMM", { locale: it })} • {Math.floor((session.duration_seconds || 0) / 60)} min
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <button
                         onClick={(e) => handleDeleteSession(e, session.id)}
                         className="p-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all md:opacity-0 md:group-hover:opacity-100"
                         title="Elimina"
                       >
                         <Trash2 className="w-5 h-5" />
                       </button>
                       <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        )}

        {/* --- TRAIN TAB --- */}
        {activeTab === 'train' && (
          <motion.div 
            key="train"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-8"
          >
            <header className="mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight flex items-center gap-3 sm:gap-4 italic uppercase">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl sm:rounded-2xl border border-primary/20">
                  <Dumbbell className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                Le tue Schede
              </h2>
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mt-3 opacity-60">Programma personalizzato dal tuo coach</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {plans?.length === 0 ? (
                <div className="col-span-full py-24 text-center glass-card rounded-[2.5rem] border-dashed border-border">
                  <p className="text-muted-foreground font-bold uppercase tracking-widest">Nessuna scheda ancora assegnata.<br/>Contatta il tuo coach!</p>
                </div>
              ) : (
                plans?.map((plan) => (
                  <motion.div 
                    key={plan.id} 
                    variants={itemVariants}
                    className="card group hover:scale-[1.02] transition-all flex flex-col gap-6 sm:gap-8 relative overflow-hidden p-6 sm:p-8"
                  >
                    <div className="flex-1 space-y-3 sm:space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-black text-foreground italic leading-none tracking-tight">{plan.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium line-clamp-2 leading-relaxed opacity-80">
                        {plan.description || "Allenamento intensivo progettato per massimizzare i tuoi risultati."}
                      </p>
                    </div>

                      <div className="flex items-center gap-4 pt-4 sm:pt-6 border-t border-border">
                        <div className="flex flex-col flex-1">
                          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50">Ultimo aggiornamento</span>
                          <span className="text-[10px] sm:text-xs font-black text-foreground italic mt-1 uppercase tracking-wider">
                            {formatDistanceToNow(new Date(plan.created_at), { addSuffix: true, locale: it })}
                          </span>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                          <button 
                            onClick={() => setViewingPlanId(plan.id)}
                            className="btn h-12 w-12 sm:h-14 sm:w-14 bg-secondary/50 hover:bg-secondary text-foreground rounded-xl sm:rounded-2xl flex items-center justify-center border border-border transition-all hover:scale-110 active:scale-95"
                          >
                            <Eye className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
                          </button>
                          <Link 
                            to={`/athlete/workout/${plan.id}`}
                            className="btn btn-primary h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 hover:scale-110 active:scale-95 transition-all"
                          >
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Decoration */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}


      </AnimatePresence>

      {/* Workout Plan View Modal */}
      {viewingPlanId && (
        <WorkoutPlanView 
          planId={viewingPlanId}
          isOpen={!!viewingPlanId}
          onClose={() => setViewingPlanId(null)}
        />
      )}

      {/* Workout Session Detail Modal */}
      {viewingSessionId && (
        <WorkoutSessionDetailModal
          sessionId={viewingSessionId}
          isOpen={!!viewingSessionId}
          onClose={() => setViewingSessionId(null)}
        />
      )}

      {/* Daily Check-In Modal */}
      <DailyCheckInModal
        isOpen={isCheckInOpen}
        onClose={() => setIsCheckInOpen(false)}
        existingLog={todayLog}
      />
    </div>
  );
}

