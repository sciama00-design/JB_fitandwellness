import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Trash2, Save, GripVertical, 
  Link as LinkIcon, Unlink, Loader2, ChevronRight,
  Info, LayoutGrid, Flame, Pencil, Eye, Check, X, MessageSquare,
  ClipboardList, Tv, Sparkles, ArrowLeft
} from 'lucide-react';
import ExerciseDetailModal from '../ExerciseDetailModal';
import { MediaViewer } from '../shared/MediaViewer';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import ReactMarkdown from 'react-markdown';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../lib/auth';
import type { WorkoutPlan, PlanExercise, ExerciseLibrary, Profile, WorkoutPlanTemplate, PlanTemplateExercise } from '../../types/database';
import { exerciseService } from '../../services/exerciseService';
import { useAthleteNavigation } from '../../context/AthleteNavigationContext';
import Modal from '../Modal';
import AdvancedExerciseFilters from '../ExerciseFilters';
import { cn } from '../../lib/utils';
import WorkoutChatCompiler from './WorkoutChatCompiler';
import { mappingService } from '../../services/mappingService';
import { coachPreferenceService } from '../../services/coachPreferenceService';

interface WorkoutPlanEditorProps {
  initialData?: (WorkoutPlan & { exercises: PlanExercise[] }) | (WorkoutPlanTemplate & { exercises: PlanTemplateExercise[] });
  mode: 'create' | 'edit';
  onSubmit: (data: { plan: any; exercises: any[] }) => Promise<void>;
  isSubmitting: boolean;
  athletes?: Profile[];
  isTemplate?: boolean;
  onBack?: () => void;
}

export default function WorkoutPlanEditor({ 
  initialData, 
  mode, 
  onSubmit, 
  isSubmitting,
  athletes,
  isTemplate = false,
  onBack
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
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [editingExerciseIndex, setEditingExerciseIndex] = useState<number | null>(null);
  const [activeMobileTab, setActiveMobileTab] = useState<'info' | 'groups'>('groups');
  
  const storageKey = useMemo(() => {
    const id = initialData?.id || 'new';
    const type = isTemplate ? 'template' : 'plan';
    const athleteSuffix = (!isTemplate && athleteId) ? `_athlete_${athleteId}` : '';
    return `workout_draft_${type}_${mode}_${id}${athleteSuffix}`;
  }, [initialData?.id, isTemplate, mode, athleteId]);

  // Load draft on mount
  useEffect(() => {
    const draft = localStorage.getItem(storageKey);
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        setPlanName(parsed.planName || '');
        setDescription(parsed.description || '');
        setExercises(parsed.exercises || []);
        if (!isTemplate) setAthleteId(parsed.athleteId || '');
        setIsInitialized(true);
      } catch (e) {
        console.error("Failed to parse workout draft", e);
        // If draft fails, we still need to wait for initialData if in edit mode
        if (mode === 'create') setIsInitialized(true);
      }
    } else if (mode === 'create') {
      // If no draft and in create mode, mark as initialized immediately
      setIsInitialized(true);
    }
    // In edit mode, we wait for initialData to arrive via the other useEffect
  }, [storageKey, isTemplate, mode]);

  // Save draft on change
  useEffect(() => {
    if (!isInitialized) return;

    const state = {
      planName,
      description,
      exercises,
      athleteId: isTemplate ? undefined : athleteId,
    };
    localStorage.setItem(storageKey, JSON.stringify(state));
    setHasUnsavedChanges(true);
  }, [planName, description, exercises, athleteId, storageKey, isTemplate, isInitialized]);

  // Navigation Guard: Browser refresh / close tab
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const clearDraft = useCallback(() => {
    localStorage.removeItem(storageKey);
    setHasUnsavedChanges(false);
  }, [storageKey]);

  const handleDiscard = () => {
    if (window.confirm('Sei sicuro di voler annullare le modifiche? Tutti i dati non salvati andranno perduti.')) {
      clearDraft();
      window.location.reload(); // Hard refresh to reset to initial state from server
    }
  };
  
  // Derived groups from exercises
  const groups = useMemo(() => {
    const g: { id: string; name: string; exerciseCount: number; iterations: number }[] = [];
    const seen = new Set<string>();
    
    exercises.forEach(ex => {
      if (ex.group_id && !seen.has(ex.group_id)) {
        seen.add(ex.group_id);
        g.push({
          id: ex.group_id,
          name: ex.group_name || 'Senza nome',
          exerciseCount: exercises.filter(e => e.group_id === ex.group_id).length,
          iterations: ex.group_iterations || 1
        });
      }
    });
    return g;
  }, [exercises]);

  const activeGroupIterations = useMemo(() => {
    const existing = groups.find(g => g.id === activeGroupId);
    return existing ? existing.iterations : 1;
  }, [groups, activeGroupId]);

  const activeGroupName = useMemo(() => {
    const existing = groups.find(g => g.id === activeGroupId);
    return existing ? existing.name : pendingGroupName;
  }, [groups, activeGroupId, pendingGroupName]);

  const { data: allLibraryExercises } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getAllExercises,
  });

  const { user } = useAuth();
  const { isNavVisible } = useAthleteNavigation();
  const { data: mappings, refetch: refetchMappings } = useQuery({
    queryKey: ['exercise-mappings', user?.id],
    queryFn: () => mappingService.getMappings(user!.id),
    enabled: !!user?.id,
  });

  const { data: preferences } = useQuery({
    queryKey: ['coach-preferences', user?.id, 'workout'],
    queryFn: () => coachPreferenceService.getPreferences(user!.id!, 'workout'),
    enabled: !!user?.id,
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
    if (initialData && !isInitialized) {
      setPlanName(initialData.name);
      if (!isTemplate) setAthleteId((initialData as WorkoutPlan).athlete_id);
      setDescription(initialData.description || '');
      setExercises(initialData.exercises || []);
      setIsInitialized(true);
    }
  }, [initialData, isTemplate, isInitialized]);

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
      // Global reorder of GROUPS
      const newGroupsOrder = Array.from(groups);
      const [reorderedGroup] = newGroupsOrder.splice(result.source.index, 1);
      newGroupsOrder.splice(result.destination.index, 0, reorderedGroup);
      
      const updated: any[] = [];
      newGroupsOrder.forEach(g => {
        const groupExs = items.filter(ex => ex.group_id === g.id);
        updated.push(...groupExs);
      });
      
      // Add any exercises that are not in a group (if any) at the end
      const noGroupExs = items.filter(ex => !ex.group_id);
      updated.push(...noGroupExs);
      
      setExercises(updated.map((ex, idx) => ({ ...ex, order_index: idx })));
      return; 
    }
    
    // Update order_index for all
    const updated = items.map((ex, idx) => ({ ...ex, order_index: idx }));
    setExercises(updated);
  };

  const addExercise = (libEx: ExerciseLibrary) => {
    const commonUpdates = {
      exercise_library_id: libEx.id,
      name: libEx.name_it || libEx.name,
      video_urls: libEx.video_urls || [],
      image_url: libEx.images?.[0] || null,
      needs_confirmation: false, // Selected from library, so confirmed
    };

    if (editingExerciseIndex !== null) {
      handleManualExerciseUpdate(editingExerciseIndex, commonUpdates);
      setEditingExerciseIndex(null);
    } else {
      const newEx: Partial<PlanExercise> = {
        ...commonUpdates,
        target_sets: 3,
        target_reps: 10,
        rest_seconds: 60,
        rest_esercizio: 0,
        order_index: exercises.length,
        group_id: activeGroupId,
        group_name: activeGroupName,
        group_iterations: 1,
        superset_id: null,
        target_reps_detail: Array(3).fill(10),
        is_time_based: false,
      };
      setExercises([...exercises, newEx]);
    }
    setIsSelectModalOpen(false);
  };

  const handleAIResult = (aiResult: { 
    exercises: any[], 
    thinking?: string, 
    action_taken?: 'append' | 'modify' | 'replace',
    plan_title?: string | null,
    plan_description?: string | null
  }) => {
    // 0. Auto-update Header if empty or provided
    if (aiResult.plan_title && (!planName || planName.toLowerCase().includes('senza titolo'))) {
      setPlanName(aiResult.plan_title);
    }
    if (aiResult.plan_description && (!description || description.length < 5)) {
      setDescription(aiResult.plan_description);
    }

    const aiExercises = aiResult.exercises;
    const isModify = aiResult.action_taken === 'modify';
    
    const newItems: any[] = [];
    const localGroupMap = new Map<string, string>(); // name -> id

    aiExercises.forEach((aiEx, idx) => {
      const libEx = aiEx.exercise_library_id ? allLibraryExercises?.find(e => e.id === aiEx.exercise_library_id) : null;
      
      // Grouping logic
      let groupId = aiEx.group_id || null;
      let groupName = aiEx.group_name || null;

      if (groupName) {
        if (localGroupMap.has(groupName)) {
            groupId = localGroupMap.get(groupName)!;
        } else {
            const existingInEditor = exercises.find(ex => ex.group_name === groupName);
            if (existingInEditor) {
                groupId = existingInEditor.group_id;
                localGroupMap.set(groupName, groupId!);
            } else {
                groupId = aiEx.group_id || crypto.randomUUID();
                localGroupMap.set(groupName, groupId);
            }
        }
      }

      // Reps logic: Priority to target_reps_detail from AI
      let repsArray: number[] = [];
      if (aiEx.target_reps_detail && Array.isArray(aiEx.target_reps_detail)) {
        repsArray = aiEx.target_reps_detail.map((r: any) => parseInt(r) || 10);
      } else {
        const repsStr = String(aiEx.target_reps || "10");
        repsArray = repsStr.includes(',') 
          ? repsStr.split(',').map(r => parseInt(r.trim()) || 10)
          : Array(aiEx.target_sets || 3).fill(parseInt(repsStr) || 10);
      }
      
      const finalSets = repsArray.length || (aiEx.target_sets || 3);

      newItems.push({
        exercise_library_id: aiEx.exercise_library_id || null,
        name: aiEx.name,
        spoken_name: aiEx.spoken_name,
        target_sets: finalSets,
        target_reps: repsArray[0] || 10,
        rest_seconds: aiEx.rest_seconds || 60,
        rest_esercizio: aiEx.rest_esercizio || 0,
        order_index: isModify ? idx : (exercises.length + idx),
        video_urls: libEx?.video_urls || [],
        image_url: libEx?.images?.[0] || null,
        group_id: groupId || activeGroupId,
        group_name: groupName || activeGroupName,
        group_iterations: aiEx.group_iterations || 1,
        superset_id: aiEx.is_superset ? (exercises[exercises.length - 1]?.superset_id || crypto.randomUUID()) : null,
        target_reps_detail: repsArray,
        coach_notes: aiEx.coach_notes || null,
        is_time_based: aiEx.is_time_based || false,
        confidence_score: aiEx.confidence_score,
        needs_confirmation: aiEx.needs_confirmation,
        alternatives: aiEx.alternatives || [],
      });
    });

    if (isModify) {
      setExercises(newItems);
    } else {
      setExercises([...exercises, ...newItems]);
    }
  };

  const handleManualExerciseUpdate = async (index: number, updates: Partial<PlanExercise>) => {
    const currentEx = exercises[index];
    
    // Learning mechanism: if this was an AI exercise with a spoken name
    // and the coach is now assigning a library ID for the first time or changing it
    if (currentEx.spoken_name && updates.exercise_library_id && updates.exercise_library_id !== currentEx.exercise_library_id) {
      const confirmMapping = window.confirm(`Vuoi associare "${currentEx.spoken_name}" a questo esercizio per il futuro?`);
      if (confirmMapping) {
        try {
          await mappingService.createMapping({
            coach_id: user!.id,
            slang_name: currentEx.spoken_name,
            standard_exercise_id: updates.exercise_library_id
          });
          refetchMappings();
        } catch (err) {
          console.error("Error saving mapping:", err);
        }
      }
    }

    updateExercise(index, updates);
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

  const updateGroupIterations = (groupId: string, iterations: number) => {
    const newExercises = exercises.map(ex => 
      ex.group_id === groupId ? { ...ex, group_iterations: iterations } : ex
    );
    setExercises(newExercises);
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

  const handleSave = async () => {
    const planData: any = { name: planName, description };
    if (!isTemplate) {
      planData.athlete_id = athleteId;
    }
    
    try {
      await onSubmit({
        plan: planData,
        exercises: exercises
      });
      clearDraft(); // Only clear if submission succeeds
    } catch (error) {
      console.error("Save failed:", error);
      // Keep draft so they don't lose work
    }
  };

  const containerClasses = cn(
    "max-w-5xl mx-auto pb-20"
  );

  const cardClasses = cn(
    "rounded-2xl border border-white/[0.05] bg-card/20 p-4 sm:p-6 relative overflow-hidden",
    "hover:border-white/[0.1] transition-all duration-300"
  );

  const inputClasses = cn(
    "w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all placeholder:text-muted-foreground/25 text-foreground font-medium text-sm"
  );

  const btnPrimaryClasses = cn(
    "flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
    "btn btn-primary shadow-primary/20"
  );

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl -mx-4 px-4 md:-mx-8 md:px-8 pt-4 md:pt-6 pb-4 sm:pb-6 border-b border-white/5 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              {onBack && (
                <button 
                  onClick={() => {
                    if (hasUnsavedChanges && !window.confirm('Hai modifiche non salvate. Sei sicuro di voler uscire?')) return;
                    onBack();
                  }}
                  className="p-2 -ml-2 rounded-xl text-muted-foreground/40 hover:text-foreground hover:bg-white/[0.05] transition-all"
                  title="Torna indietro"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary">
                {isTemplate ? <ClipboardList className="w-5 h-5" /> : (isEdit ? <Pencil className="w-5 h-5" /> : <Plus className="w-5 h-5" />)}
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                {isTemplate ? (isEdit ? 'Modifica Modello' : 'Nuovo Modello') : (isEdit ? 'Modifica Scheda' : 'Nuova Scheda')}
              </h1>
            </div>
            <p className="text-muted-foreground/40 text-[11px] sm:text-sm font-medium ml-[44px] sm:ml-[52px]">
              {isTemplate ? 'Crea un modello di scheda da riutilizzare per i tuoi atleti.' : 'Configura esercizi, superset e gruppi per il tuo atleta.'}
            </p>
          </div>
          
          <div className="flex items-center gap-2 sm:mt-0">
            <button 
              onClick={handleDiscard}
              className="h-8 sm:h-9 px-3 sm:px-4 rounded-lg font-semibold text-[10px] sm:text-[11px] transition-all text-muted-foreground/60 hover:text-destructive hover:bg-destructive/10 flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" /> Annulla
            </button>
            
            <button 
              onClick={handleSave}
              className={cn(btnPrimaryClasses, "py-2 sm:py-2.5 px-4 sm:px-6 text-xs sm:text-sm")}
              disabled={isSubmitting || !planName || (!isTemplate && !athleteId)}
            >
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Salva {isTemplate ? 'Modello' : 'Scheda'}</>}
            </button>
          </div>
        </div>

        {/* Mobile Subtabs */}
        <div className="lg:hidden mt-6 flex p-1 bg-white/[0.03] border border-white/5 rounded-2xl">
          <button
            onClick={() => setActiveMobileTab('info')}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              activeMobileTab === 'info' 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5" 
                : "text-muted-foreground/40 hover:text-muted-foreground/60"
            )}
          >
            <Info className="w-3.5 h-3.5" />
            Info & Descrizione
          </button>
          <button
            onClick={() => setActiveMobileTab('groups')}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              activeMobileTab === 'groups' 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5" 
                : "text-muted-foreground/40 hover:text-muted-foreground/60"
            )}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Gruppi
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-6 lg:gap-8 px-4 md:px-0">
        {/* Left Column: Details & Description */}
        <div className={cn(
          "lg:col-span-1 h-fit lg:sticky lg:top-[112px] z-30 space-y-6",
          activeMobileTab !== 'info' && "hidden lg:block"
        )}>
          <div className={cardClasses}>
            <h3 className="text-sm font-semibold text-muted-foreground/50 uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" /> Informazioni Base
            </h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em] ml-1">Nome Scheda</label>
                <input 
                  type="text" 
                  className={inputClasses}
                  placeholder="es. Split A - Spinta"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                />
              </div>
              {!isTemplate && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em] ml-1">Atleta Assegnato</label>
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
              <h3 className="text-sm font-semibold text-muted-foreground/50 uppercase tracking-[0.1em] flex items-center gap-2">
                <LayoutGrid className="w-4 h-4" /> Descrizione
              </h3>
              <button 
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="text-[10px] font-semibold text-primary hover:text-primary/80 flex items-center gap-1 uppercase tracking-wide"
              >
                {isPreviewMode ? <><Pencil className="w-3 h-3" /> Edit</> : <><Eye className="w-3 h-3" /> Preview</>}
              </button>
            </div>
            
            {isPreviewMode ? (
              <div className="prose prose-invert prose-sm min-h-[150px] p-4 bg-white/[0.02] rounded-xl border border-white/[0.04]">
                <ReactMarkdown>{description || '_Nessuna descrizione fornita._'}</ReactMarkdown>
              </div>
            ) : (
              <textarea 
                className={cn(inputClasses, "min-h-[180px] resize-none font-mono")}
                placeholder="Inserisci la descrizione della scheda (supporta Markdown)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            )}
            <p className="mt-2 text-[10px] text-muted-foreground/30 italic">
              Puoi usare **grassetto**, *corsivo*, liste, ecc.
            </p>
          </div>
        </div>

        {/* Right Column: Groups & Exercises with Transitions */}
        <div className={cn(
          "lg:col-span-2 space-y-6 min-h-[400px]",
          activeMobileTab !== 'groups' && "hidden lg:block"
        )}>
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
                  <h2 className="text-xl font-black text-foreground flex items-center gap-3">
                    Gruppi 
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/[0.06] text-muted-foreground/60">
                      {groups.length}
                    </span>
                  </h2>
                  {!isNamingGroup && (
                    <button 
                      onClick={() => setIsNamingGroup(true)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all bg-primary/[0.08] text-primary hover:bg-primary/15"
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
                    className="bg-card/30 border border-primary/20 rounded-3xl p-6 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-black text-muted-foreground/60 uppercase tracking-widest">Nuovo Gruppo</h4>
                      <button onClick={() => setIsNamingGroup(false)} className="text-muted-foreground/40 hover:text-foreground/70"><X className="w-4 h-4" /></button>
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
                        className="px-6 py-2 bg-primary hover:bg-primary text-white rounded-xl font-bold transition-all"
                      >
                        Crea
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Riscaldamento', 'Parte A', 'Parte B', 'Core', 'Defaticamento'].map(name => (
                        <button 
                          key={name}
                          onClick={() => handleCreateGroup(name)}
                          className="px-3 py-1 bg-white/[0.06] hover:bg-white/[0.08] text-[10px] font-bold text-muted-foreground/60 rounded-lg border border-white/[0.06] transition-all"
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="groups-list" direction="horizontal">
                    {(provided) => (
                      <div 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {groups.map((group, groupIdx) => (
                          <Draggable key={group.id} draggableId={group.id} index={groupIdx}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className={cn(
                                  "transition-all duration-200",
                                  snapshot.isDragging ? "z-50 scale-[1.02] shadow-2xl" : ""
                                )}
                              >
                                <button
                                  onClick={() => setActiveGroupId(group.id)}
                                  className="w-full flex items-center justify-between p-4 sm:p-6 bg-card/20 border border-white/[0.06]/80 hover:border-primary/30 hover:bg-white/[0.06]/40 rounded-2xl sm:rounded-3xl transition-all group text-left"
                                >
                                  <div className="flex items-center gap-4">
                                    <div {...provided.dragHandleProps} className="p-1 cursor-grab active:cursor-grabbing text-muted-foreground/20 hover:text-muted-foreground/60 transition-colors">
                                      <GripVertical className="w-5 h-5" />
                                    </div>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/[0.08] flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                                      <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <span className="font-bold text-foreground block text-base sm:text-lg group-hover:text-primary/80 transition-colors uppercase tracking-tight italic truncate">{group.name}</span>
                                      <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-wider">{group.exerciseCount} esercizi</span>
                                        <div className="w-1 h-1 rounded-full bg-white/[0.06]" />
                                        <div 
                                          onClick={(e) => e.stopPropagation()} 
                                          className="flex items-center gap-2 bg-white/[0.03] px-2 py-0.5 rounded-lg border border-white/[0.06]/50 focus-within:border-primary/30 transition-colors"
                                        >
                                          <span className="text-[9px] font-black text-muted-foreground/30 uppercase">Giri:</span>
                                          <input 
                                            type="number" 
                                            min="1"
                                            className="w-8 bg-transparent text-[10px] font-black text-primary outline-none p-0 border-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            value={group.iterations}
                                            onChange={(e) => updateGroupIterations(group.id, parseInt(e.target.value) || 1)}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <div 
                                      onClick={(e) => { e.stopPropagation(); deleteGroup(group.id); }}
                                      className="p-2 text-muted-foreground/30 hover:text-red-400 rounded-lg transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground/30 sm:group-hover:translate-x-1 transition-all" />
                                  </div>
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}

                        {groups.length === 0 && !isNamingGroup && (
                          <div className="md:col-span-2 text-center py-20 bg-card/10 rounded-3xl border-2 border-dashed border-white/[0.06] flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/[0.06] flex items-center justify-center text-muted-foreground/30">
                              <LayoutGrid className="w-8 h-8" />
                            </div>
                            <div>
                              <p className="text-muted-foreground/60 font-bold">Nessun gruppo creato</p>
                              <p className="text-muted-foreground/40 text-sm">Inizia creando il primo gruppo di esercizi.</p>
                            </div>
                            <button 
                              onClick={() => setIsNamingGroup(true)}
                              className="mt-2 px-6 py-2 bg-primary/10 text-primary border border-primary/15 rounded-xl font-bold hover:bg-primary/20 transition-all"
                            >
                              Crea Gruppo
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </motion.div>
            ) : (
              <motion.div
                key="exercises-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="sticky top-[112px] z-20 flex items-center justify-between px-4 py-3 -mx-2 mb-4 bg-background/90 backdrop-blur-md border-b border-white/5 md:rounded-2xl shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setActiveGroupId(null)}
                      className="p-2 bg-white/[0.06] text-muted-foreground/60 hover:text-foreground rounded-xl transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-black text-foreground flex items-center gap-3">
                      {activeGroupName}
                      <span className={cn(
                        "px-2.5 py-0.5 rounded-full text-xs font-bold",
                        isEdit ? "bg-amber-500/20 text-amber-400" : "bg-violet-500/20 text-violet-400"
                      )}>
                        {exercises.filter(ex => ex.group_id === activeGroupId).length} es.
                      </span>
                      <div className="flex items-center gap-2 bg-white/[0.06]/50 px-3 py-1 rounded-xl border border-white/[0.05] ml-2">
                        <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">Giri:</span>
                        <input 
                          type="number"
                          min="1"
                          className="w-10 bg-transparent text-sm font-black text-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          value={activeGroupIterations}
                          onChange={(e) => updateGroupIterations(activeGroupId!, parseInt(e.target.value) || 1)}
                        />
                      </div>
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
                                  onUpdate={(updates) => handleManualExerciseUpdate(originalIndex, updates)}
                                  onToggleSuperset={() => toggleSuperset(originalIndex)}
                                  onGroupAssign={(name) => assignGroup(originalIndex, name)}
                                  onShowInfo={(id) => handleShowInfo(id || ex.exercise_library_id || null)}
                                  onOpenMediaViewer={() => setActiveMediaViewerIndex(originalIndex)}
                                  onNameClick={() => {
                                    setEditingExerciseIndex(originalIndex);
                                    setIsSelectModalOpen(true);
                                  }}
                                  isSuperset={!!(ex.superset_id && exercises[originalIndex-1]?.superset_id === ex.superset_id)}
                                  prevExercise={exercises[originalIndex-1]}
                                  allLibraryExercises={allLibraryExercises}
                                />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        
                        {exercises.filter(ex => ex.group_id === activeGroupId).length === 0 && (
                          <div className="text-center py-20 bg-card/10 rounded-3xl border-2 border-dashed border-white/[0.06] flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/[0.06] flex items-center justify-center text-muted-foreground/30">
                              <Plus className="w-8 h-8" />
                            </div>
                            <div>
                              <p className="text-muted-foreground/60 font-bold">Nessun esercizio in questo gruppo</p>
                              <p className="text-muted-foreground/40 text-sm">Clicca su "Aggiungi Esercizio" per iniziare.</p>
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

      <AnimatePresence>
        {selectedExerciseInfo && (
          <ExerciseDetailModal 
            exercise={selectedExerciseInfo}
            isOpen={!!selectedExerciseInfo}
            onClose={() => setSelectedExerciseInfo(null)}
            isCoach={true}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMediaViewerIndex !== null && (
          <MediaViewer
            urls={exercises[activeMediaViewerIndex]?.video_urls || []}
            title={exercises[activeMediaViewerIndex]?.name}
            onUrlsChange={(newUrls) => {
              updateExercise(activeMediaViewerIndex, { video_urls: newUrls });
            }}
            isOpen={true}
            onClose={() => setActiveMediaViewerIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* AI Assistance Buttons */}
      <motion.div 
        initial={false}
        animate={{ 
          bottom: isNavVisible ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 104 : 32) : 32,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        className="fixed right-6 sm:right-8 z-50 flex flex-col gap-4"
      >
        <WorkoutChatCompiler 
          onResult={handleAIResult} 
          existingMappings={mappings || []}
          currentPlan={exercises}
          preferences={preferences || []}
          chatKey={storageKey}
          planTitle={planName}
          planDescription={description}
        />
      </motion.div>

      <Modal
        isOpen={isSelectModalOpen}
        onClose={() => setIsSelectModalOpen(false)}
        title="Seleziona Esercizio"
      >
        <ExerciseSelector 
          onSelect={addExercise}
          onInfo={(ex) => setSelectedExerciseInfo(ex)}
        />
      </Modal>
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
  onShowInfo: (id?: string | null) => void;
  onOpenMediaViewer: () => void;
  onNameClick: () => void;
  isSuperset: boolean;
  prevExercise?: Partial<PlanExercise>;
  allLibraryExercises?: ExerciseLibrary[];
}

function ExerciseItem({ 
  ex, index, themeColor, dragHandleProps, 
  onRemove, onUpdate, onToggleSuperset, onGroupAssign, onShowInfo, onOpenMediaViewer, onNameClick,
  isSuperset, prevExercise, allLibraryExercises
}: ExerciseItemProps) {
  const [activeTab, setActiveTab] = useState<'main' | 'group' | 'notes'>('main');
  const [groupInput, setGroupInput] = useState(ex.group_name || '');

  const inputClasses = cn(
    "w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06]/50 rounded-xl focus:ring-1 outline-none transition-all placeholder:text-muted-foreground/20 text-sm",
    themeColor === 'amber' ? "focus:ring-amber-500/30 group-focus:border-amber-500/30" : "focus:ring-violet-500/30 group-focus:border-violet-500/30"
  );

  return (
    <div className="relative group">
      {/* Group Header (if first in group) */}
      {ex.group_name && (!prevExercise || prevExercise.group_id !== ex.group_id) && (
        <div className="mb-2 ml-4 flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-2 px-3 py-1 rounded-t-xl border-t border-l border-r border-white/[0.06] bg-card/40 text-[10px] font-black uppercase tracking-widest",
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
        "bg-card/30 backdrop-blur-md border border-white/[0.06]/80 rounded-2xl p-3 sm:p-4 transition-all duration-300",
        isSuperset ? "ml-4 sm:ml-6 border-l-4" : "",
        isSuperset && (themeColor === 'amber' ? "border-l-amber-500" : "border-l-violet-500"),
        ex.needs_confirmation ? "border-2 border-primary/30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]" : "",
        "hover:border-white/[0.06]"
      )}>
        {/* Uncertainty Alert */}
        {ex.needs_confirmation && (
          <div className="mb-3 flex items-center justify-between p-2 bg-primary/[0.08] rounded-xl border border-primary/15">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-primary" />
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest italic">matching non trovato in libreria</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onUpdate({ needs_confirmation: false })}
                className="flex items-center gap-1 px-2 py-1 bg-primary text-white rounded-lg text-[10px] font-black hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                <Check className="w-3 h-3" /> CONFERMA
              </button>
            </div>
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* Drag Handle & Index */}
          <div className="flex flex-col items-center gap-1 mt-1 shrink-0">
            <div {...dragHandleProps} className="p-1 cursor-grab active:cursor-grabbing text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors">
              <GripVertical className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[8px] sm:text-[10px] font-black text-muted-foreground/20 uppercase leading-none">{index + 1}</span>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div className="group/name">
                <h4 
                  onClick={onNameClick}
                  className="font-bold text-foreground text-base sm:text-lg leading-tight cursor-pointer hover:text-primary transition-colors flex items-center gap-2"
                >
                  {ex.name}
                  <Pencil className="w-3 h-3 opacity-0 group-hover/name:opacity-100 transition-opacity" />
                </h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2 sm:mt-1">
                  <button 
                    onClick={() => onShowInfo()}
                    className="text-[10px] font-bold uppercase tracking-wider text-primary hover:text-primary/80 flex items-center gap-1 transition-all px-2 py-1 rounded-md hover:bg-white/[0.06]/50"
                  >
                    <Info className="w-3 h-3" /> Info
                  </button>
                  <button 
                    onClick={onOpenMediaViewer}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all px-2 py-1 rounded-md hover:bg-white/[0.06]/50",
                      ex.video_urls && ex.video_urls.length > 0
                        ? (themeColor === 'amber' ? "text-amber-500 hover:text-amber-400" : "text-violet-500 hover:text-violet-400") 
                        : "text-muted-foreground/40 hover:text-foreground/70"
                    )}
                  >
                    <Tv className="w-3 h-3" /> {(ex.video_urls && ex.video_urls.length > 0) ? `Video (${ex.video_urls.length})` : '+ Video'}
                  </button>
                  <button 
                    onClick={() => setActiveTab(t => t === 'group' ? 'main' : 'group')}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all px-2 py-1 rounded-md",
                      activeTab === 'group'
                        ? (themeColor === 'amber' ? "bg-amber-500/20 text-amber-500" : "bg-violet-500/20 text-violet-500")
                        : (ex.group_name 
                            ? (themeColor === 'amber' ? "text-amber-500 hover:text-amber-400" : "text-violet-500 hover:text-violet-400") 
                            : "text-muted-foreground/40 hover:text-foreground/70 hover:bg-white/[0.06]/50")
                    )}
                  >
                    <Flame className="w-3 h-3" /> <span className="max-w-[80px] sm:max-w-none truncate">{ex.group_name || 'Gruppo'}</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab(t => t === 'notes' ? 'main' : 'notes')}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all px-2 py-1 rounded-md",
                      activeTab === 'notes'
                        ? "bg-primary/15 text-primary"
                        : (ex.coach_notes 
                            ? "text-primary hover:text-primary/80" 
                            : "text-muted-foreground/40 hover:text-foreground/70 hover:bg-white/[0.06]/50")
                    )}
                  >
                    <MessageSquare className="w-3 h-3" /> {ex.coach_notes ? 'Nota' : '+ Nota'}
                  </button>

                  {ex.needs_confirmation && ex.alternatives && ex.alternatives.length > 0 && (
                    <div className="relative group/alt">
                      <button className="text-[10px] font-bold uppercase tracking-wider text-amber-500 hover:text-amber-400 flex items-center gap-1 transition-all px-2 py-1 rounded-md bg-amber-500/10">
                        Alternative <ChevronRight className="w-3 h-3 rotate-90" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-48 bg-slate-900 border border-white/[0.06] rounded-xl shadow-2xl scale-0 group-hover/alt:scale-100 transition-all origin-top-left z-50 overflow-hidden">
                        {ex.alternatives.map((alt: any) => (
                          <div key={alt.id} className="flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/[0.06]/50 last:border-0">
                            <button
                              onClick={() => {
                                const libEx = allLibraryExercises?.find(e => e.id === alt.id);
                                onUpdate({ 
                                  exercise_library_id: alt.id, 
                                  name: alt.name,
                                  needs_confirmation: false,
                                  video_urls: libEx?.video_urls || [],
                                  image_url: libEx?.images?.[0] || null,
                                });
                              }}
                              className="flex-1 text-left px-3 py-2 text-[10px] font-bold text-foreground/70 hover:text-white transition-colors"
                            >
                              {alt.name}
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                onShowInfo(alt.id);
                              }}
                              className="p-2 text-muted-foreground/30 hover:text-primary transition-all"
                            >
                              <Info className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={onToggleSuperset}
                  className={cn(
                    "p-2 rounded-xl transition-all",
                    isSuperset 
                      ? (themeColor === 'amber' ? "bg-amber-500 text-white" : "bg-violet-500 text-white")
                      : "bg-white/[0.03] text-muted-foreground/40 hover:text-primary border border-white/[0.06]"
                  )}
                  title={isSuperset ? "Rimuovi Superset" : "Unisci come Superset"}
                >
                  {isSuperset ? <Unlink className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
                </button>
                <button 
                  onClick={onRemove}
                  className="p-2 bg-white/[0.03] text-muted-foreground/40 hover:text-red-400 border border-white/[0.06] rounded-xl transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {activeTab === 'main' && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[9px] sm:text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest ml-1">
                        Pianificazione {ex.is_time_based ? 'Tempo' : 'Serie'}
                      </label>
                      <button 
                        onClick={() => onUpdate({ is_time_based: !ex.is_time_based })}
                        className={cn(
                          "text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded-md transition-all border",
                          ex.is_time_based 
                            ? "bg-primary/10 text-primary border-primary/20" 
                            : "bg-white/5 text-muted-foreground/40 border-white/10"
                        )}
                      >
                        {ex.is_time_based ? 'MODO: TEMPO' : 'MODO: REPS'}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          const newSets = Math.max(1, (ex.target_sets || 0) - 1);
                          const newDetail = (ex.target_reps_detail || []).slice(0, newSets);
                          onUpdate({ target_sets: newSets, target_reps_detail: newDetail });
                        }}
                        className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-muted-foreground/60 hover:bg-white/[0.08] transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2">
                        {Array.from({ length: ex.target_sets || 0 }).map((_, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 group/set">
                            <input 
                              type="number"
                              className={cn(inputClasses, "w-10 sm:w-14 text-center px-1 font-bold text-xs sm:text-sm h-8 sm:h-10")}
                              value={ex.target_reps_detail?.[i] ?? ex.target_reps}
                              onChange={(e) => {
                                const newDetail = [...(ex.target_reps_detail || Array(ex.target_sets).fill(ex.target_reps))];
                                newDetail[i] = parseInt(e.target.value) || 0;
                                onUpdate({ target_reps_detail: newDetail, target_reps: newDetail[0] });
                              }}
                            />
                            <span className="text-[8px] font-black text-muted-foreground/30 uppercase tracking-tighter">
                              {ex.is_time_based ? 'Sec' : 'Rep'} {i+1}
                            </span>
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
                    <label className="text-[9px] sm:text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest ml-1 truncate">Recupero post es. (s)</label>
                    <input 
                      type="number" 
                      className={cn(inputClasses, "h-9 sm:h-10")}
                      value={ex.rest_esercizio || 0}
                      onChange={(e) => onUpdate({ rest_esercizio: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] sm:text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest ml-1 truncate">Recupero serie (s)</label>
                    <input 
                      type="number" 
                      className={cn(inputClasses, "h-9 sm:h-10")}
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
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">Editor Note Coach</span>
                    <button onClick={() => setActiveTab('main')} className="text-muted-foreground/40 hover:text-foreground/70"><X className="w-4 h-4" /></button>
                  </div>
                  <textarea 
                    autoFocus
                    className={cn(inputClasses, "min-h-[100px] bg-transparent border-0 focus:ring-0 resize-none p-0 font-mono")}
                    placeholder="Es. ## Focus\n- Mantenere il controllo..."
                    value={ex.coach_notes || ''}
                    onChange={(e) => onUpdate({ coach_notes: e.target.value })}
                  />
                  {ex.coach_notes && (
                    <div className="mt-2 pt-2 border-t border-white/[0.06]/50">
                      <span className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-widest block mb-2">Preview MD</span>
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
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">Assegna Gruppo</span>
                    <button onClick={() => setActiveTab('main')} className="text-muted-foreground/40 hover:text-foreground/70"><X className="w-4 h-4" /></button>
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
                        className="px-3 py-2 bg-white/[0.06] text-muted-foreground/60 hover:text-red-400 rounded-xl transition-all"
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
                        className="px-3 py-1 bg-white/[0.06]/50 hover:bg-white/[0.06] text-[10px] font-bold text-muted-foreground/60 rounded-lg border border-white/[0.05] transition-all"
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
        <div className="flex-1 flex items-center justify-center p-12"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-card/25 rounded-3xl border border-white/[0.06] border-dashed">
              <p className="text-muted-foreground/40 font-bold">Nessun esercizio trovato.</p>
              <p className="text-muted-foreground/30 text-xs mt-1">Prova a cambiare i filtri di ricerca.</p>
            </div>
          ) : (
          <div className="space-y-3">
            {visibleExercises.map(ex => (
              <button 
                key={ex.id}
                onClick={() => onSelect(ex)}
                className="flex items-center justify-between p-4 bg-card/20 border border-white/[0.06]/80 hover:border-primary/30 hover:bg-white/[0.06]/40 rounded-2xl transition-all group text-left w-full shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] group-hover:bg-primary/[0.08] flex items-center justify-center font-black text-xs text-primary border border-white/[0.06] group-hover:border-primary/20 transition-all">
                    {ex.muscle_group?.[0]?.toUpperCase() || '?'}
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-base group-hover:text-primary/80 transition-colors">{ex.name}</span>
                    <span className="text-[10px] text-muted-foreground/40 uppercase font-black tracking-widest flex items-center gap-2">
                      {ex.muscle_group || 'Corpo libero'}
                      {ex.equipment && <span className="w-1 h-1 bg-white/[0.08] rounded-full" />}
                      {ex.equipment}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div 
                    onClick={(e) => { e.stopPropagation(); onInfo(ex); }}
                    className="p-2 text-muted-foreground/60 hover:text-primary hover:bg-primary/[0.08] rounded-lg transition-all cursor-pointer"
                    role="button"
                    title="Informazioni esercizio"
                  >
                    <Info className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06]/50 flex items-center justify-center group-hover:bg-primary text-muted-foreground/30 group-hover:text-white transition-all shadow-inner">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </button>
            ))}

            {hasMore && (
              <button
                onClick={loadMore}
                className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 hover:text-primary transition-colors border border-dashed border-white/[0.06] rounded-2xl hover:border-primary/20 bg-card/10"
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
