import { useState, useMemo, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { exerciseService } from '../../services/exerciseService';
import { geminiService } from '../../services/geminiService';
import { Plus, Loader2, Search, X, Activity, BrainCircuit } from 'lucide-react';
import ExerciseCard from '../ExerciseCard';
import AdvancedExerciseFilters, { type ExerciseFilters as FilterType } from '../ExerciseFilters';
import ExerciseDetailModal from '../ExerciseDetailModal';
import ExerciseFormModal from './ExerciseFormModal';
import { useAuth } from '../../lib/auth';
import type { ExerciseLibrary as ExerciseType } from '../../types/database';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export default function ExerciseLibraryTab() {
  const { user, role } = useAuth();
  const queryClient = useQueryClient();
  const [filteredExercises, setFilteredExercises] = useState<ExerciseType[]>([]);
  const [visibleCount, setVisibleCount] = useState(24);
  const [selectedExercise, setSelectedExercise] = useState<ExerciseType | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingExercise, setEditingExercise] = useState<ExerciseType | null>(null);
  const [rawFilters, setRawFilters] = useState<FilterType | null>(null);

  const { data: exercises, isLoading, isError } = useQuery({
    queryKey: ['exercises', rawFilters?.searchTerm],
    queryFn: async () => {
      if (!rawFilters?.searchTerm) {
        return exerciseService.getAllExercises();
      }
      
      try {
        const embedding = await geminiService.generateEmbedding(rawFilters.searchTerm);
        return await exerciseService.searchExercises(rawFilters.searchTerm, embedding, user?.id);
      } catch (err) {
        console.error("Semantic search failed:", err);
        return await exerciseService.searchExercises(rawFilters.searchTerm, null, user?.id);
      }
    },
  });

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(24);
  }, [filteredExercises]);

  // Base filtering: Hide system exercises if a personal fork exists
  const baseExercises = useMemo(() => {
    if (!exercises) return [];
    
    // Find IDs of system exercises that this coach has forked
    const forkedSystemIds = new Set(
      exercises
        .filter(e => e.coach_id === user?.id && e.forked_from)
        .map(e => e.forked_from)
    );

    return exercises.filter(e => {
      // If it's a system exercise and we have a personal version, hide the system one
      if (e.coach_id === null && forkedSystemIds.has(e.id)) {
        return false;
      }
      return true;
    });
  }, [exercises, user?.id]);

  const visibleExercises = useMemo(() => {
    return filteredExercises.slice(0, visibleCount);
  }, [filteredExercises, visibleCount]);

  const hasMore = visibleCount < filteredExercises.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 24, filteredExercises.length));
  };


  const handleInfo = (id: string) => {
    const exercise = exercises?.find(e => e.id === id);
    if (exercise) {
      setSelectedExercise(exercise);
    }
  };

  const handleEdit = (id: string) => {
    const exercise = exercises?.find(e => e.id === id);
    if (exercise) {
      setEditingExercise(exercise);
      setIsFormOpen(true);
    }
  };

  const handleCreate = () => {
    setEditingExercise(null);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Sei sicuro di voler eliminare questo esercizio?')) return;
    try {
      await exerciseService.deleteExercise(id);
      queryClient.invalidateQueries({ queryKey: ['exercises'] });
      toast.success('Esercizio eliminato');
    } catch (error) {
      console.error(error);
      toast.error('Errore durante l\'eliminazione');
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-[10px]">Indicizzazione database...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-8">
        <div className="w-20 h-20 bg-red-500/10 rounded-[2rem] flex items-center justify-center mx-auto border border-red-500/20">
          <X className="w-10 h-10 text-red-500/40" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-foreground italic uppercase">Sync Failure</h2>
          <p className="text-muted-foreground font-medium text-sm">Non siamo riusciti a caricare la libreria esercizi.</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="h-12 px-8 glass-interactive rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all text-muted-foreground"
        >
          Riprova Sync
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Tab Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 px-1">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black italic tracking-tighter text-foreground uppercase">Esercizi</h2>
            {rawFilters?.searchTerm && (
              <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full animate-pulse flex items-center gap-2">
                <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">AI Mode</span>
              </div>
            )}
            <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full shadow-lg shadow-primary/5">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                {exercises?.length || 0} Assets
              </span>
            </div>
          </div>
          <p className="text-muted-foreground font-bold uppercase tracking-widest text-[9px] opacity-40">
            Motore di ricerca esercizi e asset multimediali
          </p>
        </div>

        {role === 'coach' && (
          <button 
            onClick={handleCreate}
            className="h-14 px-8 bg-secondary/10 border border-white/5 hover:border-primary/40 text-foreground rounded-2xl font-black italic uppercase tracking-widest text-[10px] flex items-center gap-3 transition-all group overflow-hidden shadow-xl"
          >
            <div className="relative">
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90 duration-500 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/40 animate-pulse"></div>
            </div>
            Nuova Risorsa
          </button>
        )}
      </div>

      {/* Filters Area */}
      <div className="glass-card p-2 rounded-3xl sm:rounded-[2.5rem] border-white/5 shadow-2xl relative z-20">
        <AdvancedExerciseFilters 
          exercises={baseExercises} 
          onFilterChange={setFilteredExercises}
          onRawFiltersChange={setRawFilters}
          userId={user?.id || undefined}
        />
      </div>

      {/* Grid Area */}
      <div>
        <AnimatePresence mode="wait">
          {filteredExercises.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-32 glass-card rounded-[3rem] border-dashed border-2 border-white/5 bg-secondary/5 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-muted/10 rounded-[2.5rem] flex items-center justify-center mx-auto border border-white/5">
                <Search className="w-10 h-10 text-muted-foreground opacity-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-black text-foreground italic uppercase tracking-tighter opacity-60">Nessuna Corrispondenza</h3>
                <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest opacity-30">Affina i parametri di ricerca</p>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-12">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8 gap-4 sm:gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {visibleExercises.map((exercise) => (
                    <motion.div
                      key={exercise.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExerciseCard 
                        exercise={exercise} 
                        isCoach={role === 'coach'}
                        onInfo={handleInfo}
                        onEdit={handleEdit}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {hasMore && (
                <div className="flex justify-center pt-8 pb-12">
                  <button
                    onClick={loadMore}
                    className="h-14 px-12 glass-interactive rounded-2xl font-black italic uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all text-muted-foreground border-white/10 hover:border-primary/50 group"
                  >
                    <span className="group-hover:text-primary transition-colors">Carica Altri Esercizi</span>
                    <div className="text-[8px] opacity-40 mt-1 not-italic">
                      Mostrati {visibleCount} di {filteredExercises.length}
                    </div>
                  </button>
                </div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>

      {selectedExercise && (
        <ExerciseDetailModal 
          exercise={selectedExercise}
          isOpen={!!selectedExercise}
          onClose={() => setSelectedExercise(null)}
          onDelete={handleDelete}
          onEdit={handleEdit}
          isCoach={role === 'coach'}
        />
      )}

      <ExerciseFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        exercise={editingExercise}
        onSuccess={() => {
          queryClient.invalidateQueries({ queryKey: ['exercises'] });
        }}
      />
    </div>
  );
}
