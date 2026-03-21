import { useState } from 'react';
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameDay, 
  addMonths, 
  subMonths,
  isToday,
  startOfWeek,
  endOfWeek
} from 'date-fns';
import { it } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DayDetailModal from './DayDetailModal';

interface CalendarProps {
  sessions?: any[];
  measurements?: any[];
  appointments?: any[];
  onViewSession?: (sessionId: string) => void;
  className?: string;
}

export default function Calendar({ sessions = [], measurements = [], appointments = [], onViewSession, className = "" }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const getEventsForDay = (date: Date) => {
    const daySessions = sessions.filter(s => isSameDay(new Date(s.started_at), date));
    const dayMeasurements = measurements.filter(m => isSameDay(new Date(m.recorded_at), date));
    const dayAppointments = appointments.filter(a => isSameDay(new Date(a.start_time), date));
    
    return {
      sessions: daySessions,
      measurements: dayMeasurements,
      appointments: dayAppointments,
      hasEvents: daySessions.length > 0 || dayMeasurements.length > 0 || dayAppointments.length > 0
    };
  };

  return (
    <div className={`glass rounded-[2.5rem] p-6 border border-white/5 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-2xl font-black text-white capitalize italic">
          {format(currentMonth, 'MMMM yyyy', { locale: it })}
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={prevMonth}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 mb-4">
        {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map(day => (
          <div key={day} className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {calendarDays.map((day, idx) => {
          const { sessions: daySessions, measurements: dayMeasurements, appointments: dayAppointments } = getEventsForDay(day);
          const isCurrentMonth = format(day, 'M') === format(currentMonth, 'M');
          const today = isToday(day);

          return (
            <button
              key={idx}
              onClick={() => setSelectedDate(day)}
              className={`
                relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all p-1
                ${isCurrentMonth ? 'text-white' : 'text-slate-600 opacity-30'}
                ${today ? 'bg-primary-500/10 border border-primary-500/20' : 'hover:bg-white/5'}
                active:scale-95
              `}
            >
              <span className={`text-sm font-bold ${today ? 'text-primary-400' : ''}`}>
                {format(day, 'd')}
              </span>
              
              {/* Event Indicators */}
              <div className="flex gap-0.5 mt-1">
                {daySessions.length > 0 && (
                  <div className="w-1 h-1 rounded-full bg-primary-500" />
                )}
                {dayAppointments.length > 0 && (
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                )}
                {dayMeasurements.length > 0 && (
                  <div className="w-1 h-1 rounded-full bg-amber-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Day Detail Modal */}
      {selectedDate && (
        <DayDetailModal
          date={selectedDate}
          isOpen={!!selectedDate}
          onClose={() => setSelectedDate(null)}
          sessions={getEventsForDay(selectedDate).sessions}
          measurements={getEventsForDay(selectedDate).measurements}
          appointments={getEventsForDay(selectedDate).appointments}
          onViewSession={onViewSession}
        />
      )}
    </div>
  );
}
