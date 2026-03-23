import { useState } from 'react';
import PlanTemplatesTab from '../../components/coach/PlanTemplatesTab';
import ExerciseLibraryTab from '../../components/coach/ExerciseLibraryTab';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Library, LayoutGrid, Dumbbell } from 'lucide-react';

type LibrarySubTab = 'plans' | 'exercises';

export default function CoachLibrary() {
  const [activeSubTab, setActiveSubTab] = useState<LibrarySubTab>('plans');

  const tabs: { id: LibrarySubTab; label: string; icon: any }[] = [
    { id: 'plans', label: 'Modelli Schede', icon: LayoutGrid },
    { id: 'exercises', label: 'Esercizi Library', icon: Dumbbell },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pb-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-1">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-foreground italic bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent uppercase">
            Library
          </h1>
          <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.3em] text-[10px] opacity-60">
            Archivio risorse e template strategici
          </p>
        </div>
        
        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary border border-white/5 opacity-40">
          <Library className="w-6 h-6" />
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="relative">
        <div className="flex p-1.5 bg-secondary/10 backdrop-blur-md rounded-[2rem] border border-white/5 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={clsx(
                "relative flex items-center gap-3 px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap min-w-[160px] justify-center",
                activeSubTab === tab.id ? "text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon className={clsx("w-4 h-4", activeSubTab === tab.id ? "text-white" : "text-primary/40")} />
              {tab.label}
              {activeSubTab === tab.id && (
                <motion.div 
                  layoutId="activeTabLibrary"
                  className="absolute inset-0 bg-primary rounded-2xl -z-10 shadow-lg shadow-primary/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeSubTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="min-h-[400px]"
        >
          {activeSubTab === 'plans' ? (
            <PlanTemplatesTab />
          ) : (
            <ExerciseLibraryTab />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
