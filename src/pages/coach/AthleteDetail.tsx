import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import { 
  ChevronLeft, 
  ClipboardList, 
  Loader2, 
  ArrowRight, 
  User, 
  History, 
  Scale, 
  Plus, 
  Clock,
  Mail,
  Info,
  Trash2
} from 'lucide-react';
import { sessionService } from '../../services/sessionService';
import { measurementService } from '../../services/measurementService';
import { planService } from '../../services/planService';
import AddMeasurementModal from '../../components/coach/AddMeasurementModal';
import LoadTemplateModal from '../../components/coach/LoadTemplateModal';
import WorkoutSessionDetailModal from '../../components/workout/WorkoutSessionDetailModal';
import CoachDailyLogsView from '../../components/coach/CoachDailyLogsView';
import Calendar from '../../components/calendar/Calendar';
import { appointmentService } from '../../services/appointmentService';
import { Calendar as CalendarIcon } from 'lucide-react';

type TabType = 'anagrafica' | 'schede' | 'log' | 'tracker' | 'misure' | 'calendario';

export default function AthleteDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('anagrafica');
  const [isAddMeasurementOpen, setIsAddMeasurementOpen] = useState(false);
  const [isLoadTemplateOpen, setIsLoadTemplateOpen] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: athlete, isLoading: isLoadingAthlete, error: athleteError } = useQuery({
    queryKey: ['athlete-detail', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          *,
          workout_plans!athlete_id(
            id,
            name,
            created_at,
            active
          )
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  const { data: history, isLoading: isLoadingHistory } = useQuery({
    queryKey: ['athlete-history', id],
    queryFn: () => sessionService.getAthleteHistory(id!),
    enabled: !!id && activeTab === 'log',
  });

  const { data: measurements, isLoading: isLoadingMeasurements } = useQuery({
    queryKey: ['athlete-measurements', id],
    queryFn: () => measurementService.getAthleteMeasurements(id!),
    enabled: !!id && (activeTab === 'misure' || activeTab === 'calendario'),
  });

  const { data: appointments, isLoading: isLoadingAppointments } = useQuery({
    queryKey: ['athlete-appointments', id],
    queryFn: () => appointmentService.getAthleteAppointments(id!),
    enabled: !!id && activeTab === 'calendario',
  });

  const { data: fullHistory, isLoading: isLoadingFullHistory } = useQuery({
    queryKey: ['athlete-history', id],
    queryFn: () => sessionService.getAthleteHistory(id!),
    enabled: !!id && activeTab === 'calendario',
  });

  const addMeasurementMutation = useMutation({
    mutationFn: (newMeasurement: any) => measurementService.addMeasurement(newMeasurement),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-measurements', id] });
    },
  });

  const deletePlanMutation = useMutation({
    mutationFn: (planId: string) => planService.deletePlan(planId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-detail', id] });
    },
  });
  
  const loadTemplateMutation = useMutation({
    mutationFn: (templateId: string) => planService.createPlanFromTemplate(templateId, id!, user!.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-detail', id] });
      setIsLoadTemplateOpen(false);
    },
  });

  const handleDeletePlan = async (e: React.MouseEvent, planId: string, planName: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Sei sicuro di voler eliminare la scheda "${planName}"? Questa operazione non è reversibile.`)) {
      deletePlanMutation.mutate(planId);
    }
  };


  if (isLoadingAthlete) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
        <p className="text-slate-400 animate-pulse">Loading athlete details...</p>
      </div>
    );
  }

  if (athleteError || !athlete) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-white">Athlete not found</h2>
        <Link to="/coach" className="btn btn-secondary mt-4 inline-flex items-center">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: 'anagrafica', label: 'Anagrafica', icon: User },
    { id: 'schede', label: 'Schede', icon: ClipboardList },
    { id: 'log', label: 'Log training', icon: History },
    { id: 'tracker', label: 'Check-in', icon: Clock },
    { id: 'misure', label: 'Misure', icon: Scale },
    { id: 'calendario', label: 'Calendario', icon: CalendarIcon },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link to="/coach" className="flex items-center text-slate-400 hover:text-white transition-colors group">
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
        <div className="flex gap-3">
          <button className="btn btn-secondary px-4 py-2 text-sm">Edit Profile</button>
          <Link to={`/coach/plans/new?athleteId=${id}`} className="btn btn-primary px-4 py-2 text-sm">
            Assign New Plan
          </Link>
        </div>
      </div>

      {/* Profile Overview */}
      <div className="glass p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 text-lg sm:text-xl font-bold border border-primary-500/20">
          {athlete.first_name?.[0]}{athlete.last_name?.[0]}
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl font-bold text-white">
            {athlete.first_name} {athlete.last_name}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2 text-slate-400 text-sm">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              {athlete.email || 'Nessuna email'}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-center px-4 border-r border-slate-800 last:border-0">
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Plans</p>
            <p className="text-xl font-bold text-white">{athlete.workout_plans?.length || 0}</p>
          </div>
          <div className="text-center px-4 border-r border-slate-800 last:border-0">
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Joined</p>
            <p className="text-xl font-bold text-white">{new Date(athlete.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex p-1 bg-slate-900/50 rounded-xl border border-slate-800 w-full overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <tab.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === tab.id ? 'text-white' : 'text-slate-500'}`} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'anagrafica' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500">
            <div className="glass p-5 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <User className="w-4 h-4 text-primary-400" />
                Informazioni Personali
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-slate-800/50 text-sm">
                  <span className="text-slate-400">Nome</span>
                  <span className="text-white font-medium">{athlete.first_name} {athlete.last_name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/50 text-sm">
                  <span className="text-slate-400">Email</span>
                  <span className="text-white font-medium">{athlete.email || 'Nessuna email'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/50 text-sm">
                  <span className="text-slate-400">Iscrizione</span>
                  <span className="text-white font-medium">{new Date(athlete.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/50 text-sm">
                  <span className="text-slate-400">Ruolo</span>
                  <span className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest">{athlete.role}</span>
                </div>
              </div>
            </div>

            <div className="glass p-5 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-primary-400" />
                Dettagli Extra
              </h3>
              <div className="flex flex-col items-center justify-center p-8 text-slate-500 bg-slate-900/40 rounded-xl border border-dashed border-slate-800">
                <p className="text-xs italic">Nessun dettaglio aggiuntivo disponibile</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schede' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center">
                <ClipboardList className="w-5 h-5 mr-3 text-primary-500" />
                Piani di Allenamento
              </h2>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsLoadTemplateOpen(true)}
                  className="btn btn-secondary py-1.5 px-4 text-xs flex items-center gap-2 border-slate-700"
                >
                  <Plus className="w-4 h-4 text-primary-400" />
                  Carica da Libreria
                </button>
                <Link 
                  to={`/coach/plans/new?athleteId=${id}`}
                  className="btn btn-primary py-1.5 px-4 text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nuova Scheda
                </Link>
              </div>
            </div>
            
            <div className="grid gap-4">
              {athlete.workout_plans && athlete.workout_plans.length > 0 ? (
                athlete.workout_plans.map((plan: any) => (
                  <div key={plan.id} className="card group hover:border-primary-500/30 transition-all flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="font-bold text-slate-200">{plan.name}</h4>
                        {plan.active && (
                          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/20">
                            ATTIVO
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        Creato il {new Date(plan.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleDeletePlan(e, plan.id, plan.name)}
                        className="p-2 bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-500 rounded-lg transition-all group/delete"
                        disabled={deletePlanMutation.isPending}
                      >
                        {deletePlanMutation.isPending && deletePlanMutation.variables === plan.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                      <Link 
                        to={`/coach/plans/edit/${plan.id}`}
                        className="p-2 bg-slate-800 hover:bg-primary-500 text-slate-400 hover:text-white rounded-lg transition-all"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                ))
              ) : (
                <div className="bg-slate-950/50 border border-slate-800 border-dashed rounded-xl py-6 text-center">
                  <p className="text-sm text-slate-500">Nessuna scheda assegnata.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'log' && (
          <div className="space-y-6 animate-in fade-in duration-500">
             <h2 className="text-xl font-bold text-white flex items-center">
              <History className="w-5 h-5 mr-3 text-primary-500" />
              Storico Allenamenti
            </h2>

            {isLoadingHistory ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
              </div>
            ) : history && history.length > 0 ? (
              <div className="space-y-4">
                {history.map((session: any) => (
                  <div key={session.id} className="card group bg-slate-900/40 border-slate-800 hover:border-slate-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-slate-800 rounded-xl text-slate-400">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{session.workout_plans?.name || 'Allenamento Diretto'}</h4>
                          <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
                            <span>{new Date(session.started_at).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{Math.floor(session.duration_seconds / 60)} min</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setSelectedSessionId(session.id)}
                          className="btn btn-secondary py-1.5 px-3 text-xs"
                        >
                          Visualizza Dettagli
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-950/50 border border-slate-800 border-dashed rounded-xl py-6 text-center text-sm text-slate-500">
                Nessun allenamento completato.
              </div>
            )}
          </div>
        )}

        {activeTab === 'tracker' && (
          <div className="space-y-6 animate-in fade-in duration-500">
             <h2 className="text-xl font-bold text-white flex items-center">
              <Clock className="w-5 h-5 mr-3 text-primary-500" />
              Tracking Giornaliero
            </h2>
            <CoachDailyLogsView athleteId={id!} />
          </div>
        )}

        {activeTab === 'misure' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Scale className="w-5 h-5 mr-3 text-primary-500" />
                Misure Corporee
              </h2>
              <button 
                className="btn btn-primary py-1.5 px-4 text-xs flex items-center gap-2"
                onClick={() => setIsAddMeasurementOpen(true)}
              >
                <Plus className="w-4 h-4" />
                Aggiungi
              </button>
            </div>

            {isLoadingMeasurements ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
              </div>
            ) : measurements && measurements.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-slate-800">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 text-slate-400 font-bold">
                    <tr>
                      <th className="px-6 py-4">Data</th>
                      <th className="px-6 py-4">Peso</th>
                      <th className="px-6 py-4">BF %</th>
                      <th className="px-6 py-4">Vita</th>
                      <th className="px-6 py-4">Fianchi</th>
                      <th className="px-6 py-4">Azioni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950/20">
                    {measurements.map((m: any) => (
                      <tr key={m.id} className="text-slate-300 hover:bg-white/5">
                        <td className="px-6 py-4">{new Date(m.recorded_at).toLocaleDateString()}</td>
                        <td className="px-6 py-4 font-bold text-white">{m.weight || '-'} kg</td>
                        <td className="px-6 py-4">{m.body_fat_percentage || '-'} %</td>
                        <td className="px-6 py-4">{m.waist || '-'} cm</td>
                        <td className="px-6 py-4">{m.hips || '-'} cm</td>
                        <td className="px-6 py-4">
                          <button className="text-slate-500 hover:text-white transition-colors">
                            Dettagli
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-slate-950/50 border border-slate-800 border-dashed rounded-xl py-6 text-center text-sm text-slate-500">
                Nessuna misura registrata.
              </div>
            )}
          </div>
        )}
        {activeTab === 'calendario' && (
          <div className="space-y-6 animate-in fade-in duration-500">
             <h2 className="text-xl font-bold text-white flex items-center">
              <CalendarIcon className="w-5 h-5 mr-3 text-primary-500" />
              Calendario Cliente
            </h2>
            
            {(isLoadingAppointments || isLoadingFullHistory) ? (
              <div className="flex justify-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
              </div>
            ) : (
              <div className="glass p-1 rounded-2xl border border-white/5 overflow-hidden">
                <Calendar 
                  sessions={fullHistory} 
                  measurements={measurements} 
                  appointments={appointments} 
                  onViewSession={(id) => setSelectedSessionId(id)}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <AddMeasurementModal
        athleteId={id!}
        isOpen={isAddMeasurementOpen}
        onClose={() => setIsAddMeasurementOpen(false)}
        onAdd={(data) => addMeasurementMutation.mutate(data)}
      />

      {selectedSessionId && (
        <WorkoutSessionDetailModal
          sessionId={selectedSessionId}
          isOpen={!!selectedSessionId}
          onClose={() => setSelectedSessionId(null)}
        />
      )}

      <LoadTemplateModal
        isOpen={isLoadTemplateOpen}
        onClose={() => setIsLoadTemplateOpen(false)}
        onSelect={(templateId) => loadTemplateMutation.mutate(templateId)}
        isSubmitting={loadTemplateMutation.isPending}
      />
    </div>
  );
}


