import Modal from '../Modal';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { 
  Calendar as CalendarIcon, 
  Dumbbell, 
  Calculator, 
  Clock, 
  MapPin, 
  History,
  TrendingUp,
  Download,
  ExternalLink,
  ChevronRight
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
}

export default function DayDetailModal({ date, isOpen, onClose, sessions = [], measurements = [], appointments = [], onViewSession }: DayDetailModalProps) {
  const hasContent = sessions.length > 0 || measurements.length > 0 || appointments.length > 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={format(date, "EEEE d MMMM yyyy", { locale: it })}>
      <div className="space-y-6">
        {/* Appointments Section */}
        {appointments.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2 flex items-center gap-2">
              <CalendarIcon className="w-3 h-3" />
              Appuntamenti
            </h3>
            {appointments.map((apt) => (
              <div key={apt.id} className="glass p-4 rounded-2xl border border-emerald-500/10 space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg italic">{apt.title}</h4>
                    {apt.description && <p className="text-sm text-slate-400 mt-1">{apt.description}</p>}
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-black border border-emerald-500/10">
                      <Clock className="w-3 h-3" />
                      {format(new Date(apt.start_time), "HH:mm")}
                    </span>
                  </div>
                </div>

                {apt.location && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3 h-3" />
                    {apt.location}
                  </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                  <a 
                    href={googleCalendarLink(apt.title, apt.description, apt.start_time, apt.end_time, apt.location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border border-emerald-500/20 shadow-sm shadow-emerald-500/10 transition-all flex-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Aggiungi a Google Calendar
                  </a>
                  <button 
                    onClick={() => downloadIcsFile(apt.title, apt.description, apt.start_time, apt.end_time, apt.location)}
                    className="btn bg-slate-800 hover:bg-slate-700 text-slate-400 px-3 py-2 rounded-xl border border-slate-700/50 hover:text-white transition-all shadow-sm"
                    title="Scarica .ics"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sessions Section */}
        {sessions.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary-500 mb-2 flex items-center gap-2">
              <Dumbbell className="w-3 h-3" />
              Allenamenti
            </h3>
            {sessions.map((session) => (
              <div key={session.id} className="glass p-4 rounded-2xl border border-slate-800/50 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                    <History className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white italic">{(session.workout_plans as any)?.name}</h4>
                    <p className="text-xs text-slate-500 font-medium capitalize">
                      {Math.floor((session.duration_seconds || 0) / 60)} min • {format(new Date(session.started_at), "HH:mm")}
                    </p>
                  </div>
                </div>
                {onViewSession && (
                  <button 
                    onClick={() => onViewSession(session.id)}
                    className="p-2 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-xl transition-all border border-primary-500/10"
                    title="Visualizza Dettagli"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Measurements Section */}
        {measurements.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-amber-500 mb-2 flex items-center gap-2">
              <TrendingUp className="w-3 h-3" />
              Misurazioni
            </h3>
            {measurements.map((m) => (
              <div key={m.id} className="glass p-4 rounded-2xl border border-amber-500/10 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white italic">Check-in Peso</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                      {m.weight} KG • {m.body_fat_percentage || "?"}% BF
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!hasContent && (
          <div className="text-center py-12 space-y-3 opacity-50">
             <CalendarIcon className="w-12 h-12 text-slate-600 mx-auto" />
             <p className="text-slate-400 font-medium">Nessuna attività registrata per oggi.</p>
          </div>
        )}
      </div>
    </Modal>
  );
}
