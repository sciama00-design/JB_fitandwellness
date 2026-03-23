import { useQuery } from '@tanstack/react-query';
import { 
  Clock, 
  Calendar as CalendarIcon, 
  Dumbbell, 
  MessageSquare, 
  Star,
  TrendingUp,
  Activity,
  Loader2,
  Trash2
} from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sessionService } from '../../services/sessionService';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import Modal from '../Modal';

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

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => sessionService.cancelSession(sessionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-history'] });
      queryClient.invalidateQueries({ queryKey: ['coach-latest-logs'] });
      onClose();
    },
  });

  const handleDelete = () => {
    if (confirm('Sei sicuro di voler eliminare questa sessione? L\'azione non è reversibile.')) {
      deleteMutation.mutate();
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'EEEE d MMMM yyyy, HH:mm', { locale: it });
    } catch (e) {
      return 'Data non disponibile';
    }
  };

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return '---';
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
    return (a.exercise.order_index || 0) - (b.exercise.order_index || 0);
  }) : [];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={session?.workout_plans?.name || 'Dettaglio Sessione'}
    >
      <div className="space-y-10 py-2">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-6">
            <div className="relative">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
              <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
            </div>
            <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">Analisi dati in corso...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-400 font-bold bg-red-500/5 rounded-[2rem] border border-red-500/10">
            Errore nel caricamento della sessione.
          </div>
        ) : (
          <>
            {/* Header Info Banner */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-4 sm:p-6 glass-card rounded-2xl sm:rounded-3xl border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Data</span>
                  <span className="text-sm font-black italic text-foreground tracking-tight">
                    {session?.started_at ? formatDate(session.started_at) : '---'}
                  </span>
                </div>
              </div>
              
              <div className="w-px h-8 bg-white/5 hidden md:block"></div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-xl">
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Durata</span>
                  <span className="text-sm font-black italic text-foreground tracking-tight">
                    {formatDuration(session?.duration_seconds)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-6 glass-card rounded-3xl border-white/5 hover:bg-white/5 transition-colors group">
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">Esercizi</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-3xl font-black text-foreground italic">{exerciseGroups.length}</p>
                  <Activity className="w-4 h-4 text-primary/40" />
                </div>
              </div>
              
              <div className="p-6 glass-card rounded-3xl border-white/5 hover:bg-white/5 transition-colors group">
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">Set Totali</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-3xl font-black text-foreground italic">{session?.exercise_logs?.length || 0}</p>
                  <TrendingUp className="w-4 h-4 text-amber-500/40" />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-6 glass-card rounded-3xl border-white/5 hover:bg-white/5 transition-colors group border-l-primary/20">
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">Note</p>
                <p className="text-sm font-black text-foreground mt-3 italic truncate">
                  {session?.notes ? 'Presenti' : 'Nessuna'}
                </p>
              </div>
            </div>

            {/* Session Notes */}
            {session?.notes && (
              <div className="p-8 glass-card border-l-4 border-l-primary rounded-[2rem] bg-primary/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Feedback Atleta
                </h4>
                <p className="text-foreground leading-relaxed italic font-medium opacity-80">{session.notes}</p>
              </div>
            )}

            {/* Exercise List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-foreground italic tracking-tight flex items-center gap-4">
                <div className="w-1.5 h-8 bg-primary rounded-full" />
                Dettaglio Esercizi
              </h3>

              <div className="space-y-6">
                {exerciseGroups.map((group: any) => (
                  <div key={group.exercise.id} className="glass-card group hover:bg-white/5 transition-all rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 lg:p-10 border-white/5">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-background/50 rounded-2xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors border border-border">
                          <Dumbbell className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-black text-foreground italic tracking-tight">{group.exercise.name}</h4>
                          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mt-2 opacity-60">
                            Target: {group.exercise.target_sets} serie x {group.exercise.target_reps} reps
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Logs Table */}
                    <div className="grid grid-cols-1 gap-4">
                      {group.logs.sort((a: any, b: any) => a.set_number - b.set_number).map((log: any) => (
                        <div key={log.id} className="bg-secondary/20 border border-white/5 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6 hover:bg-secondary/30 transition-colors">
                          <div className="flex items-center gap-8">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-background/40 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-black text-muted-foreground border border-border shadow-inner">
                              {log.set_number}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Volume</span>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl font-black text-foreground italic">{log.weight || '-'}</span>
                                <span className="text-xs font-bold text-muted-foreground italic">kg</span>
                                <span className="mx-2 text-primary font-black opacity-40 italic">×</span>
                                <span className="text-2xl font-black text-foreground italic">{log.reps}</span>
                                <span className="text-xs font-bold text-muted-foreground italic">reps</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-6 sm:gap-10">
                            {log.rpe && (
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-50 mb-2">Sforzo</span>
                                <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 rounded-xl border border-amber-500/20">
                                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                                  <span className="text-[10px] font-black italic text-amber-400 tracking-widest uppercase">RPE {log.rpe}</span>
                                </div>
                              </div>
                            )}
                            
                            {(log.athlete_feedback || log.notes) && (
                              <div className="max-w-[240px] hidden md:block border-l border-white/5 pl-8 italic">
                                 <p className="text-[11px] font-bold text-muted-foreground opacity-80 leading-relaxed">
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

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button 
                onClick={handleDelete}
                disabled={deleteMutation.isPending}
                className="flex items-center gap-3 text-red-500/60 hover:text-red-500 font-black uppercase tracking-widest text-[10px] transition-all disabled:opacity-50 hover:scale-105 active:scale-95 group"
              >
                {deleteMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />}
                Elimina questa sessione
              </button>
              
              <button 
                onClick={onClose}
                className="btn bg-secondary/30 hover:bg-secondary/50 text-foreground px-12 h-14 rounded-2xl font-black uppercase tracking-widest text-xs border border-border shadow-sm w-full sm:w-auto active:scale-95 transition-all"
              >
                Chiudi
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
