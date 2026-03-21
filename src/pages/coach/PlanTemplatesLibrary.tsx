import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templateService } from '../../services/templateService';
import { useAuth } from '../../lib/auth';
import { Plus, Loader2, ClipboardList, Pencil, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlanTemplatesLibrary() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: templates, isLoading } = useQuery({
    queryKey: ['coach-templates', user?.id],
    queryFn: () => templateService.getCoachTemplates(user!.id),
    enabled: !!user?.id,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => templateService.deleteTemplate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coach-templates'] });
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
        <p className="text-slate-400 animate-pulse">Caricamento libreria schede...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Libreria Schede</h1>
          <p className="text-slate-400 mt-2">Gestisci i tuoi modelli di allenamento riutilizzabili.</p>
        </div>

        <Link 
          to="/coach/templates/new" 
          className="group relative px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <Plus className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
          <span>Nuova Scheda</span>
        </Link>
      </div>

      {templates?.length === 0 ? (
        <div className="text-center py-20 glass rounded-3xl border-dashed border-2 border-slate-800">
          <ClipboardList className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <p className="text-slate-400">Nessuna scheda trovata. Crea la tua prima scheda per iniziare!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates?.map((template) => (
            <div key={template.id} className="card group hover:border-emerald-500/50 transition-all p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-3xl relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  <Link 
                    to={`/coach/templates/edit/${template.id}`}
                    className="p-2 bg-slate-800 hover:bg-emerald-500 text-slate-400 hover:text-white rounded-xl transition-all"
                  >
                    <Pencil className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => {
                      if (confirm('Sei sicuro di voler eliminare questo modello?')) {
                        deleteMutation.mutate(template.id);
                      }
                    }}
                    className="p-2 bg-slate-800 hover:bg-red-500 text-slate-400 hover:text-white rounded-xl transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">{template.name}</h3>
                <p className="text-sm text-slate-400 line-clamp-2 min-h-[40px]">
                  {template.description || 'Nessuna descrizione.'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Creato il {new Date(template.created_at).toLocaleDateString()}
                </span>
                <Link 
                  to={`/coach/templates/edit/${template.id}`}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  DETTAGLI <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
