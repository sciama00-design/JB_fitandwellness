import React from 'react';
import { useAIModel } from '../../context/AIModelContext';
import { GEMINI_MODELS } from '../../services/geminiService';
import { Brain, Sparkles, Zap, Flame } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const MODEL_METADATA = {
  'gemini-2.5-flash-lite': {
    label: '2.5 Flash Lite',
    description: 'Veloce ed efficiente (Default)',
    icon: Zap,
    color: 'emerald'
  },
  'gemini-3.1-flash-lite-preview': {
    label: '3.1 Flash Lite',
    description: 'Ultima anteprima bilanciata',
    icon: Sparkles,
    color: 'blue'
  },
  'gemini-3-flash-preview': {
    label: '3.0 Flash',
    description: 'Anteprima ad alte prestazioni',
    icon: Flame,
    color: 'orange'
  },
  'gemini-2.5-flash': {
    label: '2.5 Flash',
    description: 'Stabile e potente',
    icon: Brain,
    color: 'purple'
  }
} as const;

interface ModelSelectorProps {
  variant?: 'compact' | 'full' | 'minimal';
  className?: string;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ variant = 'full', className }) => {
  const { selectedModel, setSelectedModel } = useAIModel();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const currentModelInfo = MODEL_METADATA[selectedModel as keyof typeof MODEL_METADATA] || MODEL_METADATA['gemini-2.5-flash-lite'];

  if (variant === 'minimal') {
    return (
        <div className={cn("flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/5", className)}>
            {GEMINI_MODELS.map((model) => {
                const info = MODEL_METADATA[model as keyof typeof MODEL_METADATA];
                const isSelected = selectedModel === model;
                return (
                    <button
                        key={model}
                        onClick={() => setSelectedModel(model as any)}
                        className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center transition-all relative group",
                            isSelected 
                                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                                : "text-muted-foreground/40 hover:text-foreground hover:bg-white/10"
                        )}
                    >
                        <info.icon className="w-4 h-4" />
                        
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60]">
                           <p className="text-[9px] font-black uppercase tracking-widest">{info.label}</p>
                        </div>
                    </button>
                );
            })}
        </div>
    );
  }

  if (variant === 'compact') {
      return (
          <div className={cn("relative", className)}>
              <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 rounded-xl bg-slate-900/40 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all text-primary shadow-2xl"
              >
                  <currentModelInfo.icon className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                  {isOpen && (
                      <motion.div 
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                          className="absolute top-full left-0 mt-3 w-64 bg-slate-950 border border-white/10 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-2 z-[100] overflow-hidden backdrop-blur-3xl"
                      >
                          <div className="px-4 py-3 border-b border-white/5 mb-1 flex items-center justify-between">
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/30">AI Model Focus</p>
                              <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-primary/40" />
                                <div className="w-1 h-1 rounded-full bg-primary/20" />
                              </div>
                          </div>
                          <div className="space-y-1 p-1">
                            {GEMINI_MODELS.map((model) => {
                                const info = MODEL_METADATA[model as keyof typeof MODEL_METADATA];
                                const isSelected = selectedModel === model;
                                return (
                                    <button
                                        key={model}
                                        onClick={() => {
                                            setSelectedModel(model as any);
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "w-full flex items-center gap-3.5 p-3.5 rounded-2xl transition-all group",
                                            isSelected 
                                                ? "bg-primary/15 text-white shadow-inner shadow-white/5" 
                                                : "hover:bg-white/[0.04] text-slate-400"
                                        )}
                                    >
                                        <div className={cn(
                                            "p-2.5 rounded-xl transition-all duration-300",
                                            isSelected 
                                                ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" 
                                                : "bg-white/5 group-hover:bg-white/10 group-hover:text-white"
                                        )}>
                                            <info.icon className="w-4 h-4" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="flex items-center gap-1.5 mb-1">
                                                <p className="text-xs font-black uppercase italic tracking-tight leading-none">{info.label}</p>
                                                {model === 'gemini-2.5-flash-lite' && (
                                                    <span className="text-[7px] font-bold text-emerald-500/60 uppercase">Def</span>
                                                )}
                                            </div>
                                            <p className="text-[9px] font-bold text-muted-foreground/40 leading-none">{info.description}</p>
                                        </div>
                                    </button>
                                );
                            })}
                          </div>
                      </motion.div>
                  )}
              </AnimatePresence>
          </div>
      );
  }

  return (
    <div className={cn("space-y-4", className)}>
        <div className="grid grid-cols-1 gap-2">
            {GEMINI_MODELS.map((model) => {
                const info = MODEL_METADATA[model as keyof typeof MODEL_METADATA];
                const isSelected = selectedModel === model;
                return (
                    <button
                        key={model}
                        onClick={() => setSelectedModel(model as any)}
                        className={cn(
                            "group flex items-center gap-4 p-4 rounded-3xl border transition-all text-left",
                            isSelected 
                                ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5" 
                                : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                        )}
                    >
                        <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all",
                            isSelected ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-white/5 text-muted-foreground group-hover:bg-white/10"
                        )}>
                            <info.icon className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className={cn(
                                    "text-sm font-black uppercase italic tracking-tight",
                                    isSelected ? "text-white" : "text-foreground/80"
                                )}>
                                    {info.label}
                                </h4>
                                {model === 'gemini-2.5-flash-lite' && (
                                    <span className="text-[8px] font-black bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-full uppercase tracking-tighter">Default</span>
                                )}
                            </div>
                            <p className="text-[10px] font-bold text-muted-foreground/50 leading-tight">
                                {info.description}
                            </p>
                        </div>

                        <div className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                            isSelected ? "border-primary bg-primary/20" : "border-white/10 scale-90 opacity-0 group-hover:opacity-100"
                        )}>
                            {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                        </div>
                    </button>
                );
            })}
        </div>
    </div>
  );
};
