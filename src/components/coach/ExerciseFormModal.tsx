import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Globe, Languages, X } from 'lucide-react';
import Modal from '../Modal';
import { EXERCISE_TRANSLATIONS } from '../../lib/translations';
import { exerciseService } from '../../services/exerciseService';
import type { ExerciseLibrary } from '../../types/database';
import { useAuth } from '../../lib/auth';
import { toast } from 'sonner';

interface ExerciseFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise?: ExerciseLibrary | null;
  onSuccess: (exercise: ExerciseLibrary) => void;
}

export default function ExerciseFormModal({ isOpen, onClose, exercise, onSuccess }: ExerciseFormModalProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<ExerciseLibrary>>({
    name: '',
    name_it: '',
    description: '',
    description_it: '',
    muscle_group: '',
    muscle_group_secondary: '',
    equipment: '',
    mechanic: '',
    force: '',
    difficulty_level: 'intermediate',
    video_urls: [],
    images: [],
    coach_id: user?.id
  });

  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    if (exercise) {
      setFormData({
        ...exercise,
        video_urls: exercise.video_urls || [],
        images: exercise.images || []
      });
    } else {
      setFormData({
        name: '',
        name_it: '',
        description: '',
        description_it: '',
        muscle_group: '',
        muscle_group_secondary: '',
        equipment: '',
        mechanic: '',
        force: '',
        difficulty_level: 'intermediate',
        video_urls: [],
        images: [],
        coach_id: user?.id
      });
    }
  }, [exercise, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Il nome è obbligatorio');
      return;
    }

    setLoading(true);
    try {
      if (exercise?.id) {
        const isSystemExercise = !exercise.coach_id;
        
        // Detect if media changed
        const hasMediaChanged = 
          JSON.stringify(formData.video_urls || []) !== JSON.stringify(exercise.video_urls || []) ||
          JSON.stringify(formData.images || []) !== JSON.stringify(exercise.images || []);

        let result: ExerciseLibrary;
        if (isSystemExercise && hasMediaChanged) {
          // Create a personal fork
          const { id, created_at, ...forkData } = formData;
          result = await exerciseService.createExercise({
            ...forkData,
            coach_id: user?.id,
            forked_from: exercise.id
          });
          toast.success('Creato duplicato personale con i nuovi media');
        } else {
          // Direct update (Global for system text, or personal for personal exercises)
          result = await exerciseService.updateExercise(exercise.id, formData);
          toast.success('Esercizio aggiornato');
        }
        onSuccess(result);
      } else {
        const result = await exerciseService.createExercise({
          ...formData,
          coach_id: user?.id
        });
        toast.success('Esercizio creato');
        onSuccess(result);
      }
      onClose();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'Errore durante il salvataggio');
    } finally {
      setLoading(false);
    }
  };

  const addImage = () => {
    if (imageUrl && !formData.images?.includes(imageUrl)) {
      setFormData(prev => ({
        ...prev,
        images: [...(prev.images || []), imageUrl]
      }));
      setImageUrl('');
    }
  };

  const addVideo = () => {
    if (videoUrl) {
      // Basic normalization of the URL
      let cleanUrl = videoUrl.trim();
      if (!cleanUrl.startsWith('http')) {
        toast.error('URL non valido');
        return;
      }

      setFormData(prev => {
        const currentUrls = prev.video_urls || [];
        if (currentUrls.includes(cleanUrl)) {
          toast.error('Video già presente');
          return prev;
        }

        const newUrls = [...currentUrls, cleanUrl];
        return {
          ...prev,
          video_urls: newUrls
        };
      });
      setVideoUrl('');
    }
  };

  const removeImage = (url: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images?.filter(img => img !== url) || []
    }));
  };

  const removeVideo = (url: string) => {
    setFormData(prev => {
      const newUrls = prev.video_urls?.filter(v => v !== url) || [];
      return {
        ...prev,
        video_urls: newUrls
      };
    });
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={exercise ? 'Modifica Esercizio' : 'Nuovo Esercizio'}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Nomi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40 flex items-center gap-2">
              <Globe className="w-3 h-3" /> Nome (EN)
            </label>
            <input
              type="text"
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={formData.name || ''}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Bench Press"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40 flex items-center gap-2">
              <Languages className="w-3 h-3" /> Nome (IT)
            </label>
            <input
              type="text"
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground text-primary"
              value={formData.name_it || ''}
              onChange={e => setFormData({ ...formData, name_it: e.target.value })}
              placeholder="e.g. Panca Piana"
            />
          </div>
        </div>

        {/* Categorie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Gruppo Muscolare</label>
            <select
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={formData.muscle_group || ''}
              onChange={e => setFormData({ ...formData, muscle_group: e.target.value })}
            >
              <option value="">Seleziona...</option>
              {Object.entries(EXERCISE_TRANSLATIONS.muscle_groups).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Attrezzatura</label>
            <select
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={formData.equipment || ''}
              onChange={e => setFormData({ ...formData, equipment: e.target.value })}
            >
              <option value="">Seleziona...</option>
              {Object.entries(EXERCISE_TRANSLATIONS.equipment).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Meccanica</label>
            <select
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={formData.mechanic || ''}
              onChange={e => setFormData({ ...formData, mechanic: e.target.value })}
            >
              <option value="">Seleziona...</option>
              {Object.entries(EXERCISE_TRANSLATIONS.mechanic).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Forza</label>
            <select
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={formData.force || ''}
              onChange={e => setFormData({ ...formData, force: e.target.value })}
            >
              <option value="">Seleziona...</option>
              {Object.entries(EXERCISE_TRANSLATIONS.force).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Difficoltà</label>
            <select
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={formData.difficulty_level || ''}
              onChange={e => setFormData({ ...formData, difficulty_level: e.target.value })}
            >
              {Object.entries(EXERCISE_TRANSLATIONS.difficulty_level).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Video URLs */}
        <div className="space-y-4">
          <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">URL Video (YouTube/Vimeo)</label>
          <div className="flex gap-2">
            <input
              type="url"
              className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              placeholder="Incolla URL video..."
            />
            <button
              type="button"
              onClick={addVideo}
              className="px-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-primary hover:bg-white/[0.06] transition-all"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-2">
            {formData.video_urls?.map((url, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 group">
                <span className="text-[10px] font-medium truncate flex-1 opacity-60">{url}</span>
                <button
                  type="button"
                  onClick={() => removeVideo(url)}
                  className="p-1.5 text-red-500/40 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Immagini */}
        <div className="space-y-4">
          <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Immagini</label>
          <div className="flex gap-2">
            <input
              type="url"
              className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all font-medium text-sm text-foreground"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="Incolla URL immagine..."
            />
            <button
              type="button"
              onClick={addImage}
              className="px-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-primary hover:bg-white/[0.06] transition-all"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {formData.images?.map((url, idx) => (
              <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border border-white/5 bg-secondary/5">
                <img src={url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Rimuovere questa immagine?')) {
                      removeImage(url);
                    }
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500/90 hover:bg-red-500 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-white shadow-xl backdrop-blur-sm"
                  title="Rimuovi Immagine"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Descrizioni */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Descrizione (IT)</label>
            <textarea
              className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm h-32"
              value={formData.description_it || ''}
              onChange={e => setFormData({ ...formData, description_it: e.target.value })}
              placeholder="Istruzioni per l'esecuzione in italiano..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">Description (EN)</label>
            <textarea
              className="w-full bg-secondary/20 border border-white/5 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm h-32 opacity-60"
              value={formData.description || ''}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              placeholder="Instructions in English..."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={loading}
            className="h-10 px-6 btn btn-primary rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 transition-all disabled:opacity-50"
          >
            {loading ? <Save className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Salva Esercizio
          </button>
        </div>
      </form>
    </Modal>
  );
}
