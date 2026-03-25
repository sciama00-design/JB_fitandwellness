import { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Dumbbell, Apple, Brain, Plus, Trash2, Pencil, Check, X, 
  Mic, Square, Loader2, Send, Search
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { coachPreferenceService } from '../../services/coachPreferenceService';
import { mappingService } from '../../services/mappingService';
import { exerciseService } from '../../services/exerciseService';
import { useAuth } from '../../lib/auth';
import { geminiService } from '../../services/geminiService';
import { AppTabs, AppTabContent } from '../../components/ui/Tabs';
import { cn } from '../../lib/utils';
import { toast } from 'sonner';
import { ModelSelector } from '../../components/ai/ModelSelector';

type Category = 'workout' | 'nutrition' | 'strategic' | 'onboarding';

export default function AiOptions() {
  const [activeTab, setActiveTab] = useState<Category>('workout');
  const { user } = useAuth();

  const tabs = [
    { id: 'workout', label: 'Allenamento', icon: Dumbbell },
    { id: 'nutrition', label: 'Alimentazione', icon: Apple },
    { id: 'strategic', label: 'Briefing Strategico', icon: Brain },
    { id: 'onboarding', label: 'Onboarding', icon: Sparkles },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                {/* Mobile: ModelSelector replaces static icon */}
                <div className="md:hidden">
                    <ModelSelector variant="compact" className="[&_button]:w-14 [&_button]:h-14 [&_button]:rounded-[1.25rem] [&_button]:bg-gradient-to-br [&_button]:from-primary/20 [&_button]:to-accent/10 [&_button]:border-primary/20 [&_button]:shadow-2xl [&_button]:shadow-primary/10 [&_svg]:w-7 [&_svg]:h-7" />
                </div>
                
                {/* Desktop: standard static icon */}
                <div className="hidden md:flex w-14 h-14 rounded-[1.25rem] bg-gradient-to-br from-primary/20 to-accent/10 items-center justify-center border border-primary/20 shadow-2xl shadow-primary/10">
                    <Sparkles className="w-7 h-7 text-primary" />
                </div>

                <div>
                    <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase italic leading-none">Ai Options</h1>
                    <p className="text-muted-foreground/40 font-bold uppercase tracking-[0.2em] text-[10px] mt-1">Configura l'intelligenza artificiale per il tuo coaching</p>
                </div>
            </div>
        </div>
      </div>


      <AppTabs 
        tabs={tabs} 
        value={activeTab} 
        onValueChange={(v) => setActiveTab(v as Category)}
      >
        <AppTabContent value="workout">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <SectionHeader 
                title="Preferenze AI Allenamento" 
                subtitle="Istruzioni per la generazione delle schede"
              />
              <PreferenceCategoryManager category="workout" coachId={user?.id || ''} />
            </div>
            <div className="space-y-6">
              <SectionHeader 
                title="Mapping Esercizi" 
                subtitle="Associa i tuoi nomi gergali agli esercizi ufficiali"
              />
              <ExerciseMappingManager coachId={user?.id || ''} />
            </div>
          </div>
        </AppTabContent>

        <AppTabContent value="nutrition">
          <div className="max-w-3xl space-y-6">
            <SectionHeader 
              title="Linee Guida Alimentazione" 
              subtitle="Knowledge base e direttive per la dieta AI"
            />
            <PreferenceCategoryManager category="nutrition" coachId={user?.id || ''} />
          </div>
        </AppTabContent>

        <AppTabContent value="strategic">
          <div className="max-w-3xl space-y-6">
            <SectionHeader 
              title="Briefing Strategico IA" 
              subtitle="Direttive particolari per l'analisi dell'atleta"
            />
            <PreferenceCategoryManager category="strategic" coachId={user?.id || ''} />
          </div>
        </AppTabContent>

        <AppTabContent value="onboarding">
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-8 bg-card/20 rounded-[3rem] border border-white/5 border-dashed">
            <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 relative">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            </div>
            <div className="space-y-3 max-w-md">
              <h2 className="text-2xl font-black text-foreground uppercase italic">Area Onboarding AI</h2>
              <p className="text-muted-foreground/60 font-medium text-sm">
                Configura il tuo assistente per la prima volta. Prossimamente qui troverai un workflow guidato per personalizzare l'esperienza AI del tuo coaching.
              </p>
            </div>
            <button 
                className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all opacity-50 cursor-not-allowed uppercase tracking-widest text-xs"
                disabled
            >
                Inizia Configurazione (Coming Soon)
            </button>
          </div>
        </AppTabContent>
      </AppTabs>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-1">
      <h3 className="text-lg font-black text-foreground uppercase tracking-tight italic">{title}</h3>
      <p className="text-muted-foreground/40 font-bold uppercase tracking-tighter text-[10px]">{subtitle}</p>
    </div>
  );
}

function PreferenceCategoryManager({ category, coachId }: { category: Category; coachId: string }) {
  const [newPreference, setNewPreference] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const queryClient = useQueryClient();

  const { data: preferences = [], isLoading } = useQuery({
    queryKey: ['coach-preferences', coachId, category],
    queryFn: () => coachPreferenceService.getPreferences(coachId, category as any),
    enabled: !!coachId,
  });

  const createMutation = useMutation({
    mutationFn: (content: string) => coachPreferenceService.createPreference({ 
      coach_id: coachId, 
      content,
      category: category as any
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coach-preferences', coachId, category] });
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
      toast.error("Impossibile accedere al microfono.");
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
          toast.error("Non sono riuscito a estrarre la preferenza dall'audio.");
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
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['coach-preferences', coachId, category] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, content }: { id: string; content: string }) => coachPreferenceService.updatePreference(id, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coach-preferences', coachId, category] });
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

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-primary" /></div>;

  return (
    <div className="bg-card/20 rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {preferences.length === 0 && (
          <div className="text-center py-10 opacity-40">
            <p className="text-xs font-bold uppercase tracking-widest italic">Nessuna preferenza salvata</p>
          </div>
        )}
        {preferences.map((pref) => (
          <motion.div key={pref.id} layout className="group flex flex-col gap-2">
            <div className="relative">
              {editingId === pref.id ? (
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl">
                  <textarea
                    autoFocus
                    className="w-full bg-transparent border-none focus:ring-0 text-sm text-foreground resize-none p-0 font-medium"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleUpdate(pref.id))}
                  />
                  <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-white/5">
                    <button onClick={() => setEditingId(null)} className="p-1 hover:text-red-400 text-muted-foreground/30"><X size={16} /></button>
                    <button onClick={() => handleUpdate(pref.id)} className="p-1 hover:text-emerald-400 text-muted-foreground/30"><Check size={16} /></button>
                  </div>
                </div>
              ) : (
                <div className="bg-white/[0.03] border border-white/[0.05] p-5 rounded-2xl hover:border-white/10 transition-all group relative">
                  <p className="text-sm text-foreground/80 font-medium leading-relaxed">{pref.content}</p>
                  <div className="flex items-center gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => { setEditingId(pref.id); setEditContent(pref.content); }}
                      className="text-[9px] font-black text-muted-foreground/30 hover:text-primary uppercase tracking-widest flex items-center gap-1"
                    >
                      <Pencil size={12} /> Modifica
                    </button>
                    <button 
                      onClick={() => deleteMutation.mutate(pref.id)}
                      className="text-[9px] font-black text-muted-foreground/30 hover:text-destructive uppercase tracking-widest flex items-center gap-1"
                    >
                      <Trash2 size={12} /> Elimina
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-white/[0.02] border-t border-white/5">
        <form onSubmit={handleAdd} className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newPreference}
              onChange={(e) => setNewPreference(e.target.value)}
              placeholder={isRecording ? "Ascolto..." : "Inserisci una direttiva..."}
              className="w-full bg-card/40 border border-white/5 rounded-xl pl-4 pr-10 py-3 text-sm text-foreground/70 focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all placeholder:text-muted-foreground/20 font-medium"
              disabled={isRecording || isProcessing}
            />
            {isRecording && <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
          </div>
          
          {category === 'workout' && (
            <button
                type="button"
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isProcessing}
                className={cn(
                "p-3 rounded-xl transition-all",
                isRecording ? "bg-red-500 text-white" : "bg-white/[0.05] text-muted-foreground/50 hover:text-foreground border border-white/5"
                )}
            >
                {isProcessing ? <Loader2 size={20} className="animate-spin" /> : isRecording ? <Square size={20} fill="currentColor" /> : <Mic size={20} />}
            </button>
          )}

          <button
            type="submit"
            disabled={createMutation.isPending || !newPreference.trim() || isRecording || isProcessing}
            className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

function ExerciseMappingManager({ coachId }: { coachId: string }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [slangName, setSlangName] = useState('');
  const [selectedLibraryId, setSelectedLibraryId] = useState<string | null>(null);
  const [selectedLibraryName, setSelectedLibraryName] = useState('');
  const [isAddingMapping, setIsAddingMapping] = useState(false);
  const queryClient = useQueryClient();

  const { data: mappings = [], isLoading: isLoadingMappings } = useQuery({
    queryKey: ['exercise-mappings', coachId],
    queryFn: () => mappingService.getMappings(coachId),
    enabled: !!coachId,
  });

  const { data: exercises = [] } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getAllExercises,
  });

  const filteredExercises = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return exercises.filter(ex => 
      ex.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (ex.name_it && ex.name_it.toLowerCase().includes(searchTerm.toLowerCase()))
    ).slice(0, 5);
  }, [exercises, searchTerm]);

  const createMappingMutation = useMutation({
    mutationFn: mappingService.createMapping,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exercise-mappings', coachId] });
      setSlangName('');
      setSelectedLibraryId(null);
      setSelectedLibraryName('');
      setSearchTerm('');
      setIsAddingMapping(false);
      toast.success("Mapping creato con successo");
    },
  });

  const deleteMappingMutation = useMutation({
    mutationFn: mappingService.deleteMapping,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['exercise-mappings', coachId] }),
  });

  const handleAddMapping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slangName.trim() || !selectedLibraryId) return;
    createMappingMutation.mutate({
      coach_id: coachId,
      slang_name: slangName.trim(),
      standard_exercise_id: selectedLibraryId
    });
  };

  if (isLoadingMappings) return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-primary" /></div>;

  return (
    <div className="bg-card/20 rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar">
        {mappings.length === 0 && !isAddingMapping && (
            <div className="text-center py-10 opacity-40">
                <p className="text-xs font-bold uppercase tracking-widest italic">Nessun mapping salvato</p>
                <button 
                    onClick={() => setIsAddingMapping(true)}
                    className="mt-4 text-[10px] font-black text-primary hover:underline uppercase"
                >
                    + Aggiungi Primo Mapping
                </button>
            </div>
        )}
        
        {mappings.map((m) => {
          const libraryEx = exercises.find(ex => ex.id === m.standard_exercise_id);
          return (
            <div key={m.id} className="bg-white/[0.03] border border-white/[0.05] p-3 pl-5 rounded-2xl flex items-center justify-between group hover:border-white/10 transition-all">
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-primary italic italic">{m.slang_name}</span>
                <span className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-tighter truncate max-w-[200px]">
                  → {libraryEx?.name_it || libraryEx?.name || 'Caricamento...'}
                </span>
              </div>
              <button 
                onClick={() => deleteMappingMutation.mutate(m.id)}
                className="p-2 text-muted-foreground/20 hover:text-destructive opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 size={14} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-white/[0.02] border-t border-white/5">
        {isAddingMapping ? (
            <form onSubmit={handleAddMapping} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest ml-1">Tuo Nome Gergale</label>
                    <input 
                        type="text" 
                        className="w-full bg-card/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground/70 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/20 font-bold italic"
                        placeholder="es. Panca con bil"
                        value={slangName}
                        onChange={(e) => setSlangName(e.target.value)}
                    />
                </div>

                <div className="space-y-1 relative">
                    <label className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest ml-1">Mappa a Libreria</label>
                    {selectedLibraryId ? (
                        <div className="flex items-center justify-between bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
                            <span className="text-sm font-bold text-primary truncate">{selectedLibraryName}</span>
                            <button onClick={() => setSelectedLibraryId(null)} className="text-primary/60 hover:text-primary"><X size={16} /></button>
                        </div>
                    ) : (
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/30" />
                            <input 
                                type="text" 
                                className="w-full bg-card/40 border border-white/5 rounded-xl pl-10 pr-4 py-3 text-sm text-foreground/70 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/20 font-medium"
                                placeholder="Cerca esercizio..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {filteredExercises.length > 0 && (
                                <div className="absolute bottom-full left-0 right-0 mb-2 bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-20">
                                    {filteredExercises.map(ex => (
                                        <button 
                                            key={ex.id}
                                            type="button"
                                            onClick={() => {
                                                setSelectedLibraryId(ex.id);
                                                setSelectedLibraryName(ex.name_it || ex.name);
                                                setSearchTerm('');
                                            }}
                                            className="w-full text-left px-4 py-3 text-xs font-bold text-foreground/70 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                        >
                                            {ex.name_it || ex.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex gap-2">
                    <button 
                        type="button"
                        onClick={() => setIsAddingMapping(false)}
                        className="flex-1 py-3 bg-white/[0.05] text-muted-foreground/60 border border-white/5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/[0.08] transition-all"
                    >
                        Annulla
                    </button>
                    <button 
                        type="submit"
                        disabled={!slangName || !selectedLibraryId || createMappingMutation.isPending}
                        className="flex-[2] py-3 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                    >
                        Salva Mapping
                    </button>
                </div>
            </form>
        ) : (
            <button 
                onClick={() => setIsAddingMapping(true)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-white/[0.05] hover:bg-white/[0.08] text-foreground/70 rounded-2xl border border-dashed border-white/10 transition-all group"
            >
                <Plus className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest">Aggiungi Mapping</span>
            </button>
        )}
      </div>
    </div>
  );
}
