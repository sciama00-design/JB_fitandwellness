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
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface CalendarProps {
  sessions?: any[];
  measurements?: any[];
  appointments?: any[];
  todos?: any[];
  onViewSession?: (sessionId: string) => void;
  onDeleteSession?: (sessionId: string) => void;
  className?: string;
}

export default function Calendar({ 
  sessions = [], 
  measurements = [], 
  appointments = [], 
  todos = [],
  onViewSession, 
  onDeleteSession, 
  className = "" 
}: CalendarProps) {
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
    const dayTodos = todos.filter(t => isSameDay(new Date(t.due_date), date));
    
    return {
      sessions: daySessions,
      measurements: dayMeasurements,
      appointments: dayAppointments,
      todos: dayTodos,
      hasEvents: daySessions.length > 0 || dayMeasurements.length > 0 || dayAppointments.length > 0 || dayTodos.length > 0
    };
  };

  return (
    <div className={clsx("glass-card rounded-[2.5rem] p-6 sm:p-8 border-white/5 overflow-hidden shadow-2xl relative bg-secondary/5", className)}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-10 px-2 relative z-10">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-foreground capitalize italic tracking-tighter uppercase">
            {format(currentMonth, 'MMMM', { locale: it })}
          </h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] opacity-40">
            Year of {format(currentMonth, 'yyyy')}
          </p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={prevMonth}
            className="w-11 h-11 glass-interactive rounded-xl flex items-center justify-center transition-all text-muted-foreground hover:text-primary hover:bg-white/5"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextMonth}
            className="w-11 h-11 glass-interactive rounded-xl flex items-center justify-center transition-all text-muted-foreground hover:text-primary hover:bg-white/5"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 mb-4 relative z-10 max-w-5xl mx-auto">
        {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map(day => (
          <div key={day} className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-30 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2 relative z-10 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {calendarDays.map((day, idx) => {
            const { sessions: daySessions, measurements: dayMeasurements, appointments: dayAppointments, todos: dayTodos } = getEventsForDay(day);
            const isCurrentMonth = format(day, 'M') === format(currentMonth, 'M');
            const today = isToday(day);

            return (
              <motion.button
                key={day.toISOString()}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: idx * 0.005 }}
                onClick={() => setSelectedDate(day)}
                className={clsx(
                  "relative min-h-[80px] sm:min-h-[100px] rounded-[1.5rem] flex flex-col items-center justify-center transition-all p-3 group overflow-hidden",
                  isCurrentMonth ? "text-foreground" : "text-muted-foreground opacity-10 pointer-events-none",
                  today 
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105 z-20" 
                    : "bg-background/40 hover:bg-white/5 border border-white/[0.03] hover:border-white/10"
                )}
              >
                {today && (
                  <motion.div 
                    layoutId="todayGlow"
                    className="absolute inset-0 bg-primary/20 blur-xl -z-10"
                  />
                )}
                
                <span className={clsx(
                  "text-base font-black italic",
                  today ? "text-white" : "text-foreground"
                )}>
                  {format(day, 'd')}
                </span>
                
                {/* Event Indicators */}
                <div className="flex gap-1 mt-2">
                  {daySessions.length > 0 && (
                    <div className={clsx("w-1.5 h-1.5 rounded-full shadow-sm", today ? "bg-white" : "bg-primary")} />
                  )}
                  {dayAppointments.length > 0 && (
                    <div className={clsx("w-1.5 h-1.5 rounded-full shadow-sm", today ? "bg-white/80" : "bg-emerald-500")} />
                  )}
                  {dayMeasurements.length > 0 && (
                    <div className={clsx("w-1.5 h-1.5 rounded-full shadow-sm", today ? "bg-white/60" : "bg-amber-500")} />
                  )}
                  {dayTodos.length > 0 && (
                    <div className={clsx("w-1.5 h-1.5 rounded-full shadow-sm", today ? "bg-white/40" : "bg-indigo-400")} />
                  )}
                </div>

                {/* Hover decoration */}
                {!today && isCurrentMonth && (
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
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
          todos={getEventsForDay(selectedDate).todos}
          onViewSession={onViewSession}
          onDeleteSession={onDeleteSession}
        />
      )}
    </div>
  );
}
