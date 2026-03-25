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
            <div className="flex flex-wrap items-center gap-6 p-6 glass-card rounded-xxl border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Data Sessione</span>
                  <span className="text-sm font-black italic text-foreground tracking-tight">
                    {session?.started_at ? formatDate(session.started_at) : '---'}
                  </span>
                </div>
              </div>
              
              <div className="w-px h-8 bg-white/5 hidden md:block"></div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-brand-indigo/10 rounded-xl">
                  <Clock className="w-4 h-4 text-brand-indigo" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Tempo Totale</span>
                  <span className="text-sm font-black italic text-foreground tracking-tight">
                    {formatDuration(session?.duration_seconds)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-6 glass-card rounded-xl border-white/5 hover:bg-white/5 transition-all duration-300 group">
                <p className="text-[10px] uppercase font-black text-muted-foreground/50 tracking-[0.2em] group-hover:text-primary transition-colors">Esercizi</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-3xl font-black text-foreground italic">{exerciseGroups.length}</p>
                  <Activity className="w-5 h-5 text-primary/30 group-hover:text-primary/60 transition-colors" />
                </div>
              </div>
              
              <div className="p-6 glass-card rounded-xl border-white/5 hover:bg-white/5 transition-all duration-300 group">
                <p className="text-[10px] uppercase font-black text-muted-foreground/50 tracking-[0.2em] group-hover:text-accent transition-colors">Set Totali</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-3xl font-black text-foreground italic">{session?.exercise_logs?.length || 0}</p>
                  <TrendingUp className="w-5 h-5 text-accent/30 group-hover:text-accent/60 transition-colors" />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1 p-6 glass-card rounded-xl border-white/5 hover:bg-white/5 transition-all duration-300 group border-l-primary/20">
                <p className="text-[10px] uppercase font-black text-muted-foreground/50 tracking-[0.2em] group-hover:text-foreground transition-colors">Note</p>
                <p className="text-sm font-black text-foreground mt-3 italic truncate opacity-80 group-hover:opacity-100 transition-opacity">
                  {session?.notes ? 'Feedback disponibile' : 'Nessuna nota'}
                </p>
              </div>
            </div>

            {/* Session Notes */}
            {session?.notes && (
              <div className="p-8 glass-card border-l-4 border-l-primary rounded-xxl bg-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MessageSquare className="w-16 h-16 text-primary" />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Feedback Atleta
                </h4>
                <p className="text-foreground/90 leading-relaxed italic font-medium text-lg relative z-10">"{session.notes}"</p>
              </div>
            )}

            {/* Exercise List */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-foreground italic tracking-tight flex items-center gap-4">
                <div className="w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                Performance Esercizi
              </h3>

              <div className="space-y-6">
                {exerciseGroups.map((group: any) => (
                  <div key={group.exercise.id} className="glass-card group hover:bg-white/[0.02] transition-all duration-500 rounded-xxl p-6 lg:p-8 border-white/5">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:shadow-primary/20 group-hover:shadow-2xl transition-all duration-500 border border-white/5">
                          <Dumbbell className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-black text-foreground italic tracking-tight group-hover:text-primary transition-colors">{group.exercise.name}</h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                            <span className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">Target: {group.exercise.target_sets}s × {group.exercise.target_reps}r</span>
                            {group.exercise.rest_seconds > 0 && <span className="text-[10px] text-primary/60 font-black uppercase tracking-[0.2em]">Rest: {group.exercise.rest_seconds}s</span>}
                            {group.exercise.group_iterations > 1 && <span className="text-[10px] text-accent/60 font-black uppercase tracking-[0.2em]">{group.exercise.group_iterations} Giri</span>}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Logs Grid - Better for Container Queries */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {group.logs.sort((a: any, b: any) => a.set_number - b.set_number).map((log: any) => (
                        <div key={log.id} className="glass-interactive rounded-2xl p-6 flex flex-col gap-4 border-white/5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-[10px] font-black text-muted-foreground/50 border border-white/5">
                                    {log.set_number}
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl font-black text-foreground italic">{log.weight || '-'}</span>
                                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase">kg</span>
                                    <span className="mx-2 text-primary font-black opacity-40 italic text-sm">×</span>
                                    <span className="text-2xl font-black text-foreground italic">{log.reps}</span>
                                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase">
                                      {log.is_time_based ? 'sec' : 'reps'}
                                    </span>
                                </div>
                            </div>
                            
                            {log.rpe && (
                              <div className="flex items-center gap-1.5 px-3 py-1 bg-accent/10 rounded-lg border border-accent/20">
                                <Star className="w-2.5 h-2.5 text-accent fill-current" />
                                <span className="text-[9px] font-black italic text-accent uppercase">RPE {log.rpe}</span>
                              </div>
                            )}
                          </div>

                          {(log.athlete_feedback || log.notes) && (
                             <div className="mt-2 pt-4 border-t border-white/5">
                                <p className="text-[11px] font-medium text-muted-foreground italic leading-relaxed">
                                  "{log.athlete_feedback || log.notes}"
                                </p>
                             </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button 
                onClick={handleDelete}
                disabled={deleteMutation.isPending}
                className="flex items-center gap-3 text-red-500/40 hover:text-red-500 font-bold uppercase tracking-[0.2em] text-[10px] transition-all disabled:opacity-50 hover:scale-105 active:scale-95 group"
              >
                {deleteMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />}
                Elimina Sessione
              </button>
              
              <button 
                onClick={onClose}
                className="btn btn-secondary px-12 h-14 rounded-2xl font-black uppercase tracking-[0.2em] text-xs w-full sm:w-auto active:scale-95 shadow-2xl"
              >
                Chiudi Dettaglio
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
