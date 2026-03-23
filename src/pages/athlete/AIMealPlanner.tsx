import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { dietService } from '../../services/dietService';
import { geminiService } from '../../services/geminiService';
import { useAuth } from '../../lib/auth';
import { 
  Flame, 
  Dumbbell, 
  Droplets, 
  Clock, 
  Sparkles, 
  Loader2,
  RefreshCw,
  Utensils,
  Settings2,
  Brain,
  Quote
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import DietPreferencesModal from '../../components/athlete/DietPreferencesModal';
import RecipeSwiper from '../../components/athlete/RecipeSwiper';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function AIMealPlanner() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [swappingMealIndex, setSwappingMealIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'plan' | 'explore'>('plan');

  const { data: dietPlan, isLoading: isLoadingPlan } = useQuery({
    queryKey: ['athlete-diet', user?.id],
    queryFn: () => dietService.getAthleteDietPlan(user!.id),
    enabled: !!user?.id,
  });

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['athlete-profile', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', user!.id).single();
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const { data: aiMealPlan, isLoading: isLoadingAIMeal } = useQuery({
    queryKey: ['athlete-ai-meal', user?.id],
    queryFn: () => dietService.getTodayAIMealPlan(user!.id),
    enabled: !!user?.id,
  });

  const generateAIPlanMutation = useMutation({
    mutationFn: async () => {
      if (!dietPlan || !profile) return;
      setIsGenerating(true);
      try {
        const targetMacros = {
          kcal: dietPlan.target_kcal,
          protein: dietPlan.target_protein || Math.round((dietPlan.target_kcal * 0.3) / 4),
          carbs: dietPlan.target_carbs || Math.round((dietPlan.target_kcal * 0.45) / 4),
          fat: dietPlan.target_fats || Math.round((dietPlan.target_kcal * 0.25) / 9)
        };

        const result = await geminiService.generateMealPlan(
          dietPlan.ai_guidelines,
          targetMacros,
          profile
        );

        if (result && result.meals) {
          await dietService.saveAIMealPlan({
            athlete_id: user!.id,
            coach_id: dietPlan.coach_id,
            date: new Date().toISOString().split('T')[0],
            meals: result.meals
          });
        }
      } finally {
        setIsGenerating(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-ai-meal', user?.id] });
    }
  });

  const swapMealMutation = useMutation({
    mutationFn: async ({ mealIndex, reason }: { mealIndex: number, reason: string }) => {
      if (!aiMealPlan || !dietPlan || !profile) return;
      setSwappingMealIndex(mealIndex);
      try {
        const mealToSwap = aiMealPlan.meals[mealIndex];
        const constraints = {
          preferences: profile.dietary_preferences,
          intolerances: profile.intolerances,
          disliked: profile.disliked_foods
        };

        const result = await geminiService.regenerateMeal(
          mealToSwap.name,
          { kcal: mealToSwap.total_kcal },
          constraints,
          reason
        );

        if (result) {
          const newMeals = [...aiMealPlan.meals];
          newMeals[mealIndex] = result;
          await dietService.saveAIMealPlan({
            ...aiMealPlan,
            meals: newMeals
          });
        }
      } finally {
        setSwappingMealIndex(null);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-ai-meal', user?.id] });
    }
  });

  if (isLoadingPlan || isLoadingProfile || isLoadingAIMeal) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="text-muted-foreground font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">Syncing Nutrition Data...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-12 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-[2rem] bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 relative group">
            <Sparkles className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 blur-xl bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div>
            <h1 className="text-4xl font-black text-foreground tracking-tighter italic uppercase leading-none">AI Nutrition Hub</h1>
            <p className="text-muted-foreground mt-2 font-bold uppercase tracking-[0.3em] text-[10px] opacity-40">Decomposizione macrobiotica intelligente</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsPreferencesOpen(true)}
            className="h-14 px-6 glass-card rounded-2xl flex items-center gap-3 font-black italic uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all outline-none border-white/5"
          >
            <Settings2 className="w-4 h-4 text-primary" />
            Preferenze
          </button>
          {!aiMealPlan && (
            <button 
              onClick={() => generateAIPlanMutation.mutate()}
              disabled={isGenerating}
              className="h-14 px-8 bg-primary text-white rounded-2xl flex items-center gap-3 font-black italic uppercase tracking-widest text-[10px] shadow-2xl shadow-primary/30 transition-all hover:scale-105 disabled:opacity-50"
            >
              {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
              Genera Piano
            </button>
          )}
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex p-1.5 bg-secondary/5 backdrop-blur-md rounded-[2rem] border border-white/5 w-full max-w-sm mx-auto shadow-2xl">
        <button 
          onClick={() => setActiveTab('plan')}
          className={clsx(
            "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all",
            activeTab === 'plan' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Utensils className="w-4 h-4" />
          Pasti Oggi
        </button>
        <button 
          onClick={() => setActiveTab('explore')}
          className={clsx(
            "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all",
            activeTab === 'explore' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Sparkles className="w-4 h-4" />
          Esplora
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'plan' ? (
          <motion.div 
            key="plan-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {/* Guidelines Banner */}
            {dietPlan?.ai_guidelines && (
              <div className="glass-card p-8 rounded-[2.5rem] border-primary/20 bg-primary/2 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <Brain className="w-32 h-32" />
                </div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">Strategia del Coach</h4>
                </div>
                <p className="text-foreground text-lg italic font-medium leading-relaxed max-w-2xl relative z-10">
                  "{dietPlan.ai_guidelines}"
                </p>
              </div>
            )}

            {/* Daily Macros Overview */}
            {aiMealPlan && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card p-8 rounded-[2rem] border-white/5 bg-secondary/5 text-center group hover:bg-secondary/10 transition-all">
                  <Flame className="w-5 h-5 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-black text-foreground italic tracking-tighter leading-none">{dietPlan?.target_kcal}</p>
                  <p className="text-[9px] uppercase font-black text-muted-foreground mt-2 tracking-[0.2em] opacity-40">Energia / Kcal</p>
                </div>
                <div className="glass-card p-8 rounded-[2rem] border-white/5 bg-secondary/5 text-center group hover:bg-secondary/10 transition-all">
                  <Dumbbell className="w-5 h-5 text-indigo-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-black text-foreground italic tracking-tighter leading-none">{dietPlan?.target_protein}g</p>
                  <p className="text-[9px] uppercase font-black text-muted-foreground mt-2 tracking-[0.2em] opacity-40">Proteine</p>
                </div>
                <div className="glass-card p-8 rounded-[2rem] border-white/5 bg-secondary/5 text-center group hover:bg-secondary/10 transition-all">
                  <Flame className="w-5 h-5 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-black text-foreground italic tracking-tighter leading-none">{dietPlan?.target_carbs}g</p>
                  <p className="text-[9px] uppercase font-black text-muted-foreground mt-2 tracking-[0.2em] opacity-40">Carboidrati</p>
                </div>
                <div className="glass-card p-8 rounded-[2rem] border-white/5 bg-secondary/5 text-center group hover:bg-secondary/10 transition-all">
                  <Droplets className="w-5 h-5 text-rose-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-black text-foreground italic tracking-tighter leading-none">{dietPlan?.target_fats}g</p>
                  <p className="text-[9px] uppercase font-black text-muted-foreground mt-2 tracking-[0.2em] opacity-40">Grassi</p>
                </div>
              </div>
            )}

            {/* Meals List */}
            {aiMealPlan ? (
              <div className="space-y-8">
                {aiMealPlan.meals.map((meal: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    layout
                    className="glass-card rounded-[3rem] border-white/[0.03] overflow-hidden shadow-2xl bg-secondary/5 group"
                  >
                    <div className="px-10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.03]">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-primary/20 shadow-inner">
                          <Utensils className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tighter">{meal.name}</h3>
                            <span className="px-3 py-1 bg-background/50 backdrop-blur-md rounded-lg text-[9px] font-black text-primary uppercase tracking-widest border border-white/5">
                               ~{meal.total_kcal} KCAL
                            </span>
                          </div>
                          <p className="text-[9px] text-muted-foreground flex items-center gap-2 uppercase tracking-[0.2em] font-black opacity-40">
                            <Clock className="w-3.5 h-3.5" /> Timing: {meal.time_hint}
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const reason = window.prompt("Specifica il motivo della variazione strategica:");
                          if (reason) swapMealMutation.mutate({ mealIndex: idx, reason });
                        }}
                        disabled={swappingMealIndex === idx}
                        className="h-10 px-6 bg-background/40 hover:bg-white/5 rounded-xl text-foreground transition-all flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border border-white/5 group/btn"
                      >
                        {swappingMealIndex === idx ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4 group-hover/btn:rotate-180 transition-transform" />}
                        Swappa Pasto
                      </button>
                    </div>
                    
                    <div className="p-8 grid gap-4">
                      {meal.foods.map((food: any, fIdx: number) => (
                        <div key={fIdx} className="flex items-center justify-between p-6 bg-background/30 rounded-2xl border border-white/[0.02] hover:border-white/10 transition-all group/food">
                          <div className="flex items-center gap-6">
                            <span className="w-16 text-center font-black text-primary text-lg italic">{food.qty_grams}<span className="text-[10px] uppercase font-black not-italic opacity-40 ml-1">G</span></span>
                            <div className="space-y-0.5">
                              <span className="text-foreground font-black italic uppercase tracking-tight text-lg group-hover/food:text-primary transition-colors">{food.name}</span>
                              <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-30">Apporto densità variabile</p>
                            </div>
                          </div>
                          <div className="hidden sm:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-30">
                             <div className="flex flex-col items-end"><span className="text-foreground italic">{food.macros.p}g</span><span>PRO</span></div>
                             <div className="flex flex-col items-end"><span className="text-amber-500 italic">{food.macros.c}g</span><span>CHO</span></div>
                             <div className="flex flex-col items-end"><span className="text-rose-500 italic">{food.macros.f}g</span><span>FAT</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <button 
                  onClick={() => {
                    if(window.confirm("Attenzione: La rigenerazione sovrascriverà il piano attuale. Procedere?")) {
                      generateAIPlanMutation.mutate();
                    }
                  }}
                  className="w-full h-16 glass-card rounded-2xl border-dashed border-2 border-white/5 hover:border-primary/20 flex items-center justify-center gap-4 text-muted-foreground hover:text-primary transition-all text-[11px] font-black uppercase tracking-widest italic group"
                >
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-all duration-1000" />
                  Ripristina / Rigenera Protocollo Giornaliero
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-20 glass-card rounded-[4rem] border-dashed border-2 border-white/5 bg-secondary/2 text-center space-y-8">
                <div className="w-24 h-24 bg-primary/10 rounded-[3rem] flex items-center justify-center border border-primary/20 relative">
                  <Sparkles className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 blur-2xl bg-primary/20 opacity-40"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Ready to Optimize?</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto font-medium text-sm leading-relaxed opacity-60">
                    L'intelligenza artificiale mapperà i tuoi obiettivi bio-metabolici per generare un piano nutrizionale ad alta precisione.
                  </p>
                </div>
                <button 
                  onClick={() => generateAIPlanMutation.mutate()}
                  disabled={isGenerating}
                  className="h-14 px-10 bg-primary text-white rounded-2xl shadow-2xl shadow-primary/30 flex items-center gap-4 font-black italic uppercase tracking-widest text-[11px] transition-all hover:scale-105 disabled:opacity-50"
                >
                  {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  Genera Protocollo IA
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="explore-tab"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-12"
          >
             <div className="text-center space-y-2">
                <h2 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Gastro-Exploration</h2>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-40">Swipe per scoprire ricette bilanciate basate sul tuo target</p>
             </div>
             <RecipeSwiper 
                athleteId={user!.id} 
                targetKcal={Math.round((dietPlan?.target_kcal || 2000) / (profile?.meals_per_day || 4))}
                preferences={{
                  dietary_preferences: profile?.dietary_preferences,
                  intolerances: profile?.intolerances,
                  disliked_foods: profile?.disliked_foods
                }}
             />
          </motion.div>
        )}
      </AnimatePresence>

      <DietPreferencesModal 
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
      />
    </motion.div>
  );
}
