import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { YouTubeShortsPlayer } from './YouTubeShortsPlayer';
import { extractYouTubeId } from '../../lib/videoUtils';

interface MediaViewerProps {
  urls: string[];
  onUrlsChange?: (urls: string[]) => void;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function MediaViewer({ urls, onUrlsChange, isOpen, onClose, title = "Libreria Media" }: MediaViewerProps) {
  const [localUrls, setLocalUrls] = useState<string[]>(urls);
  const [newUrl, setNewUrl] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const isEditMode = !!onUrlsChange;

  useEffect(() => {
    setLocalUrls(urls);
    if (currentSlide >= urls.length + (onUrlsChange ? 1 : 0)) {
       setCurrentSlide(Math.max(0, urls.length - 1));
    }
  }, [urls]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset to slide 0 when initially opened
      setCurrentSlide(0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalSlides = localUrls.length + (isEditMode ? 1 : 0);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl.trim() || !extractYouTubeId(newUrl)) {
      alert("Inserisci un link YouTube valido");
      return;
    }
    const updated = [...localUrls, newUrl.trim()];
    setLocalUrls(updated);
    if (onUrlsChange) onUrlsChange(updated);
    setNewUrl('');
    // Switch to the newly added video slide 
    setCurrentSlide(updated.length - 1);
  };

  const handleRemoveUrl = (index: number) => {
    const updated = localUrls.filter((_, i) => i !== index);
    setLocalUrls(updated);
    if (onUrlsChange) onUrlsChange(updated);
    
    // adjust slide if deleting current
    if (currentSlide >= updated.length) {
       setCurrentSlide(Math.max(0, updated.length - (isEditMode ? 0 : 1)));
    }
  };

  const handleChangeUrl = (index: number, val: string) => {
    const updated = [...localUrls];
    updated[index] = val;
    setLocalUrls(updated);
  };

  const handleSaveUrlChange = () => {
    if (onUrlsChange) onUrlsChange(localUrls);
  };

  const isAddVideoSlide = isEditMode && currentSlide === localUrls.length;
  const currentUrl = !isAddVideoSlide ? localUrls[currentSlide] : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-3xl p-4 sm:p-6 animate-in fade-in duration-300">
      
      {/* Background clickable overlay for closing */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Main Glass Modal */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center max-w-5xl mx-auto rounded-3xl sm:rounded-[3rem] overflow-hidden bg-slate-950/40 border border-white/10 shadow-2xl scale-in-center">
        
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 flex items-center justify-between z-20 bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
          <div className="flex flex-col gap-1 pointer-events-auto">
            <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">{title}</h3>
            <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] opacity-80">
              {isEditMode ? 'Modalità Modifica' : 'Media Viewer'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="h-12 w-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-110 hover:rotate-90 active:scale-95 pointer-events-auto"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Buttons (Elegant) */}
        {totalSlides > 1 && (
          <>
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none shadow-xl"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentSlide === totalSlides - 1}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none shadow-xl"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        {/* Content Container */}
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/30 pt-20 pb-10 relative">
          
          {totalSlides === 0 && (
             <div className="flex flex-col items-center justify-center text-center px-4 animate-in zoom-in-95 duration-300">
               <div className="h-20 w-20 flex items-center justify-center rounded-3xl bg-white/5 border border-white/5 mb-6">
                 <Video className="h-10 w-10 text-white/20" />
               </div>
               <h4 className="text-xl font-bold text-white mb-2">Nessun Video</h4>
               <p className="text-sm font-medium text-white/40 uppercase tracking-widest">Questo esercizio non ha video associati.</p>
             </div>
          )}

          {/* Player Slide */}
          {!isAddVideoSlide && currentUrl && (
            <div 
              key={`player-${currentSlide}`}
              className="w-full flex flex-col items-center justify-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-500"
            >
              <div className="w-full max-w-sm flex flex-col gap-6 items-center">
                <YouTubeShortsPlayer 
                  url={currentUrl} 
                  className="w-full aspect-[9/16] max-h-[70vh] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-white/5 bg-black z-10" 
                />
                
                {isEditMode && (
                  <div className="w-full max-w-[320px] bg-slate-900/60 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex gap-2 items-center shadow-lg transition-all focus-within:border-primary-500/50 focus-within:ring-2 focus-within:ring-primary-500/20">
                    <input
                      type="text"
                      value={currentUrl}
                      onChange={(e) => handleChangeUrl(currentSlide, e.target.value)}
                      onBlur={handleSaveUrlChange}
                      placeholder="Link YouTube..."
                      className="flex-1 bg-transparent text-white/90 px-3 py-2 text-sm outline-none placeholder:text-white/30 font-mono"
                    />
                    <button
                      onClick={() => handleRemoveUrl(currentSlide)}
                      className="p-2 text-red-400 hover:text-white hover:bg-red-500/20 rounded-xl transition-all"
                      title="Rimuovi video"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Add Video Slot */}
          {isAddVideoSlide && (
            <div 
               key={`add-video-${currentSlide}`}
               className="w-full h-full flex flex-col items-center justify-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-500"
            >
              <div className="w-full max-w-sm aspect-[9/16] max-h-[70vh] bg-slate-900/30 backdrop-blur-xl border-2 border-dashed border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center gap-6 group hover:border-primary-500/50 hover:bg-slate-900/50 transition-all shadow-2xl">
                
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 mb-2 border border-primary-500/20 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(var(--primary-500),0.2)]">
                  <Plus className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">Nuovo Video</h3>
                  <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">Incolla qui un link YT</p>
                </div>
                
                <form onSubmit={handleAddUrl} className="w-full flex flex-col gap-4 mt-4">
                  <input
                    type="text"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://youtube.com/shorts/..."
                    className="w-full bg-slate-950/80 text-white rounded-2xl px-5 py-4 text-sm border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-center font-mono placeholder:text-white/20 transition-all font-medium"
                  />
                  <button
                    type="submit"
                    disabled={!newUrl.trim()}
                    className="w-full bg-primary-600 hover:bg-primary-500 text-white rounded-2xl px-5 py-4 font-black italic uppercase tracking-widest transition-all disabled:opacity-50 disabled:hover:bg-primary-600 disabled:cursor-not-allowed shadow-xl shadow-primary-500/20 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4"/> Aggiungi
                  </button>
                </form>

              </div>
            </div>
          )}

        </div>

        {/* Slide Indicators (Dots) */}
        {totalSlides > 1 && (
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-3 z-30">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all rounded-full ${
                  currentSlide === idx 
                    ? 'w-6 h-2 bg-primary-500 shadow-[0_0_10px_rgba(var(--primary-500),0.5)]' 
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
