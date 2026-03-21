import { useQuery } from '@tanstack/react-query';
import { 
  X, 
  Clock, 
  Calendar, 
  Dumbbell, 
  MessageSquare, 
  Star,
  ChevronRight,
  TrendingUp,
  Activity,
  Loader2
} from 'lucide-react';
import { sessionService } from '../../services/sessionService';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

interface WorkoutSessionDetailModalProps {
  sessionId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkoutSessionDetailModal({ sessionId, isOpen, onClose }: WorkoutSessionDetailModalProps) {
  const { data: session, isLoading, error } = useQuery({
    queryKey: ['session-detail', sessionId],
    queryFn: () => sessionService.getSessionDetail(sessionId),
    enabled: isOpen && !!sessionId,
  });

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'EEEE d MMMM yyyy, HH:mm', { locale: it });
  };

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return 'N/A';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  // Group logs by exercise
  const groupedLogs = session?.exercise_logs?.reduce((acc: any, log: any) => {
    const exerciseId = log.exercise_id;
    if (!acc[exerciseId]) {
      acc[exerciseId] = {
        exercise: log.exercises,
        logs: [],
      };
    }
    acc[exerciseId].logs.push(log);
    return acc;
  }, {});

  const exerciseGroups = groupedLogs ? Object.values(groupedLogs).sort((a: any, b: any) => {
    // Sort by the first log's created_at or set order if available
    return a.exercise.order_index - b.exercise.order_index;
  }) : [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative glass w-full max-w-3xl max-h-[90vh] rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 border-b border-white/5 bg-white/5 relative">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col gap-4 pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 w-fit">
              Sessione Completata
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-white italic leading-tight">
                {session?.workout_plans?.name || 'Allenamento Rapido'}
              </h2>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3">
                <span className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-tighter">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  {session?.started_at ? formatDate(session.started_at) : '---'}
                </span>
                <span className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-tighter">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  {formatDuration(session?.duration_seconds)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
              <p className="text-slate-400 font-medium">Caricamento dettagli...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-400 font-bold">
              Errore nel caricamento della sessione.
            </div>
          ) : (
            <>
              {/* Session Summary Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="glass-light p-5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Esercizi</p>
                    <p className="text-xl font-black text-white">{exerciseGroups.length}</p>
                  </div>
                </div>
                
                <div className="glass-light p-5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Set Totali</p>
                    <p className="text-xl font-black text-white">
                      {session?.exercise_logs?.length || 0}
                    </p>
                  </div>
                </div>

                <div className="glass-light p-5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Note Sessione</p>
                    <p className="text-sm font-bold text-white truncate max-w-[120px]">
                      {session?.notes ? 'Presenti' : 'Nessuna'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Session Notes if any */}
              {session?.notes && (
                <div className="glass-light p-6 rounded-2xl border-l-4 border-l-primary-500 bg-primary-500/5">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary-400 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" />
                    Note dell'Atleta
                  </h4>
                  <p className="text-slate-200 leading-relaxed italic">{session.notes}</p>
                </div>
              )}

              {/* Exercise List */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-emerald-500" />
                  Dettaglio Esercizi
                </h3>

                <div className="space-y-4">
                  {exerciseGroups.map((group: any) => (
                    <div key={group.exercise.id} className="glass group bg-slate-900/40 border-white/5 hover:border-white/10 transition-all rounded-[2rem] p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary-400 transition-colors">
                            <Dumbbell className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-white italic">{group.exercise.name}</h4>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                              Pianificato: {group.exercise.target_sets} serie x {group.exercise.target_reps} reps
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Logs Table-like View */}
                      <div className="space-y-3">
                        {group.logs.sort((a: any, b: any) => a.set_number - b.set_number).map((log: any) => (
                          <div key={log.id} className="bg-slate-950/40 border border-white/5 rounded-2xl p-4 lg:p-5 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-6">
                              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xs font-black text-slate-400 border border-white/5">
                                {log.set_number}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Volume</span>
                                <div className="flex items-baseline gap-1">
                                  <span className="text-lg font-black text-white">{log.weight || '-'}</span>
                                  <span className="text-xs font-bold text-slate-500">kg</span>
                                  <span className="mx-2 text-slate-800">×</span>
                                  <span className="text-lg font-black text-white">{log.reps}</span>
                                  <span className="text-xs font-bold text-slate-500">reps</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-8">
                              {log.rpe && (
                                <div className="flex flex-col items-center">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-1">Effort</span>
                                  <div className="flex items-center gap-1 px-3 py-1 bg-amber-500/10 rounded-lg border border-amber-500/10">
                                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                                    <span className="text-xs font-black text-amber-400">RPE {log.rpe}</span>
                                  </div>
                                </div>
                              )}
                              
                              {(log.athlete_feedback || log.notes) && (
                                <div className="max-w-[200px]">
                                   <p className="text-xs font-medium text-slate-400 line-clamp-2 italic">
                                     "{log.athlete_feedback || log.notes}"
                                   </p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-8 border-t border-white/5 bg-slate-900/50 flex justify-end">
          <button 
            onClick={onClose}
            className="btn btn-secondary px-8 h-12 rounded-xl font-bold"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
