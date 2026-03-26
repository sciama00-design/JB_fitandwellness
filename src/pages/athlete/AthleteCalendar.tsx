import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../lib/auth';
import Calendar from '../../components/calendar/Calendar';
import { todoService } from '../../services/todoService';
import { supabase } from '../../lib/supabase';
import { Loader2, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';

export default function AthleteCalendar() {
  const { user } = useAuth();

  const { data: todos, isLoading: isLoadingTodos } = useQuery({
    queryKey: ['todos', user?.id],
    queryFn: () => todoService.getTodos(user!.id),
    enabled: !!user?.id,
  });

  const { data: sessions, isLoading: isLoadingSessions } = useQuery({
    queryKey: ['athlete-sessions', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('workout_sessions')
        .select('*, workout_plans(name)')
        .eq('athlete_id', user!.id)
        .order('started_at', { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const { data: measurements, isLoading: isLoadingMeasurements } = useQuery({
    queryKey: ['athlete-measurements', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('body_measurements')
        .select('*')
        .eq('athlete_id', user!.id)
        .order('recorded_at', { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  if (isLoadingTodos || isLoadingSessions || isLoadingMeasurements) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-[10px]">Syncing Timeline...</p>
      </div>
    );
  }

  const pendingTodos = todos?.filter(t => !t.completed) || [];
  const sortedTasks = [...pendingTodos].sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime());

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-[1.5rem] flex items-center justify-center border border-white/5 relative group shrink-0">
              <CalendarIcon className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 blur-lg bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-black text-foreground tracking-tighter italic uppercase leading-none">
                La Tua Agenda
              </h1>
              <p className="text-muted-foreground mt-1 font-bold uppercase tracking-[0.3em] text-[9px] opacity-40">Il tuo percorso, giorno dopo giorno</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Main Calendar Area */}
        <div className="lg:col-span-8 xl:col-span-9 h-full min-h-0">
          <Calendar 
            sessions={sessions}
            measurements={measurements}
            todos={todos}
            className="h-full overflow-y-auto custom-scrollbar" 
          />
        </div>

        {/* Sidebar: Upcoming Tasks */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col space-y-6 h-full min-h-0">
          <div className="flex items-center justify-between px-2 shrink-0">
            <h2 className="text-lg font-black text-foreground italic uppercase tracking-tight">Cose da fare</h2>
            <div className="px-2 py-0.5 bg-secondary/20 rounded-full border border-white/5">
              <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{sortedTasks.length}</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
             <AnimatePresence mode="popLayout">
              {sortedTasks.map((todo, idx) => (
                <motion.div 
                  key={todo.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card p-5 rounded-[2rem] border-white/5 space-y-4 group relative overflow-hidden bg-indigo-500/5 hover:bg-indigo-500/10 transition-all"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full -mr-16 -mt-16 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-background/80 rounded-[1.25rem] flex flex-col items-center justify-center border border-white/5 shadow-inner shrink-0 scale-100 group-hover:scale-105 transition-transform">
                      <span className="text-[9px] font-black text-muted-foreground uppercase tracking-tighter opacity-40">{format(new Date(todo.due_date), "MMM", { locale: it })}</span>
                      <span className="text-lg font-black text-foreground italic leading-none">{format(new Date(todo.due_date), "d")}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-foreground italic uppercase tracking-tight text-base leading-none truncate group-hover:translate-x-1 transition-transform">{todo.title}</h3>
                      <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-60 mt-2">Task Personale</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {sortedTasks.length === 0 && (
              <div className="py-20 glass-card rounded-[2.5rem] border-dashed border-2 border-white/5 text-center space-y-4 opacity-30">
                <CheckCircle2 className="w-12 h-12 mx-auto text-muted-foreground opacity-20" />
                <p className="text-[10px] font-black uppercase tracking-widest">Tutto in ordine!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
