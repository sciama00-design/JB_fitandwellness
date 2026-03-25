import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Trash2, X, Plus, Pencil, Check, Mic, Square, Loader2 } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { coachPreferenceService } from '../../services/coachPreferenceService';
import { useAuth } from '../../lib/auth';
import { geminiService } from '../../services/geminiService';
import { cn } from '../../lib/utils';

export default function CoachPreferencesChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [newPreference, setNewPreference] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: preferences = [], isLoading } = useQuery({
    queryKey: ['coach-preferences', user?.id],
    queryFn: () => coachPreferenceService.getPreferences(user!.id),
    enabled: !!user?.id,
  });

  const createMutation = useMutation({
    mutationFn: (content: string) => coachPreferenceService.createPreference({ 
      coach_id: user!.id, 
      content,
      category: 'workout'
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coach-preferences'] });
      setNewPreference('');
    },
  });

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        await processPreferenceAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Impossibile accedere al microfono.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processPreferenceAudio = async (blob: Blob) => {
    setIsProcessing(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        const essence = await geminiService.extractPreferenceEssence(base64Audio);
        if (essence) {
          createMutation.mutate(essence);
        } else {
          alert("Non sono riuscito a estrarre la preferenza dall'audio.");
        }
        setIsProcessing(false);
      };
    } catch (error) {
      console.error("Error processing audio:", error);
      setIsProcessing(false);
    }
  };

  const deleteMutation = useMutation({
    mutationFn: coachPreferenceService.deletePreference,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['coach-preferences'] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, content }: { id: string; content: string }) => coachPreferenceService.updatePreference(id, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coach-preferences'] });
      setEditingId(null);
    },
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPreference.trim()) return;
    createMutation.mutate(newPreference);
  };

  const handleUpdate = (id: string) => {
    if (!editContent.trim()) return;
    updateMutation.mutate({ id, content: editContent });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 bg-white/[0.06] rounded-2xl flex items-center justify-center text-foreground shadow-2xl border border-white/[0.06] hover:scale-110 active:scale-95 transition-all group relative"
        title="Preferenze Coach AI"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold">
          {preferences.length}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-end justify-end p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              className="w-full max-w-md bg-card/60/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col h-[600px] pointer-events-auto overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-widest italic">Coach Notes</h4>
                    <p className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-tighter">Istruzioni personali per l'AI</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full text-muted-foreground/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {preferences.length === 0 && !isLoading && (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 bg-white/[0.04] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-6 h-6 text-muted-foreground/30" />
                    </div>
                    <p className="text-muted-foreground/40 text-xs font-medium">Nessuna preferenza salvata.</p>
                    <p className="text-muted-foreground/30 text-[10px] mt-1 max-w-[200px] mx-auto">Scrivi come vuoi che l'AI interpreti i tuoi comandi o nomi gergali.</p>
                  </div>
                )}

                {preferences.map((pref) => (
                  <motion.div
                    key={pref.id}
                    layout
                    className="group flex flex-col gap-2"
                  >
                    <div className="flex items-start gap-2 justify-end">
                      <div className="flex-1" />
                      <div className="relative max-w-[85%]">
                        {editingId === pref.id ? (
                          <div className="bg-primary/20 border border-primary/30 p-3 rounded-2xl rounded-tr-none min-w-[200px]">
                            <textarea
                              autoFocus
                              className="w-full bg-transparent border-none focus:ring-0 text-sm text-foreground resize-none p-0"
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                  e.preventDefault();
                                  handleUpdate(pref.id);
                                }
                              }}
                            />
                            <div className="flex justify-end gap-2 mt-2">
                              <button onClick={() => setEditingId(null)} className="p-1 hover:text-red-400 text-muted-foreground/40"><X className="w-4 h-4" /></button>
                              <button onClick={() => handleUpdate(pref.id)} className="p-1 hover:text-emerald-400 text-muted-foreground/40"><Check className="w-4 h-4" /></button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white/[0.06]/80 border border-white/[0.06] p-4 rounded-2xl rounded-tr-none shadow-sm">
                            <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">{pref.content}</p>
                            <div className="flex items-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => { setEditingId(pref.id); setEditContent(pref.content); }}
                                className="text-[10px] font-bold text-muted-foreground/40 hover:text-primary uppercase tracking-tighter flex items-center gap-1"
                              >
                                <Pencil className="w-3 h-3" /> Modifica
                              </button>
                              <button 
                                onClick={() => deleteMutation.mutate(pref.id)}
                                className="text-[10px] font-bold text-muted-foreground/40 hover:text-red-500 uppercase tracking-tighter flex items-center gap-1"
                              >
                                <Trash2 className="w-3 h-3" /> Elimina
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-white/5 bg-white/[0.02]">
                <form onSubmit={handleAdd} className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newPreference}
                      onChange={(e) => setNewPreference(e.target.value)}
                      placeholder={isRecording ? "Ascolto in corso..." : "Es: 'X sta per Y'"}
                      className="w-full bg-card/60 border border-white/[0.06] rounded-xl pl-4 pr-10 py-2 text-sm text-foreground/80 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/25"
                      disabled={isRecording || isProcessing}
                    />
                    {isRecording && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>
                  
                  <button
                    type="button"
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={isProcessing}
                    className={cn(
                      "p-2 rounded-xl transition-all relative overflow-hidden",
                      isRecording ? "bg-red-500 text-foreground" : "bg-white/[0.06] text-muted-foreground/60 hover:text-foreground"
                    )}
                  >
                    {isProcessing ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isRecording ? (
                      <Square className="w-5 h-5 fill-current" />
                    ) : (
                      <Mic className="w-5 h-5" />
                    )}
                  </button>

                  <button
                    type="submit"
                    disabled={createMutation.isPending || !newPreference.trim() || isRecording || isProcessing}
                    className="p-2 bg-primary rounded-xl text-foreground shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
