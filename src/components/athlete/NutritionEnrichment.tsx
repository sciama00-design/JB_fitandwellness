import { useState } from 'react';

import { geminiService } from '../../services/geminiService';
import { Sparkles, Loader2, Info } from 'lucide-react';

interface NutritionEnrichmentProps {
  dietPlan: any;
  profile: any;
  workoutPlan?: any;
}

export default function NutritionEnrichment({ dietPlan, profile, workoutPlan }: NutritionEnrichmentProps) {
  const [enrichment, setEnrichment] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateEnrichment = async () => {
    setIsLoading(true);
    try {
      const text = await geminiService.generateNutritionEnrichment(dietPlan, profile, workoutPlan);
      setEnrichment(text);
    } catch (error) {
      console.error("Error generating enrichment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!enrichment && !isLoading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Analisi Strategica IA</h3>
          <p className="text-sm text-slate-400 max-w-sm mx-auto">
            L'IA può analizzare il tuo piano nutrizionale incrociando le tue preferenze e il tuo allenamento per darti consigli su misura.
          </p>
        </div>
        <button 
          onClick={generateEnrichment}
          className="btn btn-primary px-6 py-2.5 text-sm flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Arricchisci il Mio Piano
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
        <Sparkles className="w-24 h-24 text-indigo-400" />
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-indigo-400" />
        </div>
        <h3 className="text-lg font-bold text-white">Interpretazione Strategica</h3>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-8 space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
          <p className="text-sm text-slate-400 animate-pulse">L'IA sta elaborando i tuoi dati...</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="prose prose-invert prose-sm max-w-none text-slate-300 leading-relaxed italic">
            {enrichment}
          </div>
          <div className="pt-4 border-t border-slate-800/50 flex items-center gap-2 text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            <Info className="w-3 h-3" />
            Aggiornato in base alle tue preferenze e allenamenti attuali
          </div>
        </div>
      )}
    </div>
  );
}
