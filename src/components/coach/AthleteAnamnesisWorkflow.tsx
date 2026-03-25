import { useState } from 'react';
import { 
  X, 
  User, 
  Activity, 
  Scale, 
  Target, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Loader2,
  Calendar,
  Dumbbell,
  Stethoscope,
  Info,
  Zap
} from 'lucide-react';
import { athleteService } from '../../services/athleteService';
import { measurementService } from '../../services/measurementService';
import type { Profile, BodyMeasurement } from '../../types/database';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface AthleteAnamnesisWorkflowProps {
  athlete: Profile;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

type Step = 'personal' | 'technical' | 'biometrics' | 'strategy' | 'programming';

export default function AthleteAnamnesisWorkflow({ athlete, isOpen, onClose, onComplete }: AthleteAnamnesisWorkflowProps) {
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Profile>>({ ...athlete });
  const [measurements, setMeasurements] = useState<Partial<BodyMeasurement>>({
    athlete_id: athlete.id,
    recorded_at: new Date().toISOString().split('T')[0],
    weight: athlete.weight || undefined,
  });

  const steps: { id: Step; label: string; icon: any }[] = [
    { id: 'personal', label: 'Personali', icon: User },
    { id: 'technical', label: 'Tecnico', icon: Dumbbell },
    { id: 'biometrics', label: 'Metriche', icon: Scale },
    { id: 'strategy', label: 'Strategia', icon: Target },
    { id: 'programming', label: 'Piano', icon: Zap },
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // 1. Update Profile
      const { id, created_at, role, coach_id, onboarding_completed, workout_plans, ...updates } = formData as any;
      await athleteService.updateProfile(athlete.id, updates);

      // 2. Add Measurement if weight changed or is new
      if (measurements.weight) {
        await measurementService.addMeasurement(measurements);
      }

      onComplete();
      onClose();
    } catch (error) {
      console.error("Error saving anamnesis:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] w-full max-w-4xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] flex flex-col h-[85vh]">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white italic uppercase tracking-tight">Anamnesi Atleta</h2>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-50">Workflow di valutazione professionale</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stepper Navigation */}
        <div className="px-8 py-6 border-b border-white/5 bg-slate-900/50 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[600px] max-w-3xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = steps.findIndex(s => s.id === currentStep) > idx;
              
              return (
                <div key={step.id} className="flex items-center group">
                  <div className="flex flex-col items-center gap-2 relative">
                    <div className={clsx(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border",
                      isActive ? "bg-primary border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] scale-110" : 
                      isCompleted ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" : 
                      "bg-white/5 border-white/5 text-slate-500"
                    )}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className={clsx(
                      "text-[9px] font-black uppercase tracking-widest transition-colors",
                      isActive ? "text-primary" : "text-slate-500"
                    )}>{step.label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={clsx(
                      "w-12 h-[2px] mx-3 rounded-full transition-colors duration-500",
                      isCompleted ? "bg-emerald-500/30" : "bg-white/5"
                    )} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-2xl mx-auto py-4">
            <AnimatePresence mode="wait">
              {currentStep === 'personal' && (
                <motion.div 
                  key="personal"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <SectionTitle title="Dati Anagrafici" subtitle="Informazioni di base per il calcolo dei parametri metabolici" icon={User} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Nome" value={formData.first_name || ''} onChange={v => setFormData(p => ({...p, first_name: v}))} />
                    <InputField label="Cognome" value={formData.last_name || ''} onChange={v => setFormData(p => ({...p, last_name: v}))} />
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Data di Nascita</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-50" />
                        <input
                          type="date"
                          value={formData.birth_date || ''}
                          onChange={e => setFormData(p => ({...p, birth_date: e.target.value}))}
                          className="w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all [color-scheme:dark]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Genere</label>
                      <div className="flex gap-2">
                        {['M', 'F'].map(g => (
                          <button
                            key={g}
                            onClick={() => setFormData(p => ({...p, gender: g as any}))}
                            className={clsx(
                              "flex-1 py-4 rounded-2xl font-black transition-all border",
                              formData.gender === g ? "bg-primary border-primary text-white" : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                            )}
                          >
                            {g === 'M' ? 'UOMO' : 'DONNA'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 'technical' && (
                <motion.div 
                  key="technical"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <SectionTitle title="Anamnesi Tecnica" subtitle="Storia sportiva, infortuni e disponibilità" icon={Dumbbell} />
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Livello di Esperienza</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Principiante', 'Intermedio', 'Avanzato'].map(l => (
                          <button
                            key={l}
                            onClick={() => setFormData(p => ({...p, experience_level: l}))}
                            className={clsx(
                              "py-4 rounded-2xl font-black text-[10px] tracking-widest transition-all border",
                              formData.experience_level === l ? "bg-primary border-primary text-white" : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                            )}
                          >
                            {l.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                    <TextAreaField 
                      label="Infortuni o Patologie" 
                      placeholder="Note mediche, dolori cronici, interventi recenti..." 
                      icon={Stethoscope}
                      value={formData.injuries || ''} 
                      onChange={v => setFormData(p => ({...p, injuries: v}))} 
                    />
                    <TextAreaField 
                      label="Attrezzatura Disponibile" 
                      placeholder="Palestra commerciale, Garage gym, Elastici/Manubri a casa..." 
                      icon={Info}
                      value={formData.equipment || ''} 
                      onChange={v => setFormData(p => ({...p, equipment: v}))} 
                    />
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Frequenza Settimanale (Target: {formData.training_frequency || 3}gg)</label>
                      <input
                        type="range"
                        min="1"
                        max="7"
                        step="1"
                        value={formData.training_frequency || 3}
                        onChange={e => setFormData(p => ({...p, training_frequency: parseInt(e.target.value)}))}
                        className="w-full accent-primary h-2 bg-white/5 rounded-full appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] font-black text-primary px-1">
                        {[1,2,3,4,5,6,7].map(n => (
                          <span key={n} className={clsx(formData.training_frequency === n ? "opacity-100 scale-125" : "opacity-30")}>{n}gg</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 'biometrics' && (
                <motion.div 
                  key="biometrics"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <SectionTitle title="Metriche Fisiche" subtitle="Parametri attuali per la scomposizione dei macronutrienti" icon={Scale} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-4 group hover:bg-white/[0.04] transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                          <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-center space-y-1">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Peso Corporeo</label>
                          <div className="flex items-baseline justify-center gap-2">
                            <input
                              type="number"
                              step="0.1"
                              value={measurements.weight || ''}
                              onChange={e => setMeasurements(p => ({...p, weight: e.target.value === '' ? undefined : parseFloat(e.target.value)}))}
                              className="w-24 bg-transparent border-none p-0 text-center text-3xl font-black text-white outline-none focus:ring-0"
                              placeholder="0.0"
                            />
                            <span className="text-sm font-black text-primary">KG</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-4 group hover:bg-white/[0.04] transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                          <Activity className="w-6 h-6 text-amber-500" />
                        </div>
                        <div className="text-center space-y-1">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Altezza</label>
                          <div className="flex items-baseline justify-center gap-2">
                            <input
                              type="number"
                              value={formData.height || ''}
                              onChange={e => setFormData(p => ({...p, height: e.target.value === '' ? undefined : parseFloat(e.target.value)}))}
                              className="w-20 bg-transparent border-none p-0 text-center text-3xl font-black text-white outline-none focus:ring-0"
                              placeholder="0"
                            />
                            <span className="text-sm font-black text-amber-500">CM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 border-t border-white/5 pt-8">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Livello di Attività Giornaliera</label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'sedentary', label: 'Sedentario', desc: 'Lavoro d\'ufficio, poco movimento' },
                        { id: 'lightly_active', label: 'Leggermente Attivo', desc: 'Allenamento 1-3 volte a settimana' },
                        { id: 'moderately_active', label: 'Moderatamente Attivo', desc: 'Allenamento 3-5 volte a settimana' },
                        { id: 'very_active', label: 'Molto Attivo', desc: 'Allenamento quotidiano intenso' }
                      ].map(a => (
                        <button
                          key={a.id}
                          onClick={() => setFormData(p => ({...p, activity_level: a.id}))}
                          className={clsx(
                            "p-4 rounded-2xl text-left transition-all border flex items-center justify-between group",
                            formData.activity_level === a.id ? "bg-primary border-primary" : "bg-white/5 border-white/5 hover:bg-white/10"
                          )}
                        >
                          <div>
                            <p className={clsx("font-black italic uppercase text-xs tracking-tight", formData.activity_level === a.id ? "text-white" : "text-white/80 group-hover:text-white")}>
                              {a.label}
                            </p>
                            <p className={clsx("text-[10px] font-medium", formData.activity_level === a.id ? "text-white/60" : "text-slate-500")}>
                              {a.desc}
                            </p>
                          </div>
                          {formData.activity_level === a.id && <CheckCircle2 className="w-5 h-5 text-white" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 'strategy' && (
                <motion.div 
                  key="strategy"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <SectionTitle title="Mission & Strategia" subtitle="Definisci la roadmap e gli obiettivi primari dell'atleta" icon={Target} />
                  <TextAreaField 
                    label="Focus & Obiettivi Strategici (Markdown supportato)" 
                    placeholder="Es. Recomposition corporea con focus su ipertrofia spalle...\n\n- Settimana 1-4: Adattamento anatomico\n- Carichi: RPE 7-8" 
                    icon={Target}
                    rows={12}
                    value={formData.focus_objectives || ''} 
                    onChange={v => setFormData(p => ({...p, focus_objectives: v}))} 
                  />
                  <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 flex gap-4 items-start">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-[11px] text-primary/80 font-medium leading-relaxed">
                      Queste informazioni verranno utilizzate dall'Intelligenza Artificiale per suggerire piani alimentari e allenamenti coerenti con lo stato dell'atleta. Sii il più dettagliato possibile.
                    </p>
                  </div>
                </motion.div>
              )}

              {currentStep === 'programming' && (
                <motion.div 
                  key="programming"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 rounded-[2rem] bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                    <Zap className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">Pronti per la Programmazione</h3>
                  <p className="text-slate-400 font-medium max-w-sm leading-relaxed text-sm">
                    L'anamnesi è completa. Cliccando su "Completa", i dati verranno salvati e potrai procedere alla creazione del programma di allenamento basato su questo profilo.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 w-full mt-8">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold uppercase tracking-tight">Anamnesi Validata</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Prossimo Step</p>
                      <div className="flex items-center gap-2 text-primary">
                        <Zap className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold uppercase tracking-tight">Workout Compiler</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-white/5 bg-slate-900/80 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 'personal' || isSubmitting}
            className="h-14 px-8 rounded-2xl font-black italic uppercase tracking-widest text-[11px] flex items-center gap-2 transition-all hover:bg-white/5 disabled:opacity-0"
          >
            <ChevronLeft className="w-4 h-4" /> Indietro
          </button>
          
          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="h-14 px-10 bg-primary text-white rounded-2xl font-black italic uppercase tracking-widest text-[11px] flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_-10px_rgba(var(--primary-rgb),0.4)]"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                {currentStep === 'programming' ? 'Salva e Inizia' : 'Continua'}
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function SectionTitle({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-primary opacity-50" />
        <h3 className="text-xl font-black text-white italic uppercase tracking-tight">{title}</h3>
      </div>
      <p className="text-[11px] font-medium text-slate-500 max-w-md ml-8">{subtitle}</p>
    </div>
  );
}

function InputField({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/10"
      />
    </div>
  );
}

function TextAreaField({ label, value, onChange, placeholder, icon: Icon, rows = 4 }: { label: string, value: string, onChange: (v: string) => void, placeholder: string, icon: any, rows?: number }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-5 top-5 w-4 h-4 text-primary opacity-30" />
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full bg-slate-950/50 border border-white/5 rounded-[2rem] py-5 pl-14 pr-6 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/10 resize-none custom-scrollbar"
        />
      </div>
    </div>
  );
}
