import { useState, useEffect, useRef } from 'react';
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
  Plus,
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
  const [currentRep, setCurrentRep] = useState(0);
  const [isRepResting, setIsRepResting] = useState(false);
  const [repRestTimeLeft, setRepRestTimeLeft] = useState<number | null>(null);

  // Exercise Feedback State
  const [showExerciseFeedback, setShowExerciseFeedback] = useState(false);
  const [exerciseFeedback, setExerciseFeedback] = useState('');
  const [showFullList, setShowFullList] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const restTimerTimeoutRef = useRef<any>(null);

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
      }
      setIsResting(false);
      setRestTimeLeft(null);
      setRestStartTime(null);
    }
    return () => clearInterval(interval);
  }, [isResting, restTimeLeft, isPaused]);

  // Rep Rest Timer logic
  useEffect(() => {
    let interval: any;
    if (isRepResting && repRestTimeLeft !== null && repRestTimeLeft > 0 && !isPaused) {
      interval = setInterval(() => {
        setRepRestTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (repRestTimeLeft === 0) {
      setIsRepResting(false);
      setRepRestTimeLeft(null);
    }
    return () => clearInterval(interval);
  }, [isRepResting, repRestTimeLeft, isPaused]);

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
      // 1. Save all logs
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
      
      // 2. Complete session
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

    // Auto-trigger rest timer if reps and weight are entered, with a small delay
    if (restTimerTimeoutRef.current) {
      clearTimeout(restTimerTimeoutRef.current);
    }

    if (newLog.reps && newLog.weight && updates.weight) {
      restTimerTimeoutRef.current = setTimeout(() => {
        if (currentExercise?.rest_seconds) {
          setRestTimeLeft(currentExercise.rest_seconds);
          setIsResting(true);
          setRestStartTime(Date.now());
          setLastLoggedSet({ exerciseId, setIndex });
        }
      }, 2500);
    }
  };

  if (isLoading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
      <p className="text-slate-400 animate-pulse font-medium">Carico la tua sessione...</p>
    </div>
  );

  if (!sessionId) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 space-y-12 animate-in fade-in zoom-in-95 duration-700">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-primary-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-24 h-24 bg-primary-500/10 rounded-[2.5rem] flex items-center justify-center text-primary-400 mx-auto shadow-[0_0_50px_rgba(var(--primary-500),0.3)] border border-primary-500/20 transform hover:scale-110 transition-transform duration-500">
              <Play className="w-10 h-10 fill-current ml-1" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-white tracking-tight italic uppercase">{plan?.name}</h1>
            <p className="text-slate-400 text-lg font-medium">{plan?.exercises?.length} esercizi pronti per te.</p>
          </div>
        </div>

        {plan?.description && (
          <div className="glass p-8 rounded-[2.5rem] border border-slate-800/50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-500/10 rounded-lg">
                <Info className="w-5 h-5 text-primary-400" />
              </div>
              <p className="text-[10px] font-black text-primary-500 uppercase tracking-widest">Note della Scheda</p>
            </div>
            <p className="text-slate-300 font-medium leading-relaxed whitespace-pre-wrap">
              {plan.description}
            </p>
          </div>
        )}

        <button 
          onClick={() => startMutation.mutate()}
          className="btn btn-primary w-full py-8 text-2xl h-auto rounded-[2rem] font-black italic tracking-widest uppercase shadow-2xl shadow-primary-500/20 transform hover:scale-[1.02] active:scale-95 transition-all"
          disabled={startMutation.isPending}
        >
          {startMutation.isPending ? <Loader2 className="animate-spin" /> : 'INIZIA ALLENAMENTO'}
        </button>

        <button 
          onClick={() => navigate('/athlete')}
          className="w-full py-4 text-slate-500 hover:text-slate-300 font-bold text-sm transition-colors"
        >
          TORNA INDIETRO
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-32 px-4">
      {/* Session Header */}
      <div className="flex items-center justify-between sticky top-16 sm:top-24 z-40 bg-slate-950/40 backdrop-blur-2xl p-4 sm:p-6 rounded-[2rem] border border-white/10 shadow-2xl">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-primary-500/10 rounded-2xl border border-primary-500/20">
            <Timer className="w-6 h-6 text-primary-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-black text-primary-500 tracking-[0.2em]">Tempo Trascorso</p>
            <p className="text-3xl font-mono font-black italic text-white">
              {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowFullList(true)}
            className="btn bg-slate-800/10 text-slate-400 border-white/5 rounded-2xl flex items-center justify-center w-12 h-12 p-0 font-bold border transition-all"
            title="Scheda"
          >
            <List className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className={`btn ${isPaused ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-slate-800/10 text-slate-400 border-white/5'} rounded-2xl flex items-center justify-center w-12 h-12 p-0 font-bold border transition-all`}
            title={isPaused ? 'Riprendi' : 'Pausa'}
          >
            {isPaused ? <Play className="w-5 h-5 fill-current" /> : <Pause className="w-5 h-5 fill-current" />}
          </button>
          <button 
            onClick={() => setShowEndModal(true)}
            className="btn bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20 rounded-2xl flex items-center gap-2 px-4 h-12 font-bold border transition-all ml-2"
          >
            <XCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Termina</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-end px-2">
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avanzamento</span>
           <span className="text-xs font-black text-primary-400">{currentExerciseIndex + 1} / {plan?.exercises?.length}</span>
        </div>
        <div className="w-full bg-slate-900/50 h-2.5 rounded-full overflow-hidden flex p-0.5 border border-white/5">
          {plan?.exercises?.map((_ex: any, idx: number) => (
            <div 
              key={idx} 
              className={`flex-1 h-full transition-all duration-700 rounded-full mx-0.5 ${
                idx === currentExerciseIndex ? 'bg-primary-500 shadow-[0_0_10px_rgba(var(--primary-500),0.5)]' : idx < currentExerciseIndex ? 'bg-primary-900/50' : 'bg-slate-800/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Exercise Card */}
      <div className="glass group hover:bg-slate-900/40 transition-all rounded-[2.5rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        
        <div className="flex items-start justify-between relative z-10">
          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-black text-white italic uppercase leading-tight tracking-tight">{currentExercise?.name}</h2>
                <button 
                  onClick={handleShowInfo}
                  className="p-3 text-primary-400 hover:text-white hover:bg-primary-500/20 rounded-2xl transition-all border border-transparent hover:border-primary-500/30"
                  title="Info Esercizio"
                >
                  <Info className="w-5 h-5" />
                </button>
                {currentExercise?.video_url && (
                  <button 
                    onClick={() => setIsMediaViewerOpen(true)}
                    className="p-3 text-primary-400 hover:text-white hover:bg-primary-500/20 rounded-2xl transition-all border border-transparent hover:border-primary-500/30"
                    title="Video Esercizio"
                  >
                    <Tv className="w-5 h-5" />
                  </button>
                )}
              </div>
              <p className="text-slate-400 font-bold flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-primary-500" />
                {currentExercise?.target_sets} serie {currentExercise?.target_reps_detail ? `(${currentExercise.target_reps_detail.join('-')})` : `da ${currentExercise?.target_reps}`} reps
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {currentExercise?.rest_seconds && (
                <div className="px-3 py-1.5 bg-slate-800 ring-1 ring-white/5 rounded-xl text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <Timer className="w-3 h-3 text-primary-400" />
                  Recupero: {currentExercise.rest_seconds}s
                </div>
              )}
            </div>
          </div>
        </div>

        {currentExercise?.coach_notes && (
          <div className="mt-8 flex items-start gap-4 p-5 bg-orange-500/5 border border-orange-500/10 rounded-2xl relative">
            <div className="absolute inset-y-0 left-0 w-1 bg-orange-500 rounded-full"></div>
            <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
               <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Note del Coach</p>
               <p className="text-sm text-orange-100/70 leading-relaxed font-medium">
                {currentExercise.coach_notes}
              </p>
            </div>
          </div>
        )}

        <div className="mt-10 space-y-6">
          {Array.from({ length: currentExercise?.target_sets || 0 }).map((_, idx) => {
            const setLog = logs[currentExercise?.id!]?.[idx] || { reps: '', weight: '', rpe: '' };
            const isCompleted = setLog.reps && setLog.weight;
            const prevLog = lastPerformance?.logs?.[idx];

            return (
              <div key={idx} className="space-y-2">
                {prevLog && (
                  <div className="px-4 py-1 flex items-center gap-2 text-[10px] font-black text-primary-400 uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-500">
                    <History className="w-3 h-3" />
                    Last: {prevLog.weight}kg x {prevLog.reps} @ RPE{prevLog.rpe}
                  </div>
                )}
                <div className={`grid grid-cols-4 gap-3 items-center p-4 rounded-3xl transition-all duration-500 border ${isCompleted ? 'bg-primary-500/10 border-primary-500/30' : 'bg-slate-900/40 border-slate-800/50'}`}>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase font-black text-slate-500 mb-1 tracking-widest">Set</span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl transition-colors ${isCompleted ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {idx + 1}
                    </div>
                  </div>
                  <div className="space-y-1.5 col-span-1">
                    <label className="text-[10px] uppercase font-black text-slate-500 text-center block tracking-widest">Rip.</label>
                    <input 
                      type="number"
                      placeholder={(currentExercise?.target_reps_detail?.[idx] ?? currentExercise?.target_reps ?? 10).toString()}
                      className={`w-full bg-slate-800/50 border-0 rounded-2xl py-4 text-center font-black text-lg focus:ring-2 focus:ring-primary-500 transition-all ${isCompleted ? 'text-primary-400' : 'text-white'}`}
                      value={setLog.reps}
                      onChange={(e) => updateLog(currentExercise!.id, idx, { reps: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5 col-span-1">
                    <label className="text-[10px] uppercase font-black text-slate-500 text-center block tracking-widest">Peso</label>
                    <input 
                      type="number"
                      placeholder="kg"
                      className={`w-full bg-slate-800/50 border-0 rounded-2xl py-4 text-center font-black text-lg focus:ring-2 focus:ring-primary-500 transition-all ${isCompleted ? 'text-primary-400' : 'text-white'}`}
                      value={setLog.weight}
                      onChange={(e) => updateLog(currentExercise!.id, idx, { weight: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5 col-span-1 text-center">
                    <label className="text-[10px] uppercase font-black text-slate-500 block tracking-widest">Sforzo</label>
                    <select 
                      className={`w-full bg-slate-800/50 border-0 rounded-2xl py-4 text-center font-black text-lg focus:ring-2 focus:ring-primary-500 appearance-none transition-all ${isCompleted ? 'text-primary-400' : 'text-white'}`}
                      value={setLog.rpe}
                      onChange={(e) => updateLog(currentExercise!.id, idx, { rpe: e.target.value })}
                    >
                      {[6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                {/* Notes Input */}
                <div className="px-2">
                  <input 
                    type="text"
                    placeholder="Aggiungi una nota per questa serie..."
                    className="w-full bg-slate-900/40 border-0 rounded-2xl py-3 px-5 text-xs text-slate-400 focus:ring-1 focus:ring-primary-500/30 transition-all italic"
                    value={setLog.notes || ''}
                    onChange={(e) => updateLog(currentExercise!.id, idx, { notes: e.target.value })}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <button 
            onClick={() => setCurrentExerciseIndex(Math.max(0, currentExerciseIndex - 1))}
            className="btn bg-slate-800 hover:bg-slate-700 text-white h-16 w-16 rounded-2xl p-0 shrink-0 border border-slate-700"
            disabled={currentExerciseIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {currentExerciseIndex === (plan?.exercises?.length || 0) - 1 ? (
            <button 
              onClick={() => setShowExerciseFeedback(true)}
              className="btn btn-primary flex-1 h-16 rounded-2xl bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-500/20 font-black italic tracking-widest uppercase"
              disabled={endMutation.isPending}
            >
              {endMutation.isPending ? <Loader2 className="animate-spin" /> : <><CheckCircle2 className="w-6 h-6 mr-3" /> Termina Allenamento</>}
            </button>
          ) : (
            <button 
              onClick={() => setShowExerciseFeedback(true)}
              className="btn btn-primary flex-1 h-16 rounded-2xl shadow-xl shadow-primary-500/20 font-black italic tracking-widest uppercase"
            >
              Prossimo Esercizio
              <ChevronRight className="w-6 h-6 ml-3" />
            </button>
          )}
        </div>
      </div>


      {selectedExerciseInfo && (
        <ExerciseDetailModal 
          exercise={selectedExerciseInfo}
          isOpen={!!selectedExerciseInfo}
          onClose={() => setSelectedExerciseInfo(null)}
        />
      )}

      {isMediaViewerOpen && currentExercise && (
        <MediaViewer
          urls={parseVideoUrls(currentExercise.video_url)}
          title={currentExercise.name}
          isOpen={true}
          onClose={() => setIsMediaViewerOpen(false)}
        />
      )}

      {/* Cluster rep counter overlay */}
      {currentExercise?.rest_between_reps_seconds ? (
        <div className="mt-6 p-6 bg-primary-500/5 border border-primary-500/10 rounded-[2rem] space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black text-primary-500 uppercase tracking-widest">Modalità Cluster (Rip. Singole)</p>
            <span className="text-xs font-black text-white">{currentRep} / {currentExercise.target_reps} Completate</span>
          </div>
          
          <div className="flex gap-2 h-2">
            {Array.from({ length: currentExercise.target_reps }).map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-full transition-all duration-300 ${i < currentRep ? 'bg-primary-500' : 'bg-slate-800'}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const nextRep = currentRep + 1;
                setCurrentRep(nextRep);
                if (nextRep === currentExercise.target_reps) {
                  // Auto-fill reps for the first unlogged set
                  const exerciseId = currentExercise.id;
                  const updatedExLogs = [...(logs[exerciseId] || [])];
                  const setIndex = updatedExLogs.findIndex(l => !l.reps);
                  if (setIndex !== -1) {
                    updateLog(exerciseId, setIndex, { reps: currentExercise.target_reps.toString() });
                  } else if (updatedExLogs.length < currentExercise.target_sets) {
                    updateLog(exerciseId, updatedExLogs.length, { reps: currentExercise.target_reps.toString() });
                  }
                } else if (currentExercise.rest_between_reps_seconds) {
                  setRepRestTimeLeft(currentExercise.rest_between_reps_seconds);
                  setIsRepResting(true);
                }
              }}
              disabled={isRepResting || currentRep >= currentExercise.target_reps}
              className={`btn flex-1 h-14 rounded-2xl font-black italic uppercase tracking-tighter transition-all ${currentRep >= currentExercise.target_reps ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'btn-primary'}`}
            >
              {isRepResting ? `Riposo rep... ${repRestTimeLeft}s` : currentRep >= currentExercise.target_reps ? 'Serie Completata' : 'Prossima Rep'}
            </button>
            <button
              onClick={() => setCurrentRep(0)}
              className="p-4 bg-slate-800 text-slate-400 hover:text-white rounded-2xl transition-colors"
              title="Reset Reps"
            >
              <History className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : null}

      {/* Post-Exercise Feedback Modal */}
      {showExerciseFeedback && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" />
          <div className="relative glass w-full max-w-md p-10 rounded-[3rem] border border-white/10 shadow-2xl space-y-8">
            <div className="text-center space-y-2">
              <Award className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="text-2xl font-black text-white italic uppercase">Ottimo Lavoro!</h3>
              <p className="text-slate-400 text-sm">Com'è andato il {currentExercise?.name}?</p>
            </div>

            <textarea
              className="w-full bg-slate-900/50 border border-white/5 rounded-3xl p-5 text-white text-sm focus:ring-2 focus:ring-primary-500 transition-all min-h-[120px]"
              placeholder="Esempio: Sentito bene il muscolo, peso leggero, fastidio alla spalla..."
              value={exerciseFeedback}
              onChange={(e) => setExerciseFeedback(e.target.value)}
            />

            <button
              onClick={() => {
                // Save feedback to the last logged sets of this exercise
                const exerciseId = currentExercise?.id;
                if (exerciseId && exerciseFeedback) {
                  const updatedExLogs = [...(logs[exerciseId] || [])];
                  const lastSetIdx = updatedExLogs.length - 1;
                  if (lastSetIdx >= 0) {
                    updatedExLogs[lastSetIdx] = { 
                      ...updatedExLogs[lastSetIdx], 
                      notes: [updatedExLogs[lastSetIdx].notes, `Ex Feedback: ${exerciseFeedback}`].filter(Boolean).join(' | ')
                    };
                    setLogs({ ...logs, [exerciseId]: updatedExLogs });
                  }
                }
                
                setShowExerciseFeedback(false);
                setExerciseFeedback('');
                setCurrentRep(0);
                
                // Move to next exercise or finish
                if (currentExerciseIndex === (plan?.exercises?.length || 0) - 1) {
                  endMutation.mutate();
                } else {
                  setCurrentExerciseIndex(currentExerciseIndex + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="btn btn-primary w-full h-16 rounded-2xl font-black italic uppercase tracking-widest"
            >
              Salva e Continua
            </button>
          </div>
        </div>
      )}

      {/* Ultra Rest Timer Overlay */}
      {isResting && restTimeLeft !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl" />
          <div className="relative glass w-full max-w-sm p-10 rounded-[3rem] border border-primary-500/30 shadow-[0_0_50px_rgba(var(--primary-500),0.2)] text-center space-y-8 scale-in-center">
            <div className="space-y-2">
              <p className="text-xs font-black text-primary-500 uppercase tracking-[0.3em]">Recupero in corso</p>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">{currentExercise?.name}</h3>
            </div>

            <div className="relative">
              <svg className="w-48 h-48 mx-auto -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  className="stroke-slate-800 fill-none"
                  strokeWidth="12"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  className="stroke-primary-500 fill-none transition-all duration-1000"
                  strokeWidth="12"
                  strokeDasharray={552.92}
                  strokeDashoffset={552.92 * (1 - (restTimeLeft ?? 0) / (currentExercise?.rest_seconds || 60))}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-mono font-black italic text-white leading-none">
                  {restTimeLeft}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setRestTimeLeft(prev => (prev || 0) + 30)}
                className="btn bg-slate-800 hover:bg-slate-700 text-white h-16 rounded-2xl border border-white/5 flex items-center justify-center gap-2 font-black italic uppercase tracking-tighter"
              >
                <Plus className="w-5 h-5 text-primary-400" /> +30s
              </button>
              <button
                onClick={() => {
                  const actualRest = restStartTime ? Math.floor((Date.now() - restStartTime) / 1000) : 0;
                  if (lastLoggedSet) {
                    updateLog(lastLoggedSet.exerciseId, lastLoggedSet.setIndex, { 
                      actual_rest: actualRest 
                    });
                  }
                  setIsResting(false);
                  setRestTimeLeft(null);
                  setRestStartTime(null);
                }}
                className="btn btn-primary h-16 rounded-2xl flex items-center justify-center gap-2 font-black italic uppercase tracking-tighter"
              >
                <SkipForward className="w-5 h-5" /> Salta
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Full Exercise List Drawer */}
      {showFullList && (
        <div className="fixed inset-0 z-[120] flex justify-end animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setShowFullList(false)} />
          <div className="relative w-full max-w-sm bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-black text-white italic uppercase">La tua Scheda</h3>
              <button onClick={() => setShowFullList(false)} className="p-2 text-slate-400 hover:text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {plan?.exercises?.map((ex: any, idx: number) => {
                const isCurrent = idx === currentExerciseIndex;
                const isCompleted = idx < currentExerciseIndex;
                const exLogs = logs[ex.id] || [];
                const doneSets = exLogs.filter((l: any) => l.reps && l.weight).length;
                
                return (
                  <button
                    key={ex.id}
                    onClick={() => {
                      setCurrentExerciseIndex(idx);
                      setShowFullList(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      isCurrent 
                        ? 'bg-primary-500/20 border-primary-500/50' 
                        : isCompleted 
                          ? 'bg-emerald-500/5 border-emerald-500/20 opacity-70' 
                          : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${isCurrent ? 'text-primary-400' : isCompleted ? 'text-emerald-400' : 'text-slate-500'}`}>
                        Esercizio {idx + 1}
                      </span>
                      {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                    </div>
                    <div className="font-bold text-white uppercase italic">{ex.name}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {doneSets} / {ex.target_sets} serie completate
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-6 border-t border-white/5 bg-slate-900/80 backdrop-blur-md">
              <button 
                onClick={() => setShowFullList(false)}
                className="btn btn-primary w-full h-14 rounded-xl font-black italic uppercase tracking-widest"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* End Session Choice Modal */}
      {showEndModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" onClick={() => setShowEndModal(false)} />
          <div className="relative glass w-full max-w-sm p-10 rounded-[3rem] border border-white/10 shadow-2xl text-center space-y-8 scale-in-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">Termina Sessione</h3>
              <p className="text-slate-400 text-sm">Cosa vuoi fare con questo allenamento?</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowEndModal(false);
                  endMutation.mutate();
                }}
                disabled={endMutation.isPending}
                className="btn btn-primary w-full h-16 rounded-2xl flex items-center justify-center gap-3 font-black italic uppercase tracking-widest"
              >
                {endMutation.isPending ? <Loader2 className="animate-spin" /> : <><Save className="w-5 h-5" /> Salva e Termina</>}
              </button>
              
              <button
                onClick={() => {
                  if (confirm('Sei sicuro di voler eliminare questa sessione? Tutti i dati andranno persi.')) {
                    setShowEndModal(false);
                    cancelMutation.mutate();
                  }
                }}
                disabled={cancelMutation.isPending}
                className="w-full h-16 rounded-2xl flex items-center justify-center gap-3 font-black italic uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
              >
                {cancelMutation.isPending ? <Loader2 className="animate-spin" /> : <><Trash2 className="w-5 h-5" /> Elimina Sessione</>}
              </button>

              <button
                onClick={() => setShowEndModal(false)}
                className="w-full py-4 text-slate-500 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors"
                disabled={endMutation.isPending || cancelMutation.isPending}
              >
                Continua Allenamento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

