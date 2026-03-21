import { useState } from 'react';
import PlanTemplatesTab from '../../components/coach/PlanTemplatesTab';
import ExerciseLibraryTab from '../../components/coach/ExerciseLibraryTab';

type LibrarySubTab = 'plans' | 'exercises';

export default function CoachLibrary() {
  const [activeSubTab, setActiveSubTab] = useState<LibrarySubTab>('plans');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Libreria</h1>
          <p className="text-slate-400 mt-2">Gestisci i tuoi modelli di schede ed esplora la libreria esercizi.</p>
        </div>
      </div>

      {/* Sub-tabs Navigation */}
      <div className="flex items-center space-x-8 border-b border-slate-800/50 pb-1">
        <button
          onClick={() => setActiveSubTab('plans')}
          className={`pb-4 text-base font-bold transition-all relative ${
            activeSubTab === 'plans' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Schede
          {activeSubTab === 'plans' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 shadow-[0_0_12px_rgba(20,184,166,0.5)]" />
          )}
        </button>
        <button
          onClick={() => setActiveSubTab('exercises')}
          className={`pb-4 text-base font-bold transition-all relative ${
            activeSubTab === 'exercises' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Esercizi
          {activeSubTab === 'exercises' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 shadow-[0_0_12px_rgba(20,184,166,0.5)]" />
          )}
        </button>
      </div>

      <div className="min-h-[400px]">
        {activeSubTab === 'plans' ? (
          <PlanTemplatesTab />
        ) : (
          <ExerciseLibraryTab />
        )}
      </div>
    </div>
  );
}
