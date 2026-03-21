import { useQuery } from '@tanstack/react-query';
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
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow, format } from 'date-fns';
import { it } from 'date-fns/locale';
import WorkoutPlanView from '../../components/athlete/WorkoutPlanView';
import WorkoutSessionDetailModal from '../../components/workout/WorkoutSessionDetailModal';

import DailyCheckInModal from '../../components/athlete/DailyCheckInModal';

import { measurementService } from '../../services/measurementService';
import { appointmentService } from '../../services/appointmentService';
import Calendar from '../../components/calendar/Calendar';

type TabType = 'home' | 'train' | 'calendar';

export default function AthleteDashboard() {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = (searchParams.get('tab') as TabType) || 'home';
  const [viewingPlanId, setViewingPlanId] = useState<string | null>(null);
  const [viewingSessionId, setViewingSessionId] = useState<string | null>(null);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);

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

  const { data: measurements, isLoading: isLoadingMeasurements } = useQuery({
    queryKey: ['athlete-measurements', user?.id],
    queryFn: () => measurementService.getAthleteMeasurements(user!.id),
    enabled: !!user?.id,
  });

  const { data: appointments, isLoading: isLoadingAppointments } = useQuery({
    queryKey: ['athlete-appointments', user?.id],
    queryFn: () => appointmentService.getAthleteAppointments(user!.id),
    enabled: !!user?.id,
  });

  if (isLoadingPlans || isLoadingHistory || isLoadingMeasurements || isLoadingAppointments) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        <p className="text-slate-400 animate-pulse font-medium">Carico la tua palestra...</p>
      </div>
    );
  }

  const lastSession = history?.[0];
  const totalWorkouts = history?.length || 0;
  
  // Calculate total volume from history
  const totalVolume = history?.reduce((acc, session) => {
    const sessionVolume = (session as any).exercise_logs?.reduce((sAcc: number, log: any) => {
      return sAcc + (log.reps * (log.weight || 0));
    }, 0) || 0;
    return acc + sessionVolume;
  }, 0) || 0;

  // Format volume (e.g., 12500 -> 12.5)
  const volumeInTons = (totalVolume / 1000).toFixed(1);

  // Simple streak calculation (just for show or based on last 7 days)
  const activeDaysLastWeek = history?.filter(s => {
    const date = new Date(s.started_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date > weekAgo;
  }).length || 0;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header & Welcome */}
      <header className="px-1">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Ciao, {user?.email?.split('@')[0]}
        </h1>
        <p className="text-slate-400 mt-1 font-medium">Pronto per la sessione di oggi?</p>
      </header>

      {/* Main Content Area */}
      <main className="animate-slide-up">
        
        {/* --- HOME TAB --- */}
        {activeTab === 'home' && (
          <div className="space-y-8 px-1">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass p-5 rounded-3xl border border-slate-800/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Flame className="w-16 h-16 text-orange-500 -rotate-12" />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Attività</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-orange-400">{activeDaysLastWeek}</span>
                  <span className="text-slate-500 text-sm font-bold">/7gg</span>
                </div>
              </div>

              <div className="glass p-5 rounded-3xl border border-slate-800/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Trophy className="w-16 h-16 text-amber-500 -rotate-12" />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Totali</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-amber-400">{totalWorkouts}</span>
                  <span className="text-slate-500 text-sm font-bold">sessioni</span>
                </div>
              </div>

              <div className="glass p-5 rounded-3xl border border-slate-800/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-16 h-16 text-emerald-500 -rotate-12" />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Volume</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-emerald-400">{volumeInTons}</span>
                  <span className="text-slate-500 text-sm font-bold">ton</span>
                </div>
              </div>

              <div className="glass p-5 rounded-3xl border border-slate-800/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CalendarIcon className="w-16 h-16 text-primary-500 -rotate-12" />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Prossimo</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-lg font-black text-primary-400">Domani</span>
                </div>
              </div>
            </div>

            {/* Daily Check-in Card */}
            <div className={`relative group ${todayLog ? 'opacity-80' : ''}`}>
              <div className={`absolute -inset-0.5 rounded-[2rem] blur transition duration-1000 ${todayLog ? 'bg-slate-800 opacity-20' : 'bg-gradient-to-r from-emerald-500 to-teal-500 opacity-30 group-hover:opacity-100'}`}></div>
              <div className="relative glass p-6 rounded-[2rem] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${todayLog ? 'bg-slate-800 text-emerald-500' : 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/20'}`}>
                     <CheckCircle2 className="w-7 h-7" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white">{todayLog ? 'Check-in Completato!' : 'Check-in Giornaliero'}</h3>
                     <p className="text-slate-400 text-sm">
                       {todayLog ? `Peso: ${todayLog.weight_kg}kg • Kcal: ${todayLog.kcal_eaten}` : 'Registra peso, calorie, sonno e acqua.'}
                     </p>
                   </div>
                </div>
                <button
                  onClick={() => setIsCheckInOpen(true)}
                  className={`btn px-6 rounded-xl font-bold ${todayLog ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'btn-primary bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20'}`}
                >
                  {todayLog ? 'Modifica Dati' : 'Registra Dati'}
                </button>
              </div>
            </div>

            {/* Resume / Suggestion Card */}
            {lastSession ? (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-[2rem] opacity-30 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative glass p-8 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-widest mb-2 border border-primary-500/20">
                      Continua il tuo percorso
                    </div>
                    <h2 className="text-3xl font-black text-white leading-tight">L'ultimo allenamento: {(lastSession.workout_plans as any)?.name}</h2>
                    <p className="text-slate-400 font-medium">Era {formatDistanceToNow(new Date(lastSession.started_at), { addSuffix: true, locale: it })}. Sei pronto a raddoppiare?</p>
                  </div>
                  <button 
                    onClick={() => setSearchParams({ tab: 'train' })}
                    className="btn btn-primary h-16 px-8 rounded-2xl shadow-2xl shadow-primary-500/20 flex items-center gap-3 text-lg font-black transform hover:scale-105 active:scale-95 transition-all w-full md:w-auto overflow-hidden group/btn"
                  >
                    <span>VAI AD ALLENARTI</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="glass p-12 rounded-[2rem] border border-slate-800/50 text-center space-y-4">
                <div className="w-20 h-20 bg-primary-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-10 h-10 text-primary-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">Inizia la tua Trasformazione</h2>
                <p className="text-slate-400 max-w-sm mx-auto">Non hai ancora effettuato nessuna sessione. Scegli una scheda e inizia subito!</p>
                <button 
                  onClick={() => setSearchParams({ tab: 'train' })}
                  className="btn btn-primary px-8 rounded-xl font-bold"
                >
                  Sfoglia le schede
                </button>
              </div>
            )}
            
            {/* Recent Activity Mini-List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xl font-bold text-white">Attività Recente</h3>
                <button onClick={() => setSearchParams({ tab: 'calendar' })} className="text-sm font-bold text-primary-400 hover:text-primary-300">Vedi tutto</button>
              </div>
              <div className="space-y-3">
                {history?.slice(0, 3).map((session) => (
                  <div 
                    key={session.id} 
                    onClick={() => setViewingSessionId(session.id)}
                    className="glass p-5 rounded-3xl border border-slate-800/30 flex items-center justify-between group hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-500 group-hover:text-primary-400 transition-colors">
                        <History className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-100 italic">{(session.workout_plans as any)?.name}</p>
                        <p className="text-xs text-slate-500 font-medium">
                          {format(new Date(session.started_at), "d MMMM", { locale: it })} • {Math.floor((session.duration_seconds || 0) / 60)} min
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>


          </div>
        )}

        {/* --- TRAIN TAB --- */}
        {activeTab === 'train' && (
          <div className="space-y-6 px-1">
            <header className="mb-8">
              <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Dumbbell className="text-primary-500 w-6 h-6" />
                </div>
                Le tue Schede
              </h2>
              <p className="text-slate-400 text-sm mt-2">Scegli il tuo allenamento e pusha al massimo.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plans?.length === 0 ? (
                <div className="col-span-full py-20 text-center glass rounded-3xl border border-dashed border-slate-800">
                  <p className="text-slate-400 font-medium">Nessuna scheda ancora assegnata.<br/>Contatta il tuo coach!</p>
                </div>
              ) : (
                plans?.map((plan) => (
                  <div key={plan.id} className="glass group hover:bg-slate-900/40 transition-all rounded-[2.5rem] p-8 border border-slate-800/50 flex flex-col gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary-500/10 transition-colors"></div>
                    
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-black text-white leading-tight italic">{plan.name}</h3>
                      <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                        {plan.description || "Un programma strutturato per farti dare il massimo ogni giorno."}
                      </p>
                    </div>

                      <div className="flex items-center gap-2 pt-4 border-t border-slate-800/50">
                        <div className="flex flex-col flex-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Aggiornato</span>
                          <span className="text-xs font-bold text-slate-300">
                            {formatDistanceToNow(new Date(plan.created_at), { addSuffix: true, locale: it })}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => setViewingPlanId(plan.id)}
                            className="btn bg-slate-800 hover:bg-slate-700 text-slate-300 h-14 w-14 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-all hover:scale-110 active:scale-95"
                            title="Visualizza Scheda"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <Link 
                            to={`/athlete/workout/${plan.id}`}
                            className="btn btn-primary h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20 hover:scale-110 active:scale-95 transition-all"
                            title="Inizia Allenamento"
                          >
                            <Play className="w-6 h-6 fill-current ml-1" />
                          </Link>
                        </div>
                      </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* --- CALENDAR TAB --- */}
        {activeTab === 'calendar' && (
          <div className="space-y-6 px-1">
            <header className="mb-8">
              <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3 italic">
                <div className="p-2 bg-primary-500/10 rounded-2xl transform -rotate-6">
                  <CalendarIcon className="text-primary-400 w-8 h-8" />
                </div>
                Il Tuo Percorso
              </h1>
              <p className="text-slate-400 text-sm mt-3 font-medium">Visualizza allenamenti, appuntamenti e misurazioni.</p>
            </header>

            <Calendar 
              sessions={history}
              measurements={measurements}
              appointments={appointments}
              onViewSession={(id) => setViewingSessionId(id)}
              className="mt-6"
            />
          </div>
        )}

      </main>

      {/* Optional: Add a subtle background glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

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

