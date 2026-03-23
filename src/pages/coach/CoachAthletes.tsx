import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import { Users, Search, UserPlus, ArrowRight, Loader2, Mail, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-xs">Caricamento atleti...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12 pb-20"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-1">
        <div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter text-foreground italic bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent uppercase">
            Atleti
          </h1>
          <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.3em] text-[10px] opacity-60">
            Gestione atleti e programmazione
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Cerca atleta..."
              className="w-full pl-12 pr-6 py-4 bg-secondary/20 border border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all text-foreground text-sm font-medium italic placeholder:text-muted-foreground/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="h-14 px-6 bg-primary text-white rounded-2xl font-black italic uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-98 transition-all shrink-0"
          >
            <UserPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Nuovo Atleta</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      {filteredAthletes?.length === 0 ? (
        <div className="text-center py-32 glass-card rounded-[3rem] border-dashed border-2 border-white/5 space-y-6">
          <div className="w-20 h-20 bg-muted/10 rounded-[2rem] flex items-center justify-center mx-auto">
            <Users className="w-10 h-10 text-muted-foreground opacity-20" />
          </div>
          <div>
            <p className="text-xl font-black text-foreground italic uppercase tracking-tight">Nessun atleta trovato</p>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-2">Prova con un termine diverso</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredAthletes?.map((athlete) => (
            <motion.div 
              key={athlete.id} 
              variants={itemVariants}
              onClick={() => navigate(`/coach/athletes/${athlete.id}`)}
              className="glass-card group p-5 sm:p-6 rounded-3xl sm:rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between h-56"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-background/80 shadow-inner flex items-center justify-center font-black text-xl text-muted-foreground italic uppercase group-hover:text-primary transition-colors border border-white/5">
                      {athlete.first_name?.[0]}{athlete.last_name?.[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-foreground uppercase italic tracking-tighter leading-tight group-hover:translate-x-1 transition-transform">
                        {athlete.first_name} {athlete.last_name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-muted-foreground/60 text-[10px] font-bold uppercase tracking-widest mt-1">
                        <Mail className="w-3 h-3" />
                        <span className="line-clamp-1">{athlete.email || '—'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] opacity-40">Programma Attivo</p>
                  <p className="text-sm text-foreground font-black italic tracking-tight uppercase truncate mt-1">
                    {athlete.workout_plans?.[0]?.name || 'Nessun piano assegnato'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-2">
                   {/* Could add mini activity dots here */}
                   {[1,2,3].map(i => (
                     <div key={i} className="w-2 h-2 rounded-full bg-primary/20 border border-primary/40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                   ))}
                </div>
                <Link 
                  to={`/coach/athletes/${athlete.id}`}
                  className="text-[9px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-1 transition-transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  Dettagli <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AddAthleteModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={() => refetchAthletes()}
      />
    </motion.div>
  );
}
