import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import { Users, Search, UserPlus, Loader2, Mail, Dumbbell, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AddAthleteModal from '../../components/coach/AddAthleteModal';
import { motion } from 'framer-motion';

export default function CoachAthletes() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { data: athletes, isLoading, refetch: refetchAthletes } = useQuery({
    queryKey: ['coach-athletes', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*, workout_plans!athlete_id(id, name, created_at)')
        .eq('coach_id', user?.id)
        .eq('role', 'athlete');
      
      if (error) throw error;
      return data as any[];
    },
    enabled: !!user?.id,
  });

  const filteredAthletes = athletes?.filter(a => 
    `${a.first_name} ${a.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" />
        </div>
        <p className="text-muted-foreground/60 animate-pulse font-semibold uppercase tracking-[0.2em] text-[10px]">Caricamento atleti...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Atleti
          </h1>
          <p className="text-muted-foreground/40 mt-1.5 font-semibold tracking-wide text-xs">
            Gestione atleti e programmazione
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Cerca atleta..."
              className="w-full pl-11 pr-4 h-11 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="btn btn-primary h-11 px-5 rounded-xl flex items-center gap-2 shrink-0"
          >
            <UserPlus className="w-4 h-4" />
            <span className="hidden sm:inline font-bold text-[11px] tracking-wide">Nuovo Atleta</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {filteredAthletes?.length === 0 ? (
        <div className="text-center py-24 rounded-2xl border-2 border-dashed border-white/[0.06] space-y-4">
          <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center mx-auto">
            <Users className="w-6 h-6 text-muted-foreground/20" />
          </div>
          <div>
            <p className="text-foreground font-bold text-lg">Nessun atleta trovato</p>
            <p className="text-muted-foreground/40 text-sm mt-1">Prova con un termine diverso</p>
          </div>
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredAthletes?.map((athlete) => (
            <motion.div 
              key={athlete.id} 
              variants={itemVariants}
              onClick={() => navigate(`/coach/athletes/${athlete.id}`)}
              className="group rounded-2xl border border-white/[0.05] bg-card/20 hover:bg-card/40 hover:border-white/[0.1] transition-all duration-300 cursor-pointer p-5 relative overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-4">
                {/* Avatar + Name */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center font-black text-white text-[11px] shadow-md shadow-primary/15 shrink-0">
                    {athlete.first_name?.[0]}{athlete.last_name?.[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[15px] text-foreground tracking-tight leading-tight truncate">
                      {athlete.first_name} {athlete.last_name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-muted-foreground/40 text-[10px] font-medium mt-0.5">
                      <Mail className="w-3 h-3 shrink-0" />
                      <span className="truncate">{athlete.email || '—'}</span>
                    </div>
                  </div>
                </div>

                {/* Active plan */}
                <div className="pt-3 border-t border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center shrink-0">
                      <Dumbbell className="w-3 h-3 text-primary/60" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-muted-foreground/35 font-semibold uppercase tracking-[0.1em]">Piano attivo</p>
                      <p className="text-[12px] text-foreground/80 font-semibold truncate mt-px">
                        {athlete.workout_plans?.[0]?.name || 'Nessun piano assegnato'}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <AddAthleteModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={() => refetchAthletes()}
      />
    </div>
  );
}
