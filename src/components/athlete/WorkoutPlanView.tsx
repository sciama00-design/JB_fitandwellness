import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { planService } from '../../services/planService';
import { exerciseService } from '../../services/exerciseService';
import { 
  X, Info, Timer, Dumbbell, 
  Flame, MessageSquare, Play, Loader2,
  LayoutGrid, Tv
} from 'lucide-react';
import ExerciseDetailModal from '../ExerciseDetailModal';
import { MediaViewer } from '../shared/MediaViewer';
import { parseVideoUrls } from '../../lib/videoUtils';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import type { ExerciseLibrary } from '../../types/database';

interface WorkoutPlanViewProps {
  planId: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function WorkoutPlanView({ planId, onClose, isOpen }: WorkoutPlanViewProps) {
  const navigate = useNavigate();
  const [selectedExerciseInfo, setSelectedExerciseInfo] = useState<ExerciseLibrary | null>(null);
  const [activeMediaViewerIndex, setActiveMediaViewerIndex] = useState<number | null>(null);

  const { data: plan, isLoading } = useQuery({
    queryKey: ['plan-view', planId],
    queryFn: () => planService.getPlanWithExercises(planId),
    enabled: isOpen && !!planId,
  });

  const { data: allLibraryExercises } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getAllExercises,
    enabled: isOpen,
  });

  const handleShowInfo = (libraryId: string | null) => {
    if (!libraryId || !allLibraryExercises) return;
    const ex = allLibraryExercises.find(e => e.id === libraryId);
    if (ex) setSelectedExerciseInfo(ex);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative glass w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden scale-in-center">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

        {/* Header */}
        <header className="shrink-0 p-6 sm:p-8 border-b border-white/5 flex items-start justify-between relative z-10 bg-slate-900/40">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary-500/10 rounded-xl border border-primary-500/20">
                <Dumbbell className="w-6 h-6 text-primary-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white italic uppercase tracking-tight">
                {isLoading ? <span className="animate-pulse">Caricamento...</span> : plan?.name}
              </h2>
            </div>
            {!isLoading && plan?.description && (
              <p className="text-slate-400 text-sm font-medium line-clamp-1 max-w-xl">
                {plan.description}
              </p>
            )}
          </div>
          <button 
            onClick={onClose} 
            className="p-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-2xl transition-all border border-white/5"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 scrollbar-thin">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-primary-500" />
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Preparo la tua scheda...</p>
            </div>
          ) : (
            <>
              {/* Description Section (if has multiple lines or long) */}
              {plan?.description && (
                <section className="space-y-3">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <LayoutGrid className="w-3 h-3" /> Descrizione del Coach
                  </h3>
                  <div className="prose prose-invert prose-sm max-w-none p-6 bg-slate-900/30 rounded-3xl border border-white/5 leading-relaxed italic text-slate-300">
                    <ReactMarkdown>{plan.description}</ReactMarkdown>
                  </div>
                </section>
              )}

              {/* Exercises List */}
              <section className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2 mb-6">
                  <Play className="w-3 h-3 text-primary-500" /> Piano di Allenamento ({plan?.exercises?.length} Esercizi)
                </h3>
                
                <div className="space-y-6">
                  {plan?.exercises?.map((ex: any, idx: number) => {
                    const prevEx = plan.exercises[idx - 1];
                    const isFirstInGroup = ex.group_name && (!prevEx || prevEx.group_id !== ex.group_id);
                    const isSuperset = ex.superset_id && prevEx?.superset_id === ex.superset_id;

                    return (
                      <div key={ex.id} className="relative group/ex">
                        {/* Group Header */}
                        {isFirstInGroup && (
                          <div className="mb-3 ml-4">
                            <span className="px-4 py-1.5 bg-primary-500/10 text-primary-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-primary-500/20 shadow-[0_0_20px_rgba(var(--primary-500),0.1)] flex items-center gap-2 w-fit">
                              <Flame className="w-3 h-3" /> {ex.group_name}
                            </span>
                          </div>
                        )}

                        {/* Connection line for supersets */}
                        {isSuperset && (
                          <div className="absolute left-8 -top-6 w-0.5 h-6 bg-primary-500/30 -z-10" />
                        )}

                        <div className={cn(
                          "glass p-6 rounded-[2rem] border border-white/5 transition-all duration-300 group-hover/ex:bg-slate-800/40 group-hover/ex:border-white/10 relative",
                          isSuperset ? "ml-8 border-l-4 border-l-primary-500 shadow-lg shadow-primary-500/5" : ""
                        )}>
                          <div className="flex flex-col sm:flex-row gap-6">
                            {/* Details */}
                            <div className="flex-1 space-y-4">
                              <div className="flex items-start justify-between gap-4">
                                <div className="space-y-1">
                                  <h4 className="text-xl font-bold text-white tracking-tight">{ex.name}</h4>
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                                      <Dumbbell className="w-3 h-3 text-primary-500" />
                                      {ex.target_sets} serie {ex.target_reps_detail ? `(${ex.target_reps_detail.join('-')})` : `x ${ex.target_reps}`} reps
                                    </span>
                                    {ex.rest_seconds && (
                                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                                        <Timer className="w-3 h-3 text-primary-500" />
                                        Recupero {ex.rest_seconds}s
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  {ex.video_url && (
                                    <button 
                                      onClick={() => setActiveMediaViewerIndex(idx)}
                                      className="p-3 bg-white/5 hover:bg-primary-500/20 text-slate-500 hover:text-primary-400 rounded-xl transition-all border border-transparent hover:border-primary-500/20 flex flex-col items-center gap-1"
                                    >
                                      <Tv className="w-5 h-5" />
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => handleShowInfo(ex.exercise_library_id)}
                                    className="p-3 bg-white/5 hover:bg-primary-500/20 text-slate-500 hover:text-primary-400 rounded-xl transition-all border border-transparent hover:border-primary-500/20"
                                  >
                                    <Info className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>

                              {/* Coach Notes */}
                              {ex.coach_notes && (
                                <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-2xl flex items-start gap-3">
                                  <MessageSquare className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                  <div className="prose prose-invert prose-xs text-orange-100/70 font-medium italic max-w-none">
                                    <ReactMarkdown>{ex.coach_notes}</ReactMarkdown>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </>
          )}
        </main>

        {/* Footer Actions */}
        <footer className="shrink-0 p-8 border-t border-white/5 bg-slate-900/60 flex items-center gap-4 relative z-10">
          <button 
            onClick={onClose}
            className="flex-1 h-16 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold uppercase tracking-widest border border-white/5 transition-all"
          >
            Chiudi
          </button>
          <button 
            disabled={isLoading || !planId}
            onClick={() => {
              onClose();
              navigate(`/athlete/workout/${planId}`);
            }}
            className="flex-[2] h-16 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-black italic uppercase tracking-[0.1em] shadow-xl shadow-primary-500/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            <Play className="w-5 h-5 fill-current" />
            Inizia Allenamento
          </button>
        </footer>
      </div>

      {selectedExerciseInfo && (
        <ExerciseDetailModal 
          exercise={selectedExerciseInfo}
          isOpen={!!selectedExerciseInfo}
          onClose={() => setSelectedExerciseInfo(null)}
        />
      )}

      {activeMediaViewerIndex !== null && plan?.exercises?.[activeMediaViewerIndex] && (
        <MediaViewer
          urls={parseVideoUrls(plan.exercises[activeMediaViewerIndex].video_url)}
          title={plan.exercises[activeMediaViewerIndex].name}
          isOpen={true}
          onClose={() => setActiveMediaViewerIndex(null)}
        />
      )}
    </div>
  );
}
