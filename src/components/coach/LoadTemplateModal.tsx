import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { templateService } from '../../services/templateService';
import { X, Loader2, ClipboardList, Search, ArrowRight } from 'lucide-react';
import { useAuth } from '../../lib/auth';

interface LoadTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (templateId: string) => void;
  isSubmitting?: boolean;
}

export default function LoadTemplateModal({ isOpen, onClose, onSelect, isSubmitting }: LoadTemplateModalProps) {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const { data: templates, isLoading } = useQuery({
    queryKey: ['coach-templates', user?.id],
    queryFn: () => templateService.getCoachTemplates(user!.id),
    enabled: isOpen && !!user?.id,
  });

  if (!isOpen) return null;

  const filteredTemplates = templates?.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="glass w-full max-w-2xl max-h-[80vh] flex flex-col rounded-3xl border border-slate-800 shadow-2xl overflow-hidden scale-in-center">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-500/20 rounded-xl text-primary-400">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Carica da Libreria</h2>
              <p className="text-xs text-slate-400">Seleziona un modello da assegnare all'atleta</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cerca tra i tuoi modelli..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-3">
              <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
              <p className="text-sm text-slate-500">Caricamento modelli...</p>
            </div>
          ) : filteredTemplates && filteredTemplates.length > 0 ? (
            <div className="grid gap-3">
              {filteredTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => onSelect(template.id)}
                  disabled={isSubmitting}
                  className="group flex items-center justify-between p-4 bg-slate-900/40 hover:bg-primary-500/10 border border-slate-800 hover:border-primary-500/30 rounded-2xl transition-all text-left disabled:opacity-50"
                >
                  <div className="flex-1 mr-4">
                    <h4 className="font-bold text-slate-200 group-hover:text-primary-400 transition-colors">
                      {template.name}
                    </h4>
                    {template.description && (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {template.description}
                      </p>
                    )}
                  </div>
                  <div className="p-2 bg-slate-800 group-hover:bg-primary-500 text-slate-400 group-hover:text-white rounded-lg transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ClipboardList className="w-12 h-12 text-slate-800 mx-auto mb-4 opacity-20" />
              <p className="text-slate-500">
                {searchQuery ? 'Nessun modello trovato per questa ricerca.' : 'Nessun modello disponibile nella tua libreria.'}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end">
          <button 
            onClick={onClose}
            className="btn btn-secondary px-6 py-2 text-sm"
          >
            Annulla
          </button>
        </div>
      </div>
    </div>
  );
}
