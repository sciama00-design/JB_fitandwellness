import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { planService } from '../../services/planService';
import { sessionService } from '../../services/sessionService';
import { useAuth } from '../../lib/auth';
import { 
  Play, Pause, CheckCircle2, 
  ChevronLeft, ChevronRight, Timer,
  AlertCircle, Loader2, Info,
  Award,
  Dumbbell,
  History,
  SkipForward,
  List,
  Tv,
  XCircle,
  Save,
  Trash2
} from 'lucide-react';
import ExerciseDetailModal from '../../components/ExerciseDetailModal';
import { exerciseService } from '../../services/exerciseService';
import type { ExerciseLibrary } from '../../types/database';
import { MediaViewer } from '../../components/shared/MediaViewer';
import { parseVideoUrls } from '../../lib/videoUtils';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
// import Modal from '../../components/Modal'; // Removed unused

export default function WorkoutSession() {
  const { planId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [logs, setLogs] = useState<Record<string, any[]>>({});
  const [selectedExerciseInfo, setSelectedExerciseInfo] = useState<ExerciseLibrary | null>(null);
  const [isMediaViewerOpen, setIsMediaViewerOpen] = useState(false);
  
  // Rest Timer State
  const [restTimeLeft, setRestTimeLeft] = useState<number | null>(null);
  const [isResting, setIsResting] = useState(false);
  const [lastLoggedSet, setLastLoggedSet] = useState<{ exerciseId: string; setIndex: number } | null>(null);
  const [restStartTime, setRestStartTime] = useState<number | null>(null);

  // Cluster/Rep Timer State
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  // Exercise Feedback State
  const [showExerciseFeedback, setShowExerciseFeedback] = useState(false);
  const [exerciseFeedback, setExerciseFeedback] = useState('');
  const [showFullList, setShowFullList] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  const { data: allLibraryExercises } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getAllExercises,
  });

  const handleShowInfo = () => {
    if (!currentExercise?.exercise_library_id || !allLibraryExercises) return;
    const ex = allLibraryExercises.find(e => e.id === currentExercise.exercise_library_id);
    if (ex) setSelectedExerciseInfo(ex);
  };

  const { data: plan, isLoading } = useQuery({
    queryKey: ['plan', planId],
    queryFn: () => planService.getPlanWithExercises(planId!),
    enabled: !!planId,
  });

  // Persistence Key
  const storageKey = `workout_session_${user?.id}_${planId}`;

  // Load state on mount
  useEffect(() => {
    if (!plan || !user) return;
    
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setSessionId(parsed.sessionId);
        setCurrentExerciseIndex(parsed.currentExerciseIndex || 0);
        setCurrentSetIndex(parsed.currentSetIndex || 0);
        setDuration(parsed.duration || 0);
        setSessionStartTime(parsed.sessionStartTime || Date.now());
        setLogs(parsed.logs || {});
        setIsPaused(parsed.isPaused ?? false);
      } catch (e) {
        console.error('Error parsing saved session state:', e);
      }
    }
  }, [plan, user, planId]);

  // Save state on change
  useEffect(() => {
    if (sessionId && user && planId) {
      const stateToSave = {
        sessionId,
        currentExerciseIndex,
        currentSetIndex,
        duration,
        sessionStartTime,
        logs,
        isPaused
      };
      localStorage.setItem(storageKey, JSON.stringify(stateToSave));
    }
  }, [sessionId, currentExerciseIndex, duration, sessionStartTime, logs, isPaused, user, planId]);

  // Timer logic
  useEffect(() => {
    let interval: any;
    if (sessionStartTime && !isPaused) {
      interval = setInterval(() => {
        setDuration(Math.floor((Date.now() - sessionStartTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionStartTime, isPaused]);

  // Rest Timer logic
  useEffect(() => {
    let interval: any;
    if (isResting && restTimeLeft !== null && restTimeLeft > 0 && !isPaused) {
      interval = setInterval(() => {
        setRestTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (restTimeLeft === 0) {
      if (lastLoggedSet && restStartTime) {
        const actualRest = Math.floor((Date.now() - restStartTime) / 1000);
        updateLog(lastLoggedSet.exerciseId, lastLoggedSet.setIndex, { 
          actual_rest: actualRest 
        });
        moveToNextStep();
      }
      setIsResting(false);
      setRestTimeLeft(null);
      setRestStartTime(null);
    }
    return () => clearInterval(interval);
  }, [isResting, restTimeLeft, isPaused]);

  const currentExercise = plan?.exercises?.[currentExerciseIndex];

  // Fetch last session data for this exercise
  const { data: lastPerformance } = useQuery({
    queryKey: ['last-performance', user?.id, currentExercise?.exercise_library_id],
    queryFn: () => sessionService.getLastExerciseLogs(user!.id, currentExercise!.exercise_library_id!),
    enabled: !!user && !!currentExercise?.exercise_library_id,
  });

  // Start session mutation
  const startMutation = useMutation({
    mutationFn: () => sessionService.startSession(planId!, user!.id),
    onSuccess: (data) => {
      setSessionId(data.id);
      setSessionStartTime(Date.now());
    }
  });

  // End session mutation
  const endMutation = useMutation({
    mutationFn: async () => {
      const logPromises = Object.entries(logs).flatMap(([exId, sets]) => 
        sets.map((set, idx) => sessionService.logExercise({
          session_id: sessionId!,
          exercise_id: exId,
          set_number: idx + 1,
          reps: parseInt(set.reps),
          weight: parseFloat(set.weight),
          rpe: parseInt(set.rpe),
          athlete_feedback: set.notes
        }))
      );
      await Promise.all(logPromises);
      await sessionService.completeSession(sessionId!, duration);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-history'] });
      localStorage.removeItem(storageKey);
      navigate('/athlete');
    }
  });

  const cancelMutation = useMutation({
    mutationFn: () => sessionService.cancelSession(sessionId!),
    onSuccess: () => {
      localStorage.removeItem(storageKey);
      navigate('/athlete');
    }
  });

  const updateLog = (exerciseId: string, setIndex: number, updates: any) => {
    const updatedExLogs = [...(logs[exerciseId] || [])];
    if (!updatedExLogs[setIndex]) {
      const targetReps = currentExercise?.target_reps_detail?.[setIndex] ?? currentExercise?.target_reps ?? 10;
      updatedExLogs[setIndex] = { reps: targetReps.toString(), weight: '', rpe: '8', notes: '' };
    }
    const newLog = { ...updatedExLogs[setIndex], ...updates };
    updatedExLogs[setIndex] = newLog;
    setLogs({ ...logs, [exerciseId]: updatedExLogs });
  };

  const handleConfirmSet = () => {
    if (!currentExercise) return;
    if (currentExercise.rest_seconds) {
      setRestTimeLeft(currentExercise.rest_seconds);
      setIsResting(true);
      setRestStartTime(Date.now());
      setLastLoggedSet({ exerciseId: currentExercise.id, setIndex: currentSetIndex });
    } else {
      moveToNextStep();
    }
  };

  const moveToNextStep = () => {
    if (!plan || !currentExercise) return;
    if (currentSetIndex < (currentExercise.target_sets - 1)) {
      setCurrentSetIndex(prev => prev + 1);
    } else {
      setShowExerciseFeedback(true);
    }
  };

  if (isLoading && !plan) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-xs">Caricamento sessione...</p>
      </div>
    );
  }

  if (!sessionId) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto py-20 px-6 space-y-16"
      >
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-32 h-32 bg-primary/10 rounded-[3rem] flex items-center justify-center text-primary mx-auto shadow-2xl border border-primary/20 group hover:scale-110 transition-transform duration-500">
              <Play className="w-12 h-12 fill-current ml-2 group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-black text-foreground tracking-tighter italic uppercase leading-tight"
            >
              {plan?.name}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-xl font-bold uppercase tracking-widest opacity-60"
            >
              {plan?.exercises?.length} esercizi pronti
            </motion.p>
          </div>
        </div>

        {plan?.description && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-10 rounded-[3rem] border-white/5 space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Info className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em]">Note della Scheda</p>
            </div>
            <p className="text-foreground/80 font-medium leading-relaxed text-lg italic relative z-10">
              {plan.description}
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <button 
            onClick={() => startMutation.mutate()}
            className="btn btn-primary w-full py-10 text-3xl rounded-[2.5rem] font-black italic tracking-[0.1em] uppercase shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 group"
            disabled={startMutation.isPending}
          >
            {startMutation.isPending ? (
              <Loader2 className="animate-spin w-8 h-8" />
            ) : (
              <>
                <Play className="w-8 h-8 fill-current" />
                <span>Inizia Sessione</span>
              </>
            )}
          </button>

          <button 
            onClick={() => navigate('/athlete')}
            className="w-full py-4 text-muted-foreground hover:text-foreground font-black uppercase tracking-[0.2em] text-[10px] transition-all opacity-50 hover:opacity-100 flex items-center justify-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Torna alla Dashboard
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-10 pb-40 px-6">
      {/* Session Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between sticky top-4 sm:top-10 z-[60] glass-header px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-[2.5rem] border-white/10 shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className={clsx(
            "p-3 rounded-2xl border transition-colors",
            isPaused ? "bg-amber-500/10 border-amber-500/20 text-amber-500" : "bg-primary/10 border-primary/20 text-primary"
          )}>
            <Timer className={clsx("w-6 h-6", !isPaused && "animate-pulse")} />
          </div>
          <div>
            <p className="text-[9px] uppercase font-black text-muted-foreground tracking-[0.2em] opacity-50">Tempo</p>
            <p className="text-2xl font-mono font-black italic text-foreground leading-none mt-1">
              {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowFullList(true)}
            className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95 transition-all border-white/5"
            title="Lista Esercizi"
          >
            <List className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className={clsx(
              "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all active:scale-95 border",
              isPaused 
                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" 
                : "bg-amber-500/20 border-amber-500/30 text-amber-500"
            )}
            title={isPaused ? 'Riprendi' : 'Pausa'}
          >
            {isPaused ? <Play className="w-5 h-5 fill-current" /> : <Pause className="w-5 h-5 fill-current" />}
          </button>

          <button 
            onClick={() => setShowEndModal(true)}
            className="h-12 px-6 glass-card rounded-xl flex items-center gap-2 border-red-500/20 hover:bg-red-500/10 text-red-500 font-black uppercase tracking-widest text-[10px] active:scale-95 transition-all ml-1"
          >
            <XCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Stop</span>
          </button>
        </div>
      </motion.div>

      {/* Progress Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 px-2"
      >
        <div className="flex justify-between items-end">
           <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-40">Avanzamento Sessione</span>
           <div className="flex items-center gap-2">
             <span className="text-xl font-black italic text-foreground tracking-tighter">
               {currentExerciseIndex + 1}
             </span>
             <span className="text-xs font-black text-muted-foreground opacity-30 italic">/ {plan?.exercises?.length}</span>
           </div>
        </div>
        <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden flex p-1 border border-white/5 shadow-inner">
          {plan?.exercises?.map((_ex: any, idx: number) => {
            const isCurrent = idx === currentExerciseIndex;
            const isCompleted = idx < currentExerciseIndex;
            return (
              <motion.div 
                key={idx} 
                initial={false}
                animate={{
                  backgroundColor: isCurrent ? "var(--primary)" : isCompleted ? "rgba(var(--primary), 0.3)" : "rgba(255,255,255,0.05)",
                  scaleY: isCurrent ? 1.2 : 1
                }}
                className="flex-1 h-full rounded-full mx-0.5"
                style={{ 
                  boxShadow: isCurrent ? '0 0 15px var(--primary)' : 'none'
                }}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Current Exercise Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentExercise?.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="glass-card group p-6 sm:p-10 rounded-3xl sm:rounded-[3rem] border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
          
          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-6 flex-1">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h2 className="text-2xl sm:text-4xl font-black text-foreground italic uppercase leading-tight tracking-tighter">{currentExercise?.name}</h2>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={handleShowInfo}
                      className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-2xl transition-all border border-transparent hover:border-primary/20"
                      title="Info Esercizio"
                    >
                      <Info className="w-6 h-6" />
                    </button>
                    {currentExercise?.video_url && (
                      <button 
                        onClick={() => setIsMediaViewerOpen(true)}
                        className="p-3 text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 rounded-2xl transition-all border border-transparent hover:border-blue-400/20"
                        title="Video Esercizio"
                      >
                        <Tv className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3">
                  <Dumbbell className="w-4 h-4 text-primary" />
                  Esercizio {currentExerciseIndex + 1} di {plan?.exercises?.length} — Serie {currentSetIndex + 1}/{currentExercise?.target_sets}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentExercise?.rest_seconds && (
                  <div className="px-4 py-2 bg-secondary/30 ring-1 ring-white/5 rounded-xl text-[10px] font-black text-foreground uppercase tracking-widest flex items-center gap-2">
                    <Timer className="w-4 h-4 text-primary" />
                    Recupero: {currentExercise.rest_seconds}s
                  </div>
                )}
                <div className="px-4 py-2 bg-primary/10 ring-1 ring-primary/20 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Target: {currentExercise?.target_sets}x{currentExercise?.target_reps}
                </div>
              </div>
            </div>
          </div>

          {currentExercise?.coach_notes && (
            <div className="mt-8 flex items-start gap-4 p-6 bg-amber-500/5 border border-amber-500/10 rounded-[2rem] relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-amber-500 rounded-full"></div>
              <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                 <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Nota Tecnica</p>
                 <p className="text-foreground/70 leading-relaxed font-medium italic">
                  {currentExercise.coach_notes}
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 space-y-8">
            {(() => {
              const idx = currentSetIndex;
              const setLog = logs[currentExercise?.id!]?.[idx] || { reps: '', weight: '', rpe: '8' };
              const prevLog = lastPerformance?.logs?.[idx];

              return (
                <div className="space-y-8">
                  {prevLog && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-6 py-2 flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/5 w-fit rounded-full border border-primary/10"
                    >
                      <History className="w-4 h-4" />
                      Ultima volta: {prevLog.weight}kg x {prevLog.reps} @ RPE{prevLog.rpe}
                    </motion.div>
                  )}
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 items-end p-5 sm:p-8 rounded-3xl sm:rounded-[2.5rem] bg-secondary/20 border border-white/5 shadow-inner">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black text-muted-foreground text-center block tracking-[0.2em] opacity-50">Ripetizioni</label>
                      <input 
                        type="number"
                        placeholder={(currentExercise?.target_reps_detail?.[idx] ?? currentExercise?.target_reps ?? 10).toString()}
                        className="w-full bg-background/50 border-0 rounded-2xl py-4 sm:py-6 text-center font-black text-2xl sm:text-3xl focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground/20"
                        value={setLog.reps}
                        onChange={(e) => updateLog(currentExercise!.id, idx, { reps: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black text-muted-foreground text-center block tracking-[0.2em] opacity-50">Carico (kg)</label>
                      <input 
                        type="number"
                        placeholder="0"
                        className="w-full bg-background/50 border-0 rounded-2xl py-4 sm:py-6 text-center font-black text-2xl sm:text-3xl focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground/20"
                        value={setLog.weight}
                        onChange={(e) => updateLog(currentExercise!.id, idx, { weight: e.target.value })}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-3">
                      <label className="text-[10px] uppercase font-black text-muted-foreground text-center block tracking-[0.2em] opacity-50">Sforzo (RPE)</label>
                      <div className="relative">
                        <select 
                          className="w-full bg-background/50 border-0 rounded-2xl py-4 sm:py-6 text-center font-black text-2xl sm:text-3xl focus:ring-2 focus:ring-primary appearance-none transition-all text-foreground"
                          value={setLog.rpe}
                          onChange={(e) => updateLog(currentExercise!.id, idx, { rpe: e.target.value })}
                        >
                          {[6,7,8,9,10].map(n => <option key={n} value={n} className="bg-background text-foreground">{n}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="px-2">
                    <input 
                      type="text"
                      placeholder="Commenti per questa serie..."
                      className="w-full bg-transparent border-b-2 border-white/5 py-4 px-2 text-sm text-foreground focus:outline-none focus:border-primary transition-all italic placeholder:text-muted-foreground/30"
                      value={setLog.notes || ''}
                      onChange={(e) => updateLog(currentExercise!.id, idx, { notes: e.target.value })}
                    />
                  </div>

                  <button
                    onClick={handleConfirmSet}
                    disabled={!setLog.reps || !setLog.weight}
                    className="btn btn-primary w-full py-8 rounded-[2rem] font-black italic tracking-[0.2em] uppercase shadow-2xl shadow-primary/30 transform active:scale-95 transition-all text-xl disabled:opacity-30 disabled:grayscale disabled:scale-100 flex items-center justify-center gap-4"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                    Completa Serie {idx + 1}
                  </button>
                </div>
              );
            })()}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Navigation Overlay */}
      <div className="fixed bottom-0 left-0 right-0 p-4 sm:p-8 bg-gradient-to-t from-background via-background/90 to-transparent z-[70] pointer-events-none">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-6 pointer-events-auto">
          <button 
            onClick={() => setCurrentExerciseIndex(Math.max(0, currentExerciseIndex - 1))}
            className="w-20 h-20 glass-card rounded-3xl flex items-center justify-center border-white/5 hover:border-primary/20 text-muted-foreground hover:text-primary transition-all active:scale-90 disabled:opacity-20"
            disabled={currentExerciseIndex === 0}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={() => setShowExerciseFeedback(true)}
            className="flex-1 h-20 glass-card rounded-3xl border-primary/20 hover:bg-primary/5 text-primary font-black italic tracking-[0.2em] uppercase flex items-center justify-center gap-4 group transition-all active:scale-95"
          >
            {currentExerciseIndex === (plan?.exercises?.length || 0) - 1 ? 'Termina Allenamento' : 'Prossimo Esercizio'}
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modals & Overlays */}
      <ExerciseDetailModal 
        exercise={selectedExerciseInfo!}
        isOpen={!!selectedExerciseInfo}
        onClose={() => setSelectedExerciseInfo(null)}
      />

      {isMediaViewerOpen && currentExercise && (
        <MediaViewer
          urls={parseVideoUrls(currentExercise.video_url)}
          title={currentExercise.name}
          isOpen={true}
          onClose={() => setIsMediaViewerOpen(false)}
        />
      )}

      {/* Rest Timer Overlay */}
      <AnimatePresence>
        {isResting && restTimeLeft !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-8 backdrop-blur-3xl bg-background/80"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card w-full max-w-md p-12 rounded-[4rem] border-primary/20 shadow-[0_0_100px_rgba(var(--primary-rgb),0.15)] text-center space-y-12"
            >
              <div className="space-y-3">
                <p className="text-xs font-black text-primary uppercase tracking-[0.4em]">Recupero in corso</p>
                <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">{currentExercise?.name}</h3>
              </div>

              <div className="relative w-64 h-64 mx-auto">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="128" cy="128" r="110" className="stroke-white/5 fill-none" strokeWidth="12" />
                  <motion.circle
                    cx="128" cy="128" r="110"
                    className="stroke-primary fill-none"
                    strokeWidth="12"
                    strokeDasharray={691}
                    initial={{ strokeDashoffset: 691 }}
                    animate={{ strokeDashoffset: 691 * (1 - (restTimeLeft ?? 0) / (currentExercise?.rest_seconds || 60)) }}
                    strokeLinecap="round"
                    transition={{ duration: 1, ease: "linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-mono font-black italic text-foreground tracking-tighter">
                    {restTimeLeft}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {[15, 30, 60].map(sec => (
                    <button
                      key={sec}
                      onClick={() => setRestTimeLeft(prev => (prev || 0) + sec)}
                      className="py-4 glass-card rounded-2xl text-xs font-black italic hover:bg-white/5 active:scale-95 transition-all"
                    >
                      +{sec}s
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    const actualRest = restStartTime ? Math.floor((Date.now() - restStartTime) / 1000) : 0;
                    if (lastLoggedSet) updateLog(lastLoggedSet.exerciseId, lastLoggedSet.setIndex, { actual_rest: actualRest });
                    setIsResting(false);
                    setRestTimeLeft(null);
                    setRestStartTime(null);
                    moveToNextStep();
                  }}
                  className="btn btn-primary h-20 rounded-3xl flex items-center justify-center gap-4 font-black italic uppercase tracking-widest text-lg group shadow-xl shadow-primary/20"
                >
                  <SkipForward className="w-6 h-6 group-hover:translate-x-2 transition-transform" /> 
                  Salta Recupero
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exercise Feedback Modal */}
      <AnimatePresence>
        {showExerciseFeedback && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[130] flex items-center justify-center p-8 backdrop-blur-3xl bg-background/90"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="glass-card w-full max-w-lg p-12 rounded-[4rem] border-white/10 shadow-3xl space-y-10"
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-amber-500/10 rounded-[2rem] flex items-center justify-center mx-auto border border-amber-500/20">
                  <Award className="w-10 h-10 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Ottimo Lavoro!</h3>
                  <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest opacity-60">Feedback sull'esercizio</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-foreground/80 font-medium italic text-center">
                  Com'è andato il set di <span className="text-primary font-black uppercase text-lg">{currentExercise?.name}</span>?
                </p>
                <textarea
                  className="w-full bg-secondary/10 border border-white/5 rounded-[2.5rem] p-8 text-foreground text-lg focus:ring-2 focus:ring-primary focus:bg-secondary/20 transition-all min-h-[180px] italic placeholder:text-muted-foreground/30"
                  placeholder="Esempio: Sentito bene il muscolo, peso leggero, fastidio alla spalla..."
                  value={exerciseFeedback}
                  onChange={(e) => setExerciseFeedback(e.target.value)}
                />
              </div>

              <button
                onClick={() => {
                  const exerciseId = currentExercise?.id;
                  if (exerciseId && exerciseFeedback) {
                    const updatedExLogs = [...(logs[exerciseId] || [])];
                    const lastSetIdx = updatedExLogs.length - 1;
                    if (lastSetIdx >= 0) {
                      updatedExLogs[lastSetIdx] = { 
                        ...updatedExLogs[lastSetIdx], 
                        notes: [updatedExLogs[lastSetIdx].notes, exerciseFeedback].filter(Boolean).join(' | ')
                      };
                      setLogs({ ...logs, [exerciseId]: updatedExLogs });
                    }
                  }
                  setShowExerciseFeedback(false);
                  setExerciseFeedback('');
                  setCurrentSetIndex(0);
                  if (currentExerciseIndex === (plan?.exercises?.length || 0) - 1) {
                    endMutation.mutate();
                  } else {
                    setCurrentExerciseIndex(currentExerciseIndex + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="btn btn-primary w-full h-20 rounded-3xl font-black italic uppercase tracking-[0.2em] text-lg shadow-2xl shadow-primary/30"
              >
                Salva e Continua
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* List Drawer */}
      <AnimatePresence>
        {showFullList && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] flex justify-end"
          >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-md" onClick={() => setShowFullList(false)} />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md bg-background border-l border-white/10 shadow-3xl flex flex-col"
            >
              <div className="p-10 border-b border-white/5 flex items-center justify-between bg-primary/5">
                <div>
                  <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">La tua Scheda</h3>
                  <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em] mt-1">Panoramica sessione</p>
                </div>
                <button onClick={() => setShowFullList(false)} className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar">
                {plan?.exercises?.map((ex: any, idx: number) => {
                  const isCurrent = idx === currentExerciseIndex;
                  const isCompleted = idx < currentExerciseIndex;
                  const doneSets = (logs[ex.id] || []).filter((l: any) => l.reps && l.weight).length;
                  
                  return (
                    <button
                      key={ex.id}
                      onClick={() => {
                        setCurrentExerciseIndex(idx);
                        setShowFullList(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={clsx(
                        "w-full text-left p-6 rounded-[2rem] border transition-all relative overflow-hidden group",
                        isCurrent 
                          ? "bg-primary border-primary shadow-xl shadow-primary/20 scale-[1.02] z-10" 
                          : isCompleted 
                            ? "bg-primary/10 border-primary/20 opacity-60" 
                            : "bg-secondary/20 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={clsx(
                          "text-[9px] font-black uppercase tracking-[0.2em]",
                          isCurrent ? "text-white/80" : "text-primary"
                        )}>
                          Esercizio {idx + 1}
                        </span>
                        {isCompleted && <CheckCircle2 className="w-4 h-4 text-primary" />}
                      </div>
                      <div className={clsx(
                        "font-black text-xl uppercase italic tracking-tight",
                        isCurrent ? "text-white" : "text-foreground"
                      )}>{ex.name}</div>
                      <div className={clsx(
                        "text-[10px] font-bold mt-2 flex items-center gap-2",
                        isCurrent ? "text-white/60" : "text-muted-foreground"
                      )}>
                        <div className={clsx("w-1.5 h-1.5 rounded-full animate-pulse", isCurrent ? "bg-white" : "bg-primary")} />
                        {doneSets} / {ex.target_sets} serie completate
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-10 border-t border-white/5 bg-secondary/30">
                <button 
                  onClick={() => setShowFullList(false)}
                  className="btn btn-primary w-full h-16 rounded-2xl font-black italic uppercase tracking-[0.2em]"
                >
                  Continua Allenamento
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stop Session Modal */}
      <AnimatePresence>
        {showEndModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-8 backdrop-blur-3xl bg-background/90"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card w-full max-w-sm p-12 rounded-[4rem] border-white/10 shadow-3xl text-center space-y-12"
            >
              <div className="space-y-4">
                <div className="w-20 h-20 bg-red-500/10 rounded-[2rem] flex items-center justify-center mx-auto border border-red-500/20">
                  <XCircle className="w-10 h-10 text-red-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Termina Sessione</h3>
                  <p className="text-muted-foreground text-sm font-bold opacity-60">Scegli come procedere</p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => { setShowEndModal(false); endMutation.mutate(); }}
                  disabled={endMutation.isPending}
                  className="btn btn-primary w-full h-20 rounded-3xl flex items-center justify-center gap-4 font-black italic uppercase tracking-widest text-lg shadow-2xl shadow-primary/30"
                >
                  {endMutation.isPending ? <Loader2 className="animate-spin w-6 h-6" /> : <><Save className="w-6 h-6" /> Salva e Chiudi</>}
                </button>
                
                <button
                  onClick={() => {
                    if (confirm('Sei sicuro di voler eliminare questa sessione? Tutti i dati andranno persi.')) {
                      setShowEndModal(false);
                      cancelMutation.mutate();
                    }
                  }}
                  className="w-full h-20 rounded-3xl flex items-center justify-center gap-4 font-black italic uppercase tracking-widest text-red-500 hover:bg-red-500/10 bg-red-500/5 transition-all text-sm border border-red-500/20"
                >
                  <Trash2 className="w-5 h-5" /> Elimina Tutto
                </button>

                <button
                  onClick={() => setShowEndModal(false)}
                  className="w-full py-4 text-muted-foreground hover:text-foreground font-black text-xs uppercase tracking-[0.2em] transition-all opacity-50 hover:opacity-100"
                >
                  Annulla
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
