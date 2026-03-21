import type { ExerciseLibrary } from '../types/database';
import { useAuth } from '../lib/auth';
import { Target, Info, Trash2, Edit2, PlayCircle, Zap, Beaker } from 'lucide-react';

interface ExerciseCardProps {
  exercise: ExerciseLibrary;
  onInfo?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  isCoach?: boolean;
}

export default function ExerciseCard({ exercise, onInfo, onEdit, onDelete, isCoach }: ExerciseCardProps) {
  const { user } = useAuth();
  return (
    <div 
      className="card group hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
      onClick={() => onInfo?.(exercise.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-all">
            {exercise.images && exercise.images[0] ? (
              <img 
                src={exercise.images[0]} 
                alt={exercise.name} 
                className="w-8 h-8 rounded-lg object-cover"
              />
            ) : exercise.video_url ? (
              <PlayCircle className="w-8 h-8" />
            ) : (
              <Beaker className="w-8 h-8" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-100 line-clamp-1">{exercise.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span className="flex items-center space-x-1 capitalize">
                <Target className="w-3 h-3" />
                <span>{exercise.muscle_group || 'Unknown'}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all">
          <button 
            onClick={(e) => { e.stopPropagation(); onInfo?.(exercise.id); }}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            title="Info"
          >
            <Info className="w-4 h-4" />
          </button>
          
          {isCoach && exercise.coach_id === user?.id && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); onEdit?.(exercise.id); }}
                className="p-2 text-slate-400 hover:text-primary-400 hover:bg-primary-400/10 rounded-lg transition-all"
                title="Edit"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onDelete?.(exercise.id); }}
                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {exercise.muscle_group && (
          <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-slate-300 rounded-lg border border-slate-700/50">
            {exercise.muscle_group}
          </span>
        )}
        {exercise.force && (
          <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-orange-500/10 text-orange-400 rounded-lg border border-orange-500/20">
            <Zap className="inline w-2 h-2 mr-1" />
            {exercise.force}
          </span>
        )}
        {exercise.equipment && (
          <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-primary-500/10 text-primary-400 rounded-lg border border-primary-500/20 ml-auto">
            {exercise.equipment}
          </span>
        )}
      </div>
    </div>
  );
}
