import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import { 
  Users, 
  Plus, 
  ArrowRight, 
  Loader2, 
  Clock,
  Dumbbell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sessionService } from '../../services/sessionService';
import { useState } from 'react';
import WorkoutSessionDetailModal from '../../components/workout/WorkoutSessionDetailModal';

export default function CoachDashboard() {
  const { user } = useAuth();
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

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
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-white">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        <p className="text-slate-400 animate-pulse">Caricamento Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Coach Dashboard</h1>
          <p className="text-slate-400 mt-2 text-lg">Benvenuto. Ecco una panoramica delle attività recenti dei tuoi atleti.</p>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/coach/plans/new" className="btn btn-primary shadow-xl shadow-primary-500/20">
            <Plus className="w-4 h-4 mr-2" />
            Nuovo Piano
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/20 p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Totale Atleti</p>
              <h3 className="text-2xl font-black mt-1 text-white">{athletes?.length || 0}</h3>
            </div>
            <div className="p-3 bg-primary-500/20 rounded-xl text-primary-400">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="card bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sessioni Recenti</p>
              <h3 className="text-2xl font-black mt-1 text-white">{latestLogs?.length || 0}</h3>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="card bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Libreria</p>
              <h3 className="text-2xl font-black mt-1 text-white">150+</h3>
            </div>
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
              <Dumbbell className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-1.5 h-8 bg-primary-500 rounded-full" />
          Ultimi Allenamenti Atleti
        </h2>
        
        {latestLogs && latestLogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {latestLogs.map((session: any) => (
              <div key={session.id} className="card group bg-slate-900/40 border-slate-800/50 hover:border-primary-500/30 transition-all p-4 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center font-bold text-primary-400 text-sm border border-slate-700/50 shadow-inner">
                      {session.profiles?.first_name?.[0]}{session.profiles?.last_name?.[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">
                        {session.profiles?.first_name} {session.profiles?.last_name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium line-clamp-1">
                        {session.workout_plans?.name || 'Sessione Personalizzata'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <p className="text-sm text-white font-bold">
                        {new Date(session.started_at).toLocaleDateString()}
                      </p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                        {Math.floor(session.duration_seconds / 60)} minuti di lavoro
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                       <button 
                        onClick={() => setSelectedSessionId(session.id)}
                        className="btn btn-secondary py-1.5 px-3 text-[10px] font-bold rounded-lg whitespace-nowrap"
                      >
                        Vedi Dettagli
                      </button>
                      <Link 
                        to={`/coach/athletes/${session.athlete_id}`}
                        className="p-3 bg-slate-800 group-hover:bg-primary-500 text-slate-400 group-hover:text-white rounded-xl transition-all shadow-lg"
                        title="Vedi Atleta"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card p-10 text-center border-dashed border-2 border-slate-800 bg-slate-900/20 rounded-2xl">
            <p className="text-slate-500 italic text-sm">Nessun allenamento recente trovato.</p>
          </div>
        )}
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
