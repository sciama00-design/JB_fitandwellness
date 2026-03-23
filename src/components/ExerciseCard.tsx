import type { ExerciseLibrary } from '../types/database';
import { Target, Info, Edit2, PlayCircle, Zap, Dumbbell, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { translateExerciseTerm } from '../lib/translations';
import toast from 'react-hot-toast';

interface ExerciseCardProps {
  exercise: ExerciseLibrary;
  onInfo?: (id: string) => void;
  onEdit?: (id: string) => void;
  isCoach?: boolean;
}

export default function ExerciseCard({ exercise, onInfo, onEdit, isCoach }: ExerciseCardProps) {
  
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card group p-4 pb-3 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all cursor-pointer bg-secondary/5 relative overflow-hidden flex flex-col h-[150px] w-full"
      onClick={() => onInfo?.(exercise.id)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
      
      <div className="relative z-10 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-background/80 flex items-center justify-center text-primary border border-white/5 shadow-inner group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              {exercise.images && exercise.images[0] ? (
                <img 
                  src={exercise.images[0]} 
                  alt={exercise.name} 
                  className="w-full h-full object-cover"
                />
              ) : exercise.video_url ? (
                <PlayCircle className="w-7 h-7" />
              ) : (
                <Dumbbell className="w-7 h-7" />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="font-black text-sm text-foreground italic uppercase tracking-tight leading-tight group-hover:translate-x-1 transition-transform line-clamp-2 h-[2.2em] flex items-start">
                {exercise.name_it || exercise.name}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <Target className="w-3.5 h-3.5 text-primary opacity-40" />
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">
                  {translateExerciseTerm('muscle_groups', exercise.muscle_group) || 'Asset Generale'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">

            <button 
              onClick={(e) => { e.stopPropagation(); onInfo?.(exercise.id); }}
              className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:bg-white/5 hover:text-primary transition-all shadow-sm"
              title="Info"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
            
            {isCoach && (
              <button 
                onClick={(e) => { e.stopPropagation(); onEdit?.(exercise.id); }}
                className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
                title="Modifica"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            )}

            {!isCoach && (
              <button 
                onClick={(e) => { e.stopPropagation(); toast.success('Segnalazione inviata al coach'); }}
                className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-amber-500/30 hover:bg-amber-500/10 hover:text-amber-500 transition-all shadow-sm"
                title="Segnala Errore"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 pt-2 border-t border-white/5 mt-auto overflow-hidden">
          {exercise.force && (
            <span className="px-2 py-0.5 text-[7.5px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20 flex items-center gap-1 shrink-0">
              <Zap className="w-2 h-2" />
              {translateExerciseTerm('force', exercise.force)}
            </span>
          )}
          {exercise.mechanic && (
            <span className="px-2 py-0.5 text-[7.5px] font-black uppercase tracking-wider bg-blue-500/10 text-blue-500 rounded-lg border border-blue-500/20 shrink-0">
              {translateExerciseTerm('mechanic', exercise.mechanic)}
            </span>
          )}
          {exercise.equipment && (
            <span className="px-2 py-0.5 text-[7.5px] font-black uppercase tracking-wider bg-primary/10 text-primary rounded-lg border border-primary/20 truncate">
              {translateExerciseTerm('equipment', exercise.equipment)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
