import { X, Target, Zap, Beaker, ChevronLeft, ChevronRight, PlayCircle, Info, Flame, Shield, Activity } from 'lucide-react';
import { useState } from 'react';
import type { ExerciseLibrary } from '../types/database';

interface ExerciseDetailModalProps {
  exercise: ExerciseLibrary;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExerciseDetailModal({ exercise, isOpen, onClose }: ExerciseDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative glass w-full max-w-5xl h-[90vh] md:h-auto max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 ease-out">
        
        {/* Close Button - Mobile Top Right */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 bg-slate-900/50 hover:bg-slate-800 text-white rounded-full backdrop-blur-md border border-slate-700/50 transition-all md:hidden"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Images/Media */}
        <div className="w-full md:w-1/2 relative bg-slate-950/50 flex flex-col h-[40%] md:h-auto min-h-[300px] md:min-h-0">
          {hasImages ? (
            <div className="relative flex-1 group">
              <img 
                src={images[currentImageIndex]} 
                alt={`${exercise.name} - ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover animate-in fade-in zoom-in-110 duration-700"
              />
              
              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/60 hover:bg-primary-500 text-white rounded-2xl backdrop-blur-md border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/60 hover:bg-primary-500 text-white rounded-2xl backdrop-blur-md border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 px-3 py-1.5 bg-slate-900/40 backdrop-blur-md rounded-full border border-slate-700/30">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'bg-primary-400 w-6' 
                            : 'bg-slate-500/50 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-600 space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-slate-900/50 flex items-center justify-center border border-slate-800">
                <Beaker className="w-10 h-10" />
              </div>
              <p className="font-medium">Nessuna immagine</p>
            </div>
          )}

          {/* Video Link Plate */}
          {exercise.video_url && (
            <a 
              href={exercise.video_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-6 left-6 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl flex items-center space-x-2 font-bold shadow-xl shadow-primary-500/20 transition-all hover:scale-105"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Guarda Video</span>
            </a>
          )}
        </div>

        {/* Right Side: Information */}
        <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 bg-gradient-to-br from-slate-900/50 to-slate-950/50 overflow-hidden min-h-0 flex-1">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-8 shrink-0">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-primary-400 mb-2">
                <span className="px-2.5 py-1 bg-primary-500/10 border border-primary-500/20 rounded-lg text-[10px] uppercase font-black tracking-widest text-primary-400">
                  {exercise.difficulty_level || 'Esercizio'}
                </span>
                {exercise.mechanic && (
                  <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-lg text-[10px] uppercase font-black tracking-widest text-slate-400">
                    {exercise.mechanic}
                  </span>
                )}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">{exercise.name}</h2>
            </div>
            
            {/* Desktop Close Button */}
            <button 
              onClick={onClose}
              className="hidden md:flex p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-2xl transition-all border border-transparent hover:border-slate-700/50"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Stats Grid - Back to 2 columns for better readability */}
          <div className="grid grid-cols-2 gap-4 mb-10 shrink-0">
            <div className="p-4 rounded-3xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center space-x-2 text-primary-400 mb-1">
                <Target className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Primario</span>
              </div>
              <p className="text-slate-100 text-sm font-bold capitalize truncate">{exercise.muscle_group || 'N/A'}</p>
            </div>
            <div className="p-4 rounded-3xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center space-x-2 text-amber-400 mb-1">
                <Flame className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Secondario</span>
              </div>
              <p className="text-slate-100 text-sm font-bold capitalize truncate">{exercise.muscle_group_secondary || 'Nessuno'}</p>
            </div>
            <div className="p-4 rounded-3xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center space-x-2 text-blue-400 mb-1">
                <Shield className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Attrezzatura</span>
              </div>
              <p className="text-slate-100 text-sm font-bold capitalize truncate">{exercise.equipment || 'Libero'}</p>
            </div>
            <div className="p-4 rounded-3xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center space-x-2 text-rose-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Forza</span>
              </div>
              <p className="text-slate-100 text-sm font-bold capitalize truncate">{exercise.force || 'N/A'}</p>
            </div>
          </div>

          {/* Scrollable Content (Description & Footer) */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 -mr-2 relative">
            {/* Description Sector */}
            <div className="space-y-4 pb-6">
              <div className="flex items-center space-x-2 text-slate-100">
                <Info className="w-5 h-5 text-primary-400" />
                <h3 className="text-lg font-bold">Istruzioni</h3>
              </div>
              <div className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {exercise.description ? (
                  <p>{exercise.description}</p>
                ) : (
                  <p className="italic text-slate-500">Nessuna descrizione disponibile.</p>
                )}
              </div>
            </div>

            {/* Footer Branding/Info */}
            <div className="mt-6 pt-8 border-t border-slate-800/50 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-slate-500">
                <Activity className="w-5 h-5" />
                <span className="text-xs font-semibold tracking-wide uppercase">JB Library</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
