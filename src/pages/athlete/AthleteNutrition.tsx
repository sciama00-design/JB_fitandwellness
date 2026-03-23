import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { dietService } from '../../services/dietService';
import { geminiService } from '../../services/geminiService';
import { useAuth } from '../../lib/auth';
import { supabase } from '../../lib/supabase';
import { 
  Apple, 
  Flame, 
  Dumbbell, 
  Droplets, 
  ChevronDown, 
  Leaf, 
  Sparkles, 
  Loader2,
  AlertCircle,
  Settings2
} from 'lucide-react';
import { DIET_TEMPLATES } from '../../data/dietTemplates';
import DietPreferencesModal from '../../components/athlete/DietPreferencesModal';
import NutritionEnrichment from '../../components/athlete/NutritionEnrichment';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function AthleteNutrition() {
  const { user } = useAuth();
  const [swaps, setSwaps] = useState<Record<string, { type: 'original' | 'normal' | 'vegan', swapIndex: number }>>({});
  const [aiAdvice, setAiAdvice] = useState<string[] | null>(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  const { data: dietPlan, isLoading: isLoadingDiet, error: dietError } = useQuery({
    queryKey: ['athlete-diet', user?.id],
    queryFn: () => dietService.getAthleteDietPlan(user!.id),
    enabled: !!user?.id,
  });

  const { data: profile } = useQuery({
    queryKey: ['athlete-profile', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', user!.id).single();
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const { data: activeWorkout } = useQuery({
    queryKey: ['active-workout', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase.from('workout_plans').select('*').eq('athlete_id', user!.id).eq('active', true).maybeSingle();
      if (error && error.code !== 'PGRST116') throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  useMemo(() => {
    if (dietPlan?.selections) {
      setSwaps(dietPlan.selections);
    }
  }, [dietPlan]);

  const generateAiStrategy = async () => {
    if (!user || !dietPlan) return;
    setIsGeneratingAi(true);
    try {
      const advice = await geminiService.generateStrategicAdvice(
        { kcal: dietPlan.target_kcal },
        { name: "Sessione di oggi" }
      );
      if (advice) setAiAdvice(advice.advice);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingAi(false);
    }
  };

  if (isLoadingDiet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-xs">Caricamento piano...</p>
      </div>
    );
  }

  if (dietError || !dietPlan) {
    return (
      <div className="max-w-md mx-auto py-20 px-6 text-center space-y-8">
        <div className="w-24 h-24 bg-secondary/20 rounded-[2.5rem] flex items-center justify-center mx-auto border border-border">
          <Apple className="w-10 h-10 text-muted-foreground opacity-20" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-foreground italic uppercase">Nessun piano</h2>
          <p className="text-muted-foreground font-medium leading-relaxed">
            Il tuo coach non ha ancora assegnato un piano alimentare.
          </p>
        </div>
      </div>
    );
  }

  const template = DIET_TEMPLATES.find(t => t.id === dietPlan.template_id) || DIET_TEMPLATES[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12 pb-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-1">
        <div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter text-foreground italic bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Nutrition
          </h1>
          <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.2em] text-xs opacity-60">
            Target attuale: <span className="text-primary font-black italic">{dietPlan.target_kcal} kcal</span>
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPreferencesOpen(true)}
            className="h-12 px-6 glass-card rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-white/5 active:scale-95 transition-all text-muted-foreground"
          >
            <Settings2 className="w-4 h-4" />
            Preferenze
          </button>
          <button 
            onClick={generateAiStrategy}
            disabled={isGeneratingAi}
            className="h-12 px-6 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            {isGeneratingAi ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Chiedi all'IA
          </button>
        </div>
      </div>

      <AnimatePresence>
        {aiAdvice && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 glass-card border-primary/20 bg-primary/5 rounded-[2.5rem] relative space-y-6">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sparkles className="w-24 h-24 text-primary" />
              </div>
              <h3 className="text-primary font-black italic uppercase tracking-widest text-xs flex items-center gap-2 relative z-10">
                <Sparkles className="w-4 h-4" />
                Consigli Strategici
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                {aiAdvice.map((advice, i) => (
                  <div key={i} className="p-4 bg-background/50 border border-white/5 rounded-2xl text-[13px] font-medium italic text-foreground/80 leading-relaxed shadow-sm">
                    {advice}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Enrichment */}
      <NutritionEnrichment 
        dietPlan={dietPlan} 
        profile={profile} 
        workoutPlan={activeWorkout} 
      />

      {/* Macros Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Kcal target', val: dietPlan.target_kcal, icon: Flame, color: 'text-orange-400' },
          { label: 'Proteine', val: `${Math.round((dietPlan.target_kcal * 0.3) / 4)}g`, icon: Dumbbell, color: 'text-primary' },
          { label: 'Carbo', val: `${Math.round((dietPlan.target_kcal * 0.45) / 4)}g`, icon: Flame, color: 'text-amber-400' },
          { label: 'Grassi', val: `${Math.round((dietPlan.target_kcal * 0.25) / 9)}g`, icon: Droplets, color: 'text-rose-400' },
        ].map((macro, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="glass-card p-6 rounded-3xl border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all"
          >
             <macro.icon className={clsx("w-6 h-6 mb-3 transition-transform group-hover:scale-110", macro.color)} />
             <span className="text-2xl font-black text-foreground italic tracking-tight">{macro.val}</span>
             <span className="text-[9px] uppercase font-black text-muted-foreground tracking-[0.2em] opacity-40 mt-1">{macro.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Meals List */}
      <div className="space-y-8">
        {template.meals.map((meal, mealIndex) => (
          <motion.div 
            key={mealIndex}
            variants={itemVariants}
            className="glass-card rounded-[2.5rem] border-white/5 overflow-hidden shadow-2xl group"
          >
            <div className="px-8 py-6 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-black text-foreground italic uppercase tracking-tight">{meal.name}</h3>
              <span className="text-[10px] bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20 font-black uppercase tracking-widest">
                ~ {Math.round(dietPlan.target_kcal / template.meals.length)} kcal
              </span>
            </div>
            
            <div className="p-6 space-y-4">
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

                const dynamicQty = Math.round((displayBaseQty * (dietPlan.target_kcal / 1911)) / 5) * 5;

                return (
                  <div key={foodIndex} className="p-6 bg-secondary/20 border border-white/5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-secondary/30 transition-all group/food">
                    <div className="flex items-center gap-5">
                      <div className="flex flex-col items-center justify-center bg-background/50 w-16 h-16 rounded-2xl border border-border shadow-inner group-hover/food:scale-105 transition-transform">
                        <span className="text-xl font-black text-foreground italic leading-none">{dynamicQty}</span>
                        <span className="text-[8px] font-black text-muted-foreground uppercase mt-1">grammi</span>
                      </div>
                      <div className="flex flex-col">
                        <span className={clsx(
                          "text-lg font-black italic tracking-tight uppercase leading-none",
                          isVegan ? 'text-primary' : 'text-foreground'
                        )}>
                          {displayFoodName}
                        </span>
                        {isVegan && (
                          <span className="flex items-center gap-1.5 text-[9px] text-primary font-black uppercase tracking-widest mt-2">
                            <Leaf className="w-3 h-3" /> Vegano
                          </span>
                        )}
                      </div>
                    </div>

                    {(food.normalSwaps.length > 0 || food.veganSwaps.length > 0) && (
                      <div className="relative md:w-80">
                        <select
                          value={`${currentSwap.type}-${currentSwap.swapIndex}`}
                          onChange={(e) => {
                            const [type, index] = e.target.value.split('-');
                            setSwaps(prev => ({
                              ...prev,
                              [swapKey]: { type: type as any, swapIndex: Number(index) }
                            }));
                          }}
                          className="w-full bg-background border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground rounded-2xl pl-5 pr-12 py-4 appearance-none outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all cursor-pointer shadow-sm"
                        >
                          <option value="original-0" className="bg-background">Base: {food.name}</option>
                          {food.normalSwaps.length > 0 && (
                            <optgroup label="ALTERNATIVE" className="bg-background">
                              {food.normalSwaps.map((sw, idx) => (
                                <option key={`normal-${idx}`} value={`normal-${idx}`} className="bg-background">{sw.name}</option>
                              ))}
                            </optgroup>
                          )}
                          {food.veganSwaps.length > 0 && (
                            <optgroup label="OPZIONI VEGANE" className="bg-background">
                              {food.veganSwaps.map((sw, idx) => (
                                <option key={`vegan-${idx}`} value={`vegan-${idx}`} className="bg-background">🌿 {sw.name}</option>
                              ))}
                            </optgroup>
                          )}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none opacity-40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer info */}
      <div className="p-8 glass-card border-white/5 rounded-[2.5rem] flex items-start gap-4">
        <div className="p-2 bg-muted/20 rounded-xl">
          <AlertCircle className="w-5 h-5 text-muted-foreground" />
        </div>
        <p className="text-[11px] font-bold text-muted-foreground leading-relaxed italic opacity-60">
          Le quantità sono calcolate in base al tuo target calorico personalizzato. 
          Il sistema degli scambi ti permette di variare gli alimenti mantenendo l'aderenza ai macro. 
          Per qualsiasi dubbio, contatta il tuo coach tramite la sezione messaggi o durante il check-in.
        </p>
      </div>

      <DietPreferencesModal 
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
      />
    </motion.div>
  );
}
