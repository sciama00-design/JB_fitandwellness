import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAthleteNavigation } from '../../context/AthleteNavigationContext';
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
  Trash2,
  Apple,
  Calendar as CalendarIcon,
  ExternalLink
} from 'lucide-react';
import { sessionService } from '../../services/sessionService';
import { measurementService } from '../../services/measurementService';
import { planService } from '../../services/planService';
import AddMeasurementModal from '../../components/coach/AddMeasurementModal';
import LoadTemplateModal from '../../components/coach/LoadTemplateModal';
import WorkoutSessionDetailModal from '../../components/workout/WorkoutSessionDetailModal';
import CoachDailyLogsView from '../../components/coach/CoachDailyLogsView';
import DietCalculator from '../../components/coach/DietCalculator';
import Calendar from '../../components/calendar/Calendar';
import AthleteBriefing from '../../components/coach/AthleteBriefing';
import AthleteFocusObjectives from '../../components/coach/AthleteFocusObjectives';
import { appointmentService } from '../../services/appointmentService';
import { dietService } from '../../services/dietService';
import { motion, AnimatePresence } from 'framer-motion';

export type TabType = 'anagrafica' | 'schede' | 'log' | 'tracker' | 'misure' | 'calendario' | 'alimentazione';

export const ATHLETE_TABS: { id: TabType; label: string; icon: any }[] = [
  { id: 'anagrafica', label: 'Info', icon: User },
  { id: 'schede', label: 'Programmi', icon: ClipboardList },
  { id: 'log', label: 'Training Log', icon: History },
  { id: 'tracker', label: 'Check-in', icon: Clock },
  { id: 'alimentazione', label: 'Dieta', icon: Apple },
  { id: 'misure', label: 'Metriche', icon: Scale },
  { id: 'calendario', label: 'Calendar', icon: CalendarIcon },
];

export default function AthleteDetail() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const activeTab = (searchParams.get('tab') as TabType) || 'anagrafica';
  const { setActiveAthlete } = useAthleteNavigation();

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
            description,
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

  // Sync athlete info with context for sidebar/hamburger
  useEffect(() => {
    if (athlete) {
      setActiveAthlete({
        id: athlete.id,
        name: `${athlete.first_name} ${athlete.last_name}`
      });
    }
    return () => setActiveAthlete(null);
  }, [athlete, setActiveAthlete]);

  const { data: history } = useQuery({
    queryKey: ['athlete-history', id],
    queryFn: () => sessionService.getAthleteHistory(id!),
    enabled: !!id && (activeTab === 'log' || activeTab === 'calendario'),
  });

  const { data: measurements } = useQuery({
    queryKey: ['athlete-measurements', id],
    queryFn: () => measurementService.getAthleteMeasurements(id!),
    enabled: !!id && (activeTab === 'misure' || activeTab === 'calendario' || activeTab === 'alimentazione'),
  });

  const { data: appointments } = useQuery({
    queryKey: ['athlete-appointments', id],
    queryFn: () => appointmentService.getAthleteAppointments(id!),
    enabled: !!id && activeTab === 'calendario',
  });
  
  const { data: dietPlan } = useQuery({
    queryKey: ['athlete-diet', id],
    queryFn: () => dietService.getAthleteDietPlan(id!),
    enabled: !!id && activeTab === 'alimentazione',
  });

  const addMeasurementMutation = useMutation({
    mutationFn: (newMeasurement: any) => measurementService.addMeasurement(newMeasurement),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['athlete-measurements', id] });
      toast.success('Misura salvata con successo');
    },
    onError: (error: any) => {
      console.error('Error saving measurement:', error);
      toast.error('Errore nel salvataggio della misura');
    }
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
        </div>
        <p className="text-muted-foreground animate-pulse font-black uppercase tracking-widest text-xs">Caricamento profilo...</p>
      </div>
    );
  }

  if (athleteError || !athlete) {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-8">
        <div className="w-20 h-20 bg-secondary/10 rounded-[2rem] flex items-center justify-center mx-auto border border-border">
          <User className="w-10 h-10 text-muted-foreground opacity-20" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-foreground italic uppercase">Atleta non trovato</h2>
          <Link to="/coach/athletes" className="btn btn-primary h-12 px-6 rounded-xl font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Torna alla lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-20">
      {/* Top Header & Profile Info - ONLY ON INFO TAB */}
      {activeTab === 'anagrafica' && (
        <div className="space-y-10">
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-1">
            <Link to="/coach/athletes" className="flex items-center gap-3 text-muted-foreground hover:text-foreground font-black uppercase tracking-[0.2em] text-[10px] transition-all group">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ChevronLeft className="w-4 h-4" />
              </div>
              Torna agli Atleti
            </Link>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="h-12 px-6 glass-card rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-all text-muted-foreground flex-1 sm:flex-none">
                Modifica Profilo
              </button>
              <Link 
                to={`/coach/plans/new?athleteId=${id}`} 
                className="h-12 px-6 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[9px] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
              >
                <Plus className="w-4 h-4" /> Nuova Scheda
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <AthleteBriefing 
              athleteId={id!} 
              athleteProfile={athlete} 
              dietPlan={dietPlan} 
            />
          </div>
        </div>
      )}

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="min-h-[400px]"
        >
          {activeTab === 'anagrafica' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-10 rounded-[3rem] border-white/5 space-y-8">
                <h3 className="text-xl font-black text-foreground italic uppercase tracking-tight flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  Profilo Anagrafico
                </h3>
                <div className="space-y-6">
                  {[
                    { label: 'Nome Completo', val: `${athlete.first_name} ${athlete.last_name}` },
                    { label: 'Email Contatto', val: athlete.email || 'Non fornito' },
                    { label: 'Data Iscrizione', val: new Date(athlete.created_at).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }) },
                    { label: 'Identificativo Atleta', val: athlete.id.substring(0, 8).toUpperCase() },
                  ].map((row, i) => (
                    <div key={i} className="flex flex-col space-y-1 py-1 border-b border-white/5 last:border-0 pb-4">
                      <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40">{row.label}</span>
                      <span className="text-base font-bold text-foreground italic">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <AthleteFocusObjectives 
                  athleteId={id!} 
                  athleteProfile={athlete} 
                />
              </div>
            </div>
          )}

          {activeTab === 'schede' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-1">
                <h2 className="text-2xl sm:text-3xl font-black text-foreground italic uppercase tracking-tighter">Programmazione</h2>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Link 
                    to={`/coach/plans/new?athleteId=${id}`}
                    className="h-12 px-6 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[9px] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <Plus className="w-4 h-4" /> Nuova Scheda
                  </Link>
                  <button 
                    onClick={() => setIsLoadTemplateOpen(true)}
                    className="h-12 px-6 glass-card rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-white/5 transition-all text-muted-foreground flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <Plus className="w-4 h-4 text-primary" /> Libreria Template
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {athlete.workout_plans && athlete.workout_plans.length > 0 ? (
                  athlete.workout_plans.map((plan: any) => (
                    <div key={plan.id} className="glass-card group p-5 sm:p-8 rounded-3xl sm:rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all relative overflow-hidden flex flex-col justify-between min-h-[12rem]">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40">Creato il {new Date(plan.created_at).toLocaleDateString()}</span>
                          {plan.active && (
                            <span className="px-3 py-1 bg-primary text-white text-[8px] font-black rounded-full shadow-lg shadow-primary/20 tracking-widest">ATTIVO</span>
                          )}
                        </div>
                        <h4 className="text-2xl font-black text-foreground italic uppercase tracking-tight group-hover:translate-x-1 transition-transform">{plan.name}</h4>
                        {plan.description && (
                          <p className="mt-2 text-[11px] text-muted-foreground/60 font-medium italic line-clamp-2 max-w-[85%] group-hover:text-muted-foreground transition-colors">
                            {plan.description}
                          </p>
                        )}
                      </div>

                      <div className="relative z-10 flex items-center justify-between">
                        <button
                          onClick={(e) => handleDeletePlan(e, plan.id, plan.name)}
                          className="w-10 h-10 glass-interactive rounded-xl flex items-center justify-center text-red-500/30 hover:text-red-500 hover:bg-red-500/10 transition-all"
                          disabled={deletePlanMutation.isPending}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <Link 
                          to={`/coach/plans/edit/${plan.id}`}
                          className="h-10 px-5 glass-card rounded-xl font-black uppercase text-[9px] tracking-widest flex items-center gap-2 bg-white/5 hover:bg-primary hover:text-white transition-all group/btn"
                        >
                          Modifica <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 glass-card rounded-[3rem] border-dashed border-2 border-white/5 text-center space-y-4">
                    <ClipboardList className="w-12 h-12 text-muted-foreground opacity-10 mx-auto" />
                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs opacity-40">Nessuna scheda assegnata</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'log' && (
            <div className="space-y-8">
               <h2 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Storico Training</h2>
               {history && history.length > 0 ? (
                <div className="grid gap-4">
                  {history.map((session: any) => (
                    <div 
                      key={session.id} 
                      onClick={() => setSelectedSessionId(session.id)}
                      className="glass-card group p-6 rounded-[2rem] border-white/5 hover:border-white/10 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all scale-100 group-hover:scale-110">
                          <History className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-foreground italic uppercase tracking-tight leading-none">{session.workout_plans?.name || 'Sessione libera'}</h4>
                          <div className="flex items-center gap-3 mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">
                            <span className="flex items-center gap-1.5"><CalendarIcon className="w-3 h-3" /> {new Date(session.started_at).toLocaleDateString('it-IT')}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {Math.floor(session.duration_seconds / 60)}m</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-10 glass-interactive rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 glass-card rounded-[3rem] border-dashed border-2 border-white/5 text-center space-y-4">
                  <History className="w-12 h-12 text-muted-foreground opacity-10 mx-auto" />
                  <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs opacity-40">Nessun allenamento registrato</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tracker' && (
            <div className="space-y-8 bg-secondary/5 rounded-[3rem] border border-white/5 p-8 sm:p-12 shadow-2xl">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Monitoraggio Quotidiano</h2>
                <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Analisi parametri soggettivi (Sonno, Stress, Recupero)</p>
              </div>
              <CoachDailyLogsView athleteId={id!} />
            </div>
          )}

          {activeTab === 'misure' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Metrimetria</h2>
                <button 
                  className="h-12 px-6 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[9px] shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2"
                  onClick={() => setIsAddMeasurementOpen(true)}
                >
                  <Plus className="w-4 h-4" /> Aggiungi Snapshot
                </button>
              </div>

              {measurements && measurements.length > 0 ? (
                <div className="space-y-4">
                  {/* Desktop Table View */}
                  <div className="hidden md:block glass-card rounded-[3rem] border-white/5 overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto custom-scrollbar">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-white/5 border-b border-white/5">
                            <th className="px-8 py-6 text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] opacity-40">Data</th>
                            <th className="px-8 py-6 text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] opacity-40">Peso (kg)</th>
                            <th className="px-8 py-6 text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] opacity-40">BF%</th>
                            <th className="px-8 py-6 text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] opacity-40">Vita (cm)</th>
                            <th className="px-8 py-6 text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] opacity-40">Fianchi</th>
                            <th className="px-8 py-6"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                          {measurements.map((m: any) => (
                            <tr key={m.id} className="group hover:bg-white/[0.02] transition-colors">
                              <td className="px-8 py-6 font-bold text-foreground italic">{new Date(m.recorded_at).toLocaleDateString('it-IT')}</td>
                              <td className="px-8 py-6">
                                <span className="text-xl font-black text-primary italic tracking-tight">{m.weight || '-'}</span>
                              </td>
                              <td className="px-8 py-6 text-foreground font-black italic opacity-80">{m.body_fat_percentage || '-'}%</td>
                              <td className="px-8 py-6 text-foreground font-black italic opacity-80">{m.waist || '-'}</td>
                              <td className="px-8 py-6 text-foreground font-black italic opacity-80">{m.hips || '-'}</td>
                              <td className="px-8 py-6 text-right">
                                <button className="w-10 h-10 glass-interactive rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all">
                                  <ExternalLink className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {measurements.map((m: any) => (
                      <div key={m.id} className="glass-card p-6 rounded-3xl border-white/5 space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-3">
                          <span className="text-lg font-black text-foreground italic">
                            {new Date(m.recorded_at).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })}
                          </span>
                          <button className="text-primary">
                            <ExternalLink size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40">Peso</p>
                            <p className="text-xl font-black text-primary italic">{m.weight || '-'} kg</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40">Body Fat</p>
                            <p className="text-lg font-black text-foreground italic">{m.body_fat_percentage || '-'}%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40">Vita</p>
                            <p className="text-lg font-black text-foreground italic">{m.waist || '-'} cm</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-40">Fianchi</p>
                            <p className="text-lg font-black text-foreground italic">{m.hips || '-'} cm</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-20 glass-card rounded-[3rem] border-dashed border-2 border-white/5 text-center space-y-4">
                  <Scale className="w-12 h-12 text-muted-foreground opacity-10 mx-auto" />
                  <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs opacity-40">Nessuna misurazione trovata</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'calendario' && (
            <div className="space-y-8">
               <h2 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Agenda Atleta</h2>
              <div className="glass-card p-1.5 rounded-[3rem] border-white/5 overflow-hidden shadow-2xl bg-secondary/5">
                <Calendar 
                  sessions={history} 
                  measurements={measurements} 
                  appointments={appointments} 
                  onViewSession={(id) => setSelectedSessionId(id)}
                />
              </div>
            </div>
          )}

          {activeTab === 'alimentazione' && (
            <div className="glass-card p-8 sm:p-12 rounded-[3rem] border-white/5 bg-secondary/5 shadow-2xl">
              <div className="flex items-center gap-4 px-1 mb-8">
                <Apple className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">Diet Engineering</h2>
              </div>
               <DietCalculator 
                 athleteId={id} 
                 initialData={dietPlan ? {
                   weight: athlete.weight,
                   height: athlete.height,
                   age: athlete.age,
                   gender: athlete.gender,
                   activityLevel: athlete.activity_level,
                   deficit: athlete.target_deficit,
                   ...dietPlan,
                 } : undefined}
                 athleteProfile={athlete}
                 measurements={measurements}
               />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AddMeasurementModal
        athleteId={id!}
        isOpen={isAddMeasurementOpen}
        onClose={() => setIsAddMeasurementOpen(false)}
        onAdd={async (data) => { await addMeasurementMutation.mutateAsync(data); }}
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
