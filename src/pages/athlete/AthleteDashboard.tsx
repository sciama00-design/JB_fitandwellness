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

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] as any } }
};

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
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['athlete-history'] }),
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          Carico la tua palestra...
        </p>
      </div>
    );
  }

  const lastSession = history?.[0];
  const totalWorkouts = history?.length || 0;

  const totalVolume = history?.reduce((acc, session) => {
    const v = (session as any).exercise_logs?.reduce((sAcc: number, log: any) =>
      sAcc + (log.reps * (log.weight || 0)), 0) || 0;
    return acc + v;
  }, 0) || 0;

  const volumeInTons = (totalVolume / 1000).toFixed(1);

  const activeDaysLastWeek = history?.filter(s => {
    const date = new Date(s.started_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date > weekAgo;
  }).length || 0;

  return (
    <div className="space-y-8">

      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="px-1"
      >
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-none">
          Ciao, <span className="text-primary">{user?.email?.split('@')[0]}</span>
        </h1>
        <p className="text-muted-foreground/50 mt-2 font-bold tracking-[0.25em] uppercase text-[10px]">
          Elite Training Protocol Active
        </p>
      </motion.header>

      {/* ── Tab Content ── */}
      <AnimatePresence mode="wait">

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <motion.div
            key="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -8 }}
            className="space-y-8"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Attività',  val: activeDaysLastWeek, unit: '/7gg',     icon: Flame,        iconClass: 'text-accent' },
                { label: 'Totali',    val: totalWorkouts,       unit: 'sessioni', icon: Trophy,       iconClass: 'text-amber-500' },
                { label: 'Volume',    val: volumeInTons,        unit: 'ton',      icon: TrendingUp,   iconClass: 'text-emerald-500' },
                { label: 'Prossimo', val: 'Domani',            unit: '',         icon: CalendarIcon, iconClass: 'text-primary' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="surface relative overflow-hidden group min-h-[130px] flex flex-col justify-between"
                >
                  {/* Large icon watermark */}
                  <div className="absolute top-2 right-2 opacity-8 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
                    <stat.icon className={clsx('w-14 h-14', stat.iconClass)} />
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline gap-1 relative z-10">
                    <span className={clsx('text-3xl sm:text-4xl font-black tracking-tight', stat.iconClass)}>
                      {stat.val}
                    </span>
                    {stat.unit && (
                      <span className="text-muted-foreground/50 text-[10px] font-bold uppercase tracking-wider">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Daily Check-In */}
            <motion.div variants={itemVariants}>
              <div className={clsx(
                'surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6',
                !todayLog && 'border-primary/25 bg-primary/4'
              )}>
                <div className="flex items-center gap-4">
                  <div className={clsx(
                    'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300',
                    todayLog
                      ? 'bg-primary/15 text-primary border border-primary/25'
                      : 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  )}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-foreground">
                      {todayLog ? 'Check-in Completato' : 'Check-in Giornaliero'}
                    </h3>
                    <p className="text-muted-foreground/60 text-[11px] font-semibold uppercase tracking-wider mt-0.5">
                      {todayLog ? `Peso attuale: ${todayLog.weight_kg}kg` : 'Registra i tuoi progressi'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckInOpen(true)}
                  className={clsx(
                    'btn w-full sm:w-auto px-6',
                    todayLog ? 'btn-secondary' : 'btn-primary'
                  )}
                >
                  {todayLog ? 'Aggiorna Dati' : 'Registra Ora'}
                </button>
              </div>
            </motion.div>

            {/* Next Mission card */}
            <motion.div variants={itemVariants}>
              {lastSession ? (
                <div className="surface-glow p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
                  {/* Accent glow top-right */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/6 rounded-full -mr-24 -mt-24 blur-3xl pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/12 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.25em]">
                      Next Mission
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight uppercase">
                      {(lastSession.workout_plans as any)?.name}
                    </h2>
                    <p className="text-muted-foreground/60 text-sm leading-relaxed">
                      Ultima sessione {formatDistanceToNow(new Date(lastSession.started_at), { addSuffix: true, locale: it })}.
                      Pronto a superare i tuoi limiti?
                    </p>
                  </div>

                  <Link
                    to={`/athlete/workout/${(lastSession.workout_plans as any)?.id}`}
                    className="btn btn-primary h-14 px-8 text-sm font-black tracking-wide uppercase w-full md:w-auto relative z-10 group/btn"
                  >
                    Start Session
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              ) : (
                <div className="surface p-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto">
                    <Dumbbell className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-black text-foreground">Inizia la Trasformazione</h2>
                  <p className="text-muted-foreground/60 text-sm max-w-sm mx-auto">
                    Scegli una scheda e inizia a costruire la tua versione migliore.
                  </p>
                  <button
                    onClick={() => setSearchParams({ tab: 'train' })}
                    className="btn btn-primary px-8 mx-auto"
                  >
                    Sfoglia Schede
                  </button>
                </div>
              )}
            </motion.div>

            {/* Recent Activity */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-lg font-black text-foreground tracking-tight">Attività Recente</h3>
                <Link
                  to="/athlete/calendar"
                  className="text-[11px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Vedi Archivio
                </Link>
              </div>

              <div className="space-y-3">
                {history?.slice(0, 3).map((session, idx) => (
                  <motion.div
                    key={session.id}
                    variants={itemVariants}
                    custom={idx}
                    onClick={() => setViewingSessionId(session.id)}
                    className="surface group flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-secondary border border-border rounded-xl
                                      flex items-center justify-center text-muted-foreground
                                      group-hover:text-primary group-hover:border-primary/30 transition-all duration-200 shrink-0">
                        <History className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-[15px] leading-none">
                          {(session.workout_plans as any)?.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground/50 font-semibold uppercase tracking-wider mt-1.5">
                          {format(new Date(session.started_at), "d MMMM", { locale: it })}
                          {' · '}
                          {Math.floor((session.duration_seconds || 0) / 60)} min
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => handleDeleteSession(e, session.id)}
                        className="p-2.5 text-muted-foreground/40 hover:text-destructive hover:bg-destructive/10
                                   rounded-lg transition-all duration-200 md:opacity-0 md:group-hover:opacity-100"
                        title="Elimina"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="w-9 h-9 rounded-xl border border-border flex items-center justify-center
                                      group-hover:border-primary/30 group-hover:bg-primary/8 transition-all duration-200">
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TRAIN TAB */}
        {activeTab === 'train' && (
          <motion.div
            key="train"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -8 }}
            className="space-y-6"
          >
            <header className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Dumbbell className="text-primary w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-foreground tracking-tight">Le tue Schede</h2>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 mt-0.5">
                  Programma personalizzato dal tuo coach
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {plans?.length === 0 ? (
                <div className="col-span-full py-20 text-center surface border-dashed">
                  <p className="text-muted-foreground/50 font-semibold">
                    Nessuna scheda ancora assegnata.{' '}
                    <br />Contatta il tuo coach!
                  </p>
                </div>
              ) : (
                plans?.map((plan) => (
                  <motion.div
                    key={plan.id}
                    variants={itemVariants}
                    className="surface-glow flex flex-col gap-5 relative overflow-hidden"
                  >
                    {/* Accent decoration */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-full -mr-14 -mt-14 blur-2xl pointer-events-none" />

                    <div className="relative z-10 space-y-2">
                      <h3 className="text-xl font-black text-foreground tracking-tight leading-tight">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-2">
                        {plan.description || 'Allenamento intensivo progettato per massimizzare i tuoi risultati.'}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-border relative z-10">
                      <div className="flex-1">
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground/40 block">
                          Aggiornato
                        </span>
                        <span className="text-[11px] font-bold text-foreground/70 mt-0.5 block">
                          {formatDistanceToNow(new Date(plan.created_at), { addSuffix: true, locale: it })}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setViewingPlanId(plan.id)}
                          className="btn btn-secondary w-11 h-11 !p-0 !rounded-xl justify-center"
                        >
                          <Eye className="w-5 h-5 opacity-70" />
                        </button>
                        <Link
                          to={`/athlete/workout/${plan.id}`}
                          className="btn btn-primary w-11 h-11 !p-0 !rounded-xl justify-center shadow-lg shadow-primary/20"
                        >
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Modals */}
      {viewingPlanId && (
        <WorkoutPlanView
          planId={viewingPlanId}
          isOpen={!!viewingPlanId}
          onClose={() => setViewingPlanId(null)}
        />
      )}

      {viewingSessionId && (
        <WorkoutSessionDetailModal
          sessionId={viewingSessionId}
          isOpen={!!viewingSessionId}
          onClose={() => setViewingSessionId(null)}
        />
      )}

      <DailyCheckInModal
        isOpen={isCheckInOpen}
        onClose={() => setIsCheckInOpen(false)}
        existingLog={todayLog}
      />
    </div>
  );
}
