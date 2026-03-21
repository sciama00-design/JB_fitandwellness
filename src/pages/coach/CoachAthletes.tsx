import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import { Users, Search, UserPlus, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddAthleteModal from '../../components/coach/AddAthleteModal';

export default function CoachAthletes() {
  const { user } = useAuth();
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        <p className="text-slate-400 animate-pulse">Caricamento atleti...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">I Tuoi Atleti</h1>
          <p className="text-slate-400 mt-2">Gestisci i tuoi atleti e i loro programmi di allenamento.</p>
        </div>

        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="btn btn-primary h-12 px-6 shadow-lg shadow-primary-500/20"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Aggiungi Atleta
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input 
          type="text" 
          placeholder="Cerca per nome o email..."
          className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-3xl focus:ring-2 focus:ring-primary-500/50 outline-none transition-all text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredAthletes?.length === 0 ? (
        <div className="text-center py-20 glass rounded-3xl border-dashed border-2 border-slate-800">
          <Users className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <p className="text-slate-400">Nessun atleta trovato.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAthletes?.map((athlete) => (
            <div 
              key={athlete.id} 
              className="card group hover:border-primary-500/50 transition-all cursor-pointer bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50"
              onClick={() => window.location.href = `/coach/athletes/${athlete.id}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-slate-300 text-sm border border-slate-700/50">
                    {athlete.first_name?.[0]}{athlete.last_name?.[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white line-clamp-1">
                      {athlete.first_name} {athlete.last_name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1">{athlete.email || 'Nessuna email'}</p>
                  </div>
                </div>
                <Link 
                  to={`/coach/athletes/${athlete.id}`}
                  className="p-2 bg-slate-800 group-hover:bg-primary-500 text-slate-400 group-hover:text-white rounded-lg transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-4 flex items-center justify-between border-t border-slate-800/50 pt-3">
                <div>
                  <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Piano Attivo</p>
                  <p className="text-xs text-slate-300 font-medium line-clamp-1">
                    {athlete.workout_plans?.[0]?.name || 'Nessun piano'}
                  </p>
                </div>
                <Link 
                  to={`/coach/plans/new?athleteId=${athlete.id}`}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-primary-400 text-[10px] font-bold rounded-lg transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  GESTISCI
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <AddAthleteModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={() => {
          refetchAthletes();
        }}
      />
    </div>
  );
}
