import type { ExerciseLibrary } from '../types/database';
import { Target, Info, Edit2, PlayCircle, Zap, Dumbbell, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { translateExerciseTerm } from '../lib/translations';
import { toast } from 'sonner';

interface ExerciseCardProps {
  exercise: ExerciseLibrary;
  onInfo?: (id: string) => void;
  onEdit?: (id: string) => void;
  isCoach?: boolean;
}

export default function ExerciseCard({ exercise, onInfo, onEdit, isCoach }: ExerciseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="surface-glow group cursor-pointer relative overflow-hidden
                 flex flex-col h-[120px] md:h-[132px] w-full
                 p-3 md:p-4 rounded-xl"
      onClick={() => onInfo?.(exercise.id)}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">

            {/* Image / icon */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary
                            flex items-center justify-center text-primary
                            border border-border overflow-hidden shrink-0
                            transition-all duration-300 group-hover:border-primary/30">
              {exercise.images && exercise.images[0] ? (
                <img src={exercise.images[0]} alt={exercise.name} className="w-full h-full object-cover" />
              ) : (exercise.video_urls && exercise.video_urls.length > 0) ? (
                <PlayCircle className="w-6 h-6" />
              ) : (
                <Dumbbell className="w-6 h-6" />
              )}
            </div>

            {/* Name & muscle */}
            <div className="min-w-0 flex-1 py-0.5">
              <h3 className="font-black text-[12px] md:text-[13px] text-foreground uppercase
                             leading-snug line-clamp-2 min-h-[2.4em] flex items-center
                             group-hover:text-primary transition-colors duration-200">
                {exercise.name_it || exercise.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <Target className="w-3 h-3 text-primary/70 shrink-0" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider truncate">
                  {translateExerciseTerm('muscle_groups', exercise.muscle_group) || 'Asset'}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className={`flex flex-col gap-1.5 shrink-0 transition-opacity duration-200
                           ${isCoach ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <button
              onClick={(e) => { e.stopPropagation(); onInfo?.(exercise.id); }}
              className="min-w-[32px] min-h-[32px] rounded-lg bg-secondary border border-border
                         flex items-center justify-center text-muted-foreground
                         hover:text-primary hover:border-primary/30 transition-colors duration-200"
              title="Info"
              aria-label="Mostra informazioni esercizio"
            >
              <Info className="w-4 h-4" />
            </button>
            {isCoach ? (
              <button
                onClick={(e) => { e.stopPropagation(); onEdit?.(exercise.id); }}
                className="min-w-[32px] min-h-[32px] rounded-lg bg-secondary border border-border
                           flex items-center justify-center text-muted-foreground
                           hover:text-primary hover:border-primary/30 transition-colors duration-200"
                title="Modifica"
                aria-label="Modifica esercizio"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={(e) => { e.stopPropagation(); toast.success('Segnalazione inviata'); }}
                className="min-w-[32px] min-h-[32px] rounded-lg bg-secondary border border-border
                           flex items-center justify-center text-amber-500/50
                           hover:text-amber-500 hover:border-amber-500/30 transition-colors duration-200"
                title="Segnala"
                aria-label="Segnala esercizio"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Footer tags */}
        {(exercise.force || exercise.mechanic || exercise.equipment) && (
          <div className="flex items-center gap-1.5 pt-2 border-t border-border/60 mt-auto overflow-hidden">
            {exercise.force && (
              <span className="tag bg-amber-500/8 text-amber-500/50 border border-amber-500/15
                               group-hover:bg-amber-500/15 group-hover:text-amber-500 group-hover:border-amber-500/25 transition-all">
                <Zap className="w-2 h-2" />
                {translateExerciseTerm('force', exercise.force)}
              </span>
            )}
            {exercise.mechanic && (
              <span className="tag bg-blue-500/8 text-blue-500/50 border border-blue-500/15
                               group-hover:bg-blue-500/15 group-hover:text-blue-500 group-hover:border-blue-500/25 transition-all">
                {translateExerciseTerm('mechanic', exercise.mechanic)}
              </span>
            )}
            {exercise.equipment && (
              <span className="tag bg-primary/8 text-primary/50 border border-primary/15 truncate
                               group-hover:bg-primary/15 group-hover:text-primary group-hover:border-primary/25 transition-all">
                {translateExerciseTerm('equipment', exercise.equipment)}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
