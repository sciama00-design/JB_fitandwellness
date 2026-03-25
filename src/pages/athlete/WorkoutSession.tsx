import { useState, useEffect, useMemo } from 'react';
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
  Trash2,
  MessageSquare
} from 'lucide-react';
import ExerciseDetailModal from '../../components/ExerciseDetailModal';
import { exerciseService } from '../../services/exerciseService';
import type { ExerciseLibrary } from '../../types/database';
import { MediaViewer } from '../../components/shared/MediaViewer';
// import { parseVideoUrls } from '../../lib/videoUtils'; // Removed unused
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
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
  const [totalRestStarted, setTotalRestStarted] = useState<number>(60);

  // Cluster/Rep Timer State
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  // Exercise Feedback State
  const [showExerciseFeedback, setShowExerciseFeedback] = useState(false);
  const [exerciseFeedback, setExerciseFeedback] = useState('');
  const [showFullList, setShowFullList] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  // Set Timer (Stopwatch/Countdown for time-based exercises)
  const [setTimerTime, setSetTimerTime] = useState<number | null>(null);
  const [isSetTimerRunning, setIsSetTimerRunning] = useState(false);
  const [setTimerMode, setSetTimerMode] = useState<'stopwatch' | 'countdown'>('countdown');
  const [restNote, setRestNote] = useState('');

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
        moveToNextStep(true);
      }
      setIsResting(false);
      setRestTimeLeft(null);
      setRestStartTime(null);
    }
    return () => clearInterval(interval);
  }, [isResting, restTimeLeft, isPaused]);

  // Set Timer logic
  useEffect(() => {
    let interval: any;
    if (isSetTimerRunning && setTimerTime !== null && !isPaused) {
      interval = setInterval(() => {
        setSetTimerTime(prev => {
          if (prev === null) return null;
          if (setTimerMode === 'countdown') {
            if (prev <= 0) {
              setIsSetTimerRunning(false);
              // Play a sound or haptic feedback here if possible
              if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
              return 0;
            }
            return prev - 1;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSetTimerRunning, isPaused, setTimerMode]);

  const sessionExercises = useMemo(() => {
    if (!plan?.exercises) return [];
    
    const unrolled: (any & { round?: number; totalRounds?: number; setsInRound?: number; startSetIdx?: number })[] = [];
    let i = 0;
    while (i < plan.exercises.length) {
      const ex = plan.exercises[i];
      if (ex.group_id && ex.group_iterations && ex.group_iterations > 1) {
        // Find all exercises in this group
        const groupExs: any[] = [];
        let j = i;
        while (j < plan.exercises.length && plan.exercises[j].group_id === ex.group_id) {
          groupExs.push(plan.exercises[j]);
          j++;
        }
        
        const iterations = ex.group_iterations;
        for (let r = 1; r <= iterations; r++) {
          groupExs.forEach(ge => {
            const setsPerRound = ge.target_sets || 1;
            const startSet = (r - 1) * setsPerRound;
            
            unrolled.push({ 
              ...ge, 
              round: r, 
              totalRounds: iterations,
              setsInRound: setsPerRound,
              startSetIdx: startSet
            });
          });
        }
        i = j;
      } else {
        unrolled.push({ ...ex, round: 1, totalRounds: 1, setsInRound: ex.target_sets, startSetIdx: 0 });
        i++;
      }
    }
    return unrolled;
  }, [plan?.exercises]);

  const currentExercise = sessionExercises[currentExerciseIndex];

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

  // Individual Log Mutation
  const logMutation = useMutation({
    mutationFn: async (data: { exerciseIndex: number; setIndex: number; log: any }) => {
      if (!sessionId) return;
      const ex = sessionExercises[data.exerciseIndex];
      if (!ex) return;
      
      const globalSetIdx = (ex.startSetIdx || 0) + data.setIndex;
      
      const payload: any = {
        session_id: sessionId,
        exercise_id: ex.id,
        set_number: globalSetIdx + 1,
        reps: parseInt(data.log.reps) || 0,
        weight: parseFloat(data.log.weight) || 0,
        rpe: parseInt(data.log.rpe) || 0,
        athlete_feedback: data.log.notes
      };

      // Only add is_time_based if the column exists (safeguard)
      if (ex.is_time_based !== undefined) {
        payload.is_time_based = ex.is_time_based;
      }

      try {
        await sessionService.upsertExerciseLog(payload);
      } catch (e) {
        console.warn("Failed to upsert log, trying without is_time_based...", e);
        const { is_time_based, ...safePayload } = payload;
        await sessionService.upsertExerciseLog(safePayload);
      }
    }
  });

  // End session mutation
  const endMutation = useMutation({
    mutationFn: async () => {
      // Final sync of all logs to be absolutely sure
      const allLogs: any[] = [];
      Object.entries(logs).forEach(([exId, sets]) => {
        const ex = sessionExercises.find(e => e.id === exId);
        sets.forEach((set, idx) => {
          if (set && (set.reps || set.weight)) {
            const globalSetIdx = (ex?.startSetIdx || 0) + idx;
            allLogs.push({
              session_id: sessionId!,
              exercise_id: exId,
              set_number: globalSetIdx + 1,
              reps: parseInt(set.reps) || 0,
              weight: parseFloat(set.weight) || 0,
              rpe: parseInt(set.rpe) || 0,
              athlete_feedback: set.notes,
              is_time_based: ex?.is_time_based ?? false
            });
          }
        });
      });

      if (allLogs.length > 0) {
        // Remove is_time_based if it causes 400 for any reason (safeguard)
        const sanitizedLogs = allLogs.map(({ is_time_based, ...rest }) => rest);
        try {
          await sessionService.upsertExerciseLogs(allLogs);
        } catch (e) {
          console.warn("Failed to upsert with is_time_based, trying without...", e);
          await sessionService.upsertExerciseLogs(sanitizedLogs);
        }
      }
      
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
    const globalSetIdx = (currentExercise.startSetIdx || 0) + setIndex;
    const updatedExLogs = [...(logs[exerciseId] || [])];
    if (!updatedExLogs[globalSetIdx]) {
      const targetReps = currentExercise?.target_reps_detail?.[globalSetIdx] ?? currentExercise?.target_reps ?? 10;
      updatedExLogs[globalSetIdx] = { reps: targetReps.toString(), weight: '', rpe: '8', notes: '' };
    }
    const newLog = { ...updatedExLogs[globalSetIdx], ...updates };
    updatedExLogs[globalSetIdx] = newLog;
    setLogs({ ...logs, [exerciseId]: updatedExLogs });
  };

  const handleConfirmSet = () => {
    if (!currentExercise) return;
    
    // Progressive sync to DB
    const globalSetIdx = (currentExercise.startSetIdx || 0) + currentSetIndex;
    const setLog = logs[currentExercise.id]?.[globalSetIdx];
    if (setLog) {
      logMutation.mutate({ 
        exerciseIndex: currentExerciseIndex, 
        setIndex: currentSetIndex, 
        log: setLog 
      });
    }
    
    const setsToComplete = currentExercise.setsInRound || currentExercise.target_sets || 1;
    const isLastSet = currentSetIndex === (setsToComplete - 1);
    
    const restToUse = isLastSet ? (currentExercise.rest_esercizio ?? 0) : (currentExercise.rest_seconds ?? 0);
    
    if (restToUse > 0) {
      setTotalRestStarted(restToUse);
      setRestTimeLeft(restToUse);
      setIsResting(true);
      setRestStartTime(Date.now());
      setLastLoggedSet({ exerciseId: currentExercise.id, setIndex: currentSetIndex });
    } else {
      moveToNextStep(true);
    }
  };

  const moveToNextStep = (skipFeedbackIfBrief = false) => {
    if (!plan || !currentExercise) return;
    
    const setsToComplete = currentExercise.setsInRound || currentExercise.target_sets || 1;
    if (currentSetIndex < (setsToComplete - 1)) {
      setCurrentSetIndex(prev => prev + 1);
    } else {
      // Logic for compacting notes and skipping if exercise was short
      if (skipFeedbackIfBrief && setsToComplete === 1) {
        completeExerciseAndMove();
      } else {
        setShowExerciseFeedback(true);
      }
    }
  };

  const completeExerciseAndMove = () => {
    const exerciseId = currentExercise?.id;
    let finalLogForSync = null;

    if (exerciseId && exerciseFeedback) {
      const updatedExLogs = [...(logs[exerciseId] || [])];
      const setsToComplete = currentExercise.setsInRound || currentExercise.target_sets || 1;
      const lastSetIdx = (currentExercise.startSetIdx || 0) + setsToComplete - 1;
      
      if (updatedExLogs[lastSetIdx]) {
        updatedExLogs[lastSetIdx] = { 
          ...updatedExLogs[lastSetIdx], 
          notes: [updatedExLogs[lastSetIdx].notes, exerciseFeedback].filter(Boolean).join(' | ')
        };
        setLogs({ ...logs, [exerciseId]: updatedExLogs });
        finalLogForSync = updatedExLogs[lastSetIdx];
      }
    }
    
    // Sync final feedback if any
    if (exerciseId && finalLogForSync) {
      logMutation.mutate({ 
        exerciseIndex: currentExerciseIndex, 
        setIndex: (currentExercise.setsInRound || currentExercise.target_sets || 1) - 1, 
        log: finalLogForSync 
      });
    }

    setShowExerciseFeedback(false);
    setExerciseFeedback('');
    setCurrentSetIndex(0);
    
    if (currentExerciseIndex === (sessionExercises.length || 0) - 1) {
      endMutation.mutate();
    } else {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
              {sessionExercises.length} passi pronti
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
    <div className={cn(
      "max-w-3xl mx-auto space-y-4 sm:space-y-10 pb-20 sm:pb-40 px-2 sm:px-6",
      isResting && "h-screen overflow-hidden"
    )}>
      {/* Session Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between sticky top-2 sm:top-10 z-[60] glass-header px-3 sm:px-6 py-2 sm:py-5 rounded-2xl sm:rounded-[2.5rem] border-white/10 shadow-2xl backdrop-blur-3xl mx-2 sm:mx-0"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <div className={cn(
            "p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-colors shadow-inner",
            isPaused ? "bg-amber-500/10 border-amber-500/20 text-amber-500" : "bg-primary/10 border-primary/20 text-primary"
          )}>
            <Timer className={cn("w-5 h-5 sm:w-7 h-7", !isPaused && "animate-pulse")} />
          </div>
          <div>
            <p className="text-[8px] sm:text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em] opacity-50 hidden xs:block">Tempo Sessione</p>
            <p className="text-xl sm:text-3xl font-mono font-black italic text-foreground leading-none mt-0.5 sm:mt-1 tracking-tighter">
              {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => setShowFullList(true)}
            className="w-10 h-10 sm:w-12 sm:h-12 glass-interactive rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95 transition-all border-white/5"
            title="Lista Esercizi"
          >
            <List className="w-4 h-4 sm:w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className={cn(
              "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg transition-all active:scale-95 border",
              isPaused 
                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" 
                : "bg-amber-500/20 border-amber-500/30 text-amber-500"
            )}
            title={isPaused ? 'Riprendi' : 'Pausa'}
          >
            {isPaused ? <Play className="w-4 h-4 sm:w-5 h-5 fill-current" /> : <Pause className="w-4 h-4 sm:w-5 h-5 fill-current" />}
          </button>

          <button 
            onClick={() => setShowEndModal(true)}
            className="h-10 sm:h-12 px-4 sm:px-6 glass-interactive rounded-xl flex items-center gap-2 border-red-500/20 hover:bg-red-500/10 text-red-500 font-black uppercase tracking-widest text-[9px] sm:text-[10px] active:scale-95 transition-all"
          >
            <XCircle className="w-4 h-4" />
            <span className="hidden xs:inline">Stop</span>
          </button>
        </div>
      </motion.div>

      {/* Progress Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 sm:space-y-4 px-2"
      >
        <div className="flex justify-between items-end">
           <span className="text-[9px] sm:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-40 hidden xs:block">Avanzamento Sessione</span>
           <div className="flex items-center gap-2 ml-auto">
             <span className="text-lg sm:text-2xl font-black italic text-foreground tracking-tighter">
               {currentExerciseIndex + 1}
             </span>
             <span className="text-xs font-black text-muted-foreground opacity-30 italic">/ {sessionExercises.length}</span>
           </div>
        </div>
        <div className="w-full bg-white/5 h-2 sm:h-3 rounded-full overflow-hidden flex p-0.5 sm:p-1 border border-white/5 shadow-inner">
          {sessionExercises.map((_ex: any, idx: number) => {
            const isCurrent = idx === currentExerciseIndex;
            const isCompleted = idx < currentExerciseIndex;
            return (
              <motion.div 
                key={`progress-${idx}`} 
                initial={false}
                animate={{
                  backgroundColor: isCurrent ? "var(--primary)" : isCompleted ? "rgba(var(--primary), 0.3)" : "rgba(255,255,255,0.05)",
                  scaleY: isCurrent ? 1.2 : 1
                }}
                className="flex-1 h-full rounded-full mx-0.5"
                style={{ 
                  boxShadow: isCurrent ? '0 0 10px var(--primary)' : 'none'
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
          className="glass-card group p-4 sm:p-10 rounded-2xl sm:rounded-[3rem] border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
          
          <div className="relative z-10 flex flex-col space-y-2 sm:space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between group/title">
                <h2 className="text-xl sm:text-4xl font-black text-foreground italic uppercase leading-tight tracking-tighter truncate max-w-[80%]">{currentExercise?.name}</h2>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <button 
                    onClick={handleShowInfo}
                    className="p-1.5 sm:p-3 text-muted-foreground hover:text-primary transition-all"
                    title="Info Esercizio"
                  >
                    <Info className="w-5 h-5 sm:w-6 h-6" />
                  </button>
                  {(currentExercise?.video_urls && currentExercise.video_urls.length > 0) && (
                    <button 
                      onClick={() => setIsMediaViewerOpen(true)}
                      className="p-1.5 sm:p-3 text-muted-foreground hover:text-blue-400 transition-all"
                      title="Video Esercizio"
                    >
                      <Tv className="w-5 h-5 sm:w-6 h-6" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-[8px] sm:text-[10px] flex items-center gap-2 opacity-60">
                <Dumbbell className="w-3 h-3 sm:w-4 h-4 text-primary" />
                Ex {currentExerciseIndex + 1}/{sessionExercises.length} 
                {currentExercise?.totalRounds > 1 && ` • G${currentExercise.round}/${currentExercise.totalRounds}`}
                • S{(currentExercise.startSetIdx || 0) + currentSetIndex + 1}/{currentExercise.setsInRound || currentExercise?.target_sets}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {currentExercise?.rest_seconds > 0 && (
                <div className="px-3 py-1.5 bg-secondary/30 ring-1 ring-white/5 rounded-lg text-[8px] sm:text-[10px] font-black text-foreground uppercase tracking-widest flex items-center gap-1.5">
                  <Timer className="w-3 h-3 text-primary" />
                  {currentExercise.rest_seconds}s
                </div>
              )}
              {currentExercise?.rest_esercizio > 0 && (
                <div className="px-3 py-1.5 bg-secondary/30 ring-1 ring-white/5 rounded-lg text-[8px] sm:text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Timer className="w-3 h-3 text-emerald-500" />
                  {currentExercise.rest_esercizio}s
                </div>
              )}
              <div className="px-3 py-1.5 bg-primary/10 ring-1 ring-primary/20 rounded-lg text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" />
                Trgt: {currentExercise?.target_sets}x{currentExercise?.target_reps}{currentExercise.is_time_based ? 's' : ''}
              </div>
            </div>

            {currentExercise.is_time_based && (
              <div className="mt-1 sm:mt-8 p-3 sm:p-8 glass-card bg-primary/[0.02] border-primary/10 rounded-xl sm:rounded-[2.5rem] flex flex-col items-center gap-2 sm:gap-8 animate-in zoom-in-95 duration-500">
                <div className="relative w-28 h-28 sm:w-48 sm:h-48">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="56" cy="56" r="48" className="stroke-white/5 fill-none sm:hidden" strokeWidth="6" />
                      <circle cx="96" cy="96" r="80" className="stroke-white/5 fill-none hidden sm:block" strokeWidth="8" />
                      <motion.circle
                        cx="56" cy="56" r="48"
                        className="stroke-primary fill-none sm:hidden"
                        strokeWidth="6"
                        strokeDasharray={301}
                        initial={{ strokeDashoffset: 301 }}
                        animate={{ 
                          strokeDashoffset: setTimerTime !== null 
                            ? 301 * (1 - (setTimerTime / (currentExercise.target_reps || 30))) 
                            : 301 
                        }}
                        strokeLinecap="round"
                      />
                      <motion.circle
                        cx="96" cy="96" r="80"
                        className="stroke-primary fill-none hidden sm:block"
                        strokeWidth="8"
                        strokeDasharray={502}
                        initial={{ strokeDashoffset: 502 }}
                        animate={{ 
                          strokeDashoffset: setTimerTime !== null 
                            ? 502 * (1 - (setTimerTime / (currentExercise.target_reps || 30))) 
                            : 502 
                        }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-5xl font-mono font-black italic text-foreground tracking-tighter">
                        {setTimerTime ?? currentExercise.target_reps ?? 30}
                      </span>
                      <span className="text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-widest mt-0.5">Secondi</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 w-full">
                    {!isSetTimerRunning && setTimerTime === null ? (
                      <button 
                        onClick={() => {
                          setSetTimerTime(currentExercise.target_reps || 30);
                          setIsSetTimerRunning(true);
                          setSetTimerMode('countdown');
                        }}
                        className="flex-1 py-3 sm:py-4 bg-primary text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current" /> Avvia
                      </button>
                    ) : (
                      <>
                        <button 
                          onClick={() => setIsSetTimerRunning(!isSetTimerRunning)}
                          className={cn(
                            "flex-1 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs active:scale-95 transition-all flex items-center justify-center gap-2",
                            isSetTimerRunning ? "bg-amber-500/20 text-amber-500 border border-amber-500/20" : "bg-emerald-500 text-white"
                          )}
                        >
                          {isSetTimerRunning ? <><Pause className="w-3.5 h-3.5 fill-current" /> Pausa</> : <><Play className="w-3.5 h-3.5 fill-current" /> Riprendi</>}
                        </button>
                        <button 
                          onClick={() => {
                            if (setTimerTime !== null) {
                              updateLog(currentExercise.id, currentSetIndex, { reps: setTimerTime.toString() });
                            }
                            setIsSetTimerRunning(false);
                            setSetTimerTime(null);
                          }}
                          className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] text-muted-foreground hover:text-foreground active:scale-95 transition-all"
                        >
                          Reset
                        </button>
                      </>
                    )}
                </div>
              </div>
            )}

            {currentExercise?.coach_notes && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 sm:mt-8 flex items-start gap-3 sm:gap-4 p-3 sm:p-6 bg-amber-500/5 border border-amber-500/10 rounded-xl sm:rounded-[2rem] relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-amber-500 rounded-full"></div>
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[8px] sm:text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Coach</p>
                  <p className="text-foreground/80 leading-relaxed font-medium italic text-[11px] sm:text-sm">
                    {currentExercise.coach_notes}
                  </p>
                </div>
              </motion.div>
            )}

            <div className={cn(
              "space-y-3 sm:space-y-8",
              currentExercise.is_time_based ? "mt-1 sm:mt-12" : "mt-4 sm:mt-12"
            )}>
              {(() => {
                const idx = currentSetIndex;
                const globalSetIdx = (currentExercise.startSetIdx || 0) + idx;
                const defaultReps = currentExercise.is_time_based 
                  ? (currentExercise?.target_duration_seconds || currentExercise?.target_reps || 30).toString()
                  : (currentExercise?.target_reps_detail?.[globalSetIdx] ?? currentExercise?.target_reps ?? 10).toString();
                const setLog = logs[currentExercise?.id!]?.[globalSetIdx] || { reps: defaultReps, weight: '', rpe: '8', notes: '' };
                const prevLog = lastPerformance?.logs?.[globalSetIdx];

                return (
                  <div className="space-y-3 sm:space-y-8">
                    {prevLog && (
                      <div className="px-4 py-1.5 flex items-center gap-2 text-[9px] sm:text-[11px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 w-fit rounded-full border border-primary/20 shadow-sm">
                        <History className="w-3 h-3 text-primary" />
                        PB: {prevLog.weight}kg x {prevLog.reps}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6 items-end p-2 sm:p-10 rounded-2xl sm:rounded-[3.5rem] bg-secondary/20 border border-white/5 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                      <div className="space-y-1 relative z-10 text-center">
                        <label className="text-[8px] sm:text-[10px] uppercase font-black text-muted-foreground block tracking-[0.3em] opacity-60">
                          {currentExercise.is_time_based ? 'Sec' : 'Rep'}
                        </label>
                        <input 
                          type="number"
                          inputMode="numeric"
                          placeholder={defaultReps}
                          className="w-full bg-background/40 border border-white/5 rounded-xl sm:rounded-3xl py-3 sm:py-8 text-center font-black text-xl sm:text-4xl focus:ring-4 focus:ring-primary/20 focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground/10"
                          value={setLog.reps}
                          onChange={(e) => updateLog(currentExercise!.id, idx, { reps: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1 relative z-10 text-center">
                        <label className="text-[8px] sm:text-[10px] uppercase font-black text-muted-foreground block tracking-[0.3em] opacity-60">
                          Kg {currentExercise.is_time_based && 'opt'}
                        </label>
                        <input 
                          type="number"
                          inputMode="decimal"
                          placeholder="0"
                          className="w-full bg-background/40 border border-white/5 rounded-xl sm:rounded-3xl py-3 sm:py-8 text-center font-black text-xl sm:text-4xl focus:ring-4 focus:ring-primary/20 focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground/10"
                          value={setLog.weight}
                          onChange={(e) => updateLog(currentExercise!.id, idx, { weight: e.target.value })}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1 space-y-1 relative z-10 text-center">
                        <label className="text-[8px] sm:text-[10px] uppercase font-black text-muted-foreground block tracking-[0.3em] opacity-60">RPE</label>
                        <select 
                          className="w-full bg-background/40 border border-white/5 rounded-xl sm:rounded-3xl py-3 sm:py-8 text-center font-black text-xl sm:text-4xl focus:ring-4 focus:ring-primary/20 focus:border-primary/50 appearance-none transition-all text-foreground"
                          value={setLog.rpe}
                          onChange={(e) => updateLog(currentExercise!.id, idx, { rpe: e.target.value })}
                        >
                          {[6,7,8,9,10].map(n => <option key={n} value={n} className="bg-zinc-900 text-foreground">{n}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="px-2">
                      <input 
                        type="text"
                        placeholder="Note serie..."
                        className="w-full bg-transparent border-b border-white/5 py-2 px-2 text-[11px] text-foreground focus:outline-none focus:border-primary transition-all italic placeholder:text-muted-foreground/30"
                        value={setLog.notes || ''}
                        onChange={(e) => updateLog(currentExercise!.id, idx, { notes: e.target.value })}
                      />
                    </div>

                    <button
                      onClick={handleConfirmSet}
                      disabled={!setLog.reps || (!currentExercise.is_time_based && !setLog.weight) || logMutation.isPending}
                      className="btn btn-primary w-full h-14 sm:h-24 rounded-2xl sm:rounded-[2.5rem] font-black italic tracking-[0.1em] sm:tracking-[0.2em] uppercase shadow-2xl shadow-primary/30 transform active:scale-95 transition-all text-base sm:text-2xl disabled:opacity-30 disabled:grayscale disabled:scale-100 flex items-center justify-center gap-3 border-2 border-primary/20"
                    >
                      {logMutation.isPending ? (
                        <Loader2 className="w-5 h-5 sm:w-10 h-10 animate-spin" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 sm:w-10 h-10" />
                      )}
                      {logMutation.isPending ? 'Salvataggio...' : `Conferma Serie ${idx + 1}`}
                    </button>
                  </div>
                );
              })()}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Navigation Overlay */}
      <div className="fixed bottom-0 left-0 right-0 p-2 sm:p-8 bg-gradient-to-t from-background via-background/90 to-transparent z-[70] pointer-events-none pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3 sm:gap-6 pointer-events-auto">
          <button 
            onClick={() => setCurrentExerciseIndex(Math.max(0, currentExerciseIndex - 1))}
            className="w-14 h-14 sm:w-20 sm:h-20 glass-interactive rounded-2xl sm:rounded-3xl flex items-center justify-center border-white/5 hover:border-primary/20 text-muted-foreground hover:text-primary transition-all active:scale-90 disabled:opacity-20"
            disabled={currentExerciseIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 h-8" />
          </button>

          <button 
            onClick={() => setShowExerciseFeedback(true)}
            className="flex-1 h-14 sm:h-20 glass-interactive rounded-2xl sm:rounded-3xl border-primary/20 hover:bg-primary/5 text-primary font-black italic tracking-[0.1em] sm:tracking-[0.2em] uppercase flex items-center justify-center gap-2 sm:gap-4 group transition-all active:scale-95 text-xs sm:text-base"
          >
            {currentExerciseIndex === (sessionExercises.length || 0) - 1 ? 'Fine' : 'Prossimo'}
            <ChevronRight className="w-4 h-4 sm:w-6 h-6 group-hover:translate-x-2 transition-transform" />
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
          urls={currentExercise.video_urls || []}
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
                    animate={{ strokeDashoffset: 691 * (1 - (restTimeLeft ?? 0) / (totalRestStarted || 60)) }}
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

                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute top-4 left-6 text-primary">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        value={restNote}
                        onChange={(e) => setRestNote(e.target.value)}
                        placeholder="Come sono andate queste serie? Scrivi qui i tuoi feedback..."
                        className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-6 pl-14 text-sm text-foreground focus:ring-2 focus:ring-primary focus:bg-white/10 transition-all min-h-[120px] italic placeholder:text-muted-foreground/30"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[15, 30, 60].map(sec => (
                        <button
                          key={sec}
                          onClick={() => setRestTimeLeft(prev => (prev || 0) + sec)}
                          className="py-4 glass-interactive rounded-2xl text-xs font-black italic hover:bg-white/5 active:scale-95 transition-all"
                        >
                          +{sec}s
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        const actualRest = restStartTime ? Math.floor((Date.now() - restStartTime) / 1000) : 0;
                        if (lastLoggedSet) {
                          const exerciseId = lastLoggedSet.exerciseId;
                          const setIndex = lastLoggedSet.setIndex;
                          const globalSetIdx = (currentExercise.startSetIdx || 0) + setIndex;
                          const updatedExLogs = [...(logs[exerciseId] || [])];
                          if (updatedExLogs[globalSetIdx]) {
                            updatedExLogs[globalSetIdx] = {
                              ...updatedExLogs[globalSetIdx],
                              notes: [updatedExLogs[globalSetIdx].notes, restNote].filter(Boolean).join(' | '),
                              actual_rest: actualRest
                            };
                            setLogs({ ...logs, [exerciseId]: updatedExLogs });
                          }
                        }
                        setRestNote('');
                        setIsResting(false);
                        setRestTimeLeft(null);
                        setRestStartTime(null);
                        moveToNextStep(true); // Pass true to skip feedback if 1 set
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
                onClick={completeExerciseAndMove}
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
                {sessionExercises.map((ex: any, idx: number) => {
                  const isCurrent = idx === currentExerciseIndex;
                  const isCompleted = idx < currentExerciseIndex;
                  const doneSets = (logs[ex.id] || []).filter((l: any, lIdx: number) => 
                    lIdx >= (ex.startSetIdx || 0) && 
                    lIdx < (ex.startSetIdx || 0) + (ex.setsInRound || 1) &&
                    l.reps && l.weight
                  ).length;
                  
                  return (
                    <button
                      key={`${ex.id}-${idx}`}
                      onClick={() => {
                        setCurrentExerciseIndex(idx);
                        setShowFullList(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={cn(
                        "w-full text-left p-6 rounded-[2rem] border transition-all relative overflow-hidden group",
                        isCurrent 
                          ? "bg-primary border-primary shadow-xl shadow-primary/20 scale-[1.02] z-10" 
                          : isCompleted 
                            ? "bg-primary/10 border-primary/20 opacity-60" 
                            : "bg-secondary/20 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={cn(
                          "text-[9px] font-black uppercase tracking-[0.2em]",
                          isCurrent ? "text-white/80" : "text-primary"
                        )}>
                          Esercizio {idx + 1}
                        </span>
                        {isCompleted && <CheckCircle2 className="w-4 h-4 text-primary" />}
                      </div>
                      <div className={cn(
                        "font-black text-xl uppercase italic tracking-tight",
                        isCurrent ? "text-white" : "text-foreground"
                      )}>{ex.name} {ex.totalRounds > 1 && `(Giro ${ex.round})`}</div>
                      <div className={cn(
                        "text-[10px] font-bold mt-2 flex items-center gap-2",
                        isCurrent ? "text-white/60" : "text-muted-foreground"
                      )}>
                        <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", isCurrent ? "bg-white" : "bg-primary")} />
                        {doneSets} / {ex.setsInRound || ex.target_sets} serie completate
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
