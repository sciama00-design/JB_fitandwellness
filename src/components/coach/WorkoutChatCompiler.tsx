import { useState, useEffect } from 'react';
import { Send, Loader2, Sparkles, X, MessageSquare } from 'lucide-react';
import { geminiService } from '../../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useAuth } from '../../lib/auth';

interface WorkoutChatCompilerProps {
  onResult: (result: { exercises: any[], transcription?: string, action_taken?: 'append' | 'modify' }) => void;
  existingMappings: any[];
  currentPlan?: any[];
  preferences?: any[];
  chatKey?: string;
}

export default function WorkoutChatCompiler({ onResult, existingMappings, currentPlan = [], preferences = [], chatKey }: WorkoutChatCompilerProps) {
  const { user } = useAuth();
  const storageKey = chatKey ? `chat_input_${chatKey}` : null;
  
  const [input, setInput] = useState(() => {
    if (storageKey) return localStorage.getItem(storageKey) || '';
    return '';
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, input);
    }
  }, [input, storageKey]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    try {
      const result = await geminiService.processWorkoutChat(
        input,
        existingMappings,
        currentPlan,
        preferences,
        user?.id
      );

      if (result && result.exercises) {
        onResult(result);
        setInput('');
        if (storageKey) localStorage.removeItem(storageKey);
        setIsExpanded(false);
      } else {
        const errorMsg = "Non sono riuscito a interpretare i comandi. L'AI ha risposto: " + (result ? JSON.stringify(result) : "Nessuna risposta.");
        alert(errorMsg);
      }
    } catch (error) {
      console.error("Error processing workout chat:", error);
      alert("Errore tecnico: " + (error as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-card/95 backdrop-blur-2xl border border-white/10 p-5 rounded-[2.5rem] shadow-2xl w-96 space-y-4"
        >
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest italic leading-tight">AI Workout Compiler</h4>
                <p className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-tighter">Comanda la scheda via testo</p>
              </div>
            </div>
            <button 
              onClick={() => setIsExpanded(false)}
              className="p-2 hover:bg-white/5 rounded-full text-muted-foreground/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <textarea
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="es. Panca piana 3x10, poi Croci 2x15..."
                className="w-full bg-white/[0.03] border border-white/5 rounded-3xl p-5 text-sm text-foreground placeholder:text-muted-foreground/25 focus:ring-1 focus:ring-primary/30 outline-none min-h-[120px] resize-none transition-all group-focus-within:border-primary/20"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <p className="text-[10px] text-muted-foreground/30 font-medium italic pr-2">Invio per compilare</p>
                <button
                  type="submit"
                  disabled={!input.trim() || isProcessing}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                    input.trim() 
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95" 
                      : "bg-white/[0.06] text-muted-foreground/30 shadow-inner"
                  )}
                >
                  {isProcessing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="px-2">
              <p className="text-[10px] text-muted-foreground/40 leading-relaxed italic">
                Descrivi esercizi, set, reps e recuperi. L'AI mapperà tutto alla libreria, dando priorità ai tuoi esercizi custom.
              </p>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.button
          layoutId="workout-compiler-btn"
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all group relative"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-background flex items-center justify-center">
            <Sparkles className="w-2 h-2" />
          </div>
          <span className="sr-only">AI Workout Compiler</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
