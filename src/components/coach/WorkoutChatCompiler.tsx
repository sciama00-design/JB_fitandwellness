import { useState, useEffect } from 'react';
import { Send, Loader2, Sparkles, X, MessageSquare } from 'lucide-react';
import { geminiService } from '../../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useAuth } from '../../lib/auth';
import { VoiceInput } from '../ui/VoiceInput';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  thinking?: string;
  timestamp: number;
}

interface WorkoutChatCompilerProps {
  onResult: (result: { exercises: any[], thinking?: string, action_taken?: 'append' | 'modify' | 'replace' }) => void;
  existingMappings: any[];
  currentPlan?: any[];
  preferences?: any[];
  chatKey?: string;
  planTitle?: string;
  planDescription?: string;
}

export default function WorkoutChatCompiler({ 
  onResult, 
  existingMappings, 
  currentPlan = [], 
  preferences = [], 
  chatKey,
  planTitle,
  planDescription
}: WorkoutChatCompilerProps) {
  const { user } = useAuth();
  const storageKey = chatKey ? `chat_history_${chatKey}` : null;
  const inputKey = chatKey ? `chat_input_${chatKey}` : null;
  
  const [messages, setMessages] = useState<Message[]>(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [input, setInput] = useState(() => {
    if (inputKey) return localStorage.getItem(inputKey) || '';
    return '';
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    }
  }, [messages, storageKey]);

  useEffect(() => {
    if (inputKey) {
      localStorage.setItem(inputKey, input);
    }
  }, [input, inputKey]);

  const addMessage = (role: 'user' | 'assistant', content: string, thinking?: string) => {
    setMessages(prev => [...prev, {
      role,
      content,
      thinking,
      timestamp: Date.now()
    }]);
  };

  const handleAIResponse = (result: any) => {
    if (result && result.exercises) {
      onResult(result);
      
      let feedback = "Ho aggiornato la scheda: ";
      if (result.action_taken === 'append') feedback += "aggiunti nuovi esercizi.";
      else if (result.action_taken === 'modify') feedback += "modificati esercizi esistenti.";
      else if (result.action_taken === 'replace') feedback += "sostituito l'ultimo elemento.";
      
      if (result.plan_title) feedback += `\nHo anche rinominato la scheda in "${result.plan_title}".`;

      addMessage('assistant', feedback, result.thinking);
      setInput('');
      if (inputKey) localStorage.removeItem(inputKey);
    } else {
      const errorMsg = result?.error || "Non sono riuscito a interpretare i comandi.";
      addMessage('assistant', `Errore: ${errorMsg}`);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userPrompt = input.trim();
    addMessage('user', userPrompt);
    setIsProcessing(true);
    
    try {
      const result = await geminiService.processWorkoutChat(
        userPrompt,
        existingMappings,
        currentPlan,
        preferences,
        user?.id,
        planTitle,
        planDescription
      );
      handleAIResponse(result);
    } catch (error) {
      console.error("Error processing workout chat:", error);
      addMessage('assistant', `Errore tecnico: ${(error as Error).message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAudioResult = async (blob: Blob) => {
    setIsProcessing(true);
    addMessage('user', '(Audio acquisito...)');
    
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        const result = await geminiService.processWorkoutAudio(
          base64Audio,
          existingMappings,
          currentPlan,
          preferences,
          user?.id,
          planTitle,
          planDescription
        );
        handleAIResponse(result);
        setIsProcessing(false);
      };
    } catch (error) {
      console.error("Error processing workout audio:", error);
      addMessage('assistant', `Errore tecnico audio: ${(error as Error).message}`);
      setIsProcessing(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
    if (storageKey) localStorage.removeItem(storageKey);
  };

  return (
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-card/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl w-[400px] flex flex-col overflow-hidden max-h-[600px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest italic leading-tight">Elite AI Assistant</h4>
                <p className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-tighter">Workout Compiler Mode</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button 
                  onClick={clearHistory}
                  className="p-2 hover:bg-white/5 rounded-full text-muted-foreground/20 hover:text-red-400 transition-colors"
                  title="Clear history"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-white/5 rounded-full text-muted-foreground/40 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-[300px] scrollbar-hide">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-30 py-10">
                <MessageSquare className="w-12 h-12 mb-2" />
                <p className="text-sm italic">Ciao Coach. Come modifichiamo la scheda oggi?</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex flex-col max-w-[85%]",
                  msg.role === 'user' ? "ml-auto items-end" : "items-start"
                )}>
                  <div className={cn(
                    "p-4 rounded-3xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10" 
                      : "bg-white/[0.05] border border-white/5 text-foreground rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                  {msg.thinking && (
                    <details className="mt-2 w-full">
                      <summary className="text-[10px] text-muted-foreground/40 cursor-pointer hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-tighter font-bold font-mono">
                        <Sparkles className="w-3 h-3" /> Assistant Reasoning
                      </summary>
                      <div className="mt-2 p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl text-[11px] text-muted-foreground/80 leading-relaxed italic">
                        {msg.thinking}
                      </div>
                    </details>
                  )}
                  <span className="text-[9px] text-muted-foreground/20 mt-1 px-2 font-mono">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))
            )}
            {isProcessing && (
              <div className="flex items-center gap-2 text-primary/50 text-[10px] font-bold uppercase tracking-widest animate-pulse px-2">
                <Loader2 className="w-3 h-3 animate-spin" />
                L'Assistente sta pensando...
              </div>
            )}
          </div>

          {/* Footer Input */}
          <div className="p-5 bg-white/5 border-t border-white/5">
            <form onSubmit={handleSubmit} className="relative group">
              <textarea
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="es. Panca piana 3x10..."
                className="w-full bg-white/[0.03] border border-white/5 rounded-[2rem] p-4 text-sm text-foreground placeholder:text-muted-foreground/25 focus:ring-1 focus:ring-primary/30 outline-none min-h-[100px] resize-none transition-all group-focus-within:border-primary/20"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <VoiceInput 
                  onAudioBlob={handleAudioResult}
                  isProcessing={isProcessing}
                  size="sm"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isProcessing}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                    input.trim() 
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105" 
                      : "bg-white/[0.06] text-muted-foreground/30"
                  )}
                >
                  {isProcessing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.button
          layoutId="workout-compiler-btn"
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all group relative border border-white/10"
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

