import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
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
  ExternalLink,
  Timer
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
import { athleteService } from '../../services/athleteService';
import AthleteAnamnesisWorkflow from '../../components/coach/AthleteAnamnesisWorkflow';
import AthleteAnalytics from '../../components/coach/AthleteAnalytics';
import { AppTabs, AppTabContent } from '../../components/ui/Tabs';
import clsx from 'clsx';

export type TabType = 'anagrafica' | 'schede' | 'log' | 'tracker' | 'misure' | 'calendario' | 'alimentazione' | 'analytics';

export const ATHLETE_TABS: { id: TabType; label: string; icon: any }[] = [
  { id: 'anagrafica', label: 'Info', icon: User },
  { id: 'schede', label: 'Programmi', icon: ClipboardList },
  { id: 'log', label: 'Training Log', icon: History },
  { id: 'tracker', label: 'Check-in', icon: Clock },
  { id: 'alimentazione', label: 'Dieta', icon: Apple },
  { id: 'misure', label: 'Metriche', icon: Scale },
  { id: 'analytics', label: 'Analytics', icon: ExternalLink },
  { id: 'calendario', label: 'Calendar', icon: CalendarIcon },
];

export default function AthleteDetail() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeTab = (searchParams.get('tab') as TabType) || 'anagrafica';
  const { setActiveAthlete } = useAthleteNavigation();

  const [isAddMeasurementOpen, setIsAddMeasurementOpen] = useState(false);
  const [isLoadTemplateOpen, setIsLoadTemplateOpen] = useState(false);
  const [isAnamnesisOpen, setIsAnamnesisOpen] = useState(false);
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

  const handleTabChange = (tab: string) => {
    navigate(`/coach/athletes/${id}?tab=${tab}`, { replace: true });
  };

  if (isLoadingAthlete) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" />
        </div>
        <p className="text-muted-foreground/60 animate-pulse font-semibold uppercase tracking-[0.2em] text-[10px]">Caricamento profilo...</p>
      </div>
    );
  }

  if (athleteError || !athlete) {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-6">
        <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center mx-auto">
          <User className="w-6 h-6 text-muted-foreground/20" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Atleta non trovato</h2>
          <Link to="/coach/athletes" className="btn btn-primary h-10 px-5 rounded-xl font-bold text-sm inline-flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Torna alla lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      {/* Athlete Header — Always visible */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            to="/coach/athletes"
            className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-foreground transition-all border border-white/[0.04] shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center font-black text-white text-[11px] shadow-md shadow-primary/15 shrink-0">
              {athlete.first_name?.[0]}{athlete.last_name?.[0]}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-tight">
                {athlete.first_name} {athlete.last_name}
              </h1>
              <p className="text-[11px] text-muted-foreground/40 font-medium">{athlete.email}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 pl-13 sm:pl-0">
          <button
            onClick={() => setIsAnamnesisOpen(true)}
            className="h-9 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-foreground/80 rounded-lg font-semibold text-[11px] tracking-wide border border-white/[0.06] transition-all flex items-center gap-2"
          >
            <ClipboardList className="w-3.5 h-3.5 text-primary" />
            <span className="hidden sm:inline">Workflow Anamnesi</span>
            <span className="sm:hidden">Anamnesi</span>
          </button>
          <Link 
            to={`/coach/plans/new?athleteId=${id}`} 
            className="btn btn-primary h-9 px-4 rounded-lg flex items-center gap-2"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="font-bold text-[11px] tracking-wide">Nuova Scheda</span>
          </Link>
        </div>
      </div>

      {/* Radix Tabs */}
      <AppTabs 
        tabs={ATHLETE_TABS.map(t => ({ id: t.id, label: t.label, icon: t.icon }))}
        value={activeTab}
        onValueChange={handleTabChange}
      >
        {/* Info Tab */}
        <AppTabContent value="anagrafica">
          <div className="space-y-8">
            <AthleteBriefing 
              athleteId={id!} 
              athleteProfile={athlete} 
              dietPlan={dietPlan} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/[0.05] bg-card/20 p-6 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Profilo Anagrafico</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Nome Completo', val: `${athlete.first_name} ${athlete.last_name}` },
                    { label: 'Data di Nascita', val: athlete.birth_date ? new Date(athlete.birth_date).toLocaleDateString('it-IT') : 'Non nota' },
                    { label: 'Età', val: athleteService.calculateAge(athlete.birth_date) || '-' },
                    { label: 'Email', val: athlete.email || 'Non fornito' },
                    { label: 'Iscrizione', val: new Date(athlete.created_at).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }) },
                    { label: 'ID', val: athlete.id.substring(0, 8).toUpperCase() },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/[0.03] last:border-0">
                      <span className="text-[11px] font-semibold text-muted-foreground/40 uppercase tracking-[0.1em]">{row.label}</span>
                      <span className="text-sm font-semibold text-foreground">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-1">
                <AthleteFocusObjectives 
                  athleteId={id!} 
                  athleteProfile={athlete} 
                />
              </div>
            </div>
          </div>
        </AppTabContent>

        {/* Programmi Tab */}
        <AppTabContent value="schede">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-foreground tracking-tight">Programmazione</h2>
              <div className="flex items-center gap-2">
                <Link 
                  to={`/coach/plans/new?athleteId=${id}`}
                  className="btn btn-primary h-9 px-4 rounded-lg flex items-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span className="font-bold text-[11px] tracking-wide">Nuova Scheda</span>
                </Link>
                <button 
                  onClick={() => setIsLoadTemplateOpen(true)}
                  className="h-9 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-foreground/80 rounded-lg font-semibold text-[11px] tracking-wide border border-white/[0.06] transition-all flex items-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5 text-primary" /> Template
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {athlete.workout_plans && athlete.workout_plans.length > 0 ? (
                athlete.workout_plans.map((plan: any) => (
                  <div key={plan.id} className="group rounded-2xl border border-white/[0.05] bg-card/20 hover:bg-card/40 hover:border-white/[0.1] transition-all p-5 relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] text-muted-foreground/35 font-medium">{new Date(plan.created_at).toLocaleDateString('it-IT')}</span>
                            {plan.active && (
                              <span className="px-2 py-0.5 bg-primary/15 text-primary text-[9px] font-bold rounded-md border border-primary/20">ATTIVO</span>
                            )}
                          </div>
                          <h4 className="text-[17px] font-bold text-foreground tracking-tight">{plan.name}</h4>
                          {plan.description && (
                            <p className="mt-1 text-[12px] text-muted-foreground/50 font-medium line-clamp-2 max-w-[85%]">
                              {plan.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                        <button
                          onClick={(e) => handleDeletePlan(e, plan.id, plan.name)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-destructive/30 hover:text-destructive hover:bg-destructive/10 transition-all"
                          disabled={deletePlanMutation.isPending}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <Link 
                          to={`/coach/plans/edit/${plan.id}`}
                          className="h-8 px-4 bg-white/[0.04] hover:bg-primary text-foreground/70 hover:text-white rounded-lg font-semibold text-[11px] flex items-center gap-1.5 transition-all border border-white/[0.06] hover:border-primary"
                        >
                          Modifica <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 rounded-2xl border-2 border-dashed border-white/[0.06] text-center space-y-3">
                  <ClipboardList className="w-8 h-8 text-muted-foreground/15 mx-auto" />
                  <p className="text-muted-foreground/40 font-semibold text-sm">Nessuna scheda assegnata</p>
                </div>
              )}
            </div>
          </div>
        </AppTabContent>

        {/* Training Log Tab */}
        <AppTabContent value="log">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground tracking-tight">Storico Training</h2>
            {history && history.length > 0 ? (
              <div className="space-y-3">
                {history.map((session: any) => (
                  <div 
                    key={session.id} 
                    onClick={() => setSelectedSessionId(session.id)}
                    className="group rounded-xl border border-white/[0.05] bg-card/20 hover:bg-card/40 hover:border-white/[0.1] transition-all cursor-pointer p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-primary group-hover:bg-primary/[0.12] transition-all shrink-0">
                        <History className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[15px] text-foreground tracking-tight leading-tight">{session.workout_plans?.name || 'Sessione libera'}</h4>
                        <div className="flex items-center gap-3 mt-1 text-[11px] font-medium text-muted-foreground/40">
                          <span className="flex items-center gap-1"><CalendarIcon className="w-3 h-3" /> {new Date(session.started_at).toLocaleDateString('it-IT')}</span>
                          <span className="flex items-center gap-1"><Timer className="w-3 h-3" /> {Math.floor(session.duration_seconds / 60)} min</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-muted-foreground/30 group-hover:text-primary transition-all shrink-0">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 rounded-2xl border-2 border-dashed border-white/[0.06] text-center space-y-3">
                <History className="w-8 h-8 text-muted-foreground/15 mx-auto" />
                <p className="text-muted-foreground/40 font-semibold text-sm">Nessun allenamento registrato</p>
              </div>
            )}
          </div>
        </AppTabContent>

        {/* Check-in Tab */}
        <AppTabContent value="tracker">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground tracking-tight">Monitoraggio Quotidiano</h2>
              <p className="text-muted-foreground/40 mt-1 text-sm font-medium">Sonno, Stress, Recupero</p>
            </div>
            <div className="rounded-2xl border border-white/[0.05] bg-card/20 p-5 sm:p-8">
              <CoachDailyLogsView athleteId={id!} />
            </div>
          </div>
        </AppTabContent>

        {/* Diet Tab */}
        <AppTabContent value="alimentazione">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                <Apple className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground tracking-tight">Diet Engineering</h2>
            </div>
            <DietCalculator 
              athleteId={id} 
              initialData={dietPlan ? {
                weight: athlete.weight,
                height: athlete.height,
                age: athleteService.calculateAge(athlete.birth_date) || 30,
                gender: athlete.gender,
                activityLevel: athlete.activity_level,
                deficit: athlete.target_deficit,
                ...dietPlan,
              } : undefined}
              athleteProfile={athlete}
              measurements={measurements}
            />
          </div>
        </AppTabContent>

        {/* Metriche Tab */}
        <AppTabContent value="misure">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground tracking-tight">Metrimetria</h2>
              <button 
                className="btn btn-primary h-9 px-4 rounded-lg flex items-center gap-2"
                onClick={() => setIsAddMeasurementOpen(true)}
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="font-bold text-[11px] tracking-wide">Aggiungi</span>
              </button>
            </div>

            {measurements && measurements.length > 0 ? (
              <div className="space-y-4">
                {/* Desktop Table */}
                <div className="hidden md:block rounded-2xl border border-white/[0.05] bg-card/20 overflow-hidden">
                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/[0.05]">
                          {['Data', 'Peso (kg)', 'BF%', 'Vita (cm)', 'Fianchi'].map((h) => (
                            <th key={h} className="px-6 py-4 text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.15em]">{h}</th>
                          ))}
                          <th className="px-6 py-4" />
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.03]">
                        {measurements.map((m: any) => (
                          <tr key={m.id} className="group hover:bg-white/[0.02] transition-colors">
                            <td className="px-6 py-4 font-semibold text-foreground text-sm">{new Date(m.recorded_at).toLocaleDateString('it-IT')}</td>
                            <td className="px-6 py-4">
                              <span className="text-lg font-bold text-primary">{m.weight || '-'}</span>
                            </td>
                            <td className="px-6 py-4 text-foreground/80 font-semibold">{m.body_fat_percentage || '-'}%</td>
                            <td className="px-6 py-4 text-foreground/80 font-semibold">{m.waist || '-'}</td>
                            <td className="px-6 py-4 text-foreground/80 font-semibold">{m.hips || '-'}</td>
                            <td className="px-6 py-4 text-right">
                              <button className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-muted-foreground/30 hover:text-primary transition-all">
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {measurements.map((m: any) => (
                    <div key={m.id} className="rounded-xl border border-white/[0.05] bg-card/20 p-4 space-y-3">
                      <div className="flex justify-between items-center pb-2.5 border-b border-white/[0.04]">
                        <span className="font-semibold text-foreground text-sm">
                          {new Date(m.recorded_at).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                        <button className="text-primary/60">
                          <ExternalLink size={14} />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: 'Peso', val: `${m.weight || '-'} kg`, accent: true },
                          { label: 'Body Fat', val: `${m.body_fat_percentage || '-'}%` },
                          { label: 'Vita', val: `${m.waist || '-'} cm` },
                          { label: 'Fianchi', val: `${m.hips || '-'} cm` },
                        ].map((item, i) => (
                          <div key={i} className="space-y-0.5">
                            <p className="text-[10px] font-semibold text-muted-foreground/35 uppercase tracking-[0.1em]">{item.label}</p>
                            <p className={clsx("text-base font-bold", item.accent ? "text-primary" : "text-foreground/80")}>{item.val}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-16 rounded-2xl border-2 border-dashed border-white/[0.06] text-center space-y-3">
                <Scale className="w-8 h-8 text-muted-foreground/15 mx-auto" />
                <p className="text-muted-foreground/40 font-semibold text-sm">Nessuna misurazione trovata</p>
              </div>
            )}
          </div>
        </AppTabContent>

        {/* Analytics Tab */}
        <AppTabContent value="analytics">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground tracking-tight">Advanced Analytics</h2>
              <p className="text-muted-foreground/40 mt-1 text-sm font-medium">Analisi approfondita delle performance e dei trend biometrici</p>
            </div>
            <AthleteAnalytics athleteId={id!} />
          </div>
        </AppTabContent>

        {/* Calendar Tab */}
        <AppTabContent value="calendario">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground tracking-tight">Agenda Atleta</h2>
            <div className="rounded-2xl border border-white/[0.05] bg-card/20 p-1.5 overflow-hidden">
              <Calendar 
                sessions={history} 
                measurements={measurements} 
                appointments={appointments} 
                onViewSession={(id) => setSelectedSessionId(id)}
              />
            </div>
          </div>
        </AppTabContent>
      </AppTabs>

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

      <AthleteAnamnesisWorkflow
        athlete={athlete}
        isOpen={isAnamnesisOpen}
        onClose={() => setIsAnamnesisOpen(false)}
        onComplete={() => {
          queryClient.invalidateQueries({ queryKey: ['athlete-detail', id] });
          toast.success('Anamnesi completata con successo');
        }}
      />
    </div>
  );
}
