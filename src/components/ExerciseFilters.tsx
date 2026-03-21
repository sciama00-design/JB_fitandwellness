import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X, ChevronDown, Dumbbell, Zap, Target, History, Globe, User } from 'lucide-react';
import type { ExerciseLibrary } from '../types/database';
import { cn } from '../lib/utils';

export interface ExerciseFilters {
  searchTerm: string;
  muscleGroups: string[];
  equipments: string[];
  difficulties: string[];
  mechanics: string[];
  source: 'all' | 'personal' | 'global';
}

interface Props {
  exercises: ExerciseLibrary[];
  onFilterChange: (filtered: ExerciseLibrary[]) => void;
  userId?: string;
  compact?: boolean;
}

export default function AdvancedExerciseFilters({ exercises, onFilterChange, userId, compact = false }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<ExerciseFilters>({
    searchTerm: '',
    muscleGroups: [],
    equipments: [],
    difficulties: [],
    mechanics: [],
    source: 'all'
  });

  // Calculate unique values from exercises
  const options = useMemo(() => {
    return {
      muscleGroups: [...new Set(exercises.map(e => e.muscle_group).filter(Boolean) as string[])].sort(),
      equipments: [...new Set(exercises.map(e => e.equipment).filter(Boolean) as string[])].sort(),
      difficulties: [...new Set(exercises.map(e => e.difficulty_level).filter(Boolean) as string[])].sort(),
      mechanics: [...new Set(exercises.map(e => e.mechanic).filter(Boolean) as string[])].sort(),
    };
  }, [exercises]);

  // Calculate filtering logic in useMemo
  const filteredExercises = useMemo(() => {
    return exercises.filter(exercise => {
      const matchesSearch = !filters.searchTerm || 
        exercise.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        exercise.description?.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      const matchesMuscle = filters.muscleGroups.length === 0 || 
        (exercise.muscle_group && filters.muscleGroups.includes(exercise.muscle_group));
      
      const matchesEquipment = filters.equipments.length === 0 || 
        (exercise.equipment && filters.equipments.includes(exercise.equipment));
      
      const matchesDifficulty = filters.difficulties.length === 0 || 
        (exercise.difficulty_level && filters.difficulties.includes(exercise.difficulty_level));
      
      const matchesMechanic = filters.mechanics.length === 0 || 
        (exercise.mechanic && filters.mechanics.includes(exercise.mechanic));
      
      const matchesSource = filters.source === 'all' || 
        (filters.source === 'personal' && exercise.coach_id === userId) ||
        (filters.source === 'global' && !exercise.coach_id);

      return matchesSearch && matchesMuscle && matchesEquipment && matchesDifficulty && matchesMechanic && matchesSource;
    });
  }, [exercises, filters, userId]);

  // Sync filtered exercises with parent
  useEffect(() => {
    onFilterChange(filteredExercises);
  }, [filteredExercises, onFilterChange]);

  const toggleFilter = (category: keyof ExerciseFilters, value: string) => {
    setFilters(prev => {
      const current = prev[category] as string[];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(v => v !== value) };
      }
      return { ...prev, [category]: [...current, value] };
    });
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      muscleGroups: [],
      equipments: [],
      difficulties: [],
      mechanics: [],
      source: 'all'
    });
  };

  const activeFilterCount = 
    filters.muscleGroups.length + 
    filters.equipments.length + 
    filters.difficulties.length + 
    filters.mechanics.length + 
    (filters.source !== 'all' ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* Search Header */}
      <div className={cn("flex flex-col md:flex-row gap-4", compact && "gap-2")}>
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
          </div>
          <input
            type="text"
            placeholder={compact ? "Cerca..." : "Cerca per nome o descrizione..."}
            className={cn(
              "block w-full pl-11 pr-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300",
              compact ? "py-2 text-sm" : "py-3"
            )}
            value={filters.searchTerm}
            onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
          />
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex items-center gap-2 rounded-2xl font-semibold transition-all duration-300",
              compact ? "px-4 py-2 text-xs" : "px-6 py-3",
              isExpanded 
                ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20" 
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100"
            )}
          >
            <Filter className={cn(compact ? "h-4 w-4" : "h-5 w-5")} />
            <span>Filtri</span>
            {activeFilterCount > 0 && (
              <span className="ml-1 w-5 h-5 flex items-center justify-center bg-white/20 rounded-full text-xs">
                {activeFilterCount}
              </span>
            )}
          </button>
          
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className={cn(
                "bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300",
                compact ? "p-2" : "p-3"
              )}
              title="Reset filtri"
            >
              <X className={cn(compact ? "h-4 w-4" : "h-5 w-5")} />
            </button>
          )}
        </div>
      </div>

      {/* Advanced Filter Panel */}
      <div className={cn(
        "overflow-hidden transition-all duration-500 ease-in-out",
        isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
        compact ? "mt-4" : "mt-6"
      )}>
        <div className={cn(
          "bg-slate-950/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl space-y-8",
          compact ? "p-4 space-y-6" : "p-6 space-y-8 text-sm"
        )}>
          
          {/* Source Toggle */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <History className="w-3.5 h-3.5" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Origine</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Tutti', icon: <Globe className="w-3 h-3" /> },
                { id: 'global', label: 'Base', icon: <History className="w-3 h-3" /> },
                { id: 'personal', label: 'Miei', icon: <User className="w-3 h-3" /> }
              ].map((src) => (
                <button
                  key={src.id}
                  onClick={() => setFilters({ ...filters, source: src.id as any })}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-semibold transition-all duration-200 border",
                    filters.source === src.id 
                      ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20" 
                      : "bg-slate-900/50 border-slate-800 text-slate-500 hover:text-slate-300"
                  )}
                >
                  {src.icon}
                  {src.label}
                </button>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className={cn(
            "grid gap-6",
            compact ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          )}>
            
            {/* Muscle Groups */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Muscoli</span>
              </div>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800 hover:scrollbar-thumb-slate-700">
                {options.muscleGroups.map(group => (
                  <button
                    key={group}
                    onClick={() => toggleFilter('muscleGroups', group)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                      filters.muscleGroups.includes(group)
                        ? "bg-amber-500/20 text-amber-500 border border-amber-500/30"
                        : "bg-slate-900 text-slate-500 border border-transparent hover:border-slate-700"
                    )}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Dumbbell className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Attrezzatura</span>
              </div>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 scrollbar-thin">
                {options.equipments.map(item => (
                  <button
                    key={item}
                    onClick={() => toggleFilter('equipments', item)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                      filters.equipments.includes(item)
                        ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                        : "bg-slate-900 text-slate-500 border border-transparent hover:border-slate-700"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Difficoltà</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {options.difficulties.map(level => (
                  <button
                    key={level}
                    onClick={() => toggleFilter('difficulties', level)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                      filters.difficulties.includes(level)
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-slate-900 text-slate-500 border border-transparent hover:border-slate-700"
                    )}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Mechanic */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <ChevronDown className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Meccanica</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {options.mechanics.map(m => (
                  <button
                    key={m}
                    onClick={() => toggleFilter('mechanics', m)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                      filters.mechanics.includes(m)
                        ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        : "bg-slate-900 text-slate-500 border border-transparent hover:border-slate-700"
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
