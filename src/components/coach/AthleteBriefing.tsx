import { useState } from 'react';

import { geminiService } from '../../services/geminiService';
import { supabase } from '../../lib/supabase';
import { Sparkles, Loader2, ClipboardCheck } from 'lucide-react';


interface AthleteBriefingProps {
  athleteId: string;
  athleteProfile: any;
  dietPlan: any;
}

export default function AthleteBriefing({ athleteId, athleteProfile, dietPlan }: AthleteBriefingProps) {
  const [briefing, setBriefing] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateBriefing = async () => {
    setIsLoading(true);
    try {
      // Fetch active workout plan
      const { data: workoutPlan } = await supabase
        .from('workout_plans')
        .select('*')
        .eq('athlete_id', athleteId)
        .eq('active', true)
        .maybeSingle();

      // Fetch recent logs (last 5 sessions)
      const { data: recentLogs } = await supabase
        .from('workout_sessions')
        .select('*, workout_plans(name)')
        .eq('athlete_id', athleteId)
        .order('started_at', { ascending: false })
        .limit(5);

      const text = await geminiService.generateAthleteBriefing(
        athleteProfile,
        dietPlan,
        workoutPlan,
        recentLogs
      );
      setBriefing(text);
    } catch (error) {
      console.error("Error generating briefing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">Briefing Strategico IA</h3>
            <p className="text-xs text-slate-500">Analisi automatica di alimentazione, allenamento e progressi</p>
          </div>
        </div>
        
        {!briefing && !isLoading && (
          <button 
            onClick={generateBriefing}
            className="btn btn-primary px-4 py-2 text-xs flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Genera Briefing
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-8 space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
          <p className="text-sm text-slate-400 animate-pulse">L'analista IA sta esaminando l'atleta...</p>
        </div>
      ) : briefing ? (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="bg-primary-950/20 border border-primary-500/20 rounded-2xl p-4 text-sm text-slate-300 leading-relaxed italic border-l-4 border-l-primary-500">
            {briefing}
          </div>
          <button 
            onClick={generateBriefing}
            className="text-[10px] text-slate-500 hover:text-primary-400 uppercase font-bold tracking-widest flex items-center gap-1 transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            Rigenera Analisi
          </button>
        </div>
      ) : (
        <div className="bg-slate-950/50 border border-slate-800 border-dashed rounded-2xl p-6 text-center">
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Vuoi un riassunto rapido dello stato di questo atleta? L'IA incrocerà dieta, allenamento e log recenti per te.
          </p>
        </div>
      )}
    </div>
  );
}
