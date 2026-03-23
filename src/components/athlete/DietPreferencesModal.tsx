import { useState, useEffect } from 'react';
import { useAuth } from '../../lib/auth';
import { supabase } from '../../lib/supabase';
import { X, Save, AlertCircle, Loader2, Utensils, Ban, Clock } from 'lucide-react';

interface DietPreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DietPreferencesModal({ isOpen, onClose }: DietPreferencesModalProps) {
  const { user } = useAuth();
  const [preferences, setPreferences] = useState<string>('');
  const [intolerances, setIntolerances] = useState<string>('');
  const [dislikedFoods, setDislikedFoods] = useState<string>('');
  const [scheduleConstraints, setScheduleConstraints] = useState<string>('');
  const [mealFrequency, setMealFrequency] = useState<number>(4);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);


  useEffect(() => {
    async function loadPreferences() {
      if (!user?.id || !isOpen) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('dietary_preferences, intolerances, disliked_foods, schedule_constraints')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        if (data) {
          setPreferences((data.dietary_preferences || []).join(', '));
          setIntolerances((data.intolerances || []).join(', '));
          setDislikedFoods((data.disliked_foods || []).join(', '));
          setScheduleConstraints(data.schedule_constraints || '');
          // Assuming schedule_constraints might contain meal frequency for now, or we just default to 4
        }
      } catch (err) {

        console.error("Error loading preferences:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadPreferences();
  }, [user?.id, isOpen]);

  const handleSave = async () => {
    if (!user?.id) return;
    setIsSaving(true);
    try {
      const prefArray = preferences.split(',').map(s => s.trim()).filter(Boolean);
      const intolArray = intolerances.split(',').map(s => s.trim()).filter(Boolean);
      const dislikedArray = dislikedFoods.split(',').map(s => s.trim()).filter(Boolean);

      const { error } = await supabase
        .from('profiles')
        .update({
          dietary_preferences: prefArray,
          intolerances: intolArray,
          disliked_foods: dislikedArray,
          schedule_constraints: scheduleConstraints
        })
        .eq('id', user.id);

      if (error) throw error;
      onClose();
    } catch (err) {
      console.error("Error saving preferences:", err);
      alert("Errore durante il salvataggio.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Utensils className="w-5 h-5 text-emerald-500" />
            Preferenze Generali (Sempre Valide)
          </h2>

          <button 
            onClick={onClose}
            className="p-2 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh] custom-scrollbar space-y-6">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            </div>
          ) : (
            <>
              <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                <p className="text-sm text-emerald-200/70">
                  Inserisci qui le tue preferenze "sempre valide". Per impegni specifici di un giorno (es. cena fuori questo martedì), usa il <strong>Weekly Planner</strong>.
                </p>

              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-indigo-400" />
                    Stile Alimentare / Preferenze
                  </label>
                  <input
                    type="text"
                    value={preferences}
                    onChange={e => setPreferences(e.target.value)}
                    placeholder="Es. Mediterranea, Nessuna carne rossa, Molto pesce..."
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                  />
                  <p className="text-xs text-slate-500 mt-1">Separare con una virgola.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                    <Ban className="w-4 h-4 text-red-400" />
                    Intolleranze / Allergie
                  </label>
                  <input
                    type="text"
                    value={intolerances}
                    onChange={e => setIntolerances(e.target.value)}
                    placeholder="Es. Lattosio, Glutine, Frutta a guscio..."
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm"
                  />
                  <p className="text-xs text-slate-500 mt-1">Separare con una virgola. Fai attenzione a specificare bene le allergie gravi.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4 text-orange-400" />
                    Cibi Non Graditi
                  </label>
                  <input
                    type="text"
                    value={dislikedFoods}
                    onChange={e => setDislikedFoods(e.target.value)}
                    placeholder="Es. Broccoli, Funghi, Fegato..."
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    Orari e Impegni
                  </label>
                  <textarea
                    value={scheduleConstraints}
                    onChange={e => setScheduleConstraints(e.target.value)}
                    placeholder="Es. Prando spesso fuori, mi alleno alle 18:00 e ho solo 20 minuti per cenare..."
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm h-24 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    Frequenza Pasti Desiderata
                  </label>
                  <select
                    value={mealFrequency}
                    onChange={e => setMealFrequency(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  >
                    {[2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} pasti al giorno</option>
                    ))}
                  </select>
                </div>
              </div>

            </>
          )}
        </div>

        <div className="p-6 border-t border-slate-800 flex justify-end gap-3 bg-slate-900/50">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            Annulla
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving || isLoading}
            className="btn btn-primary px-6 py-2.5 text-sm flex items-center gap-2 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Salva Preferenze
          </button>
        </div>

      </div>
    </div>
  );
}
