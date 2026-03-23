import { useState, useMemo, useEffect } from 'react';
import { calculateDietMetrics, dietService, type ActivityLevel, type Gender } from '../../services/dietService';
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
  ChevronDown,
  RefreshCw,
  Leaf,
  Save,
  CheckCircle2,
  Loader2,
  Brain
} from 'lucide-react';
import { DIET_TEMPLATES } from '../../data/dietTemplates';
import { useAuth } from '../../lib/auth';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface DietCalculatorProps {
  athleteId?: string;
  initialData?: any;
}

export default function DietCalculator({ athleteId, initialData }: DietCalculatorProps) {
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

  const [swaps, setSwaps] = useState<Record<string, { type: 'original' | 'normal' | 'vegan', swapIndex: number }>>(initialData?.selections || {});

  useEffect(() => {
    if (initialData) {
      setWeight(initialData.weight || 70);
      setHeight(initialData.height || 170);
      setAge(initialData.age || 30);
      setGender(initialData.gender || 'M');
      setActivityLevel(initialData.activityLevel || 'lightly_active');
      setDeficit(initialData.deficit || 500);
      setSwaps(initialData.selections || {});
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
        template_id: DIET_TEMPLATES[0].id, 
        selections: swaps
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

              <div className="pt-8 border-t border-white/5 space-y-4">
                 <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1 flex items-center gap-3">
                   <Brain className="w-4 h-4" />
                   Istruzioni Strategiche IA
                 </label>
                 <textarea
                   value={aiGuidelines}
                   onChange={(e) => setAiGuidelines(e.target.value)}
                   placeholder="Es. Priorità al timing proteico pre-nanna, evitare eccipienti pro-infiammatori..."
                   className="w-full bg-background/40 border border-white/5 text-foreground rounded-2xl px-6 py-4 outline-none focus:border-primary/40 focus:bg-background/60 transition-all font-medium italic text-sm shadow-inner min-h-[120px] resize-none"
                 />
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

                {/* DIET PLAN RENDERER */}
                <div className="glass-card p-10 rounded-[4rem] border-white/5 shadow-2xl space-y-10 bg-secondary/5 mt-10">
                   <div className="flex items-center gap-4 relative z-10">
                     <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                       <Activity className="w-5 h-5 text-primary" />
                     </div>
                     <h3 className="text-xl font-black text-foreground italic uppercase tracking-tight">Timeline Nutrizionale Daily</h3>
                   </div>

                  <div className="grid gap-10">
                    {DIET_TEMPLATES[0].meals.map((meal, mealIndex) => (
                      <div key={mealIndex} className="space-y-6 relative">
                        <div className="flex items-end justify-between px-2">
                           <div className="space-y-1">
                             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40 block">Pasto {mealIndex + 1}</span>
                             <h4 className="text-2xl font-black text-foreground italic uppercase tracking-tighter">{meal.name}</h4>
                           </div>
                           <span className="px-4 py-1.5 bg-background/40 backdrop-blur-md rounded-xl text-[10px] font-black text-muted-foreground uppercase tracking-widest border border-white/5 opacity-40 italic shadow-lg">
                             Allocazione: {Math.round(results.targetKcal * (meal.name.toLowerCase() === 'pranzo' ? 0.35 : meal.name.toLowerCase() === 'cena' ? 0.30 : meal.name.toLowerCase() === 'colazione' ? 0.25 : 0.10))} KCAL
                           </span>
                        </div>
                        
                        <div className="grid gap-4">
                          {meal.foods.map((food, foodIndex) => {
                            const swapKey = `${meal.name}-${foodIndex}`;
                            const currentSwap = swaps[swapKey] || { type: 'original', swapIndex: 0 };
                            
                            let displayFoodName = food.name;
                            let displayBaseQty = food.baseQty;
                            let isVegan = false;

                            if (currentSwap.type === 'normal') {
                              const option = food.normalSwaps[currentSwap.swapIndex];
                              if (option) {
                                displayFoodName = option.name;
                                displayBaseQty = option.baseQty;
                              }
                            } else if (currentSwap.type === 'vegan') {
                              const option = food.veganSwaps[currentSwap.swapIndex];
                              if (option) {
                                displayFoodName = option.name;
                                displayBaseQty = option.baseQty;
                                isVegan = true;
                              }
                            }

                            const dynamicQty = Math.round((displayBaseQty * (results.targetKcal / 1911)) / 5) * 5;

                            return (
                              <div key={foodIndex} className="glass-card p-6 rounded-[2.5rem] border-white/[0.03] flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all hover:border-white/10 bg-background/20 group">
                                <div className="flex-1 flex items-center gap-6">
                                  <div className="w-14 h-14 bg-background/80 rounded-2xl flex items-center justify-center text-primary border border-white/5 shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                                    <span className="text-xl font-black italic">{dynamicQty}<span className="text-[10px] uppercase font-black not-italic opacity-40 ml-0.5">G</span></span>
                                  </div>
                                  <div className="space-y-0.5">
                                    <div className="flex items-center gap-3">
                                      <h5 className={clsx(
                                        "text-lg font-black italic uppercase tracking-tight transition-colors",
                                        isVegan ? 'text-emerald-500' : 'text-foreground group-hover:text-primary'
                                      )}>
                                        {displayFoodName}
                                      </h5>
                                      {isVegan && <Leaf className="w-3.5 h-3.5 text-emerald-500/40" />}
                                    </div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-30">Pura densità calorica ponderata</p>
                                  </div>
                                </div>
                                
                                {(food.normalSwaps.length > 0 || food.veganSwaps.length > 0) && (
                                  <div className="lg:w-72 shrink-0">
                                    <div className="relative group/select">
                                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-primary opacity-40">
                                        <RefreshCw className="w-4 h-4 group-hover/select:rotate-180 transition-transform duration-700" />
                                      </div>
                                      <select
                                        value={`${currentSwap.type}-${currentSwap.swapIndex}`}
                                        onChange={(e) => {
                                          const [type, index] = e.target.value.split('-');
                                          setSwaps((prev: Record<string, { type: 'original' | 'normal' | 'vegan', swapIndex: number }>) => ({
                                            ...prev,
                                            [swapKey]: { type: type as any, swapIndex: Number(index) }
                                          }));
                                        }}
                                        className="w-full bg-background/40 border border-white/5 text-[10px] font-black uppercase tracking-widest text-foreground rounded-xl pl-12 pr-10 py-3.5 appearance-none outline-none focus:border-primary/40 transition-all cursor-pointer shadow-inner"
                                      >
                                        <option value="original-0" className="bg-background"> ORIG: {food.name.toUpperCase()}</option>
                                        {food.normalSwaps.length > 0 && <optgroup label="STRATEGIC OPTIONS" className="bg-background">
                                          {food.normalSwaps.map((sw, idx) => (
                                            <option key={`normal-${idx}`} value={`normal-${idx}`} className="bg-background"> {sw.name.toUpperCase()}</option>
                                          ))}
                                        </optgroup>}
                                        {food.veganSwaps.length > 0 && <optgroup label="PLANT-BASED HUB 🌿" className="bg-background">
                                          {food.veganSwaps.map((sw, idx) => (
                                            <option key={`vegan-${idx}`} value={`vegan-${idx}`} className="bg-background"> 🌿 {sw.name.toUpperCase()}</option>
                                          ))}
                                        </optgroup>}
                                      </select>
                                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-primary w-4 h-4 pointer-events-none opacity-40" />
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
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
