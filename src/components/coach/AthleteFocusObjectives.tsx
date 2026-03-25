import { useState, useEffect } from 'react';
import { geminiService } from '../../services/geminiService';
import { athleteService } from '../../services/athleteService';
import {
  FileText,
  Sparkles,
  MessageSquare,
  Brain,
  Loader2,
  Send,
  X,
  Target,
  Save,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
import { VoiceInput } from '../ui/VoiceInput';

interface AthleteFocusObjectivesProps {
  athleteId: string;
  athleteProfile: any;
}

export default function AthleteFocusObjectives({ athleteId, athleteProfile }: AthleteFocusObjectivesProps) {
  const [focusObjectives, setFocusObjectives] = useState<string>(athleteProfile?.focus_objectives || '');
  const [isStructuring, setIsStructuring] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const [showRawEditor, setShowRawEditor] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (athleteProfile?.focus_objectives) {
      setFocusObjectives(athleteProfile.focus_objectives);
    }
  }, [athleteProfile]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await athleteService.updateFocusObjectives(athleteId, focusObjectives);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving focus objectives:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleStructureWithAI = async () => {
    setIsStructuring(true);
    try {
      const structured = await geminiService.structureFocusObjectives(focusObjectives, {
        first_name: athleteProfile.first_name,
        last_name: athleteProfile.last_name,
        weight: athleteProfile.weight,
        height: athleteProfile.height,
        age: athleteProfile.age,
        gender: athleteProfile.gender
      });
      if (structured) {
        setFocusObjectives(structured);
      }
    } catch (error) {
      console.error("Error structuring focus objectives:", error);
    } finally {
      setIsStructuring(false);
    }
  };

  const handleChatSend = async () => {
    if (!chatMessage.trim()) return;
    setIsChatting(true);
    try {
      const updated = await geminiService.chatFocusObjectives(focusObjectives, chatMessage, athleteProfile);
      if (updated) {
        setFocusObjectives(updated);
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
          const updated = await geminiService.chatFocusObjectives(focusObjectives, transcription, athleteProfile);
          if (updated) {
            setFocusObjectives(updated);
            setChatMessage('');
          }
        }
        setIsChatting(false);
      };
    } catch (error) {
      console.error("Error processing voice:", error);
      setIsChatting(false);
    }
  };

  return (
    <div className="glass-card p-10 rounded-[4rem] border-white/5 shadow-2xl space-y-8 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none opacity-50" />
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tight">Focus & Obiettivi</h3>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-30 mt-0.5">Strategia e Roadmap dell'Atleta</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
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
              "h-10 w-10 rounded-xl flex items-center justify-center active:scale-95 transition-all border border-white/5",
              showRawEditor 
                ? 'bg-white/10 text-foreground' 
                : 'glass-interactive text-muted-foreground hover:text-foreground hover:bg-white/5'
            )}
            title="Modifica testo raw"
          >
            <Brain className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className={clsx(
              "h-10 px-6 rounded-xl font-black italic uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ml-2",
              saveSuccess 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                : 'bg-foreground text-background hover:scale-[1.02] active:scale-98 disabled:opacity-50'
            )}
          >
            {isSaving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : saveSuccess ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saveSuccess ? 'Salvato' : 'Salva Profilo'}
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
            className="overflow-hidden relative z-10"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                <MessageSquare className="w-3.5 h-3.5" />
                Aggiorna la strategia con l'AI
              </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleChatSend()}
                    placeholder="Es: Cambia il focus sulla forza esplosiva o aggiungi milestone per lo squat..."
                    className="flex-1 bg-background/60 border border-white/5 text-foreground rounded-xl px-5 py-4 outline-none focus:border-primary/40 transition-all text-sm font-medium placeholder:text-muted-foreground/30 shadow-inner"
                    disabled={isChatting}
                  />
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={handleChatSend}
                      disabled={isChatting || !chatMessage.trim()}
                      className="h-[52px] w-[52px] bg-primary text-white rounded-xl flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-xl shadow-primary/20"
                    >
                      {isChatting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </button>
                    <VoiceInput 
                      onAudioBlob={handleVoiceResult}
                      isProcessing={isChatting}
                      size="lg"
                      className="!rounded-xl"
                    />
                  </div>
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
            className="overflow-hidden relative z-10"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1 flex items-center gap-3">
                  <Brain className="w-4 h-4" />
                  Editor Strategico Raw (Markdown)
                </label>
                <button 
                  onClick={() => setShowRawEditor(false)}
                  className="w-8 h-8 glass-interactive rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <textarea
                value={focusObjectives}
                onChange={(e) => setFocusObjectives(e.target.value)}
                placeholder="Inserisci obiettivi, focus e note strategiche..."
                className="w-full bg-background/40 border border-white/5 text-foreground rounded-3xl px-8 py-6 outline-none focus:border-primary/40 focus:bg-background/60 transition-all font-mono text-sm shadow-inner min-h-[300px] resize-y"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rendered Markdown */}
      <div className="relative z-10">
        {focusObjectives ? (
          <div className="bg-background/30 border border-white/5 rounded-[3rem] p-10 prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-headings:text-foreground prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tight prose-strong:text-primary prose-ul:list-disc prose-li:my-1 prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-4 prose-h3:text-base group animate-in fade-in duration-700">
            <ReactMarkdown>{focusObjectives}</ReactMarkdown>
          </div>
        ) : (
          <div className="bg-background/20 border border-dashed border-white/10 rounded-[3rem] p-20 text-center space-y-6 group hover:bg-background/30 transition-all">
            <div className="w-16 h-16 bg-muted/5 rounded-[2rem] flex items-center justify-center mx-auto border border-white/5 opacity-20 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-black text-foreground italic uppercase tracking-tight opacity-30">Nessuna strategia definita</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-20 max-w-sm mx-auto leading-relaxed">
                Utilizza l'editor raw per inserire le tue note o lascia che l'IA strutturi il piano strategico dell'atleta.
              </p>
            </div>
            <button 
              onClick={() => setShowRawEditor(true)}
              className="px-6 py-3 glass-interactive rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-primary transition-all"
            >
              Inizia a scrivere
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
