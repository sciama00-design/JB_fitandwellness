import { useState, useEffect } from 'react';
import { useAuth } from '../../lib/auth';
import { X, Scale, Droplets, Moon, Flame, Loader2, CheckCircle2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { dailyLogService, type DailyLog } from '../../services/dailyLogService';

interface DailyCheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  existingLog?: DailyLog | null;
}

export default function DailyCheckInModal({ isOpen, onClose, existingLog }: DailyCheckInModalProps) {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [weight, setWeight] = useState<string>('');
  const [kcal, setKcal] = useState<string>('');
  const [sleep, setSleep] = useState<string>('');
  const [water, setWater] = useState<string>('');

  useEffect(() => {
    if (existingLog) {
      setWeight(existingLog.weight_kg ? existingLog.weight_kg.toString() : '');
      setKcal(existingLog.kcal_eaten ? existingLog.kcal_eaten.toString() : '');
      setSleep(existingLog.sleep_hours ? existingLog.sleep_hours.toString() : '');
      setWater(existingLog.water_liters ? existingLog.water_liters.toString() : '');
    } else {
      setWeight('');
      setKcal('');
      setSleep('');
      setWater('');
    }
  }, [existingLog, isOpen]);

  const mutation = useMutation({
    mutationFn: (log: DailyLog) => dailyLogService.saveLog(log),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['daily-log', user?.id] });
      queryClient.invalidateQueries({ queryKey: ['athlete-stats', user?.id] });
      onClose();
    }
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localDate = new Date(today.getTime() - (offset * 60 * 1000)).toISOString().split('T')[0];

    mutation.mutate({
      athlete_id: user.id,
      date: localDate,
      weight_kg: weight ? parseFloat(weight) : null,
      kcal_eaten: kcal ? parseInt(kcal, 10) : null,
      sleep_hours: sleep ? parseFloat(sleep) : null,
      water_liters: water ? parseFloat(water) : null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-slate-900 w-full max-w-md rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Check-in Rapido
            </h2>
            <p className="text-slate-400 text-sm mt-1">Registra i tuoi dati di oggi</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            
            {/* WEIGHT */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2"><Scale className="w-4 h-4" /> Peso Mattutino</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Es. 72.5"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">kg</span>
              </div>
            </div>

            {/* KCAL */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-orange-500" /> Calorie Assunte</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={kcal}
                  onChange={(e) => setKcal(e.target.value)}
                  placeholder="Es. 2100"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-4 pr-14 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">kcal</span>
              </div>
            </div>

            {/* WATER */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-400" /> Acqua Bevuta</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={water}
                  onChange={(e) => setWater(e.target.value)}
                  placeholder="Es. 2.5"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">L</span>
              </div>
            </div>

            {/* SLEEP */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2"><Moon className="w-4 h-4 text-indigo-400" /> Ore di Sonno</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.5"
                  value={sleep}
                  onChange={(e) => setSleep(e.target.value)}
                  placeholder="Es. 7.5"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">ore</span>
              </div>
            </div>

          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full btn btn-primary h-12 rounded-xl text-md shadow-lg shadow-primary-500/20"
          >
            {mutation.isPending ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              "Salva Dati"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
