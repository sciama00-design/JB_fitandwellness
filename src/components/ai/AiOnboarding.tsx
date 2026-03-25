import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Dumbbell, Apple, Brain, 
  ChevronRight, ChevronLeft, Check, 
  X, Info, BookOpen, Users, Calendar, Search
} from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { coachPreferenceService } from '../../services/coachPreferenceService';
import { supabase } from '../../lib/supabase';
import { toast } from 'sonner';
import { cn } from '../../lib/utils';

interface Step {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  content: React.ReactNode;
}

interface AiOnboardingProps {
    onComplete?: () => void;
    onClose?: () => void;
}

export function AiOnboarding({ onComplete, onClose }: AiOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const { user } = useAuth();

  // Local state for preferences being defined in onboarding
  const [workoutPref, setWorkoutPref] = useState('');
  const [nutritionPref, setNutritionPref] = useState('');
  const [strategicPref, setStrategicPref] = useState('');

  const steps: Step[] = [
    {
      id: 'welcome',
      title: 'Benvenuto nel Futuro del Coaching',
      subtitle: 'Configuriamo insieme il tuo assistente IA per renderlo unico.',
      icon: Sparkles,
      content: (
        <div className="space-y-6 text-center">
            <div className="flex justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                    <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/20 flex items-center justify-center relative">
                        <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-sm mx-auto">
                    Questa procedura ti aiuterà a definire come l'intelligenza artificiale dovrà comportarsi quando genera allenamenti, diete e analisi per i tuoi atleti.
                </p>
                <div className="grid grid-cols-1 gap-3 mt-8">
                    <FeatureItem icon={Check} text="Personalizza lo stile di coaching" />
                    <FeatureItem icon={Check} text="Definisci regole per l'allenamento" />
                    <FeatureItem icon={Check} text="Imposta linee guida nutrizionali" />
                </div>
            </div>
        </div>
      )
    },
    {
      id: 'workout',
      title: 'Filosofia di Allenamento',
      subtitle: 'Come vuoi che vengano strutturate le schede?',
      icon: Dumbbell,
      content: (
        <div className="space-y-6">
            <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1">Esempio di direttiva:</p>
                <p className="text-xs text-muted-foreground italic">"Prediligi esercizi multiarticolari all'inizio, usa il buffer (RPE 7-8) per i principianti e inserisci sempre una fase di attivazione."</p>
            </div>
            <textarea 
                value={workoutPref}
                onChange={(e) => setWorkoutPref(e.target.value)}
                placeholder="Scrivi qui la tua filosofia generale di allenamento..."
                className="w-full h-40 bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all resize-none"
            />
            <p className="text-[10px] text-muted-foreground/40 text-center uppercase font-bold tracking-tighter">
                Queste direttive verranno usate dall'IA ogni volta che generi una scheda.
            </p>
        </div>
      )
    },
    {
      id: 'nutrition',
      title: 'Linee Guida Alimentari',
      subtitle: 'Quali sono i tuoi principi nutrizionali?',
      icon: Apple,
      content: (
        <div className="space-y-6">
            <div className="bg-accent/5 p-4 rounded-2xl border border-accent/10">
                <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-1">Esempio di direttiva:</p>
                <p className="text-xs text-muted-foreground italic">"Non scendere mai sotto i 0.8g/kg di grassi, prediligi fonti proteiche magre e includi sempre una porzione di verdura a foglia verde."</p>
            </div>
            <textarea 
                value={nutritionPref}
                onChange={(e) => setNutritionPref(e.target.value)}
                placeholder="Definisci le tue regole per la creazione dei piani alimentari..."
                className="w-full h-40 bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all resize-none"
            />
        </div>
      )
    },
    {
        id: 'strategic',
        title: 'Briefing Strategico',
        subtitle: 'Come deve analizzare i progressi dei tuoi atleti?',
        icon: Brain,
        content: (
          <div className="space-y-6">
              <div className="bg-purple-500/5 p-4 rounded-2xl border border-purple-500/10">
                  <p className="text-[11px] font-bold text-purple-400 uppercase tracking-widest mb-1">Esempio di direttiva:</p>
                  <p className="text-xs text-muted-foreground italic">"Sii molto critico se il volume cala drasticamente. Evidenzia subito se l'atleta non sta inserendo i feedback soggettivi."</p>
              </div>
              <textarea 
                  value={strategicPref}
                  onChange={(e) => setStrategicPref(e.target.value)}
                  placeholder="Istruzioni per l'analisi dei dati e il report mensile..."
                  className="w-full h-40 bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all resize-none"
              />
          </div>
        )
      },
      {
        id: 'mapping',
        title: 'Mapping Esercizi',
        subtitle: 'Parla la stessa lingua dell\'IA.',
        icon: Search,
        content: (
            <div className="space-y-6">
                <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                        <Search className="text-primary w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest italic">Cos'è il Mapping?</h4>
                        <p className="text-xs text-muted-foreground/60 mt-2 leading-relaxed">
                            Se chiami la "Panca Piana" come "Panca Bil", l'IA potrebbe non riconoscerla subito. 
                            Nella sezione **AI Options** potrai mappare ogni tuo nome gergale agli esercizi ufficiali della libreria.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl">
                    <Info className="text-emerald-400 shrink-0" size={18} />
                    <p className="text-[11px] text-emerald-400/80 font-medium">
                        Questo passaggio garantisce che i pesi e i progressi vengano tracciati correttamente anche se usi nomi personalizzati.
                    </p>
                </div>
            </div>
        )
      },
    {
      id: 'tour',
      title: 'Esplora le Sezioni',
      subtitle: 'Tutto ciò che ti serve per scalare il tuo coaching.',
      icon: BookOpen,
      content: (
        <div className="grid grid-cols-2 gap-3">
            <TourCard icon={Users} title="Atleti" desc="Gestione 360°, biometria e progressi." />
            <TourCard icon={Calendar} title="Calendario" desc="Appuntamenti e task giornaliere." />
            <TourCard icon={Dumbbell} title="Piani" desc="Editor avanzato assistito dall'IA." />
            <TourCard icon={Sparkles} title="IA Options" desc="Il cuore del tuo assistente digitale." />
        </div>
      )
    },
    {
        id: 'finish',
        title: 'Sei Pronto!',
        subtitle: 'La tua esperienza personalizzata è configurata.',
        icon: Check,
        content: (
            <div className="space-y-8 py-4 text-center">
                <div className="relative inline-block">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center relative z-10"
                    >
                        <Check className="w-12 h-12 text-emerald-500" />
                    </motion.div>
                    <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-emerald-500/20 rounded-full"
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs mx-auto">
                        Le tue preferenze sono state salvate. Puoi modificarle in qualsiasi momento nella sezione <strong>AI Options</strong>.
                    </p>
                    <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] animate-pulse">
                        Iniziamo a trasformare vite.
                    </p>
                </div>
            </div>
        )
      }
  ];

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      await finishOnboarding();
    }
  };

  const finishOnboarding = async () => {
    if (!user) return;
    setIsFinishing(true);
    try {
      // Save preferences if defined
      if (workoutPref.trim()) {
        await coachPreferenceService.createPreference({
          coach_id: user.id,
          content: workoutPref.trim(),
          category: 'workout'
        });
      }
      if (nutritionPref.trim()) {
        await coachPreferenceService.createPreference({
          coach_id: user.id,
          content: nutritionPref.trim(),
          category: 'nutrition'
        });
      }
      if (strategicPref.trim()) {
        await coachPreferenceService.createPreference({
          coach_id: user.id,
          content: strategicPref.trim(),
          category: 'strategic'
        });
      }

      // Mark as completed in profiles
      const { error } = await supabase
        .from('profiles')
        .update({ onboarding_completed: true })
        .eq('id', user.id);

      if (error) throw error;

      toast.success("Configurazione completata!");
      if (onComplete) onComplete();
    } catch (error) {
      console.error("Error completing onboarding:", error);
      toast.error("Errore durante il salvataggio. Riprova.");
    } finally {
      setIsFinishing(false);
    }
  };

  const current = steps[currentStep];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-card border border-white/5 rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex gap-1 px-8 pt-8">
            {steps.map((_, i) => (
                <div 
                    key={i} 
                    className={cn(
                        "h-full flex-1 rounded-full transition-all duration-500",
                        i <= currentStep ? "bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" : "bg-white/5"
                    )}
                />
            ))}
        </div>

        <div className="p-8 pt-16 flex-1 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col items-center text-center space-y-2 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon size={28} />
                </div>
                <h2 className="text-3xl font-black text-foreground uppercase italic tracking-tighter leading-tight">
                    {current.title}
                </h2>
                <p className="text-muted-foreground/50 text-xs font-bold uppercase tracking-widest">
                    {current.subtitle}
                </p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="min-h-[200px]"
                >
                    {current.content}
                </motion.div>
            </AnimatePresence>
        </div>

        <div className="p-8 pt-0 flex gap-3">
            {currentStep > 0 && (
                <button 
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 transition-all"
                >
                    <ChevronLeft />
                </button>
            )}
            <button 
                onClick={handleNext}
                disabled={isFinishing}
                className="flex-1 h-14 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs disabled:opacity-50"
            >
                {isFinishing ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>
                        {currentStep === steps.length - 1 ? 'Completa Configurazione' : 'Continua'}
                        <ChevronRight size={16} />
                    </>
                )}
            </button>
        </div>

        {onClose && (
            <button 
                onClick={onClose}
                className="absolute top-6 right-8 text-muted-foreground/30 hover:text-foreground transition-all"
            >
                <X size={20} />
            </button>
        )}
      </motion.div>
    </div>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-3 rounded-2xl">
            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon size={12} className="text-primary" />
            </div>
            <span className="text-xs font-medium text-foreground/80">{text}</span>
        </div>
    );
}

function TourCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-white/[0.03] border border-white/5 p-4 rounded-3xl space-y-2 hover:border-primary/20 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-all" />
            </div>
            <div className="space-y-1">
                <h5 className="text-[11px] font-black uppercase tracking-widest italic">{title}</h5>
                <p className="text-[10px] text-muted-foreground/40 leading-tight font-medium">{desc}</p>
            </div>
        </div>
    );
}
