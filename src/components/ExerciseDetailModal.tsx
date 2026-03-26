import { X, Target, Zap, ChevronLeft, ChevronRight, Info, Flame, Shield, Activity, Dumbbell, Tv, Trash2, Edit2 } from 'lucide-react';
import { useState } from 'react';
import type { ExerciseLibrary } from '../types/database';
import { motion, AnimatePresence } from 'framer-motion';
import { translateExerciseTerm } from '../lib/translations';
import { MediaViewer } from './shared/MediaViewer';
import { useAuth } from '../lib/auth';

interface ExerciseDetailModalProps {
  exercise: ExerciseLibrary;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  isCoach?: boolean;
}

export default function ExerciseDetailModal({ exercise, isOpen, onClose, onDelete, onEdit, isCoach }: ExerciseDetailModalProps) {
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMediaViewerOpen, setIsMediaViewerOpen] = useState(false);

  if (!isOpen) return null;

  const images = exercise.images || [];
  const hasImages = images.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-6 lg:p-10">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-background/60 backdrop-blur-3xl"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative glass-card w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] rounded-none md:rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row border-white/10 bg-card/40 backdrop-blur-3xl"
      >
        
        {/* Removed redundant Mobile Close Button to fix double X issue */}

        {/* Left Side: Images/Media */}
        <div className="w-full md:w-1/2 relative bg-background/40 flex flex-col h-[40vh] md:h-auto min-h-[300px] md:min-h-0 overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          <AnimatePresence mode="wait">
            {hasImages ? (
              <motion.div 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative flex-1 group h-full"
              >
                <img 
                  src={images[currentImageIndex]} 
                  alt={`${exercise.name} - ${currentImageIndex + 1}`} 
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60"></div>
              </motion.div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground space-y-4 opacity-20">
                <Dumbbell className="w-16 h-16" />
                <p className="font-black uppercase tracking-widest text-[10px]">No Media Asset</p>
              </div>
            )}
          </AnimatePresence>
          
          {/* Image Navigation */}
          {images.length > 1 && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="pointer-events-auto w-12 h-12 glass-interactive rounded-2xl flex items-center justify-center text-white bg-black/20 hover:bg-primary transition-all border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="pointer-events-auto w-12 h-12 glass-interactive rounded-2xl flex items-center justify-center text-white bg-black/20 hover:bg-primary transition-all border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2.5 px-4 py-2 bg-background/40 backdrop-blur-xl rounded-2xl border border-white/5 z-20 shadow-2xl">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentImageIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-white/20 w-1.5 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}

        </div>

        {/* Right Side: Information */}
        <div className="w-full md:w-1/2 flex flex-col p-5 md:p-16 bg-gradient-to-br from-secondary/10 to-transparent overflow-hidden min-h-0 flex-1 relative">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 pointer-events-none"></div>

          <div className="flex items-start justify-between mb-6 md:mb-10 shrink-0 relative z-10">
            <div className="space-y-2 md:space-y-4 flex-1 min-w-0 pr-4">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="px-2 md:px-3 py-0.5 md:py-1 bg-primary/10 border border-primary/20 rounded-lg text-[8px] md:text-[9px] uppercase font-black tracking-[0.2em] text-primary italic">
                  {translateExerciseTerm('difficulty_level', exercise.difficulty_level) || 'Asset Elite'}
                </span>
                {exercise.mechanic && (
                  <span className="px-2 md:px-3 py-0.5 md:py-1 bg-secondary/20 border border-white/5 rounded-lg text-[8px] md:text-[9px] uppercase font-black tracking-[0.2em] text-muted-foreground italic">
                    {translateExerciseTerm('mechanic', exercise.mechanic)}
                  </span>
                )}
              </div>
              <h2 className="text-xl md:text-5xl font-black text-foreground leading-[1.1] md:leading-[0.9] italic uppercase tracking-tighter break-words">{exercise.name_it || exercise.name}</h2>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2 md:gap-4 shrink-0">
              {(exercise.video_urls && exercise.video_urls.length > 0) && (
                <button 
                   onClick={() => setIsMediaViewerOpen(true)}
                  className="w-10 h-10 md:w-16 md:h-16 glass-interactive rounded-xl md:rounded-[2rem] flex items-center justify-center text-primary hover:bg-primary/20 transition-all border-white/10 group"
                  title="Apri Media Viewer"
                >
                  <Tv className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                </button>
              )}

              {isCoach && onEdit && (
                <button 
                  onClick={() => {
                    onEdit?.(exercise.id);
                    onClose();
                  }}
                  className="w-10 h-10 md:w-16 md:h-16 glass-interactive rounded-xl md:rounded-[2rem] flex items-center justify-center text-primary hover:bg-primary/20 transition-all border-white/10 group"
                  title="Modifica Esercizio"
                >
                  <Edit2 className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                </button>
              )}

              {isCoach && exercise.coach_id === user?.id && (
                <button 
                  onClick={() => {
                    if (window.confirm('Sei sicuro di voler eliminare questo esercizio custom?')) {
                      onDelete?.(exercise.id);
                      onClose();
                    }
                  }}
                  className="w-10 h-10 md:w-16 md:h-16 glass-interactive rounded-xl md:rounded-[2rem] flex items-center justify-center text-red-500/40 hover:text-red-500 hover:bg-red-500/10 transition-all border-white/10 group"
                  title="Elimina Esercizio Custom"
                >
                  <Trash2 className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                </button>
              )}

              <button 
                onClick={onClose}
                className="w-10 h-10 md:w-16 md:h-16 glass-interactive rounded-xl md:rounded-[2rem] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all border-white/10 group/close"
              >
                <X className="w-5 h-5 md:w-8 md:h-8 group-hover/close:rotate-90 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* Move Stats and Description into a single scrollable area on mobile if needed, 
              but for now let's just make the whole right column scrollable if content overflows */}
          <div className="flex-1 overflow-y-auto custom-scrollbar md:pr-4 md:-mr-4 relative z-10 flex flex-col">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12 shrink-0">
            <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-background/40 border border-white/5 shadow-inner group hover:border-primary/20 transition-all">
              <div className="flex items-center gap-3 text-primary/60 mb-2 font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px]">
                <Target className="w-3.5 h-3.5" />
                Primario
              </div>
              <p className="text-foreground text-sm md:text-base font-black italic uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                {translateExerciseTerm('muscle_groups', exercise.muscle_group) || 'Asset'}
              </p>
            </div>
            
            <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-background/40 border border-white/5 shadow-inner group hover:border-amber-500/20 transition-all">
              <div className="flex items-center gap-3 text-amber-500/60 mb-2 font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px]">
                <Flame className="w-3.5 h-3.5" />
                Sinergico
              </div>
              <p className="text-foreground text-sm md:text-base font-black italic uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                {translateExerciseTerm('muscle_groups', exercise.muscle_group_secondary) || 'Complementare'}
              </p>
            </div>

            <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-background/40 border border-white/5 shadow-inner group hover:border-indigo-500/20 transition-all">
              <div className="flex items-center gap-3 text-indigo-500/60 mb-2 font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px]">
                <Shield className="w-3.5 h-3.5" />
                Attrezzatura
              </div>
              <p className="text-foreground text-sm md:text-base font-black italic uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                {translateExerciseTerm('equipment', exercise.equipment) || 'Corpo Libero'}
              </p>
            </div>

            <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-background/40 border border-white/5 shadow-inner group hover:border-rose-500/20 transition-all">
              <div className="flex items-center gap-3 text-rose-500/60 mb-2 font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px]">
                <Zap className="w-3.5 h-3.5" />
                Forza / Meccanica
              </div>
              <p className="text-foreground text-sm md:text-base font-black italic uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                {translateExerciseTerm('force', exercise.force) || 'Isolamento'}
              </p>
            </div>
          </div>

            {/* Description Content */}
            <div className="space-y-6 pb-10">
              <div className="flex items-center gap-3 text-foreground py-2 border-b border-white/5 mb-4">
                <Info className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-black italic uppercase tracking-tight">Protocollo d'esecuzione</h3>
              </div>
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed italic font-medium opacity-80 whitespace-pre-line">
                {exercise.description_it || exercise.description ? (
                  <p>{exercise.description_it || exercise.description}</p>
                ) : (
                  <div className="py-12 glass-card rounded-[2rem] border-dashed border-2 border-white/5 text-center opacity-30">
                    <p className="text-[10px] font-black uppercase tracking-widest">Descrizione non indicizzata</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between opacity-30">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-primary" />
                <span className="text-[9px] font-black tracking-[0.4em] uppercase">JB Strategic Assets v2.0</span>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest">Ref: {exercise.id.split('-')[0]}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Media Viewer Component */}
      <MediaViewer 
        isOpen={isMediaViewerOpen}
        onClose={() => setIsMediaViewerOpen(false)}
        urls={exercise.video_urls || []}
        title={exercise.name_it || exercise.name}
      />
    </div>
  );
}
