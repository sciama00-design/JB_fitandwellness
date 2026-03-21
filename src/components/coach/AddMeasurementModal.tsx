import { useState } from 'react';
import { X, Scale, Calendar, Save } from 'lucide-react';
import type { BodyMeasurement } from '../../types/database';

interface AddMeasurementModalProps {
  athleteId: string;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (measurement: Partial<BodyMeasurement>) => void;
}

export default function AddMeasurementModal({ athleteId, isOpen, onClose, onAdd }: AddMeasurementModalProps) {
  const [formData, setFormData] = useState<Partial<BodyMeasurement>>({
    athlete_id: athleteId,
    recorded_at: new Date().toISOString().split('T')[0],
    weight: undefined,
    body_fat_percentage: undefined,
    waist: undefined,
    hips: undefined,
    chest: undefined,
    neck: undefined,
    biceps: undefined,
    thighs: undefined,
    calves: undefined,
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? undefined : parseFloat(value)) : value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Nuova Misura</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Data</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="date"
                  name="recorded_at"
                  required
                  value={formData.recorded_at?.toString().split('T')[0]}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Peso (kg)</label>
              <input
                type="number"
                name="weight"
                step="0.1"
                placeholder="es. 75.5"
                value={formData.weight || ''}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Body Fat (%)</label>
              <input
                type="number"
                name="body_fat_percentage"
                step="0.1"
                placeholder="es. 15"
                value={formData.body_fat_percentage || ''}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Vita (cm)</label>
              <input
                type="number"
                name="waist"
                step="0.1"
                placeholder="es. 80"
                value={formData.waist || ''}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Fianchi (cm)</label>
              <input
                type="number"
                name="hips"
                step="0.1"
                placeholder="es. 95"
                value={formData.hips || ''}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Torace (cm)</label>
              <input
                type="number"
                name="chest"
                step="0.1"
                value={formData.chest || ''}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Note</label>
            <textarea
              name="notes"
              rows={3}
              placeholder="Aggiungi note facoltative..."
              value={formData.notes || ''}
              onChange={handleChange}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn btn-secondary py-3 rounded-2xl"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="flex-[2] btn btn-primary py-3 rounded-2xl flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Salva Misura
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
