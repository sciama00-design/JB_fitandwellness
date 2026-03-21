import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { appointmentService } from '../../services/appointmentService';
import { athleteService } from '../../services/athleteService';
import { useAuth } from '../../lib/auth';
import Calendar from '../../components/calendar/Calendar';
import { Loader2, Plus, Calendar as CalendarIcon, User, Clock, MapPin, Trash2 } from 'lucide-react';
import Modal from '../../components/Modal';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

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
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        <p className="text-slate-400 font-medium">Carico il tuo calendario...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-1">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3 italic">
            <div className="p-2 bg-emerald-500/10 rounded-2xl transform -rotate-6">
              <CalendarIcon className="text-emerald-400 w-8 h-8" />
            </div>
            Calendario Appuntamenti
          </h1>
          <p className="text-slate-400 mt-2 font-medium">Gestisci le tue sessioni live e i check-in con gli atleti.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="btn btn-primary h-14 px-8 rounded-2xl shadow-xl shadow-primary-500/20 flex items-center gap-2 font-black transition-all hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5" />
          NUOVO APPUNTAMENTO
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Calendar Area */}
        <div className="lg:col-span-2">
          <Calendar appointments={appointments} className="h-full" />
        </div>

        {/* Sidebar: Upcoming Appointments */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white px-2">Prossimi impegni</h2>
          <div className="space-y-4">
            {appointments?.filter(a => new Date(a.start_time) >= new Date()).slice(0, 5).map(apt => (
              <div key={apt.id} className="glass p-5 rounded-3xl border border-white/5 space-y-3 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button 
                    onClick={() => {
                      if(confirm('Eliminare questo appuntamento?')) deleteMutation.mutate(apt.id);
                    }}
                    className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                   >
                     <Trash2 className="w-4 h-4" />
                   </button>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex flex-col items-center justify-center border border-white/5">
                    <span className="text-[10px] font-black text-slate-500 uppercase">{format(new Date(apt.start_time), "MMM", { locale: it })}</span>
                    <span className="text-lg font-black text-white leading-none">{format(new Date(apt.start_time), "d")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white italic truncate">{apt.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-emerald-500" />
                      <span className="text-xs text-slate-400 font-bold">{format(new Date(apt.start_time), "HH:mm")}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <User className="w-3 h-3 text-primary-400" />
                    </div>
                    <span className="text-xs font-bold text-slate-300">
                      {apt.profiles ? `${apt.profiles.first_name} ${apt.profiles.last_name || ''}` : 'Generico'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {(!appointments || appointments.length === 0) && (
              <div className="text-center py-20 opacity-30">
                <CalendarIcon className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm font-medium">Nessun appuntamento in programma</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Appointment Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Nuovo Appuntamento">
        <form onSubmit={(e) => { e.preventDefault(); createMutation.mutate(newAppointment); }} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Titolo</label>
            <input 
              type="text" 
              required
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
              placeholder="es: Sessione PT"
              value={newAppointment.title}
              onChange={e => setNewAppointment({...newAppointment, title: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Inizio</label>
              <input 
                type="datetime-local" 
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                value={newAppointment.start_time}
                onChange={e => setNewAppointment({...newAppointment, start_time: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Durata (min)</label>
              <input 
                type="number" 
                required
                min="1"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                value={newAppointment.duration}
                onChange={e => setNewAppointment({...newAppointment, duration: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Atleta (Opzionale)</label>
            <select 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
              value={newAppointment.athlete_id}
              onChange={e => setNewAppointment({...newAppointment, athlete_id: e.target.value})}
            >
              <option value="">Nessun atleta specifico</option>
              {athletes?.map((a: any) => (
                <option key={a.id} value={a.id}>{a.first_name} {a.last_name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Luogo</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="es: Palestra Golden"
                value={newAppointment.location}
                onChange={e => setNewAppointment({...newAppointment, location: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Descrizione</label>
            <textarea 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors min-h-[100px]"
              placeholder="Dettagli dell'appuntamento..."
              value={newAppointment.description}
              onChange={e => setNewAppointment({...newAppointment, description: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            disabled={createMutation.isPending}
            className="btn btn-primary w-full h-14 rounded-xl font-black shadow-lg shadow-primary-500/20 disabled:opacity-50"
          >
            {createMutation.isPending ? 'CREAZIONE...' : 'CREA APPUNTAMENTO'}
          </button>
        </form>
      </Modal>
    </div>
  );
}
