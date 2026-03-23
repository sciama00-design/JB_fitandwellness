import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { weeklyPlannerService } from '../../services/weeklyPlannerService';
import { geminiService } from '../../services/geminiService';
import { dietService } from '../../services/dietService';
import { useAuth } from '../../lib/auth';
import Modal from '../../components/Modal';

import { 
  Calendar as CalendarIcon, 
  Sparkles, 
  Loader2, 
  Clock, 
  AlertCircle,
  Trash2,
  Utensils,
  Plus,
  Edit2,
  ChevronDown,
  ChevronUp,
  Flame,
  Dumbbell,
  Droplets,
  CheckCircle2,
  Save
} from 'lucide-react';

import { supabase } from '../../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const getDayName = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('it-IT', { weekday: 'long' }).format(date);
};

const getWeekDates = () => {
  const now = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(now.getDate() + i);
    return date.toISOString().split('T')[0];
  });
};

function MealSlot({ type, mealData, onSave, isSaving }: { 
  type: string, 
  mealData: any, 
  onSave: (dish: string) => void,
  isSaving: boolean 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [dishName, setDishName] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dishName.trim()) {
      onSave(dishName);
      setIsEditing(false);
      setDishName('');
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden border-white/5 hover:border-primary/20 transition-all group/meal">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/30 flex items-center justify-center text-muted-foreground group-hover/meal:text-primary transition-colors">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <h6 className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-40">{type}</h6>
            {mealData ? (
              <p className="text-sm font-black text-foreground italic uppercase tracking-tight">{mealData.name}</p>
            ) : (
              <p className="text-xs text-muted-foreground/30 italic">da definire</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1">
          {mealData && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground transition-colors"
          >
            {mealData ? <Edit2 className="w-4 h-4" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isEditing && (
          <motion.form 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            onSubmit={handleSubmit} 
            className="px-4 pb-4 overflow-hidden"
          >
            <div className="flex gap-2">
              <input 
                autoFocus
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                placeholder="Cosa mangerai?"
                className="flex-1 bg-background/50 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-all placeholder:text-muted-foreground/20 italic"
              />
              <button 
                type="submit"
                disabled={isSaving || !dishName.trim()}
                className="bg-primary hover:bg-primary/80 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Ok'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && mealData && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 pb-4 pt-2 border-t border-white/5 bg-white/5 overflow-hidden"
          >
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: 'Kcal', val: mealData.total_kcal, icon: Flame, color: 'text-orange-400' },
                { label: 'Pro', val: `${mealData.foods?.reduce((acc: number, f: any) => acc + (f.macros?.p || 0), 0) || 0}g`, icon: Dumbbell, color: 'text-primary' },
                { label: 'Carb', val: `${mealData.foods?.reduce((acc: number, f: any) => acc + (f.macros?.c || 0), 0) || 0}g`, icon: Flame, color: 'text-amber-400' },
                { label: 'Fat', val: `${mealData.foods?.reduce((acc: number, f: any) => acc + (f.macros?.f || 0), 0) || 0}g`, icon: Droplets, color: 'text-rose-400' },
              ].map((m, i) => (
                <div key={i} className="bg-background/40 p-2 rounded-xl border border-white/5 flex flex-col items-center">
                  <m.icon className={clsx("w-3 h-3 mb-1", m.color)} />
                  <span className="text-[10px] font-black text-foreground italic leading-none">{m.val}</span>
                  <span className="text-[7px] uppercase text-muted-foreground font-black tracking-widest mt-0.5 opacity-40">{m.label}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1 block opacity-40">Ingredienti Stimati</span>
              <div className="space-y-1">
                {mealData.foods?.map((food: any, fIdx: number) => (
                  <div key={fIdx} className="flex items-center justify-between p-2.5 bg-background/30 rounded-xl text-[10px] font-medium border border-white/5">
                    <div className="flex items-center gap-2">
                      {food.is_official && <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />}
                      <span className="text-foreground/80 italic">{food.name}</span>
                    </div>
                    <span className="font-black text-primary italic uppercase">{food.qty_grams}g</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WeeklyPlanner() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [isGuidedCompiling, setIsGuidedCompiling] = useState(false);
  const [guidedPlanPreview, setGuidedPlanPreview] = useState<any>(null);
  const weekDates = getWeekDates();
  const [weeklyText, setWeeklyText] = useState('');
  const [guidedAnswers, setGuidedAnswers] = useState('');

  const { data: entries, isLoading: isLoadingEntries } = useQuery({
    queryKey: ['weekly-planner', user?.id],
    queryFn: () => weeklyPlannerService.getEntries(user!.id, weekDates[0], weekDates[6]),
    enabled: !!user?.id,
  });

  const { data: dietPlan } = useQuery({
    queryKey: ['athlete-diet', user?.id],
    queryFn: () => dietService.getAthleteDietPlan(user!.id),
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

  const extractMutation = useMutation({
    mutationFn: async () => {
      if (!user || !weeklyText) return;
      setIsExtracting(true);
      try {
        const extracted = await geminiService.extractWeeklyCommitments(weeklyText, weekDates);
        if (extracted && Array.isArray(extracted)) {
          for (const item of extracted) {
            const existing = entries?.find(e => e.date === item.date);
            await weeklyPlannerService.saveEntry({
              athlete_id: user.id,
              date: item.date,
              commitments: item.commitments || existing?.commitments || null,
              meals: item.meals || existing?.meals || null
            });
          }
        }
      } finally {
        setIsExtracting(false);
        setWeeklyText('');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weekly-planner', user?.id] });
    }
  });

  const guidedMutation = useMutation({
    mutationFn: async () => {
      if (!user) return;
      setIsGuidedCompiling(true);
      try {
        const fullContext = weeklyText + (guidedAnswers ? `\n\nAnswers to your questions:\n${guidedAnswers}` : '');
        const result = await geminiService.runGuidedWeeklyPlanner(user.id, fullContext, weekDates);
        setGuidedPlanPreview(result);
        if (result?.status === 'success') {
          // Non resettiamo weeklyText qui, lo facciamo alla conferma finale
        }
      } finally {
        setIsGuidedCompiling(false);
      }
    }
  });

  const confirmGuidedPlan = useMutation({
    mutationFn: async () => {
      if (!user || !guidedPlanPreview) return;
      for (const day of guidedPlanPreview.daily_plan) {
        await weeklyPlannerService.saveEntry({
          athlete_id: user.id,
          date: day.date,
          commitments: day.commitments?.join(', ') || null,
          ai_suggestions: JSON.stringify({
            focus: day.nutrition_focus,
            advice: day.advice,
            workout: day.workout_name
          })
        });
      }
      setGuidedPlanPreview(null);
      setWeeklyText('');
      setGuidedAnswers('');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weekly-planner', user?.id] });
    }
  });

  const saveMealMutation = useMutation({
    mutationFn: async ({ date, mealType, dishName }: { date: string, mealType: string, dishName: string }) => {
      if (!user) return;
      const decomposed = await geminiService.decomposeMeal(dishName, 500);
      if (!decomposed) return;

      const existing = entries?.find(e => e.date === date);
      const newMeals = { ...(existing?.meals || {}) };
      newMeals[mealType] = decomposed;

      await weeklyPlannerService.saveEntry({
        athlete_id: user.id,
        date,
        commitments: existing?.commitments || null,
        meals: newMeals
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weekly-planner', user?.id] });
    }
  });

  const deleteEntryMutation = useMutation({
    mutationFn: (id: string) => weeklyPlannerService.deleteEntry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weekly-planner', user?.id] });
    }
  });

  const optimizeMutation = useMutation({
    mutationFn: async () => {
      if (!user || !entries || !dietPlan) return;
      setIsOptimizing(true);
      try {
        const profileResponse = await supabase.from('profiles').select('*').eq('id', user.id).single();
        const advice = await geminiService.generateWeeklyOptimization(
          entries,
          dietPlan,
          activeWorkout,
          profileResponse.data
        );
        await weeklyPlannerService.saveEntry({
          athlete_id: user.id,
          date: new Date().toISOString().split('T')[0],
          ai_suggestions: advice
        });
      } finally {
        setIsOptimizing(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weekly-planner', user?.id] });
    }
  });

  if (isLoadingEntries) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-xs">Sincronizzazione agenda...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
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
          <h1 className="text-5xl font-black tracking-tighter text-foreground italic bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent uppercase">
            Planner
          </h1>
          <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.3em] text-[10px] opacity-60">
            Hardware for your soft schedule
          </p>
        </div>
        
        <button 
          onClick={() => optimizeMutation.mutate()}
          disabled={isOptimizing || !entries?.length}
          className="h-14 px-8 bg-primary text-white rounded-2xl font-black italic uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          {isOptimizing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
          Ottimizza IA
        </button>
      </div>

      <AnimatePresence>
        {entries?.some(e => e.ai_suggestions) && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 glass-card border-primary/20 bg-primary/5 rounded-[3rem] relative space-y-6"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Sparkles className="w-24 h-24 text-primary" />
            </div>
            <h3 className="text-primary font-black italic uppercase tracking-widest text-[10px] flex items-center gap-2 relative z-10">
              <Sparkles className="w-4 h-4" />
              Consigli Strategici
            </h3>
            <div className="space-y-4 relative z-10">
              {entries.filter(e => e.ai_suggestions).map((e, idx) => {
                let advice = e.ai_suggestions;
                let focus = "";
                try {
                  const parsed = JSON.parse(e.ai_suggestions!);
                  advice = parsed.advice;
                  focus = parsed.focus;
                } catch (err) {}
                
                return (
                  <div key={idx} className="p-6 bg-background/50 border border-white/5 rounded-[2rem] text-sm text-foreground/80 italic leading-relaxed shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <span className="font-black text-primary not-italic mr-3 uppercase tracking-widest text-[10px]">{e.date}</span>
                      {advice}
                    </div>
                    {focus && (
                      <span className="px-3 py-1 bg-secondary/30 rounded-full text-[9px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap border border-white/5">
                        {focus}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Input Area */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass-card p-10 rounded-[3rem] border-white/5 space-y-8 sticky top-24 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles className="w-32 h-32 text-primary" />
            </div>
            
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tighter">I Tuoi Impegni</h3>
              <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Linguaggio naturale</p>
            </div>

            <div className="space-y-6 relative z-10">
              <textarea 
                value={weeklyText}
                onChange={(e) => setWeeklyText(e.target.value)}
                placeholder="Esempio: Lunedì viaggio a Milano, Mercoledì cena fuori con amici, Venerdì lavoro fino a tardi..."
                className="w-full bg-background/50 border border-white/5 rounded-[2rem] p-8 text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all h-64 resize-none text-base leading-relaxed italic placeholder:text-muted-foreground/20"
              />
              
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => extractMutation.mutate()}
                  className="h-16 bg-primary text-white rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-98 transition-all disabled:opacity-30"
                  disabled={!weeklyText || isExtracting}
                >
                  {isExtracting ? <Loader2 className="w-6 h-6 animate-spin" /> : <Sparkles className="w-6 h-6" />}
                  Analisi Rapida
                </button>
                <button 
                  onClick={() => guidedMutation.mutate()}
                  className="h-16 bg-secondary/20 border border-white/10 text-foreground rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-secondary/30 active:scale-98 transition-all disabled:opacity-30"
                  disabled={isGuidedCompiling}
                >
                  {isGuidedCompiling ? <Loader2 className="w-6 h-6 animate-spin" /> : <Sparkles className="w-6 h-6 text-primary" />}
                  Piano Guidato
                </button>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <div className="flex items-start gap-4 p-5 bg-muted/20 rounded-[2rem] border border-white/5">
                <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                <p className="text-[10px] text-muted-foreground/60 leading-relaxed italic font-medium">
                  L'IA integrerà i tuoi impegni con il piano di allenamento e nutrizione per massimizzare l'aderenza.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Days List */}
        <div className="lg:col-span-8 space-y-6">
          {weekDates.map((date) => {
            const entry = entries?.find(e => e.date === date);
            return (
              <motion.div 
                key={date} 
                variants={itemVariants}
                className="glass-card rounded-[3rem] border-white/5 overflow-hidden hover:border-white/10 transition-all shadow-xl group/day"
              >
                <div className="px-10 py-6 bg-white/5 flex items-center justify-between border-b border-white/5 group-hover/day:bg-white/[0.08] transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-background/80 shadow-inner flex items-center justify-center font-black text-xl text-muted-foreground italic uppercase group-hover/day:text-primary transition-colors">
                      {getDayName(date).substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-black text-foreground text-2xl uppercase italic tracking-tighter leading-none">{getDayName(date)}</h4>
                      <span className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.3em] opacity-40 mt-1 block">
                        {date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-10 space-y-10">
                  <div className="space-y-4">
                    <h5 className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-4 flex items-center gap-3 opacity-40">
                      <CalendarIcon className="w-4 h-4 text-primary" />
                      Commitments
                    </h5>
                    {entry?.commitments ? (
                      <div className="flex items-center justify-between p-6 bg-secondary/10 rounded-[2rem] border border-white/5 group/item hover:bg-secondary/20 transition-all">
                        <div className="flex items-center gap-4">
                          <Clock className="w-5 h-5 text-primary" />
                          <span className="text-base font-medium text-foreground italic">{entry.commitments}</span>
                        </div>
                        <button 
                          onClick={() => deleteEntryMutation.mutate(entry.id)}
                          className="p-3 text-red-500/20 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground/20 italic px-8 py-4 border border-dashed border-white/5 rounded-[2rem]">
                        Nessun impegno salvato
                      </p>
                    )}
                  </div>

                  <div className="space-y-6">
                    <h5 className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-4 flex items-center gap-3 opacity-40">
                      <Utensils className="w-4 h-4 text-primary" />
                      Nutritional Plan
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['colazione', 'pranzo', 'spuntino', 'cena'].map((mealType) => (
                        <MealSlot 
                          key={mealType}
                          type={mealType}
                          mealData={entry?.meals?.[mealType]}
                          onSave={(dishName) => saveMealMutation.mutate({ date, mealType, dishName })}
                          isSaving={saveMealMutation.isPending}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Guided Plan Modal */}
      <Modal 
        isOpen={!!guidedPlanPreview} 
        onClose={() => {
          setGuidedPlanPreview(null);
          setGuidedAnswers('');
        }}
      >
        <div className="p-4 space-y-10">
          <div className="text-center space-y-2">
            <div className="w-20 h-20 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mx-auto border border-primary/20 mb-4">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">
              {guidedPlanPreview?.status === 'need_info' ? 'Info Mancanti' : 'Proposta IA'}
            </h3>
            <p className="text-muted-foreground font-black uppercase text-[10px] tracking-widest opacity-60">
              {guidedPlanPreview?.status === 'need_info' ? 'L\'IA ha bisogno di più contesto' : 'Pianificazione Ottimizzata'}
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <Sparkles className="w-24 h-24 text-primary" />
             </div>
             <p className="text-base text-foreground italic leading-relaxed relative z-10 font-medium">
               "{guidedPlanPreview?.summary}"
             </p>
          </div>
          
          {guidedPlanPreview?.status === 'need_info' ? (
            <div className="space-y-6">
              <div className="space-y-3">
                {guidedPlanPreview.questions.map((q: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-secondary/10 border border-white/5 rounded-2xl">
                    <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-black text-primary">{i + 1}</span>
                    </div>
                    <p className="text-sm text-foreground/80 italic font-medium">{q}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4">
                <textarea 
                  value={guidedAnswers}
                  onChange={(e) => setGuidedAnswers(e.target.value)}
                  placeholder="Rispondi qui alle domande..."
                  className="w-full bg-background/50 border border-white/5 rounded-[1.5rem] p-6 text-sm text-foreground outline-none focus:border-primary/30 h-32 resize-none italic placeholder:text-muted-foreground/20"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => {
                      setGuidedPlanPreview(null);
                      setGuidedAnswers('');
                    }}
                    className="h-16 rounded-[1.5rem] font-black italic uppercase tracking-widest text-[10px] bg-secondary/20 hover:bg-secondary/30 transition-all text-muted-foreground"
                  >
                    Annulla
                  </button>
                  <button 
                    onClick={() => guidedMutation.mutate()}
                    disabled={!guidedAnswers.trim() || isGuidedCompiling}
                    className="h-16 rounded-[1.5rem] font-black italic uppercase tracking-widest text-[10px] bg-primary text-white hover:scale-105 shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isGuidedCompiling ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Invia Risposte'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {guidedPlanPreview?.daily_plan?.map((day: any, dIdx: number) => (
                  <div key={dIdx} className="p-6 bg-secondary/20 border border-white/5 rounded-[2rem] flex items-center justify-between group hover:bg-secondary/30 transition-all">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">{day.date}</span>
                        <span className={clsx(
                          "px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border",
                          day.type === 'workout' ? "bg-primary text-white border-primary" : "bg-background text-muted-foreground border-border"
                        )}>
                          {day.type === 'workout' ? 'Work' : 'Rest'}
                        </span>
                      </div>
                      <h4 className="font-black text-foreground uppercase italic tracking-tight text-lg leading-tight">{day.type === 'workout' ? day.workout_name : 'Riposo / Recupero'}</h4>
                      <p className="text-xs text-muted-foreground italic font-medium">{day.advice}</p>
                    </div>
                    <div className="text-right">
                      <span className={clsx(
                        "text-[9px] px-4 py-2 rounded-xl font-black uppercase tracking-widest border block",
                        day.nutrition_focus?.includes('High') ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 
                        day.nutrition_focus?.includes('Low') ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-background border-border text-muted-foreground'
                      )}>
                        {day.nutrition_focus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {guidedPlanPreview?.conflicts_resolved?.length > 0 && (
                <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-[2rem] space-y-3">
                  <h5 className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em]">Conflitti Gestiti</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {guidedPlanPreview.conflicts_resolved.map((c: string, cIdx: number) => (
                      <div key={cIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/70 font-medium italic">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button 
                  onClick={() => {
                    setGuidedPlanPreview(null);
                    setGuidedAnswers('');
                  }}
                  className="h-16 rounded-[1.5rem] font-black italic uppercase tracking-widest text-[10px] bg-secondary/20 hover:bg-secondary/30 transition-all text-muted-foreground"
                >
                  Scarta
                </button>
                <button 
                  onClick={() => confirmGuidedPlan.mutate()}
                  className="h-16 rounded-[1.5rem] font-black italic uppercase tracking-widest text-[10px] bg-primary text-white hover:scale-105 shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  disabled={confirmGuidedPlan.isPending}
                >
                  {confirmGuidedPlan.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4" /> Conferma</>}
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </motion.div>
  );
}
