import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Check, X, Send, 
  User, Brain, Activity, Target, ShieldCheck
} from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { coachPreferenceService } from '../../services/coachPreferenceService';
import { geminiService } from '../../services/geminiService';
import { supabase } from '../../lib/supabase';
import { toast } from 'sonner';
import { cn } from '../../lib/utils';
import { VoiceInput } from '../ui/VoiceInput';

type Mission = 'BIOMETRICS' | 'EXPERIENCE' | 'GOALS' | 'PHILOSOPHY';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AiOnboardingProps {
    onComplete?: () => void;
    onClose?: () => void;
}

export function AiOnboarding({ onComplete, onClose }: AiOnboardingProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Benvenuto in JB Fit, Coach. Sono il tuo assistente IA d\'élite. Iniziamo subito a configurare il tuo profilo e il tuo stile di lavoro. Come ti chiami e qual è il tuo peso e altezza? Ah, mi servirebbe anche la tua data di nascita!' }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentMission, setCurrentMission] = useState<Mission>('BIOMETRICS');
  
  // Real-time extracted data
  const [profileData, setProfileData] = useState<any>({});
  const [preferencesData, setPreferencesData] = useState<any>({});
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text?: string, audioBase64?: string) => {
    const messageText = text || input;
    if (!messageText.trim() && !audioBase64) return;
    if (!user) return;

    // Add user message locally
    const newUserMessage: Message = { role: 'user', text: messageText || "🎤 Audio inviato" };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsProcessing(true);

    try {
      const response = await geminiService.processOnboardingMessage({
        message: messageText,
        audioBase64,
        currentProfile: profileData,
        currentPreferences: preferencesData,
        history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        mission: currentMission
      });

      if (response && !('error' in response)) {
        // Update messages
        setMessages(prev => [...prev, { role: 'model', text: response.reply }]);
        
        // Update extracted data
        if (response.extractedFields) {
          setProfileData((prev: any) => ({ ...prev, ...response.extractedFields }));
        }
        if (response.extractedPreferences) {
          setPreferencesData((prev: any) => ({ ...prev, ...response.extractedPreferences }));
        }

        // Logic to switch missions
        if (response.isMissionComplete) {
          switch (currentMission) {
            case 'BIOMETRICS': setCurrentMission('EXPERIENCE'); break;
            case 'EXPERIENCE': setCurrentMission('GOALS'); break;
            case 'GOALS': setCurrentMission('PHILOSOPHY'); break;
            case 'PHILOSOPHY': 
                // All missions complete!
                break;
          }
        }
      } else {
        toast.error(response?.error || "Errore nel processamento.");
      }
    } catch (error) {
      console.error("Onboarding error:", error);
      toast.error("Si è verificato un errore.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAudioBlob = async (blob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = async () => {
      const base64Audio = (reader.result as string).split(',')[1];
      await handleSendMessage(undefined, base64Audio);
    };
  };

  const finishOnboarding = async () => {
    if (!user) return;
    setIsProcessing(true);
    try {
      // 1. Save preferences
      for (const [category, content] of Object.entries(preferencesData)) {
        await coachPreferenceService.createPreference({
          coach_id: user.id,
          content: content as string,
          category: category as any
        });
      }

      // 2. Save profile data
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ 
            ...profileData,
            onboarding_completed: true 
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      toast.success("Configurazione completata con successo!");
      if (onComplete) onComplete();
    } catch (error) {
      console.error("Error saving onboarding:", error);
      toast.error("Errore nel salvataggio dei dati.");
    } finally {
      setIsProcessing(false);
    }
  };

  // const isAllComplete = currentMission === 'PHILOSOPHY' && messages.length > 5;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-5xl h-[85vh] bg-card border border-white/5 rounded-[3rem] shadow-2xl overflow-hidden flex"
      >
        {/* Left Side: Summary Panel */}
        <div className="w-80 border-r border-white/5 bg-white/[0.02] p-8 hidden lg:flex flex-col">
            <div className="space-y-1 mb-10">
                <div className="flex items-center gap-2 text-primary mb-2">
                    <Sparkles size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">IA Assistant</span>
                </div>
                <h2 className="text-2xl font-black italic uppercase italic tracking-tighter leading-none">Dati Estratti</h2>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto custom-scrollbar pr-2">
                <SummarySection icon={User} title="Biometria" data={profileData} fields={['weight', 'height', 'gender', 'birth_date']} />
                <SummarySection icon={Activity} title="Attività" data={profileData} fields={['activity_level', 'experience_level']} />
                <SummarySection icon={Target} title="Obiettivi" data={profileData} fields={['training_frequency', 'target_deficit']} />
                <SummarySection icon={ShieldCheck} title="Salute & Kit" data={profileData} fields={['injuries', 'equipment']} />
                
                <div className="space-y-4 pt-4 border-t border-white/5">
                    <h4 className="text-[10px] font-black uppercase text-muted-foreground/40 tracking-widest">Preferenze IA</h4>
                    <div className="space-y-2">
                        {['workout', 'nutrition', 'strategic'].map(cat => (
                            <div key={cat} className="flex items-center justify-between text-[11px] font-bold uppercase italic">
                                <span>{cat}</span>
                                {preferencesData[cat] ? <Check size={14} className="text-emerald-500" /> : <div className="w-1.5 h-1.5 rounded-full bg-white/10" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black uppercase text-muted-foreground/60">Progresso</span>
                        <span className="text-[10px] font-black text-primary">{Math.round((['BIOMETRICS', 'EXPERIENCE', 'GOALS', 'PHILOSOPHY'].indexOf(currentMission) + 1) / 4 * 100)}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${(['BIOMETRICS', 'EXPERIENCE', 'GOALS', 'PHILOSOPHY'].indexOf(currentMission) + 1) / 4 * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Right Side: Chat Interface */}
        <div className="flex-1 flex flex-col min-w-0">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Brain size={22} />
                    </div>
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-widest italic">Intervista Iniziale</h3>
                        <p className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-tighter">Fase: {currentMission}</p>
                    </div>
                </div>
                <button onClick={onClose} className="p-2 text-muted-foreground/20 hover:text-foreground hover:bg-white/5 rounded-lg transition-all">
                    <X size={20} />
                </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                {messages.map((msg, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={cn(
                            "flex max-w-[85%]",
                            msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                        )}
                    >
                        <div className={cn(
                            "w-8 h-8 rounded-lg shrink-0 flex items-center justify-center",
                            msg.role === 'user' ? "ml-3 bg-white/5" : "mr-3 bg-primary/10"
                        )}>
                            {msg.role === 'user' ? <User size={14} className="text-muted-foreground" /> : <Brain size={14} className="text-primary" />}
                        </div>
                        <div className={cn(
                            "p-4 rounded-2xl text-sm leading-relaxed",
                            msg.role === 'user' 
                                ? "bg-primary text-white font-medium" 
                                : "bg-white/[0.03] border border-white/5 text-muted-foreground/80"
                        )}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {isProcessing && (
                    <div className="flex mr-auto items-center gap-3 text-muted-foreground/40 italic text-xs ml-11">
                        <div className="flex gap-1">
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
                        </div>
                        L'IA sta elaborando...
                    </div>
                )}
            </div>

            <div className="p-8 pt-0">
                {currentMission === 'PHILOSOPHY' && messages.length > 5 ? (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={finishOnboarding}
                        disabled={isProcessing}
                        className="w-full py-4 bg-emerald-500 text-slate-950 font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase tracking-[0.2em] mb-4"
                    >
                        {isProcessing ? "Salvataggio in corso..." : "Salva e Completa Onboarding"}
                    </motion.button>
                ) : null}

                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <VoiceInput 
                            onAudioBlob={handleAudioBlob}
                            isProcessing={isProcessing}
                            variant="minimal"
                            size="sm"
                        />
                    </div>
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Tipo o parla il tuo messaggio..."
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl pl-12 pr-14 py-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/20 font-medium"
                        disabled={isProcessing}
                    />
                    <button 
                        onClick={() => handleSendMessage()}
                        disabled={isProcessing || !input.trim()}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale"
                    >
                        <Send size={16} />
                    </button>
                </div>
                <p className="mt-3 text-[10px] text-center text-muted-foreground/20 font-bold uppercase tracking-widest">
                    L'assistente JB Fit estrarrà automaticamente i dati dal tuo testo.
                </p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

function SummarySection({ icon: Icon, title, data, fields }: { icon: any, title: string, data: any, fields: string[] }) {
    const hasAnyContent = fields.some(f => data[f]);
    if (!hasAnyContent) return null;

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                <Icon size={14} className="text-muted-foreground/40" />
                <h4 className="text-[10px] font-black uppercase text-muted-foreground/40 tracking-widest">{title}</h4>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
                {fields.map(f => data[f] && (
                    <div key={f} className="bg-white/[0.02] border border-white/[0.04] p-2 px-3 rounded-xl flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase text-muted-foreground/40">{f.replace('_', ' ')}</span>
                        <span className="text-[10px] font-bold text-foreground/80 italic">{data[f]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
