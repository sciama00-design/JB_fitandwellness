import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templateService } from '../../services/templateService';
import { useAuth } from '../../lib/auth';
import { Plus, Loader2, ClipboardList, Pencil, Trash2, ArrowRight, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PlanTemplatesTab() {
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
      <div className="flex flex-col items-center justify-center py-32 space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-[10px]">Caricamento libreria template...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Tab Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-1">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black italic tracking-tighter text-foreground uppercase">Template Strategici</h2>
            <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full shadow-lg shadow-primary/5">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                <LayoutGrid className="w-3.5 h-3.5" />
                {templates?.length || 0} Schede
              </span>
            </div>
          </div>
          <p className="text-muted-foreground font-bold uppercase tracking-widest text-[9px] opacity-40">
            Modelli di allenamento predefiniti per assegnazione rapida
          </p>
        </div>

        <Link 
          to="/coach/templates/new" 
          className="h-14 px-8 bg-primary text-white rounded-2xl font-black italic uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-98 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          Nuovo Template
        </Link>
      </div>

      {templates?.length === 0 ? (
        <div className="py-32 glass-card rounded-[3rem] border-dashed border-2 border-white/5 bg-secondary/5 text-center space-y-6">
          <div className="w-20 h-20 bg-muted/10 rounded-[2.5rem] flex items-center justify-center mx-auto border border-white/5">
            <ClipboardList className="w-10 h-10 text-muted-foreground opacity-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black text-foreground italic uppercase tracking-tighter opacity-60">Libreria Vuota</h3>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest opacity-30">Inizia a creare i tuoi protocolli</p>
          </div>
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
        >
          {templates?.map((template) => (
            <motion.div 
              key={template.id} 
              variants={itemVariants}
              className="glass-card group p-4 pb-3 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all relative overflow-hidden flex flex-col h-[150px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-background/80 flex items-center justify-center text-primary border border-white/5 shadow-inner">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      to={`/coach/templates/edit/${template.id}`}
                      className="w-10 h-10 glass-interactive rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button 
                      onClick={() => {
                        if (confirm('Sei sicuro di voler eliminare questo modello?')) {
                          deleteMutation.mutate(template.id);
                        }
                      }}
                      className="w-10 h-10 glass-interactive rounded-xl flex items-center justify-center text-red-500/30 hover:text-red-500 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-foreground italic uppercase tracking-tight group-hover:translate-x-1 transition-transform">{template.name}</h3>
                  <p className="text-[10px] text-muted-foreground font-medium italic line-clamp-2 opacity-60">
                    {template.description || 'Nessuna descrizione strategica.'}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                <span className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.2em] opacity-40">
                  Ref: {new Date(template.created_at).toLocaleDateString()}
                </span>
                <Link 
                  to={`/coach/templates/edit/${template.id}`}
                  className="text-[9px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  Edit Blueprint <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
