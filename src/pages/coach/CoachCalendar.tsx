import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { appointmentService } from '../../services/appointmentService';
import { athleteService } from '../../services/athleteService';
import { useAuth } from '../../lib/auth';
import Calendar from '../../components/calendar/Calendar';
import { Loader2, Plus, Calendar as CalendarIcon, User, Clock, MapPin, Trash2, ChevronRight, Activity } from 'lucide-react';
import Modal from '../../components/Modal';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';
// import clsx from 'clsx'; // Removed unused

export default function CoachCalendar() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    title: '',
    description: '',
    athlete_id: '',
    start_time: '',
    duration: '60',
    location: ''
  });

  const { data: appointments, isLoading: isLoadingApts } = useQuery({
    queryKey: ['coach-appointments', user?.id],
    queryFn: () => appointmentService.getCoachAppointments(user!.id),
    enabled: !!user?.id,
  });

  const { data: athletes } = useQuery({
    queryKey: ['coach-athletes', user?.id],
    queryFn: () => athleteService.getAthletes(user!.id),
    enabled: !!user?.id,
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => {
      const startTime = new Date(data.start_time);
      const endTime = new Date(startTime.getTime() + parseInt(data.duration) * 60000);
      
      const { duration, ...appointmentData } = data;
      return appointmentService.createAppointment({ 
        ...appointmentData, 
        end_time: endTime.toISOString(),
        coach_id: user!.id 
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coach-appointments'] });
      setIsAddModalOpen(false);
      setNewAppointment({ title: '', description: '', athlete_id: '', start_time: '', duration: '60', location: '' });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => appointmentService.deleteAppointment(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['coach-appointments'] })
  });

  if (isLoadingApts) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-[10px]">Syncing Schedule...</p>
      </div>
    );
  }

  const upcomingApts = appointments?.filter(a => new Date(a.start_time) >= new Date()) || [];

  return (
    <div className="space-y-12 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-1">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-secondary/10 rounded-[2rem] flex items-center justify-center border border-white/5 relative group shrink-0">
              <CalendarIcon className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 blur-lg bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tighter italic uppercase leading-none">
                Master Schedule
              </h1>
              <p className="text-muted-foreground mt-2 font-bold uppercase tracking-[0.3em] text-[10px] opacity-40">Gestione appuntamenti e check-in strategici</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="h-14 px-8 bg-primary text-white rounded-2xl font-black italic uppercase tracking-widest text-[11px] shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-3 shrink-0"
        >
          <Plus className="w-5 h-5" />
          Programma Prossima Sessione
        </button>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        {/* Main Calendar Area */}
        <div className="xl:col-span-3">
          <Calendar appointments={appointments} className="h-full" />
        </div>

        {/* Sidebar: Upcoming Appointments */}
        <div className="xl:col-span-1 space-y-8">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-black text-foreground italic uppercase tracking-tight">Prossimi Task</h2>
            <div className="px-3 py-1 bg-secondary/20 rounded-full border border-white/5">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{upcomingApts.length}</span>
            </div>
          </div>
          
          <div className="space-y-4">
             <AnimatePresence mode="popLayout">
              {upcomingApts.slice(0, 6).map((apt, idx) => (
                <motion.div 
                  key={apt.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 sm:p-5 rounded-3xl sm:rounded-[2rem] border-white/5 space-y-4 group relative overflow-hidden bg-secondary/5 hover:bg-secondary/10 transition-all"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-background/80 rounded-[1.25rem] flex flex-col items-center justify-center border border-white/5 shadow-inner shrink-0 scale-100 group-hover:scale-105 transition-transform">
                      <span className="text-[9px] font-black text-muted-foreground uppercase tracking-tighter opacity-40">{format(new Date(apt.start_time), "MMM", { locale: it })}</span>
                      <span className="text-lg font-black text-foreground italic leading-none">{format(new Date(apt.start_time), "d")}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-foreground italic uppercase tracking-tight text-lg leading-none truncate group-hover:translate-x-1 transition-transform">{apt.title}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-primary" />
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-60">{format(new Date(apt.start_time), "HH:mm")}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => {
                        if(confirm('Eliminare questo appuntamento?')) deleteMutation.mutate(apt.id);
                      }}
                      className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-red-500/30 hover:text-red-500 bg-white/5 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100 shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/[0.03] relative z-10">
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest truncate opacity-80">
                        {apt.profiles ? `${apt.profiles.first_name} ${apt.profiles.last_name || ''}` : 'Public Session'}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-20 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {upcomingApts.length === 0 && (
              <div className="py-20 glass-card rounded-[2.5rem] border-dashed border-2 border-white/5 text-center space-y-4 opacity-30">
                <Activity className="w-12 h-12 mx-auto text-muted-foreground opacity-20" />
                <p className="text-[10px] font-black uppercase tracking-widest">Nessun task pianificato</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Appointment Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Programma Sessione">
        <form onSubmit={(e) => { e.preventDefault(); createMutation.mutate(newAppointment); }} className="space-y-6 pt-2">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Identificativo Sessione</label>
            <input 
              type="text" 
              required
              className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-foreground font-black italic uppercase placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:bg-secondary/30 transition-all shadow-inner"
              placeholder="es: ANALISI SOGGETTIVA LIVE"
              value={newAppointment.title}
              onChange={e => setNewAppointment({...newAppointment, title: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Slot Temporale</label>
              <input 
                type="datetime-local" 
                required
                className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-foreground font-bold focus:outline-none focus:border-primary/40 focus:bg-secondary/30 transition-all shadow-inner"
                value={newAppointment.start_time}
                onChange={e => setNewAppointment({...newAppointment, start_time: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Durata (Min)</label>
              <input 
                type="number" 
                required
                min="1"
                className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-foreground font-black italic focus:outline-none focus:border-primary/40 focus:bg-secondary/30 transition-all shadow-inner"
                value={newAppointment.duration}
                onChange={e => setNewAppointment({...newAppointment, duration: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Atleta Target</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <select 
                className="w-full bg-secondary/20 border border-white/5 rounded-2xl pl-12 pr-5 py-4 text-foreground font-black italic uppercase appearance-none focus:outline-none focus:border-primary/40 focus:bg-secondary/30 transition-all shadow-inner"
                value={newAppointment.athlete_id}
                onChange={e => setNewAppointment({...newAppointment, athlete_id: e.target.value})}
              >
                <option value="" className="bg-background">SOGGETTO NON SPECIFICATO</option>
                {athletes?.map((a: any) => (
                  <option key={a.id} value={a.id} className="bg-background">{a.first_name} {a.last_name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Hub / Location</label>
            <div className="relative">
              <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <input 
                type="text" 
                className="w-full bg-secondary/20 border border-white/5 rounded-2xl pl-12 pr-5 py-4 text-foreground font-black italic uppercase placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:bg-secondary/30 transition-all shadow-inner"
                placeholder="es: HEADQUARTERS / ONLINE"
                value={newAppointment.location}
                onChange={e => setNewAppointment({...newAppointment, location: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1 opacity-40">Note Strategiche</label>
            <textarea 
              className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-5 py-4 text-foreground font-medium italic placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:bg-secondary/30 transition-all shadow-inner min-h-[120px] resize-none"
              placeholder="Inserisci dettagli chiave per la sessione..."
              value={newAppointment.description}
              onChange={e => setNewAppointment({...newAppointment, description: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            disabled={createMutation.isPending}
            className="w-full h-16 bg-primary text-white rounded-2xl font-black italic uppercase tracking-[0.2em] text-[12px] shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {createMutation.isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : 'CONFERMA PROGRAMMAZIONE'}
          </button>
        </form>
      </Modal>
    </div>
  );
}
