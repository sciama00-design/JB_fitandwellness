import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Trash2, Save, GripVertical, 
  Link as LinkIcon, Unlink, Loader2, ChevronRight,
  Info, LayoutGrid, Flame, Pencil, Eye, Check, X, MessageSquare,
  ClipboardList, Tv
} from 'lucide-react';
import ExerciseDetailModal from '../ExerciseDetailModal';
import { MediaViewer } from '../shared/MediaViewer';
import { parseVideoUrls, stringifyVideoUrls } from '../../lib/videoUtils';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import ReactMarkdown from 'react-markdown';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../lib/auth';
import type { WorkoutPlan, PlanExercise, ExerciseLibrary, Profile, WorkoutPlanTemplate, PlanTemplateExercise } from '../../types/database';
import { exerciseService } from '../../services/exerciseService';
import Modal from '../Modal';
import AdvancedExerciseFilters from '../ExerciseFilters';
import { cn } from '../../lib/utils';

interface WorkoutPlanEditorProps {
  initialData?: (WorkoutPlan & { exercises: PlanExercise[] }) | (WorkoutPlanTemplate & { exercises: PlanTemplateExercise[] });
  mode: 'create' | 'edit';
  onSubmit: (data: { plan: any; exercises: any[] }) => Promise<void>;
  isSubmitting: boolean;
  athletes?: Profile[];
  isTemplate?: boolean;
}

export default function WorkoutPlanEditor({ 
  initialData, 
  mode, 
  onSubmit, 
  isSubmitting,
  athletes,
  isTemplate = false
}: WorkoutPlanEditorProps) {
  const [planName, setPlanName] = useState(initialData?.name || '');
  const [athleteId, setAthleteId] = useState((initialData as WorkoutPlan)?.athlete_id || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [exercises, setExercises] = useState<Partial<PlanExercise | PlanTemplateExercise>[]>(initialData?.exercises || []);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [selectedExerciseInfo, setSelectedExerciseInfo] = useState<ExerciseLibrary | null>(null);
  const [activeMediaViewerIndex, setActiveMediaViewerIndex] = useState<number | null>(null);
  
  // Group-first flow states
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [isNamingGroup, setIsNamingGroup] = useState(false);
  const [tempGroupName, setTempGroupName] = useState('');
  const [pendingGroupName, setPendingGroupName] = useState('');
  
  // Derived groups from exercises
  const groups = useMemo(() => {
    const g: { id: string; name: string; exerciseCount: number }[] = [];
    const seen = new Set<string>();
    
    exercises.forEach(ex => {
      if (ex.group_id && !seen.has(ex.group_id)) {
        seen.add(ex.group_id);
        g.push({
          id: ex.group_id,
          name: ex.group_name || 'Senza nome',
          exerciseCount: exercises.filter(e => e.group_id === ex.group_id).length
        });
      }
    });
    return g;
  }, [exercises]);

  const activeGroupName = useMemo(() => {
    const existing = groups.find(g => g.id === activeGroupId);
    return existing ? existing.name : pendingGroupName;
  }, [groups, activeGroupId, pendingGroupName]);

  const { data: allLibraryExercises } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getAllExercises,
  });

  const handleShowInfo = (libraryId: string | null) => {
    if (!libraryId || !allLibraryExercises) return;
    const ex = allLibraryExercises.find(e => e.id === libraryId);
    if (ex) setSelectedExerciseInfo(ex);
  };

  const isEdit = mode === 'edit';
  const themeColor = isTemplate ? 'emerald' : (isEdit ? 'amber' : 'violet');
  
  // Update state when initialData changes (e.g. after fetch)
  useEffect(() => {
    if (initialData) {
      setPlanName(initialData.name);
      if (!isTemplate) setAthleteId((initialData as WorkoutPlan).athlete_id);
      setDescription(initialData.description || '');
      setExercises(initialData.exercises || []);
    }
  }, [initialData, isTemplate]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(exercises);
    
    if (activeGroupId) {
      // Reordering within a group
      const filteredIndices = items
        .map((ex, idx) => ({ ex, idx }))
        .filter(item => item.ex.group_id === activeGroupId)
        .map(item => item.idx);
        
      const sourceIdx = filteredIndices[result.source.index];
      const destIdx = filteredIndices[result.destination.index];
      
      const [reorderedItem] = items.splice(sourceIdx, 1);
      items.splice(destIdx, 0, reorderedItem);
    } else {
      // Global reorder (if allowed/used)
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
    }
    
    // Update order_index for all
    const updated = items.map((ex, idx) => ({ ...ex, order_index: idx }));
    setExercises(updated);
  };

  const addExercise = (libEx: ExerciseLibrary) => {
    const newEx: Partial<PlanExercise> = {
      exercise_library_id: libEx.id,
      name: libEx.name_it || libEx.name,
      target_sets: 3,
      target_reps: 10,
      rest_seconds: 60,
      rest_between_reps_seconds: 0,
      order_index: exercises.length,
      video_url: libEx.video_url,
      image_url: libEx.images?.[0] || null,
      group_id: activeGroupId,
      group_name: activeGroupName,
      superset_id: null,
      target_reps_detail: Array(3).fill(10),
    };
    setExercises([...exercises, newEx]);
    setIsSelectModalOpen(false);
  };

  const handleCreateGroup = (name: string) => {
    const groupId = crypto.randomUUID();
    // To ensure the group exists even if empty, we could either:
    // 1. Add a temporary exercise (bad)
    // 2. Just set activeGroupId and let the user add exercises.
    // The 'groups' memo only shows groups with at least one exercise.
    // Let's modify 'groups' memo to include the activeGroupId if it's empty.
    setActiveGroupId(groupId);
    // Setting activeGroupId before creating exercises is fine.
    // The activeGroupName will need to know the name even if no exercises exist.
    // I'll add a 'pendingGroupName' state.
    setPendingGroupName(name);
    setIsNamingGroup(false);
    setTempGroupName('');
  };

  const deleteGroup = (groupId: string) => {
    setExercises(exercises.filter(ex => ex.group_id !== groupId));
    if (activeGroupId === groupId) {
      setActiveGroupId(null);
      setPendingGroupName('');
    }
  };

  const removeExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const updateExercise = (index: number, updates: Partial<PlanExercise>) => {
    const newExercises = [...exercises];
    newExercises[index] = { ...newExercises[index], ...updates };
    setExercises(newExercises);
  };

  const toggleSuperset = (index: number) => {
    if (index === 0) return;
    const newExercises = [...exercises];
    const current = newExercises[index];
    const prev = newExercises[index - 1];
    
    if (current.superset_id && current.superset_id === prev.superset_id) {
      current.superset_id = null;
    } else {
      const sid = prev.superset_id || crypto.randomUUID();
      prev.superset_id = sid;
      current.superset_id = sid;
    }
    setExercises(newExercises);
  };

  const assignGroup = (index: number, groupName: string | null) => {
    const newExercises = [...exercises];
    if (!groupName) {
      newExercises[index].group_name = null;
      newExercises[index].group_id = null;
    } else {
      // Find if this group already exists to reuse group_id
      const existing = newExercises.find(ex => ex.group_name === groupName);
      const groupId = existing?.group_id || crypto.randomUUID();
      
      newExercises[index].group_name = groupName;
      newExercises[index].group_id = groupId;

      // Propagate to subsequent exercises without a group
      for (let i = index + 1; i < newExercises.length; i++) {
        if (!newExercises[i].group_name) {
          newExercises[i].group_name = groupName;
          newExercises[i].group_id = groupId;
        } else {
          break; // Stop when an exercise with a group is found
        }
      }
    }
    setExercises(newExercises);
  };

  const handleSave = () => {
    const planData: any = { name: planName, description };
    if (!isTemplate) {
      planData.athlete_id = athleteId;
    }
    
    onSubmit({
      plan: planData,
      exercises: exercises
    });
  };

  const containerClasses = cn(
    "max-w-5xl mx-auto space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
  );

  const cardClasses = cn(
    "bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden",
    isEdit ? "hover:border-amber-500/20" : "hover:border-violet-500/20",
    "transition-all duration-300"
  );

  const inputClasses = cn(
    "w-full px-5 py-3 bg-slate-950/50 border border-slate-800 rounded-2xl focus:ring-2 outline-none transition-all placeholder:text-slate-600",
    isEdit ? "focus:ring-amber-500/30 focus:border-amber-500/50" : "focus:ring-violet-500/30 focus:border-violet-500/50"
  );

  const btnPrimaryClasses = cn(
    "flex items-center justify-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
    isTemplate
      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20"
      : isEdit 
        ? "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/20" 
        : "bg-violet-600 hover:bg-violet-500 text-white shadow-violet-900/20"
  );

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner",
              isEdit ? "bg-amber-500/10 text-amber-500" : "bg-violet-500/10 text-violet-500"
            )}>
              {isTemplate ? <ClipboardList className="w-6 h-6" /> : (isEdit ? <Pencil className="w-6 h-6" /> : <Plus className="w-6 h-6" />)}
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-slate-50 tracking-tight">
              {isTemplate ? (isEdit ? 'Modifica Modello' : 'Nuovo Modello') : (isEdit ? 'Modifica Scheda' : 'Nuova Scheda')}
            </h1>
          </div>
          <p className="text-slate-400 font-medium ml-15">
            {isTemplate ? 'Crea un modello di scheda da riutilizzare per i tuoi atleti.' : 'Configura esercizi, superset e gruppi per il tuo atleta.'}
          </p>
        </div>
        
        <button 
          onClick={handleSave}
          className={btnPrimaryClasses}
          disabled={isSubmitting || !planName || (!isTemplate && !athleteId)}
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <><Save className="w-5 h-5" /> Salva {isTemplate ? 'Modello' : 'Scheda'}</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details & Description */}
        <div className="lg:col-span-1 space-y-6">
          <div className={cardClasses}>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" /> Informazioni Base
            </h3>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 ml-1">Nome Scheda</label>
                <input 
                  type="text" 
                  className={inputClasses}
                  placeholder="es. Split A - Spinta"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                />
              </div>
              {!isTemplate && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 ml-1">Atleta Assegnato</label>
                  <select 
                    className={cn(inputClasses, "appearance-none")}
                    value={athleteId}
                    onChange={(e) => setAthleteId(e.target.value)}
                  >
                    <option value="">Seleziona atleta</option>
                    {athletes?.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.first_name} {a.last_name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className={cardClasses}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <LayoutGrid className="w-4 h-4" /> Descrizione
              </h3>
              <button 
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="text-[10px] font-bold text-primary-400 hover:text-primary-300 flex items-center gap-1 uppercase tracking-tighter"
              >
                {isPreviewMode ? <><Pencil className="w-3 h-3" /> Edit</> : <><Eye className="w-3 h-3" /> Preview</>}
              </button>
            </div>
            
            {isPreviewMode ? (
              <div className="prose prose-invert prose-sm min-h-[150px] p-4 bg-slate-950/30 rounded-2xl border border-slate-800/50">
                <ReactMarkdown>{description || '_Nessuna descrizione fornita._'}</ReactMarkdown>
              </div>
            ) : (
              <textarea 
                className={cn(inputClasses, "min-h-[200px] resize-none text-sm font-mono")}
                placeholder="Inserisci la descrizione della scheda (supporta Markdown)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            )}
            <p className="mt-2 text-[10px] text-slate-500 italic">
              Puoi usare **grassetto**, *corsivo*, liste, ecc.
            </p>
          </div>
        </div>

        {/* Right Column: Groups & Exercises with Transitions */}
        <div className="lg:col-span-2 space-y-6 min-h-[400px]">
          <AnimatePresence mode="wait">
            {!activeGroupId ? (
              <motion.div
                key="groups-view"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between px-2">
                  <h2 className="text-xl font-black text-slate-100 flex items-center gap-3">
                    Gruppi 
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-400">
                      {groups.length}
                    </span>
                  </h2>
                  {!isNamingGroup && (
                    <button 
                      onClick={() => setIsNamingGroup(true)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all bg-primary-500/10 text-primary-400 hover:bg-primary-500/20"
                      )}
                    >
                      <Plus className="w-4 h-4" /> Crea Gruppo
                    </button>
                  )}
                </div>

                {isNamingGroup && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-900/60 border border-primary-500/30 rounded-3xl p-6 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">Nuovo Gruppo</h4>
                      <button onClick={() => setIsNamingGroup(false)} className="text-slate-500 hover:text-slate-300"><X className="w-4 h-4" /></button>
                    </div>
                    <div className="flex gap-2">
                      <input 
                        autoFocus
                        type="text"
                        className={inputClasses}
                        placeholder="Nome del gruppo..."
                        value={tempGroupName}
                        onChange={(e) => setTempGroupName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && tempGroupName && handleCreateGroup(tempGroupName)}
                      />
                      <button 
                        onClick={() => tempGroupName && handleCreateGroup(tempGroupName)}
                        className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all"
                      >
                        Crea
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Riscaldamento', 'Parte A', 'Parte B', 'Core', 'Defaticamento'].map(name => (
                        <button 
                          key={name}
                          onClick={() => handleCreateGroup(name)}
                          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-400 rounded-lg border border-slate-700 transition-all"
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groups.map((group) => (
                    <button
                      key={group.id}
                      onClick={() => setActiveGroupId(group.id)}
                      className="flex items-center justify-between p-6 bg-slate-900/40 border border-slate-800/80 hover:border-primary-500/50 hover:bg-slate-800/40 rounded-3xl transition-all group text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                          <Flame className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-bold text-slate-100 block text-lg group-hover:text-primary-300 transition-colors">{group.name}</span>
                          <span className="text-xs text-slate-500 font-medium">{group.exerciseCount} esercizi</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <div 
                          onClick={(e) => { e.stopPropagation(); deleteGroup(group.id); }}
                          className="p-2 text-slate-600 hover:text-red-400 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}

                  {groups.length === 0 && !isNamingGroup && (
                    <div className="md:col-span-2 text-center py-20 bg-slate-900/20 rounded-3xl border-2 border-dashed border-slate-800 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-600">
                        <LayoutGrid className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-slate-400 font-bold">Nessun gruppo creato</p>
                        <p className="text-slate-500 text-sm">Inizia creando il primo gruppo di esercizi.</p>
                      </div>
                      <button 
                        onClick={() => setIsNamingGroup(true)}
                        className="mt-2 px-6 py-2 bg-primary-600/10 text-primary-400 border border-primary-500/20 rounded-xl font-bold hover:bg-primary-600/20 transition-all"
                      >
                        Crea Gruppo
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="exercises-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setActiveGroupId(null)}
                      className="p-2 bg-slate-800 text-slate-400 hover:text-slate-100 rounded-xl transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-black text-slate-100 flex items-center gap-3">
                      {activeGroupName}
                      <span className={cn(
                        "px-2.5 py-0.5 rounded-full text-xs font-bold",
                        isEdit ? "bg-amber-500/20 text-amber-400" : "bg-violet-500/20 text-violet-400"
                      )}>
                        {exercises.filter(ex => ex.group_id === activeGroupId).length}
                      </span>
                    </h2>
                  </div>
                  <button 
                    onClick={() => setIsSelectModalOpen(true)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                      isEdit ? "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20" : "bg-violet-500/10 text-violet-400 hover:bg-violet-500/20"
                    )}
                  >
                    <Plus className="w-4 h-4" /> Aggiungi Esercizio
                  </button>
                </div>

                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="exercises-list">
                    {(provided) => (
                      <div 
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                        className="space-y-4"
                      >
                        {exercises
                          .map((ex, originalIndex) => ({ ex, originalIndex }))
                          .filter(({ ex }) => ex.group_id === activeGroupId)
                          .map(({ ex, originalIndex }, filteredIndex) => (
                          <Draggable key={`${ex.exercise_library_id}-${originalIndex}`} draggableId={`ex-${originalIndex}`} index={originalIndex}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className={cn(
                                  "transition-all duration-200",
                                  snapshot.isDragging ? "z-50 scale-[1.02] shadow-2xl" : ""
                                )}
                              >
                                <ExerciseItem 
                                  ex={ex} 
                                  index={filteredIndex} 
                                  themeColor={themeColor}
                                  dragHandleProps={provided.dragHandleProps}
                                  onRemove={() => removeExercise(originalIndex)}
                                  onUpdate={(updates) => updateExercise(originalIndex, updates)}
                                  onToggleSuperset={() => toggleSuperset(originalIndex)}
                                  onGroupAssign={(name) => assignGroup(originalIndex, name)}
                                  onShowInfo={() => handleShowInfo(ex.exercise_library_id || null)}
                                  onOpenMediaViewer={() => setActiveMediaViewerIndex(originalIndex)}
                                  isSuperset={!!(ex.superset_id && exercises[originalIndex-1]?.superset_id === ex.superset_id)}
                                  prevExercise={exercises[originalIndex-1]}
                                />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        
                        {exercises.filter(ex => ex.group_id === activeGroupId).length === 0 && (
                          <div className="text-center py-20 bg-slate-900/20 rounded-3xl border-2 border-dashed border-slate-800 flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-600">
                              <Plus className="w-8 h-8" />
                            </div>
                            <div>
                              <p className="text-slate-400 font-bold">Nessun esercizio in questo gruppo</p>
                              <p className="text-slate-500 text-sm">Clicca su "Aggiungi Esercizio" per iniziare.</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <Modal 
        isOpen={isSelectModalOpen} 
        onClose={() => setIsSelectModalOpen(false)}
        title="Seleziona Esercizio"
      >
        <ExerciseSelector onSelect={addExercise} onInfo={(ex) => setSelectedExerciseInfo(ex)} />
      </Modal>

      {selectedExerciseInfo && (
        <ExerciseDetailModal 
          exercise={selectedExerciseInfo}
          isOpen={!!selectedExerciseInfo}
          onClose={() => setSelectedExerciseInfo(null)}
        />
      )}

      {activeMediaViewerIndex !== null && (
        <MediaViewer
          urls={parseVideoUrls(exercises[activeMediaViewerIndex]?.video_url)}
          title={exercises[activeMediaViewerIndex]?.name}
          onUrlsChange={(newUrls) => {
            updateExercise(activeMediaViewerIndex, { video_url: stringifyVideoUrls(newUrls) });
          }}
          isOpen={true}
          onClose={() => setActiveMediaViewerIndex(null)}
        />
      )}
    </div>
  );
}

interface ExerciseItemProps {
  ex: Partial<PlanExercise>;
  index: number;
  themeColor: 'amber' | 'violet' | 'emerald';
  dragHandleProps: any;
  onRemove: () => void;
  onUpdate: (updates: Partial<PlanExercise>) => void;
  onToggleSuperset: () => void;
  onGroupAssign: (name: string | null) => void;
  onShowInfo: () => void;
  onOpenMediaViewer: () => void;
  isSuperset: boolean;
  prevExercise?: Partial<PlanExercise>;
}

function ExerciseItem({ 
  ex, index, themeColor, dragHandleProps, 
  onRemove, onUpdate, onToggleSuperset, onGroupAssign, onShowInfo, onOpenMediaViewer,
  isSuperset, prevExercise
}: ExerciseItemProps) {
  const [activeTab, setActiveTab] = useState<'main' | 'group' | 'notes'>('main');
  const [groupInput, setGroupInput] = useState(ex.group_name || '');

  const inputClasses = cn(
    "w-full px-3 py-2 bg-slate-950/30 border border-slate-800/50 rounded-xl focus:ring-1 outline-none transition-all placeholder:text-slate-700 text-sm",
    themeColor === 'amber' ? "focus:ring-amber-500/30 group-focus:border-amber-500/30" : "focus:ring-violet-500/30 group-focus:border-violet-500/30"
  );

  return (
    <div className="relative group">
      {/* Group Header (if first in group) */}
      {ex.group_name && (!prevExercise || prevExercise.group_id !== ex.group_id) && (
        <div className="mb-2 ml-4 flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-2 px-3 py-1 rounded-t-xl border-t border-l border-r border-slate-800 bg-slate-900/80 text-[10px] font-black uppercase tracking-widest",
            themeColor === 'amber' ? "text-amber-500" : "text-violet-500"
          )}>
            <Flame className="w-3 h-3" /> {ex.group_name}
          </div>
        </div>
      )}

      {/* Superset Line */}
      {isSuperset && (
        <div className={cn(
          "absolute left-6 -top-4 w-0.5 h-4 -z-10",
          themeColor === 'amber' ? "bg-amber-500/30" : "bg-violet-500/30"
        )} />
      )}

      <div className={cn(
        "bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-3 sm:p-4 transition-all duration-300",
        isSuperset ? "ml-4 sm:ml-6 border-l-4" : "",
        isSuperset && (themeColor === 'amber' ? "border-l-amber-500" : "border-l-violet-500"),
        "hover:border-slate-700"
      )}>
        <div className="flex items-start gap-4">
          {/* Drag Handle & Index */}
          <div className="flex flex-col items-center gap-1 mt-1">
            <div {...dragHandleProps} className="p-1 cursor-grab active:cursor-grabbing text-slate-600 hover:text-slate-400 transition-colors">
              <GripVertical className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[8px] sm:text-[10px] font-black text-slate-700 uppercase">{index + 1}</span>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-slate-100 text-lg leading-tight">{ex.name}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <button 
                    onClick={onShowInfo}
                    className="text-[10px] font-bold uppercase tracking-wider text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-all px-2 py-1 rounded-md hover:bg-slate-800/50"
                  >
                    <Info className="w-3 h-3" /> Info
                  </button>
                  <button 
                    onClick={onOpenMediaViewer}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all px-2 py-1 rounded-md hover:bg-slate-800/50",
                      ex.video_url 
                        ? (themeColor === 'amber' ? "text-amber-500 hover:text-amber-400" : "text-violet-500 hover:text-violet-400") 
                        : "text-slate-500 hover:text-slate-300"
                    )}
                  >
                    <Tv className="w-3 h-3" /> {ex.video_url ? 'Video' : '+ Video'}
                  </button>
                  <button 
                    onClick={() => setActiveTab(t => t === 'group' ? 'main' : 'group')}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all px-2 py-1 rounded-md",
                      activeTab === 'group'
                        ? (themeColor === 'amber' ? "bg-amber-500/20 text-amber-500" : "bg-violet-500/20 text-violet-500")
                        : (ex.group_name 
                            ? (themeColor === 'amber' ? "text-amber-500 hover:text-amber-400" : "text-violet-500 hover:text-violet-400") 
                            : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50")
                    )}
                  >
                    <Flame className="w-3 h-3" /> {ex.group_name || 'Gruppo'}
                  </button>
                  <button 
                    onClick={() => setActiveTab(t => t === 'notes' ? 'main' : 'notes')}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all px-2 py-1 rounded-md",
                      activeTab === 'notes'
                        ? "bg-primary-500/20 text-primary-400"
                        : (ex.coach_notes 
                            ? "text-primary-400 hover:text-primary-300" 
                            : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50")
                    )}
                  >
                    <MessageSquare className="w-3 h-3" /> {ex.coach_notes ? 'Nota' : '+ Nota'}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={onToggleSuperset}
                  className={cn(
                    "p-2 rounded-xl transition-all",
                    isSuperset 
                      ? (themeColor === 'amber' ? "bg-amber-500 text-white" : "bg-violet-500 text-white")
                      : "bg-slate-950/50 text-slate-500 hover:text-primary-400 border border-slate-800"
                  )}
                  title={isSuperset ? "Rimuovi Superset" : "Unisci come Superset"}
                >
                  {isSuperset ? <Unlink className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
                </button>
                <button 
                  onClick={onRemove}
                  className="p-2 bg-slate-950/50 text-slate-500 hover:text-red-400 border border-slate-800 rounded-xl transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {activeTab === 'main' && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Pianificazione Serie</label>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          const newSets = Math.max(1, (ex.target_sets || 0) - 1);
                          const newDetail = (ex.target_reps_detail || []).slice(0, newSets);
                          onUpdate({ target_sets: newSets, target_reps_detail: newDetail });
                        }}
                        className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: ex.target_sets || 0 }).map((_, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 group/set">
                            <input 
                              type="number"
                              className={cn(inputClasses, "w-10 sm:w-14 text-center px-1 font-bold text-xs sm:text-sm")}
                              value={ex.target_reps_detail?.[i] ?? ex.target_reps}
                              onChange={(e) => {
                                const newDetail = [...(ex.target_reps_detail || Array(ex.target_sets).fill(ex.target_reps))];
                                newDetail[i] = parseInt(e.target.value) || 0;
                                onUpdate({ target_reps_detail: newDetail, target_reps: newDetail[0] });
                              }}
                            />
                            <span className="text-[8px] font-black text-slate-600 uppercase tracking-tighter">Set {i+1}</span>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => {
                          const newSets = (ex.target_sets || 0) + 1;
                          const lastRep = ex.target_reps_detail?.[ex.target_reps_detail.length - 1] ?? ex.target_reps ?? 10;
                          const newDetail = [...(ex.target_reps_detail || Array(ex.target_sets).fill(ex.target_reps)), lastRep];
                          onUpdate({ target_sets: newSets, target_reps_detail: newDetail });
                        }}
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                          themeColor === 'amber' ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "bg-violet-500/20 text-violet-500 hover:bg-violet-500/30"
                        )}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Recupero rip. (s)</label>
                    <input 
                      type="number" 
                      className={inputClasses}
                      value={ex.rest_between_reps_seconds || 0}
                      onChange={(e) => onUpdate({ rest_between_reps_seconds: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Recupero serie (s)</label>
                    <input 
                      type="number" 
                      className={inputClasses}
                      value={ex.rest_seconds}
                      onChange={(e) => onUpdate({ rest_seconds: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Expandable Sections */}
            {activeTab === 'notes' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Editor Note Coach</span>
                    <button onClick={() => setActiveTab('main')} className="text-slate-500 hover:text-slate-300"><X className="w-4 h-4" /></button>
                  </div>
                  <textarea 
                    autoFocus
                    className={cn(inputClasses, "min-h-[100px] bg-transparent border-0 focus:ring-0 resize-none p-0 font-mono")}
                    placeholder="Es. ## Focus\n- Mantenere il controllo..."
                    value={ex.coach_notes || ''}
                    onChange={(e) => onUpdate({ coach_notes: e.target.value })}
                  />
                  {ex.coach_notes && (
                    <div className="mt-2 pt-2 border-t border-slate-800/50">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-2">Preview MD</span>
                      <div className="prose prose-invert prose-xs">
                        <ReactMarkdown>{ex.coach_notes}</ReactMarkdown>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'group' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assegna Gruppo</span>
                    <button onClick={() => setActiveTab('main')} className="text-slate-500 hover:text-slate-300"><X className="w-4 h-4" /></button>
                  </div>
                  <div className="flex gap-2">
                    <input 
                      autoFocus
                      type="text"
                      className={inputClasses}
                      placeholder="es. Riscaldamento, Parte A..."
                      value={groupInput}
                      onChange={(e) => setGroupInput(e.target.value)}
                    />
                    <button 
                      onClick={() => {
                        onGroupAssign(groupInput.trim() || null);
                        setActiveTab('main');
                      }}
                      className={cn(
                        "px-3 py-2 rounded-xl transition-all",
                        themeColor === 'amber' ? "bg-amber-600 text-white" : "bg-violet-600 text-white"
                      )}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    {ex.group_name && (
                      <button 
                        onClick={() => {
                          onGroupAssign(null);
                          setGroupInput('');
                          setActiveTab('main');
                        }}
                        className="px-3 py-2 bg-slate-800 text-slate-400 hover:text-red-400 rounded-xl transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Riscaldamento', 'Parte A', 'Parte B', 'Core', 'Defaticamento'].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => {
                          onGroupAssign(tag);
                          setGroupInput(tag);
                          setActiveTab('main');
                        }}
                        className="px-3 py-1 bg-slate-800/50 hover:bg-slate-800 text-[10px] font-bold text-slate-400 rounded-lg border border-slate-700/50 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExerciseSelector({ onSelect, onInfo }: { onSelect: (ex: ExerciseLibrary) => void; onInfo: (ex: ExerciseLibrary) => void }) {
  const { user } = useAuth();
  const [filtered, setFiltered] = useState<ExerciseLibrary[]>([]);
  const { data: exercises, isLoading } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getAllExercises,
  });

  const [visibleCount, setVisibleCount] = useState(20);

  // Reset visible count when filtered results change
  useEffect(() => {
    setVisibleCount(20);
  }, [filtered]);

  const visibleExercises = useMemo(() => {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 20, filtered.length));
  };

  return (
    <div className="space-y-6 max-h-[70vh] flex flex-col">
      <div className="relative z-10 shrink-0">
        <AdvancedExerciseFilters 
          exercises={exercises || []} 
          onFilterChange={setFiltered}
          userId={user?.id}
          compact
        />
      </div>
      
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center p-12"><Loader2 className="animate-spin text-primary-500 w-8 h-8" /></div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/50 rounded-3xl border border-slate-800 border-dashed">
              <p className="text-slate-500 font-bold">Nessun esercizio trovato.</p>
              <p className="text-slate-600 text-xs mt-1">Prova a cambiare i filtri di ricerca.</p>
            </div>
          ) : (
          <div className="space-y-3">
            {visibleExercises.map(ex => (
              <button 
                key={ex.id}
                onClick={() => onSelect(ex)}
                className="flex items-center justify-between p-4 bg-slate-900/40 border border-slate-800/80 hover:border-primary-500/50 hover:bg-slate-800/40 rounded-2xl transition-all group text-left w-full shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-primary-500/10 flex items-center justify-center font-black text-xs text-primary-400 border border-slate-700 group-hover:border-primary-500/30 transition-all">
                    {ex.muscle_group?.[0]?.toUpperCase() || '?'}
                  </div>
                  <div>
                    <span className="font-bold text-slate-100 block text-base group-hover:text-primary-300 transition-colors">{ex.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
                      {ex.muscle_group || 'Corpo libero'}
                      {ex.equipment && <span className="w-1 h-1 bg-slate-700 rounded-full" />}
                      {ex.equipment}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div 
                    onClick={(e) => { e.stopPropagation(); onInfo(ex); }}
                    className="p-2 text-slate-400 hover:text-primary-400 hover:bg-primary-400/10 rounded-lg transition-all cursor-pointer"
                    role="button"
                    title="Informazioni esercizio"
                  >
                    <Info className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-primary-500 text-slate-600 group-hover:text-white transition-all shadow-inner">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </button>
            ))}

            {hasMore && (
              <button
                onClick={loadMore}
                className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary-400 transition-colors border border-dashed border-slate-800 rounded-2xl hover:border-primary-500/30 bg-slate-900/20"
              >
                Carica Altri ({filtered.length - visibleCount} rimanenti)
              </button>
            )}
          </div>
          )}
        </div>
      )}
    </div>
  );
}
