import { useState, useMemo, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { toast } from 'sonner';
import { calculateDietMetrics, dietService, type ActivityLevel, type Gender } from '../../services/dietService';
import { geminiService } from '../../services/geminiService';
import {
  Flame,
  Activity,
  Dumbbell,
  Droplets,
  Scale,
  Ruler,
  TrendingDown,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Save,
  CheckCircle2,
  Loader2,
  Brain,
  Sparkles,
  MessageSquare,
  Send,
  X,
  FileText,
  ArrowRight,
  AlertTriangle,
  Ban,
  Heart,
  Settings2
} from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
import { VoiceInput } from '../ui/VoiceInput';

interface DietCalculatorProps {
  athleteId?: string;
  initialData?: any;
  athleteProfile?: any;
  measurements?: any[];
}

export default function DietCalculator({ athleteId, initialData, athleteProfile, measurements }: DietCalculatorProps) {
  const { user } = useAuth();
  const [weight, setWeight] = useState<number>(initialData?.weight || 70);
  const [height, setHeight] = useState<number>(initialData?.height || 170);
  const [age, setAge] = useState<number>(initialData?.age || 30);
  const [gender, setGender] = useState<Gender>(initialData?.gender || 'M');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>(initialData?.activityLevel || 'lightly_active');
  const [deficit, setDeficit] = useState<number>(initialData?.deficit || 500);
  const [aiGuidelines, setAiGuidelines] = useState<string>(initialData?.ai_guidelines || '');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isParamsOpen, setIsParamsOpen] = useState(true);

  // Manual overrides
  const [manualTargetKcal, setManualTargetKcal] = useState<number | null>(null);
  const [manualTrainingKcal, setManualTrainingKcal] = useState<number | null>(null);
  const [manualRestKcal, setManualRestKcal] = useState<number | null>(null);
  const [manualProteinPct, setManualProteinPct] = useState<number | null>(null); // % of target kcal
  const [manualFatPct, setManualFatPct] = useState<number | null>(null); // % of target kcal
  const [savedPlan, setSavedPlan] = useState<any>(null);
  const [isFetchingWeight, setIsFetchingWeight] = useState(false);

  // AI Directives state
  const [isStructuring, setIsStructuring] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const [showRawEditor, setShowRawEditor] = useState(false);

  useEffect(() => {
    async function loadPlan() {
      if (athleteId) {
        try {
          const plan = await dietService.getAthleteDietPlan(athleteId);
          if (plan) {
            setSavedPlan(plan);
            setManualTargetKcal(plan.target_kcal);
            // Derive macro percentages from saved grams
            if (plan.ai_guidelines) setAiGuidelines(plan.ai_guidelines);
            
            // Set training/rest kcal if they were somehow stored (though currently they aren't in schema, 
            // maybe we should use target_kcal + offset or just let them be manual)
            // For now let's just use what's in the plan if we decide to add those fields, 
            // but the request implies they should be editable.
            // If they are not in schema, they will be derived from target_kcal unless manually changed.
          }
        } catch (error) {
          console.error("Error loading diet plan:", error);
        }
      }
    }
    loadPlan();
  }, [athleteId]);

  useEffect(() => {
    if (initialData) {
      setWeight(initialData.weight || 70);
      setHeight(initialData.height || 170);
      setAge(initialData.age || 30);
      setGender(initialData.gender || 'M');
      setActivityLevel(initialData.activityLevel || 'lightly_active');
      setDeficit(initialData.deficit || 500);
      setAiGuidelines(initialData.ai_guidelines || '');
    }
  }, [initialData]);

  const handleSave = async () => {
    if (!athleteId || !user) return;
    setIsSaving(true);
    try {
      await dietService.saveDietPlan({
        athlete_id: athleteId,
        coach_id: user.id,
        target_kcal: Math.round(results?.targetKcal || 0),
        target_protein: Math.round(results?.macros.protein || 0),
        target_carbs: Math.round(results?.macros.carbs || 0),
        target_fats: Math.round(results?.macros.fat || 0),
        ai_guidelines: aiGuidelines,
        template_id: '4_pasti',
        selections: {}
      });
      // Update savedPlan after saving
      const updatedPlan = await dietService.getAthleteDietPlan(athleteId);
      if (updatedPlan) setSavedPlan(updatedPlan);
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving diet plan:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const results = useMemo(() => {
    if (weight > 0 && height > 0 && age > 0) {
      const baseMetrics = calculateDietMetrics({
        weight,
        height,
        age,
        gender,
        activityLevel,
        deficit
      });

      const targetKcal = manualTargetKcal ?? baseMetrics.targetKcal;
      
      // Calculate macros based on manual percentages if available
      let macros = baseMetrics.macros;
      if (manualProteinPct !== null && manualFatPct !== null) {
        const proteinKcal = (targetKcal * manualProteinPct) / 100;
        const fatKcal = (targetKcal * manualFatPct) / 100;
        const carbsKcal = targetKcal - proteinKcal - fatKcal;
        
        macros = {
          protein: proteinKcal / 4,
          fat: fatKcal / 9,
          carbs: carbsKcal / 4
        };
      }

      return {
        ...baseMetrics,
        targetKcal,
        macros
      };
    }
    return null;
  }, [weight, height, age, gender, activityLevel, deficit, manualTargetKcal, manualProteinPct, manualFatPct]);

  const handleStructureWithAI = async () => {
    if (!results) return;
    setIsStructuring(true);
    try {
      const structured = await geminiService.structureNutritionalDirectives(aiGuidelines, {
        weight,
        targetKcal: results.targetKcal,
        macros: results.macros,
        preferences: athleteProfile?.dietary_preferences,
        intolerances: athleteProfile?.intolerances,
        dislikedFoods: athleteProfile?.disliked_foods
      });
      if (structured) {
        setAiGuidelines(structured);
      }
    } catch (error) {
      console.error("Error structuring directives:", error);
    } finally {
      setIsStructuring(false);
    }
  };

  const handleChatSend = async () => {
    if (!chatMessage.trim() || !results) return;
    setIsChatting(true);
    try {
      const updated = await geminiService.chatDietDirectives(aiGuidelines, chatMessage, {
        weight,
        targetKcal: results.targetKcal,
        macros: results.macros
      });
      if (updated) {
        setAiGuidelines(updated);
        setChatMessage('');
      }
    } catch (error) {
      console.error("Error in chat:", error);
    } finally {
      setIsChatting(false);
    }
  };

  const handleVoiceResult = async (blob: Blob) => {
    setIsChatting(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        const transcription = await geminiService.transcribeAudio(base64Audio);
        if (transcription) {
          const updated = await geminiService.chatDietDirectives(aiGuidelines, transcription, {
            weight,
            targetKcal: results!.targetKcal,
            macros: results!.macros
          });
          if (updated) {
            setAiGuidelines(updated);
            toast.success("Direttive aggiornate via audio");
          }
        }
        setIsChatting(false);
      };
    } catch (error) {
      console.error("Error processing voice:", error);
      toast.error("Errore nel processamento dell'audio");
      setIsChatting(false);
    }
  };

  const handleGetLastWeight = async () => {
    if (!athleteId) return;
    setIsFetchingWeight(true);
    try {
      // 1. Check current measurements prop (coach-side)
      const latestFromCoach = measurements && measurements.length > 0 ? measurements[0] : null;

      // 2. Fetch latest from daily_logs (athlete-side)
      const { data: latestFromAthlete } = await supabase
        .from('daily_logs')
        .select('*')
        .eq('athlete_id', athleteId)
        .not('weight_kg', 'is', null)
        .order('date', { ascending: false })
        .limit(1)
        .maybeSingle();

      let finalWeight = null;
      let dateLabel = '';

      if (latestFromCoach && latestFromAthlete) {
        // Compare dates. We assume coach measurements have a 'recorded_at' and athlete logs have a 'date'.
        const coachDate = new Date(latestFromCoach.recorded_at);
        const athleteDate = new Date(latestFromAthlete.date);
        
        if (coachDate >= athleteDate) {
          finalWeight = latestFromCoach.weight;
          dateLabel = coachDate.toLocaleDateString('it-IT');
        } else {
          finalWeight = latestFromAthlete.weight_kg;
          dateLabel = new Date(latestFromAthlete.date).toLocaleDateString('it-IT');
        }
      } else if (latestFromCoach) {
        finalWeight = latestFromCoach.weight;
        dateLabel = new Date(latestFromCoach.recorded_at).toLocaleDateString('it-IT');
      } else if (latestFromAthlete) {
        finalWeight = latestFromAthlete.weight_kg;
        dateLabel = new Date(latestFromAthlete.date).toLocaleDateString('it-IT');
      }

      if (finalWeight) {
        setWeight(Number(finalWeight));
        toast.success(`Peso aggiornato all'ultimo rilevato (${dateLabel})`);
      } else {
        toast.info('Nessun peso trovato nello storico');
      }
    } catch (error) {
      console.error("Error fetching last weight:", error);
      toast.error('Errore nel recupero del peso');
    } finally {
      setIsFetchingWeight(false);
    }
  };

  // Derived data
  const hydrationMl = Math.round(weight * 33);
  const trainingDayKcal = manualTrainingKcal ?? (results ? Math.round(results.targetKcal) : 0);
  const restDayKcal = manualRestKcal ?? (results ? Math.round(results.targetKcal - 200) : 0);

  const latestMeasurement = measurements && measurements.length > 0 ? measurements[0] : null;
  const previousMeasurement = measurements && measurements.length > 1 ? measurements[1] : null;
  const weightTrend = latestMeasurement && previousMeasurement
    ? (latestMeasurement.weight || 0) - (previousMeasurement.weight || 0)
    : 0;

  const activityOptions: { value: ActivityLevel; label: string; desc: string }[] = [
    { value: 'sedentary', label: 'Sedentario', desc: 'Poco o nessun esercizio' },
    { value: 'lightly_active', label: 'Leggero', desc: '1-3 gg/settimana' },
    { value: 'moderately_active', label: 'Moderato', desc: '3-5 gg/settimana' },
    { value: 'very_active', label: 'Molto Attivo', desc: '6-7 gg/settimana' },
    { value: 'extremely_active', label: 'Estremo', desc: 'Lavoro fisico intenso / 2x giorno' }
  ];

  if (!results) {
    // If no results, show the form prominently
    return (
      <div className="space-y-6">
        <ParametersForm
          gender={gender} setGender={setGender}
          age={age} setAge={setAge}
          weight={weight} setWeight={setWeight}
          height={height} setHeight={setHeight}
          activityLevel={activityLevel} setActivityLevel={setActivityLevel}
          deficit={deficit} setDeficit={setDeficit}
          activityOptions={activityOptions}
          isOpen={true}
          onGetLastWeight={handleGetLastWeight}
          isFetchingWeight={isFetchingWeight}
        />
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* ─── 0. PARAMETRI BIOMETRICI (Spostati in cima) ─── */}
      <div className="rounded-2xl border border-white/[0.05] bg-card/20 overflow-hidden">
        <button
          onClick={() => setIsParamsOpen(!isParamsOpen)}
          className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
              <Settings2 className="w-4 h-4 text-muted-foreground/60" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-foreground/80">Parametri Biometrici</h3>
              <p className="text-[10px] text-muted-foreground/30">
                {gender === 'M' ? 'M' : 'F'} · {age}y · {weight}kg · {height}cm · {activityOptions.find(o => o.value === activityLevel)?.label}
              </p>
            </div>
          </div>
          {isParamsOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground/40" /> : <ChevronDown className="w-4 h-4 text-muted-foreground/40" />}
        </button>

        <AnimatePresence>
          {isParamsOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1 border-t border-white/[0.04]">
                <ParametersForm
                  gender={gender} setGender={setGender}
                  age={age} setAge={setAge}
                  weight={weight} setWeight={setWeight}
                  height={height} setHeight={setHeight}
                  activityLevel={activityLevel} setActivityLevel={setActivityLevel}
                  deficit={deficit} setDeficit={setDeficit}
                  activityOptions={activityOptions}
                  isOpen={true}
                  onGetLastWeight={handleGetLastWeight}
                  isFetchingWeight={isFetchingWeight}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── 1. DASHBOARD RAPIDA ─── */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4">
        {/* TDEE */}
        <div className="flex-1 rounded-2xl border border-white/[0.05] bg-card/20 p-5 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-[0.03]">
            <Activity className="w-28 h-28" />
          </div>
          <p className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.15em] flex items-center gap-1.5 mb-2">
            <Activity className="w-3 h-3 text-primary/60" /> TDEE
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-foreground tracking-tight">{Math.round(results.tdee)}</span>
            <span className="text-sm font-semibold text-muted-foreground/30">kcal</span>
          </div>
        </div>

        {/* Target Kcal */}
        <div className="flex-1 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-[0.06]">
            <Flame className="w-28 h-28 text-primary" />
          </div>
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.15em] flex items-center gap-1.5 mb-2">
            <Flame className="w-3 h-3" /> Target
          </p>
          <div className="flex items-baseline gap-1.5">
            <input
              type="number"
              value={Math.round(results.targetKcal)}
              onChange={(e) => setManualTargetKcal(Number(e.target.value))}
              className="bg-transparent border-none text-3xl font-black text-foreground tracking-tight w-24 outline-none focus:ring-0"
            />
            <span className="text-sm font-semibold text-primary/40">kcal</span>
          </div>
          <span className="inline-flex px-2.5 py-1 mt-2 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold rounded-md border border-emerald-500/15">
            {deficit > 0 ? `-${deficit}` : '0'} offset
          </span>
        </div>

        {/* BMR / BMI compact */}
        <div className="flex-1 rounded-2xl border border-white/[0.05] bg-card/20 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.15em]">BMR</p>
            <span className="text-lg font-bold text-foreground">{Math.round(results.bmr)}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.15em]">BMI</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">{results.bmi.toFixed(1)}</span>
              {results.bmi < 18.5 && <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[8px] font-bold rounded-md">Under</span>}
              {results.bmi >= 18.5 && results.bmi < 25 && <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[8px] font-bold rounded-md">OK</span>}
              {results.bmi >= 25 && results.bmi < 30 && <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[8px] font-bold rounded-md">Over</span>}
              {results.bmi >= 30 && <span className="px-2 py-0.5 bg-red-500/10 text-red-400 text-[8px] font-bold rounded-md">Obese</span>}
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. MACROS ─── */}
      <div className="rounded-2xl border border-white/[0.05] bg-card/20 p-5 sm:p-6 space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
            <Dumbbell className="w-4 h-4 text-primary" />
          </div>
          <h3 className="text-base font-bold text-foreground">Scomposizione Macrobiotica</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Protein */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.04] p-5 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary border border-primary/15 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-4 h-4" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight leading-none mb-1">
              {Math.round(results.macros.protein)}<span className="text-[10px] font-semibold text-muted-foreground/40 ml-0.5">g</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary/60">Proteine</span>
            <span className="text-[9px] font-medium text-muted-foreground/30 mt-1">{Math.round(results.macros.protein * 4)} kcal</span>
          </div>

          {/* Carbs */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.04] p-5 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3 text-amber-400 border border-amber-500/15 group-hover:scale-105 transition-transform">
              <Flame className="w-4 h-4" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight leading-none mb-1">
              {Math.round(results.macros.carbs)}<span className="text-[10px] font-semibold text-muted-foreground/40 ml-0.5">g</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400/60">Carboidrati</span>
            <span className="text-[9px] font-medium text-muted-foreground/30 mt-1">{Math.round(results.macros.carbs * 4)} kcal</span>
          </div>

          {/* Fats */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.04] p-5 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-3 text-rose-400 border border-rose-500/15 group-hover:scale-105 transition-transform">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight leading-none mb-1">
              {Math.round(results.macros.fat)}<span className="text-[10px] font-semibold text-muted-foreground/40 ml-0.5">g</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-rose-400/60">Grassi</span>
            <span className="text-[9px] font-medium text-muted-foreground/30 mt-1">{Math.round(results.macros.fat * 9)} kcal</span>
          </div>
        </div>

        <div className="space-y-4">
          <MacroBarSlider 
            proteinPct={manualProteinPct ?? (results ? Math.round(((results.macros.protein * 4) / results.targetKcal) * 100) : 30)}
            fatPct={manualFatPct ?? (results ? Math.round(((results.macros.fat * 9) / results.targetKcal) * 100) : 25)}
            onProteinChange={setManualProteinPct}
            onFatChange={setManualFatPct}
            targetKcal={results.targetKcal}
          />
          
          <div className="grid grid-cols-3 gap-2 px-2">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Proteine</span>
              <span className="text-xs font-black text-foreground">{Math.round(((results.macros.protein * 4) / results.targetKcal) * 100)}%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Carboidrati</span>
              <span className="text-xs font-black text-foreground">{Math.round(((results.macros.carbs * 4) / results.targetKcal) * 100)}%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Grassi</span>
              <span className="text-xs font-black text-foreground">{Math.round(((results.macros.fat * 9) / results.targetKcal) * 100)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 3. DATA CARDS ─── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Hydration */}
        <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/[0.04] p-4 flex flex-col items-center text-center group hover:bg-cyan-500/[0.07] transition-all">
          <Droplets className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold text-foreground tracking-tight leading-none">
            {(hydrationMl / 1000).toFixed(1)}<span className="text-[10px] font-semibold text-muted-foreground/40 ml-0.5">L</span>
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-400/60 mt-1.5">Idratazione</span>
        </div>

        <div className="rounded-xl border border-amber-500/10 bg-amber-500/[0.04] p-4 flex flex-col items-center text-center group hover:bg-amber-500/[0.07] transition-all">
          <Activity className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
          <div className="flex items-center gap-1.5">
            <div className="text-center">
              <input
                type="number"
                value={trainingDayKcal}
                onChange={(e) => setManualTrainingKcal(Number(e.target.value))}
                className="w-12 bg-transparent border-none p-0 text-center text-base font-bold text-foreground outline-none focus:ring-0"
              />
              <span className="block text-[7px] font-bold uppercase text-amber-400/60">Train</span>
            </div>
            <ArrowRight className="w-2.5 h-2.5 text-muted-foreground/20" />
            <div className="text-center">
              <input
                type="number"
                value={restDayKcal}
                onChange={(e) => setManualRestKcal(Number(e.target.value))}
                className="w-12 bg-transparent border-none p-0 text-center text-base font-bold text-foreground outline-none focus:ring-0"
              />
              <span className="block text-[7px] font-bold uppercase text-amber-400/60">Rest</span>
            </div>
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-amber-400/60 mt-1.5">Ciclizzazione</span>
        </div>

        {/* Progress Snapshot */}
        <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4 flex flex-col items-center text-center group hover:bg-emerald-500/[0.07] transition-all">
          <Scale className="w-5 h-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
          {latestMeasurement ? (
            <>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-foreground tracking-tight leading-none">
                  {latestMeasurement.weight || '—'}
                </span>
                {weightTrend !== 0 && (
                  <span className={clsx("text-[10px] font-bold", weightTrend < 0 ? 'text-emerald-400' : 'text-rose-400')}>
                    {weightTrend < 0 ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
                  </span>
                )}
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-400/60 mt-1.5">Peso Attuale</span>
            </>
          ) : (
            <>
              <span className="text-lg font-bold text-muted-foreground/30">—</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-400/60 mt-1.5">No Data</span>
            </>
          )}
        </div>

        {/* Restrictions */}
        <div className="rounded-xl border border-rose-500/10 bg-rose-500/[0.04] p-4 flex flex-col items-center text-center group hover:bg-rose-500/[0.07] transition-all">
          <Heart className="w-5 h-5 text-rose-400 mb-2 group-hover:scale-110 transition-transform" />
          {athleteProfile?.intolerances?.length > 0 || athleteProfile?.disliked_foods?.length > 0 ? (
            <>
              <div className="space-y-0.5 max-h-12 overflow-hidden">
                {athleteProfile.intolerances?.slice(0, 2).map((item: string, i: number) => (
                  <span key={`int-${i}`} className="flex items-center justify-center gap-1 text-[8px] font-bold text-rose-400 uppercase tracking-widest">
                    <AlertTriangle className="w-2 h-2" /> {item}
                  </span>
                ))}
                {athleteProfile.disliked_foods?.slice(0, 1).map((item: string, i: number) => (
                  <span key={`dis-${i}`} className="flex items-center justify-center gap-1 text-[8px] font-medium text-muted-foreground/40 uppercase tracking-widest">
                    <Ban className="w-2 h-2" /> {item}
                  </span>
                ))}
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-rose-400/60 mt-1.5">Restrizioni</span>
            </>
          ) : (
            <>
              <span className="text-lg font-bold text-muted-foreground/30">✓</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-rose-400/60 mt-1.5">Nessuna</span>
            </>
          )}
        </div>
      </div>

      {/* ─── 4. DIRETTIVE NUTRIZIONALI AI ─── */}
      <div className="rounded-2xl border border-white/[0.05] bg-card/20 p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">Direttive Nutrizionali</h3>
              <p className="text-[10px] text-muted-foreground/30 font-medium">Protocollo strutturato IA</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleStructureWithAI}
              disabled={isStructuring}
              className="h-8 px-3.5 bg-primary/[0.08] border border-primary/15 text-primary rounded-lg font-semibold text-[10px] flex items-center gap-1.5 hover:bg-primary/15 active:scale-95 transition-all disabled:opacity-50"
            >
              {isStructuring ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
              Struttura IA
            </button>
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={clsx(
                "h-8 px-3.5 rounded-lg font-semibold text-[10px] flex items-center gap-1.5 active:scale-95 transition-all",
                isChatOpen 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'bg-white/[0.04] text-muted-foreground hover:text-foreground hover:bg-white/[0.06] border border-white/[0.06]'
              )}
            >
              <MessageSquare className="w-3 h-3" />
              Chat IA
            </button>
            <button
              onClick={() => setShowRawEditor(!showRawEditor)}
              className={clsx(
                "h-8 w-8 rounded-lg flex items-center justify-center active:scale-95 transition-all",
                showRawEditor 
                  ? 'bg-white/10 text-foreground' 
                  : 'bg-white/[0.04] text-muted-foreground hover:text-foreground hover:bg-white/[0.06] border border-white/[0.06]'
              )}
              title="Editor raw"
            >
              <Brain className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* AI Chat Panel */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-primary/[0.04] border border-primary/15 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-primary/70 uppercase tracking-[0.1em]">
                  <MessageSquare className="w-3 h-3" />
                  Modifica le direttive con AI
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleChatSend()}
                    placeholder="Es: aggiungi colazione proteica entro le 8..."
                    className="flex-1 bg-white/[0.03] border border-white/[0.06] text-foreground rounded-lg px-4 h-10 outline-none focus:border-primary/20 transition-all text-sm font-medium placeholder:text-muted-foreground/25"
                    disabled={isChatting}
                  />
                  <button
                    onClick={handleChatSend}
                    disabled={isChatting || !chatMessage.trim()}
                    className="h-10 w-10 bg-primary text-white rounded-lg flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-md shadow-primary/20"
                  >
                    {isChatting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                  <VoiceInput 
                    onAudioBlob={handleVoiceResult}
                    isProcessing={isChatting}
                    size="md"
                    className="!rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Raw Editor */}
        <AnimatePresence>
          {showRawEditor && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-primary/70 flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5" />
                    Editor Raw Markdown
                  </label>
                  <button 
                    onClick={() => setShowRawEditor(false)}
                    className="w-7 h-7 rounded-md bg-white/[0.04] flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <textarea
                  value={aiGuidelines}
                  onChange={(e) => setAiGuidelines(e.target.value)}
                  placeholder="Es. Priorità al timing proteico pre-nanna..."
                  className="w-full bg-white/[0.03] border border-white/[0.06] text-foreground rounded-xl px-5 py-4 outline-none focus:border-primary/20 transition-all font-mono text-sm min-h-[180px] resize-y placeholder:text-muted-foreground/25"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rendered Markdown */}
        {aiGuidelines ? (
          <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-6 prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-primary prose-ul:list-disc prose-li:my-1 prose-h2:text-sm prose-h2:mt-5 prose-h2:mb-2 prose-h3:text-xs">
            <ReactMarkdown>{aiGuidelines}</ReactMarkdown>
          </div>
        ) : (
          <div className="bg-white/[0.02] border border-dashed border-white/[0.06] rounded-xl p-10 text-center space-y-3">
            <FileText className="w-8 h-8 text-muted-foreground/10 mx-auto" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground/30">Nessuna direttiva</p>
              <p className="text-[10px] text-muted-foreground/20 max-w-xs mx-auto">
                Usa "Struttura IA" per generare automaticamente o scrivi nel raw editor
              </p>
            </div>
          </div>
        )}
      </div>



      {/* Save & Restore Buttons */}
      {athleteId && (
        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              if (savedPlan) {
                setManualTargetKcal(savedPlan.target_kcal);
                const kcal = savedPlan.target_kcal;
                if (kcal > 0) {
                  setManualProteinPct(Math.round(((savedPlan.target_protein * 4) / kcal) * 100));
                  setManualFatPct(Math.round(((savedPlan.target_fats * 9) / kcal) * 100));
                }
                // Assuming manualTrainingKcal/manualRestKcal are derived if not in schema
                setManualTrainingKcal(null);
                setManualRestKcal(null);
                if (savedPlan.ai_guidelines) setAiGuidelines(savedPlan.ai_guidelines);
              } else {
                // reset to defaults if no saved plan
                setManualTargetKcal(null);
                setManualProteinPct(null);
                setManualFatPct(null);
                setManualTrainingKcal(null);
                setManualRestKcal(null);
              }
            }}
            className="h-10 px-4 rounded-xl font-bold text-xs bg-white/[0.04] text-muted-foreground hover:text-foreground hover:bg-white/[0.06] border border-white/[0.06] transition-all flex items-center gap-2"
          >
            Ripristina Ultimo Piano
          </button>
          
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={clsx(
              "h-10 px-6 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg",
              saveSuccess 
                ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                : 'btn btn-primary shadow-primary/20 disabled:opacity-50'
            )}
          >
            {isSaving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : saveSuccess ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saveSuccess ? 'Salvato' : isSaving ? 'Salvataggio...' : 'Salva Protocollo'}
          </button>
        </div>
      )}
    </div>
  );
}

interface MacroBarSliderProps {
  proteinPct: number;
  fatPct: number;
  onProteinChange: (val: number) => void;
  onFatChange: (val: number) => void;
  targetKcal: number;
}

function MacroBarSlider({ proteinPct, fatPct, onProteinChange, onFatChange, targetKcal }: MacroBarSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHandle, setActiveHandle] = useState<'h1' | 'h2' | null>(null);

  const h1 = proteinPct;
  const h2 = 100 - fatPct;

  const handlePointerDown = (e: React.PointerEvent, handle: 'h1' | 'h2') => {
    e.preventDefault();
    setActiveHandle(handle);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!activeHandle || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100)));

    if (activeHandle === 'h1') {
      // Constraints: at least 10% protein, at least 10% carbs
      if (pct >= 10 && pct <= h2 - 10) {
        onProteinChange(pct);
      }
    } else {
      // Constraints: at least 10% fat, at least 10% carbs
      const newFatPct = 100 - pct;
      if (pct >= h1 + 10 && pct <= 90) {
        onFatChange(newFatPct);
      }
    }
  };

  const handlePointerUp = () => {
    setActiveHandle(null);
  };

  return (
    <div className="space-y-3 pt-2">
      <div 
        ref={containerRef}
        className="relative w-full h-4 bg-white/[0.04] rounded-full flex items-center border border-white/[0.03] select-none touch-none group"
      >
        {/* Background Segments */}
        <div className="absolute left-0 h-full bg-primary rounded-l-full" style={{ width: `${h1}%` }} />
        <div className="absolute h-full bg-amber-400" style={{ left: `${h1}%`, width: `${h2 - h1}%` }} />
        <div className="absolute h-full bg-rose-400 rounded-r-full" style={{ left: `${h2}%`, width: `${100 - h2}%` }} />

        {/* Handles */}
        <div 
          onPointerDown={(e) => handlePointerDown(e, 'h1')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={clsx(
            "absolute w-6 h-6 -ml-3 bg-white rounded-full shadow-lg border-2 z-10 cursor-ew-resize transition-transform flex items-center justify-center group-hover:scale-110",
            activeHandle === 'h1' ? 'border-primary scale-125' : 'border-primary/20 hover:border-primary/40'
          )}
          style={{ left: `${h1}%` }}
        >
          <div className="w-1 h-3 bg-primary/20 rounded-full" />
        </div>

        <div 
          onPointerDown={(e) => handlePointerDown(e, 'h2')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={clsx(
            "absolute w-6 h-6 -ml-3 bg-white rounded-full shadow-lg border-2 z-10 cursor-ew-resize transition-transform flex items-center justify-center group-hover:scale-110",
            activeHandle === 'h2' ? 'border-rose-400 scale-125' : 'border-rose-400/20 hover:border-rose-400/40'
          )}
          style={{ left: `${h2}%` }}
        >
          <div className="w-1 h-3 bg-rose-400/20 rounded-full" />
        </div>
      </div>
      
      {/* Label overlays showing grams at the boundary */}
      <div className="flex justify-between px-1 text-[8px] font-bold text-muted-foreground/20 uppercase tracking-tighter">
        <span>0</span>
        <span style={{ marginLeft: `${h1}%`, transform: 'translateX(-50%)' }} className="text-primary/40">{Math.round((targetKcal * h1 / 100) / 4)}g</span>
        <span style={{ marginLeft: `${h2}%`, transform: 'translateX(-50%)' }} className="text-rose-400/40">{Math.round((targetKcal * (100 - h2) / 100) / 9)}g</span>
        <span>100</span>
      </div>
    </div>
  );
}

/** Extracted form for biometric parameters */
function ParametersForm({
  gender, setGender,
  age, setAge,
  weight, setWeight,
  height, setHeight,
  activityLevel, setActivityLevel,
  deficit, setDeficit,
  activityOptions,
  isOpen,
  onGetLastWeight,
  isFetchingWeight
}: {
  gender: Gender; setGender: (v: Gender) => void;
  age: number; setAge: (v: number) => void;
  weight: number; setWeight: (v: number) => void;
  height: number; setHeight: (v: number) => void;
  activityLevel: ActivityLevel; setActivityLevel: (v: ActivityLevel) => void;
  deficit: number; setDeficit: (v: number) => void;
  activityOptions: { value: ActivityLevel; label: string; desc: string }[];
  isOpen: boolean;
  onGetLastWeight: () => void;
  isFetchingWeight?: boolean;
}) {
  if (!isOpen) return null;

  const inputClass = "w-full bg-white/[0.03] border border-white/[0.06] text-foreground rounded-xl px-4 h-11 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all text-sm font-medium";

  return (
    <div className="space-y-4 pt-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em] ml-1">Genere</label>
          <div className="flex bg-white/[0.03] rounded-xl p-1 border border-white/[0.06]">
            <button
              onClick={() => setGender('M')}
              className={clsx(
                "flex-1 h-9 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all",
                gender === 'M' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-muted-foreground/60 hover:text-foreground'
              )}
            >
              M
            </button>
            <button
              onClick={() => setGender('F')}
              className={clsx(
                "flex-1 h-9 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all",
                gender === 'F' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-muted-foreground/60 hover:text-foreground'
              )}
            >
              F
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em] ml-1">Età</label>
          <div className="relative">
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className={inputClass} min="1" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-muted-foreground/20">yrs</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-1">
            <label className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em]">Peso</label>
            <button 
              onClick={(e) => { e.preventDefault(); onGetLastWeight(); }}
              disabled={isFetchingWeight}
              className="text-[9px] font-bold text-primary/60 hover:text-primary transition-colors flex items-center gap-1 disabled:opacity-50"
            >
              {isFetchingWeight ? <Loader2 className="w-2.5 h-2.5 animate-spin" /> : <Scale className="w-2.5 h-2.5" />}
              Prendi ultimo
            </button>
          </div>
          <div className="relative">
            <Scale className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/20" />
            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className={clsx(inputClass, "pl-10")} min="1" step="0.1" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-muted-foreground/20">kg</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em] ml-1">Altezza</label>
          <div className="relative">
            <Ruler className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/20" />
            <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className={clsx(inputClass, "pl-10")} min="1" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-muted-foreground/20">cm</span>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em] ml-1">Attività</label>
        <div className="relative">
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
            className={clsx(inputClass, "appearance-none pr-10")}
          >
            {activityOptions.map(opt => (
              <option key={opt.value} value={opt.value} className="bg-background">
                {opt.label} — {opt.desc}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/30 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-1.5 pt-3 border-t border-white/[0.04]">
        <label className="text-[10px] font-semibold text-emerald-400/60 uppercase tracking-[0.1em] ml-1 flex items-center gap-1.5">
          <TrendingDown className="w-3 h-3" /> Offset Calorico
        </label>
        <div className="relative">
          <select
            value={deficit}
            onChange={(e) => setDeficit(Number(e.target.value))}
            className="w-full bg-emerald-500/[0.04] border border-emerald-500/15 text-foreground rounded-xl px-4 h-11 appearance-none outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm font-medium"
          >
            <option value={0} className="bg-background">Mantenimento (0 kcal)</option>
            <option value={300} className="bg-background">Lieve (-300 kcal)</option>
            <option value={500} className="bg-background">Ricomposizione (-500 kcal)</option>
            <option value={800} className="bg-background">Aggressivo (-800 kcal)</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400/40 w-4 h-4 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
