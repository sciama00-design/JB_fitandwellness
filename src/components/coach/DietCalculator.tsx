import { useState, useMemo, useEffect } from 'react';
import { calculateDietMetrics, dietService, type ActivityLevel, type Gender } from '../../services/dietService';
import { geminiService } from '../../services/geminiService';
import {
  Flame,
  Activity,
  Dumbbell,
  Droplets,
  Calculator,
  User,
  Scale,
  Ruler,
  TrendingDown,
  TrendingUp,
  ChevronDown,
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
  Heart
} from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

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

  // AI Directives state
  const [isStructuring, setIsStructuring] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const [showRawEditor, setShowRawEditor] = useState(false);

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
      return calculateDietMetrics({
        weight,
        height,
        age,
        gender,
        activityLevel,
        deficit
      });
    }
    return null;
  }, [weight, height, age, gender, activityLevel, deficit]);

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

  // Derived data
  const hydrationMl = Math.round(weight * 33);
  const trainingDayKcal = results ? Math.round(results.targetKcal) : 0;
  const restDayKcal = results ? Math.round(results.targetKcal - 200) : 0;

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

  return (
    <div className="w-full space-y-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-1">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-[2rem] bg-secondary/10 flex items-center justify-center border border-white/5 relative group shrink-0">
            <Calculator className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div>
            <h1 className="text-4xl font-black text-foreground tracking-tighter italic uppercase leading-none">Diet Engineering</h1>
            <p className="text-muted-foreground mt-2 font-bold uppercase tracking-[0.3em] text-[10px] opacity-40">Sviluppo protocollo nutrizionale e macrobiotica</p>
          </div>
        </div>
        
        {athleteId && (
          <button
            onClick={handleSave}
            disabled={isSaving || !results}
            className={clsx(
              "h-14 px-8 rounded-2xl font-black italic uppercase tracking-widest text-[11px] transition-all shadow-xl flex items-center justify-center gap-3 shrink-0",
              saveSuccess 
                ? 'bg-emerald-500 text-white shadow-emerald-500/30' 
                : 'bg-primary text-white shadow-primary/30 disabled:opacity-50'
            )}
          >
            {isSaving ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : saveSuccess ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {saveSuccess ? 'Piano Sincronizzato' : isSaving ? 'Salvataggio...' : 'Applica Protocollo'}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        {/* INPUT FORM */}
        <div className="xl:col-span-5 space-y-8">
          <div className="glass-card p-10 rounded-[3rem] border-white/5 shadow-2xl space-y-8 relative overflow-hidden bg-secondary/5">
            <div className="flex items-center gap-3 relative z-10">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-black text-foreground italic uppercase tracking-tight">Parametri Biometrici</h2>
            </div>
            
            <div className="space-y-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Genere</label>
                  <div className="flex bg-background/40 backdrop-blur-md rounded-2xl p-1.5 border border-white/5">
                    <button
                      onClick={() => setGender('M')}
                      className={clsx(
                        "flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                        gender === 'M' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setGender('F')}
                      className={clsx(
                        "flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                        gender === 'F' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Età Anagrafica</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full bg-background/40 border border-white/5 text-foreground rounded-2xl px-6 py-4 outline-none focus:border-primary/40 focus:bg-background/60 transition-all font-black italic text-lg shadow-inner"
                      min="1"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest opacity-20 text-muted-foreground">YRS</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Massa Corporea</label>
                  <div className="relative">
                    <Scale className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-40" />
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full bg-background/40 border border-white/5 text-foreground rounded-2xl pl-12 pr-12 py-4 outline-none focus:border-primary/40 focus:bg-background/60 transition-all font-black italic text-lg shadow-inner"
                      min="1"
                      step="0.1"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest opacity-20 text-muted-foreground">KG</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Statura</label>
                  <div className="relative">
                    <Ruler className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-40" />
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full bg-background/40 border border-white/5 text-foreground rounded-2xl pl-12 pr-12 py-4 outline-none focus:border-primary/40 focus:bg-background/60 transition-all font-black italic text-lg shadow-inner"
                      min="1"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest opacity-20 text-muted-foreground">CM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Livello di Attività Giornaliero</label>
                <div className="relative">
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
                    className="w-full bg-background/40 border border-white/5 text-foreground rounded-2xl px-6 py-4 appearance-none outline-none focus:border-primary/40 focus:bg-background/60 transition-all font-bold text-sm shadow-inner"
                  >
                    {activityOptions.map(opt => (
                      <option key={opt.value} value={opt.value} className="bg-background">
                        {opt.label.toUpperCase()} — {opt.desc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none opacity-40" />
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                 <label className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 ml-1 flex items-center gap-3">
                   <TrendingDown className="w-4 h-4" />
                   Offset Calorico / Deficit
                 </label>
                 <div className="relative">
                   <select
                     value={deficit}
                     onChange={(e) => setDeficit(Number(e.target.value))}
                     className="w-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-100 rounded-2xl px-6 py-4 appearance-none outline-none focus:border-emerald-500/40 focus:bg-emerald-500/10 transition-all font-black italic shadow-inner"
                   >
                     <option value={0} className="bg-background">MANTENIMENTO (0 KCAL)</option>
                     <option value={300} className="bg-background">RESTRIZIONE LIEVE (-300 KCAL)</option>
                     <option value={500} className="bg-background">RICOMPOSIZIONE (-500 KCAL)</option>
                     <option value={800} className="bg-background">DEFINIZIONE AGGRESSIVA (-800 KCAL)</option>
                   </select>
                   <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-emerald-500 w-5 h-5 pointer-events-none opacity-40" />
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS PANEL */}
        <div className="xl:col-span-7 space-y-10">
          <AnimatePresence mode="wait">
            {results ? (
              <motion.div 
                key="results-active"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-10"
              >
                {/* PRIMARY METRICS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden shadow-2xl bg-secondary/5 group">
                    <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                      <Activity className="w-48 h-48" />
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground font-black uppercase tracking-[0.3em] text-[10px] mb-4 opacity-40">
                      <Activity className="w-4 h-4 text-primary" />
                      TDEE / Expenditures
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-6xl font-black text-foreground italic tracking-tighter">
                        {Math.round(results.tdee)}
                      </span>
                      <span className="text-xl font-black text-muted-foreground italic opacity-20 uppercase tracking-widest">Kcal</span>
                    </div>
                  </div>

                  <div className="glass-card p-10 rounded-[3rem] border-primary/20 relative overflow-hidden shadow-2xl bg-primary/5 group">
                    <div className="absolute -right-8 -bottom-8 opacity-10 blur-2xl pointer-events-none">
                      <Flame className="w-48 h-48 text-primary" />
                    </div>
                    <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                      <Flame className="w-4 h-4" />
                      Strategic Target
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-6xl font-black text-foreground italic tracking-tighter">
                        {Math.round(results.targetKcal)}
                      </span>
                      <span className="text-xl font-black text-primary italic opacity-40 uppercase tracking-widest">Kcal</span>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex px-4 py-1.5 bg-background/50 backdrop-blur-md text-emerald-500 text-[10px] font-black italic rounded-full border border-emerald-500/20 shadow-lg tracking-[0.2em] relative z-10">
                        {deficit > 0 ? `-${deficit}` : '0'} OFFSET
                      </span>
                    </div>
                  </div>
                </div>

                {/* MACROS */}
                <div className="glass-card p-10 rounded-[3.5rem] border-white/5 shadow-2xl space-y-10 bg-secondary/5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-foreground italic uppercase tracking-tight flex items-center gap-3">
                      <Dumbbell className="w-5 h-5 text-primary" />
                      Scomposizione Macrobiotica
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* PROTEIN */}
                    <div className="bg-background/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-background/60 transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20 shadow-inner group-hover:scale-110 transition-transform">
                        <Dumbbell className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-foreground italic tracking-tight leading-none mb-2">
                        {Math.round(results.macros.protein)}<span className="text-[10px] uppercase font-black not-italic opacity-40 ml-1">G</span>
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Proteine</span>
                      <span className="text-[9px] font-bold text-muted-foreground opacity-30 mt-2 uppercase tracking-widest">{Math.round(results.macros.protein * 4)} Kcal</span>
                    </div>

                    {/* CARBS */}
                    <div className="bg-background/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-background/60 transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500 border border-amber-500/20 shadow-inner group-hover:scale-110 transition-transform">
                        <Flame className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-foreground italic tracking-tight leading-none mb-2">
                        {Math.round(results.macros.carbs)}<span className="text-[10px] uppercase font-black not-italic opacity-40 ml-1">G</span>
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60">Carboidrati</span>
                      <span className="text-[9px] font-bold text-muted-foreground opacity-30 mt-2 uppercase tracking-widest">{Math.round(results.macros.carbs * 4)} Kcal</span>
                    </div>

                    {/* FATS */}
                    <div className="bg-background/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-background/60 transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500 border border-rose-500/20 shadow-inner group-hover:scale-110 transition-transform">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-foreground italic tracking-tight leading-none mb-2">
                        {Math.round(results.macros.fat)}<span className="text-[10px] uppercase font-black not-italic opacity-40 ml-1">G</span>
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500/60">Grassi</span>
                      <span className="text-[9px] font-bold text-muted-foreground opacity-30 mt-2 uppercase tracking-widest">{Math.round(results.macros.fat * 9)} Kcal</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden flex shadow-inner border border-white/5">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 relative group"
                        style={{ width: `${((results.macros.protein * 4) / results.targetKcal) * 100}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div 
                        className="h-full bg-amber-500 transition-all duration-1000 relative group"
                        style={{ width: `${((results.macros.carbs * 4) / results.targetKcal) * 100}%` }}
                      >
                         <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div 
                        className="h-full bg-rose-500 transition-all duration-1000 relative group"
                        style={{ width: `${((results.macros.fat * 9) / results.targetKcal) * 100}%` }}
                      >
                         <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-30 px-1">
                      <span>Pro: {Math.round(((results.macros.protein * 4) / results.targetKcal) * 100)}%</span>
                      <span>Carb: {Math.round(((results.macros.carbs * 4) / results.targetKcal) * 100)}%</span>
                      <span>Fat: {Math.round(((results.macros.fat * 9) / results.targetKcal) * 100)}%</span>
                    </div>
                  </div>
                </div>
                
                {/* SECONDARY METRICS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="glass-card p-6 rounded-[2rem] border-white/5 flex items-center justify-between bg-background/20 group">
                     <div className="text-muted-foreground font-black uppercase tracking-widest text-[10px] opacity-40 group-hover:opacity-80 transition-opacity">BMR (Basale)</div>
                     <div className="text-xl font-black text-foreground italic leading-none">{Math.round(results.bmr)} <span className="text-[9px] uppercase font-black not-italic opacity-20">Kcal</span></div>
                   </div>
                   <div className="glass-card p-6 rounded-[2rem] border-white/5 flex items-center justify-between bg-background/20 group">
                     <div className="text-muted-foreground font-black uppercase tracking-widest text-[10px] opacity-40 group-hover:opacity-80 transition-opacity">BMI Index</div>
                     <div className="flex items-center gap-4">
                       <div className="text-xl font-black text-foreground italic leading-none">{results.bmi.toFixed(1)}</div>
                       {results.bmi < 18.5 && <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[9px] font-black uppercase italic rounded-lg border border-blue-500/20 shadow-lg shadow-blue-500/5">Underweight</span>}
                       {results.bmi >= 18.5 && results.bmi < 25 && <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase italic rounded-lg border border-emerald-500/20 shadow-lg shadow-emerald-500/5">Optimal</span>}
                       {results.bmi >= 25 && results.bmi < 30 && <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[9px] font-black uppercase italic rounded-lg border border-amber-500/20 shadow-lg shadow-amber-500/5">Overweight</span>}
                       {results.bmi >= 30 && <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[9px] font-black uppercase italic rounded-lg border border-red-500/20 shadow-lg shadow-red-500/5">Obesity</span>}
                     </div>
                   </div>
                </div>

                {/* DATA CARDS ROW */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Hydration */}
                  <div className="glass-card p-6 rounded-[2rem] border-white/5 bg-cyan-500/5 border-cyan-500/10 flex flex-col items-center text-center group hover:bg-cyan-500/10 transition-all">
                    <Droplets className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-black text-foreground italic tracking-tight leading-none">
                      {(hydrationMl / 1000).toFixed(1)}<span className="text-[10px] uppercase font-black not-italic opacity-40 ml-1">L</span>
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400/60 mt-2">Idratazione</span>
                    <span className="text-[8px] font-bold text-muted-foreground opacity-30 mt-1">{hydrationMl} ml/day</span>
                  </div>

                  {/* Caloric Cycling */}
                  <div className="glass-card p-6 rounded-[2rem] border-white/5 bg-amber-500/5 border-amber-500/10 flex flex-col items-center text-center group hover:bg-amber-500/10 transition-all">
                    <Activity className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="flex items-center gap-2">
                      <div className="text-center">
                        <span className="text-lg font-black text-foreground italic tracking-tight leading-none">{trainingDayKcal}</span>
                        <span className="block text-[7px] font-black uppercase text-amber-400/60 mt-0.5">Train</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-muted-foreground opacity-20" />
                      <div className="text-center">
                        <span className="text-lg font-black text-foreground italic tracking-tight leading-none">{restDayKcal}</span>
                        <span className="block text-[7px] font-black uppercase text-amber-400/60 mt-0.5">Rest</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-400/60 mt-2">Ciclizzazione</span>
                  </div>

                  {/* Progress Snapshot */}
                  <div className="glass-card p-6 rounded-[2rem] border-white/5 bg-emerald-500/5 border-emerald-500/10 flex flex-col items-center text-center group hover:bg-emerald-500/10 transition-all">
                    <Scale className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
                    {latestMeasurement ? (
                      <>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black text-foreground italic tracking-tight leading-none">
                            {latestMeasurement.weight || '—'}
                          </span>
                          {weightTrend !== 0 && (
                            <span className={clsx("text-[10px] font-black", weightTrend < 0 ? 'text-emerald-400' : 'text-rose-400')}>
                              {weightTrend < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400/60 mt-2">Peso Attuale</span>
                        {latestMeasurement.body_fat_percentage && (
                          <span className="text-[8px] font-bold text-muted-foreground opacity-30 mt-1">BF: {latestMeasurement.body_fat_percentage}%</span>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="text-lg font-black text-muted-foreground italic opacity-30">—</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400/60 mt-2">No Data</span>
                      </>
                    )}
                  </div>

                  {/* Athlete Profile Summary */}
                  <div className="glass-card p-6 rounded-[2rem] border-white/5 bg-rose-500/5 border-rose-500/10 flex flex-col items-center text-center group hover:bg-rose-500/10 transition-all">
                    <Heart className="w-6 h-6 text-rose-400 mb-3 group-hover:scale-110 transition-transform" />
                    {athleteProfile?.intolerances?.length > 0 || athleteProfile?.disliked_foods?.length > 0 ? (
                      <>
                        <div className="space-y-1.5 max-h-16 overflow-hidden">
                          {athleteProfile.intolerances?.slice(0, 2).map((item: string, i: number) => (
                            <span key={`int-${i}`} className="flex items-center justify-center gap-1 text-[9px] font-black text-rose-400 uppercase tracking-widest">
                              <AlertTriangle className="w-2.5 h-2.5" /> {item}
                            </span>
                          ))}
                          {athleteProfile.disliked_foods?.slice(0, 2).map((item: string, i: number) => (
                            <span key={`dis-${i}`} className="flex items-center justify-center gap-1 text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">
                              <Ban className="w-2.5 h-2.5" /> {item}
                            </span>
                          ))}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-400/60 mt-2">Restrizioni</span>
                      </>
                    ) : (
                      <>
                        <span className="text-lg font-black text-muted-foreground italic opacity-30">✓</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-400/60 mt-2">Nessuna</span>
                      </>
                    )}
                  </div>
                </div>

                {/* NUTRITIONAL DIRECTIVES */}
                <div className="glass-card p-10 rounded-[4rem] border-white/5 shadow-2xl space-y-8 bg-secondary/5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-foreground italic uppercase tracking-tight">Direttive Nutrizionali</h3>
                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-30 mt-0.5">Protocollo strutturato IA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleStructureWithAI}
                        disabled={isStructuring}
                        className="h-10 px-5 bg-primary/10 border border-primary/20 text-primary rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-primary/20 active:scale-95 transition-all disabled:opacity-50"
                      >
                        {isStructuring ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                        Struttura con IA
                      </button>
                      <button
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className={clsx(
                          "h-10 px-5 rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 active:scale-95 transition-all",
                          isChatOpen 
                            ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                            : 'glass-interactive text-muted-foreground hover:text-foreground hover:bg-white/5'
                        )}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Chat IA
                      </button>
                      <button
                        onClick={() => setShowRawEditor(!showRawEditor)}
                        className={clsx(
                          "h-10 w-10 rounded-xl flex items-center justify-center active:scale-95 transition-all",
                          showRawEditor 
                            ? 'bg-white/10 text-foreground' 
                            : 'glass-interactive text-muted-foreground hover:text-foreground hover:bg-white/5'
                        )}
                        title="Modifica testo raw"
                      >
                        <Brain className="w-3.5 h-3.5" />
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
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 space-y-3">
                          <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-widest">
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
                              className="flex-1 bg-background/60 border border-white/5 text-foreground rounded-xl px-4 py-3 outline-none focus:border-primary/40 transition-all text-sm font-medium placeholder:text-muted-foreground/30"
                              disabled={isChatting}
                            />
                            <button
                              onClick={handleChatSend}
                              disabled={isChatting || !chatMessage.trim()}
                              className="h-[46px] w-[46px] bg-primary text-white rounded-xl flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-lg shadow-primary/20"
                            >
                              {isChatting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            </button>
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
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1 flex items-center gap-3">
                              <Brain className="w-4 h-4" />
                              Editor Raw Markdown
                            </label>
                            <button 
                              onClick={() => setShowRawEditor(false)}
                              className="w-8 h-8 glass-interactive rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <textarea
                            value={aiGuidelines}
                            onChange={(e) => setAiGuidelines(e.target.value)}
                            placeholder="Es. Priorità al timing proteico pre-nanna, evitare eccipienti pro-infiammatori..."
                            className="w-full bg-background/40 border border-white/5 text-foreground rounded-2xl px-6 py-4 outline-none focus:border-primary/40 focus:bg-background/60 transition-all font-mono text-sm shadow-inner min-h-[200px] resize-y"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Rendered Markdown */}
                  {aiGuidelines ? (
                    <div className="bg-background/30 border border-white/5 rounded-3xl p-8 prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-headings:text-foreground prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tight prose-strong:text-primary prose-ul:list-disc prose-li:my-1 prose-h2:text-base prose-h2:mt-6 prose-h2:mb-3 prose-h3:text-sm relative group">
                      <ReactMarkdown>{aiGuidelines}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="bg-background/20 border border-dashed border-white/10 rounded-3xl p-12 text-center space-y-4">
                      <FileText className="w-10 h-10 text-muted-foreground opacity-10 mx-auto" />
                      <div className="space-y-2">
                        <p className="text-sm font-black text-foreground italic uppercase tracking-tight opacity-30">Nessuna direttiva</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-20 max-w-xs mx-auto">
                          Scrivi le indicazioni nutrizionali nel raw editor o usa "Struttura con IA" per generare automaticamente
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="results-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[600px] flex flex-col items-center justify-center space-y-6 glass-card rounded-[4rem] border-dashed border-2 border-white/5 bg-secondary/2"
              >
                <div className="w-24 h-24 bg-muted/10 rounded-[3rem] flex items-center justify-center border border-white/5 opacity-20">
                  <Calculator className="w-10 h-10" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tighter opacity-40">Ready to Compute</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-20">Inserisci i parametri biometrici per generare il protocollo</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
