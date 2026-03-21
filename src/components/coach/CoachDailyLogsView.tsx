import { useQuery } from '@tanstack/react-query';
import { dailyLogService, type DailyLog } from '../../services/dailyLogService';
import { Loader2, Scale, Flame, Droplets, Moon, Calendar } from 'lucide-react';
import { format, subDays } from 'date-fns';
import { it } from 'date-fns/locale';

interface Props {
  athleteId: string;
}

export default function CoachDailyLogsView({ athleteId }: Props) {
  const endDate = new Date();
  const startDate = subDays(endDate, 14); // Last 14 days

  const { data: logs, isLoading } = useQuery({
    queryKey: ['daily-logs-coach', athleteId],
    queryFn: () => dailyLogService.getLogsByDateRange(
      athleteId, 
      startDate.toISOString().split('T')[0], 
      endDate.toISOString().split('T')[0]
    ),
    enabled: !!athleteId
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    );
  }

  // Compute 7 days average
  const last7Days = logs?.slice(-7) || [];
  const avgWeight = last7Days.reduce((acc, log) => acc + (log.weight_kg || 0), 0) / (last7Days.filter(l => l.weight_kg).length || 1);
  const avgKcal = last7Days.reduce((acc, log) => acc + (log.kcal_eaten || 0), 0) / (last7Days.filter(l => l.kcal_eaten).length || 1);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* AVERAGES ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass p-5 rounded-3xl border border-slate-800/50">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-500" /> Media Peso 7gg
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-black text-white">{avgWeight ? avgWeight.toFixed(1) : '-'}</span>
            <span className="text-slate-500 text-sm font-bold">kg</span>
          </div>
        </div>

        <div className="glass p-5 rounded-3xl border border-slate-800/50">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" /> Media Kcal 7gg
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-black text-white">{avgKcal ? Math.round(avgKcal) : '-'}</span>
            <span className="text-slate-500 text-sm font-bold">kcal</span>
          </div>
        </div>
      </div>

      {/* DETAIL LIST */}
      <div>
         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
           <Calendar className="w-5 h-5 text-primary-400" /> Ultime 14 Registrazioni
         </h3>
         
         {logs?.length === 0 ? (
           <div className="bg-slate-950/50 border border-slate-800 border-dashed rounded-3xl py-12 text-center text-slate-500">
             Nessun check-in giornaliero registrato recentemente.
           </div>
         ) : (
           <div className="space-y-3">
             {[...(logs || [])].reverse().map((log: DailyLog) => (
               <div key={log.id} className="glass p-4 rounded-2xl border border-slate-800/50 flex flex-wrap items-center justify-between gap-4">
                 
                 <div className="min-w-32">
                   <p className="text-xs text-slate-400 font-bold uppercase">{format(new Date(log.date), 'EEEE', { locale: it })}</p>
                   <p className="text-white font-bold">{format(new Date(log.date), 'dd MMM yyyy', { locale: it })}</p>
                 </div>

                 <div className="flex flex-wrap items-center gap-6">
                   <div className="flex flex-col">
                     <span className="text-xs text-slate-500 flex items-center gap-1"><Scale className="w-3 h-3"/> Peso</span>
                     <span className="font-bold text-slate-200">{log.weight_kg ? `${log.weight_kg} kg` : '-'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-xs text-slate-500 flex items-center gap-1"><Flame className="w-3 h-3"/> Kcal</span>
                     <span className="font-bold text-slate-200">{log.kcal_eaten ? `${log.kcal_eaten}` : '-'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-xs text-slate-500 flex items-center gap-1"><Moon className="w-3 h-3"/> Sonno</span>
                     <span className="font-bold text-slate-200">{log.sleep_hours ? `${log.sleep_hours} h` : '-'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-xs text-slate-500 flex items-center gap-1"><Droplets className="w-3 h-3"/> Acqua</span>
                     <span className="font-bold text-slate-200">{log.water_liters ? `${log.water_liters} L` : '-'}</span>
                   </div>
                 </div>

               </div>
               
             ))}
           </div>
         )}
      </div>

    </div>
  );
}
