import Modal from '../Modal';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  TrendingUp,
  Download,
  ExternalLink,
  ChevronRight,
  Trash2,
  Activity
} from 'lucide-react';
import { googleCalendarLink, downloadIcsFile } from '../../lib/calendarUtils';

interface DayDetailModalProps {
  date: Date;
  isOpen: boolean;
  onClose: () => void;
  sessions?: any[];
  measurements?: any[];
  appointments?: any[];
  onViewSession?: (sessionId: string) => void;
  onDeleteSession?: (sessionId: string) => void;
}

export default function DayDetailModal({ date, isOpen, onClose, sessions = [], measurements = [], appointments = [], onViewSession, onDeleteSession }: DayDetailModalProps) {
  const hasContent = sessions.length > 0 || measurements.length > 0 || appointments.length > 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={format(date, "EEEE d MMMM yyyy", { locale: it })}>
      <div className="space-y-10 py-2">
        {/* Appointments Section */}
        {appointments.length > 0 && (
          <div className="space-y-5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60 mb-2 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Appuntamenti Live
            </h3>
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div key={apt.id} className="glass-card p-6 rounded-[2rem] border-white/5 space-y-5 group relative overflow-hidden bg-emerald-500/[0.02]">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 space-y-2">
                      <h4 className="font-black text-foreground text-xl italic uppercase tracking-tight">{apt.title}</h4>
                      {apt.description && <p className="text-sm text-muted-foreground font-medium italic opacity-60 leading-relaxed">{apt.description}</p>}
                    </div>
                    <div className="shrink-0">
                      <div className="px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-xl text-[10px] font-black border border-emerald-500/10 flex items-center gap-2 shadow-lg shadow-emerald-500/5">
                        <Clock className="w-3.5 h-3.5" />
                        {format(new Date(apt.start_time), "HH:mm")}
                      </div>
                    </div>
                  </div>

                  {apt.location && (
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-40">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500/40" />
                      {apt.location}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    <a 
                      href={googleCalendarLink(apt.title, apt.description, apt.start_time, apt.end_time, apt.location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-6 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 border border-emerald-500/20 transition-all flex-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Google Sync
                    </a>
                    <button 
                      onClick={() => downloadIcsFile(apt.title, apt.description, apt.start_time, apt.end_time, apt.location)}
                      className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-emerald-500 transition-all"
                      title="Scarica .ics"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sessions Section */}
        {sessions.length > 0 && (
          <div className="space-y-5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-2 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Output Allenamenti
            </h3>
            <div className="grid gap-3">
              {sessions.map((session) => (
                <div key={session.id} className="glass-card p-5 rounded-[2rem] border-white/5 flex items-center justify-between group bg-primary/[0.02] hover:bg-primary/[0.05] transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-background/80 rounded-2xl flex items-center justify-center text-primary border border-white/5 shadow-inner group-hover:scale-105 transition-transform">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-foreground italic uppercase tracking-tight text-lg">{(session.workout_plans as any)?.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-40 mt-1">
                        {Math.floor((session.duration_seconds || 0) / 60)} MIN • {format(new Date(session.started_at), "HH:mm")}
                      </p>
                    </div>
                  </div>
                   <div className="flex items-center gap-2">
                     {onViewSession && (
                       <button 
                         onClick={() => onViewSession(session.id)}
                         className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                         title="Visualizza Dettagli"
                       >
                         <ChevronRight className="w-5 h-5" />
                       </button>
                     )}
                     {onDeleteSession && (
                       <button 
                         onClick={() => onDeleteSession(session.id)}
                         className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-red-500/30 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                         title="Elimina Sessione"
                       >
                         <Trash2 className="w-5 h-5" />
                       </button>
                     )}
                   </div>
                 </div>
              ))}
            </div>
          </div>
        )}

        {/* Measurements Section */}
        {measurements.length > 0 && (
          <div className="space-y-5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60 mb-2 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Snapshot Biometrici
            </h3>
            <div className="grid gap-3">
              {measurements.map((m) => (
                <div key={m.id} className="glass-card p-5 rounded-[2rem] border-white/5 flex items-center justify-between group bg-amber-500/[0.02]">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-background/80 rounded-2xl flex items-center justify-center text-amber-500 border border-white/5 shadow-inner">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-foreground italic uppercase tracking-tight text-lg">Metriche Corporee</h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xl font-black text-amber-500 italic leading-none">{m.weight} <span className="text-[10px] uppercase font-black not-italic opacity-40 ml-0.5">KG</span></span>
                        <div className="w-1 h-1 rounded-full bg-white/10" />
                        <span className="text-base font-black text-foreground italic leading-none opacity-80">{m.body_fat_percentage || "?"}% <span className="text-[10px] uppercase font-black not-italic opacity-40 ml-0.5">BF</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasContent && (
          <div className="py-20 glass-card rounded-[3rem] border-dashed border-2 border-white/5 bg-secondary/5 text-center space-y-6">
            <div className="w-20 h-20 bg-muted/10 rounded-[2.5rem] flex items-center justify-center mx-auto border border-white/5">
              <CalendarIcon className="w-10 h-10 text-muted-foreground opacity-10" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-foreground italic uppercase tracking-tighter opacity-60">Timeline Vuota</h3>
              <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest opacity-30">Nessuna attività registrata per oggi</p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
