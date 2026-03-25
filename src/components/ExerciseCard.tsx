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
      whileHover={{ y: -5, scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
      whileTap={{ scale: 0.98 }}
      className="glass-card group p-3 rounded-3xl border-white/5 hover:border-primary/20 transition-all cursor-pointer bg-secondary/5 relative overflow-hidden flex flex-col h-[132px] w-full"
      onClick={() => onInfo?.(exercise.id)}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/5 transition-colors pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3.5 flex-1 min-w-0">
            {/* Image Container */}
            <div className="w-14 h-14 rounded-2xl bg-background/50 flex items-center justify-center text-primary border border-white/10 shadow-xl group-hover:scale-105 transition-transform overflow-hidden shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {exercise.images && exercise.images[0] ? (
                <img 
                  src={exercise.images[0]} 
                  alt={exercise.name} 
                  className="w-full h-full object-cover"
                />
              ) : (exercise.video_urls && exercise.video_urls.length > 0) ? (
                <PlayCircle className="w-7 h-7 drop-shadow-lg" />
              ) : (
                <Dumbbell className="w-7 h-7 drop-shadow-lg" />
              )}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1 py-0.5">
              <h3 className="font-black text-[13px] text-foreground/90 italic uppercase tracking-normal leading-[1.2] group-hover:text-primary transition-colors line-clamp-2 min-h-[2.4em] flex items-center">
                {exercise.name_it || exercise.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                <Target className="w-3 h-3 text-primary shrink-0" />
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.1em] truncate">
                  {translateExerciseTerm('muscle_groups', exercise.muscle_group) || 'Asset'}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
            <button 
              onClick={(e) => { e.stopPropagation(); onInfo?.(exercise.id); }}
              className="w-7 h-7 glass-interactive rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all border border-white/5"
              title="Info"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
            {isCoach ? (
              <button 
                onClick={(e) => { e.stopPropagation(); onEdit?.(exercise.id); }}
                className="w-7 h-7 glass-interactive rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all border border-white/5"
                title="Modifica"
              >
                <Edit2 className="w-3 h-3" />
              </button>
            ) : (
              <button 
                onClick={(e) => { e.stopPropagation(); toast.success('Segnalazione inviata'); }}
                className="w-7 h-7 glass-interactive rounded-lg flex items-center justify-center text-amber-500/20 hover:text-amber-500 transition-all border border-white/5"
                title="Segnala"
              >
                <AlertTriangle className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Footer Tags */}
        {(exercise.force || exercise.mechanic || exercise.equipment) && (
          <div className="flex items-center gap-1.5 pt-2.5 border-t border-white/5 mt-auto overflow-hidden">
            {exercise.force && (
              <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-amber-500/5 text-amber-500/40 rounded border border-amber-500/10 flex items-center gap-1 shrink-0 group-hover:bg-amber-500/10 group-hover:text-amber-500 group-hover:border-amber-500/20 transition-all">
                <Zap className="w-2 h-2" />
                {translateExerciseTerm('force', exercise.force)}
              </span>
            )}
            {exercise.mechanic && (
              <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-blue-500/5 text-blue-500/40 rounded border border-blue-500/10 shrink-0 group-hover:bg-blue-500/10 group-hover:text-blue-500 group-hover:border-blue-500/20 transition-all">
                {translateExerciseTerm('mechanic', exercise.mechanic)}
              </span>
            )}
            {exercise.equipment && (
              <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-primary/5 text-primary/40 rounded border border-primary/10 truncate group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all">
                {translateExerciseTerm('equipment', exercise.equipment)}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
