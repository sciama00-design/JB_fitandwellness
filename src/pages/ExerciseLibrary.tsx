import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { exerciseService } from '../services/exerciseService';
import { geminiService } from '../services/geminiService';
import { Plus, Loader2, Sparkles, Search, X, ClipboardList, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExerciseCard from '../components/ExerciseCard';
import AdvancedExerciseFilters, { type ExerciseFilters as FilterType } from '../components/ExerciseFilters';
import ExerciseDetailModal from '../components/ExerciseDetailModal';
import { useAuth } from '../lib/auth';
import type { ExerciseLibrary as ExerciseType } from '../types/database';

export default function ExerciseLibrary() {
  const { user, role } = useAuth();
  const [filteredExercises, setFilteredExercises] = useState<ExerciseType[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<ExerciseType | null>(null);
  const [rawFilters, setRawFilters] = useState<FilterType | null>(null);

  const { data: exercises, isLoading, isError, error } = useQuery({
    queryKey: ['exercises', rawFilters?.searchTerm],
    queryFn: async () => {
      if (!rawFilters?.searchTerm) {
        return exerciseService.getAllExercises();
      }
      
      // Perform semantic search
      try {
        const embedding = await geminiService.generateEmbedding(rawFilters.searchTerm);
        return await exerciseService.searchExercises(rawFilters.searchTerm, embedding, user?.id);
      } catch (err) {
        console.error("Semantic search failed, falling back to basic search:", err);
        return await exerciseService.searchExercises(rawFilters.searchTerm, null, user?.id);
      }
    },
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        <p className="text-slate-400 animate-pulse">Loading Exercise Library...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 max-w-md mx-auto text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center">
          <X className="w-10 h-10 text-red-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Errore nel caricamento</h2>
          <p className="text-slate-400">Non siamo riusciti a caricare la libreria degli esercizi. Verificata la tua connessione o riprova più tardi.</p>
        </div>
        {error && <p className="text-xs text-slate-600 font-mono">{(error as Error).message}</p>}
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
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">Esercizi</h1>
            <div className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {exercises?.length || 0} Esercizi
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
            Esplora la nostra collezione completa di esercizi per costruire i tuoi programmi di allenamento personalizzati.
          </p>
        </div>

        {role === 'coach' && (
          <div className="flex items-center gap-3">
            <Link 
              to="/coach/templates/new"
              className="group relative px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <ClipboardList className="w-5 h-5" />
              <span>Nuova Scheda</span>
            </Link>
            <button className="group relative px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden border border-slate-700">
               <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <Plus className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
              <span>Nuovo Esercizio</span>
            </button>
          </div>
        )}
      </div>

      <div className="relative z-10">
        <AdvancedExerciseFilters 
          exercises={exercises || emptyExercises} 
          onFilterChange={setFilteredExercises}
          onRawFiltersChange={setRawFilters}
          userId={user?.id || undefined}
        />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            Risultati
            {rawFilters?.searchTerm && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-[10px] text-indigo-400 font-bold uppercase tracking-wider animate-pulse">
                <BrainCircuit className="w-3 h-3" />
                AI Enhanced
              </span>
            )}
            <span className="text-slate-500 font-normal text-sm">({filteredExercises.length})</span>
          </h2>
        </div>

        {filteredExercises.length === 0 ? (
          <div className="text-center py-32 glass rounded-[2.5rem] border-dashed border-2 border-slate-800/50 bg-slate-900/20 backdrop-blur-sm">
            <div className="max-w-xs mx-auto space-y-4">
              <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-300">Nessun risultato</h3>
              <p className="text-slate-500">Prova a modificare i filtri per trovare quello che cerchi.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredExercises.map((exercise, index) => (
              <div 
                key={exercise.id} 
                className="animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-both"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ExerciseCard 
                  exercise={exercise} 
                  isCoach={role === 'coach'}
                  onInfo={handleInfo}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedExercise && (
        <ExerciseDetailModal 
          exercise={selectedExercise}
          isOpen={!!selectedExercise}
          onClose={() => setSelectedExercise(null)}
          isCoach={role === 'coach'}
        />
      )}
    </div>
  );
}
