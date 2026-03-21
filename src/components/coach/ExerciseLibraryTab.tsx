import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { exerciseService } from '../../services/exerciseService';
import { Plus, Loader2, Sparkles, Search, X } from 'lucide-react';
import ExerciseCard from '../ExerciseCard';
import AdvancedExerciseFilters from '../ExerciseFilters';
import ExerciseDetailModal from '../ExerciseDetailModal';
import { useAuth } from '../../lib/auth';
import type { ExerciseLibrary as ExerciseType } from '../../types/database';

export default function ExerciseLibraryTab() {
  const { user, role } = useAuth();
  const [filteredExercises, setFilteredExercises] = useState<ExerciseType[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<ExerciseType | null>(null);

  const { data: exercises, isLoading, isError } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getAllExercises,
  });

  const emptyExercises = useMemo(() => [] as ExerciseType[], []);

  const handleInfo = (id: string) => {
    const exercise = exercises?.find(e => e.id === id);
    if (exercise) {
      setSelectedExercise(exercise);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        <p className="text-slate-400 animate-pulse">Loading Exercise Library...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-6 max-w-md mx-auto text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center">
          <X className="w-10 h-10 text-red-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Errore nel caricamento</h2>
          <p className="text-slate-400">Non siamo riusciti a caricare la libreria degli esercizi.</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all"
        >
          Riprova
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-black tracking-tight text-white">Esercizi</h2>
            <div className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {exercises?.length || 0}
              </span>
            </div>
          </div>
          <p className="text-slate-400 font-medium">
            Esplora la collezione completa di esercizi.
          </p>
        </div>

        {role === 'coach' && (
          <div className="flex items-center gap-3">
            <button className="group relative px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden border border-slate-700 text-sm">
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
              <span>Nuovo Esercizio</span>
            </button>
          </div>
        )}
      </div>

      <div className="relative z-10">
        <AdvancedExerciseFilters 
          exercises={exercises || emptyExercises} 
          onFilterChange={setFilteredExercises}
          userId={user?.id || undefined}
        />
      </div>

      <div className="space-y-6">
        {filteredExercises.length === 0 ? (
          <div className="text-center py-20 glass rounded-[2.5rem] border-dashed border-2 border-slate-800/50 bg-slate-900/20">
            <div className="max-w-xs mx-auto space-y-4">
              <Search className="w-8 h-8 text-slate-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-300">Nessun risultato</h3>
              <p className="text-slate-500">Prova a modificare i filtri.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExercises.map((exercise) => (
              <ExerciseCard 
                key={exercise.id} 
                exercise={exercise} 
                isCoach={role === 'coach'}
                onInfo={handleInfo}
              />
            ))}
          </div>
        )}
      </div>

      {selectedExercise && (
        <ExerciseDetailModal 
          exercise={selectedExercise}
          isOpen={!!selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}
