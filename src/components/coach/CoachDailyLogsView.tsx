import { useQuery } from '@tanstack/react-query';
import { dailyLogService, type DailyLog } from '../../services/dailyLogService';
import { Loader2, Scale, Flame, Droplets, Moon } from 'lucide-react';
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
      <div className="flex justify-center py-20 grayscale opacity-50">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Compute 7 days average
  const last7Days = logs?.slice(-7) || [];
  const avgWeight = last7Days.reduce((acc, log) => acc + (log.weight_kg || 0), 0) / (last7Days.filter(l => l.weight_kg).length || 1);
  const avgKcal = last7Days.reduce((acc, log) => acc + (log.kcal_eaten || 0), 0) / (last7Days.filter(l => l.kcal_eaten).length || 1);

  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* AVERAGES ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card group hover:bg-white/[0.02] transition-all duration-300">
          <p className="text-[10px] text-muted-foreground/60 font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
            <Scale className="w-4 h-4 text-primary" /> Media Peso 7gg
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-foreground italic">{avgWeight ? avgWeight.toFixed(1) : '-'}</span>
            <span className="text-muted-foreground text-xs font-bold italic">kg</span>
          </div>
        </div>

        <div className="glass-card group hover:bg-white/[0.02] transition-all duration-300">
          <p className="text-[10px] text-muted-foreground/60 font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2 group-hover:text-brand-vibrant transition-colors">
            <Flame className="w-4 h-4 text-brand-vibrant" /> Media Kcal 7gg
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-foreground italic">{avgKcal ? Math.round(avgKcal) : '-'}</span>
            <span className="text-muted-foreground text-xs font-bold italic">kcal</span>
          </div>
        </div>
      </div>

      {/* DETAIL LIST */}
      <div className="space-y-6">
         <h3 className="text-2xl font-black text-foreground italic tracking-tight flex items-center gap-4">
           <div className="w-1.5 h-8 bg-brand-indigo rounded-full shadow-[0_0_15px_rgba(var(--brand-indigo),0.4)]" />
           Storico Registrazioni
         </h3>
         
         {logs?.length === 0 ? (
           <div className="glass-card border-dashed py-16 text-center text-muted-foreground/50 rounded-xxl font-medium italic">
             Nessun check-in giornaliero registrato regolarmente.
           </div>
         ) : (
           <div className="space-y-4">
             {[...(logs || [])].reverse().map((log: DailyLog) => (
               <div key={log.id} className="glass-card p-6 flex flex-wrap items-center justify-between gap-6 hover:translate-x-1 group transition-all duration-300">
                 
                 <div className="min-w-[140px]">
                   <p className="text-[9px] text-muted-foreground/40 font-black uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
                     {format(new Date(log.date), 'EEEE', { locale: it })}
                   </p>
                   <p className="text-lg font-black italic text-foreground tracking-tight opacity-90">
                     {format(new Date(log.date), 'dd MMM yyyy', { locale: it })}
                   </p>
                 </div>

                 <div className="flex flex-wrap items-center gap-10">
                   <div className="flex flex-col gap-1">
                     <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 flex items-center gap-1.5"><Scale className="w-3 h-3"/> Peso</span>
                     <div className="flex items-baseline gap-1">
                        <span className="font-black text-foreground italic">{log.weight_kg || '-'}</span>
                        <span className="text-[10px] font-bold text-muted-foreground opacity-50 italic">kg</span>
                     </div>
                   </div>
                   <div className="flex flex-col gap-1">
                     <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 flex items-center gap-1.5"><Flame className="w-3 h-3"/> Kcal</span>
                     <span className="font-black text-foreground italic">{log.kcal_eaten || '-'}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                     <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 flex items-center gap-1.5"><Moon className="w-3 h-3"/> Sonno</span>
                     <div className="flex items-baseline gap-1">
                        <span className="font-black text-foreground italic">{log.sleep_hours || '-'}</span>
                        <span className="text-[10px] font-bold text-muted-foreground opacity-50 italic">h</span>
                     </div>
                   </div>
                   <div className="flex flex-col gap-1">
                     <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 flex items-center gap-1.5"><Droplets className="w-3 h-3"/> Acqua</span>
                     <div className="flex items-baseline gap-1">
                        <span className="font-black text-foreground italic">{log.water_liters || '-'}</span>
                        <span className="text-[10px] font-bold text-muted-foreground opacity-50 italic">L</span>
                     </div>
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
