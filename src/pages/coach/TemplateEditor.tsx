import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templateService } from '../../services/templateService';
import { Loader2 } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import WorkoutPlanEditor from '../../components/coach/WorkoutPlanEditor';
import type { WorkoutPlanTemplate, PlanTemplateExercise } from '../../types/database';

export default function TemplateEditor() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const isEditing = !!templateId;

  const { data: existingTemplate, isLoading: isLoadingTemplate } = useQuery({
    queryKey: ['template', templateId],
    queryFn: () => templateService.getTemplateWithExercises(templateId!),
    enabled: isEditing,
  });

  const saveMutation = useMutation({
    mutationFn: async (data: { plan: Partial<WorkoutPlanTemplate>; exercises: Partial<PlanTemplateExercise>[] }) => {
      if (isEditing) {
        await templateService.updateTemplate(templateId!, data.plan, data.exercises as PlanTemplateExercise[]);
      } else {
        await templateService.createTemplate({ ...data.plan, coach_id: user?.id }, data.exercises as PlanTemplateExercise[]);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coach-templates'] });
      navigate('/coach/library');
    }
  });

  if (isLoadingTemplate && isEditing) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <Loader2 className="animate-spin text-emerald-500 w-12 h-12" />
        <p className="text-slate-500 font-bold animate-pulse">Caricamento modello...</p>
      </div>
    );
  }

  return (
    <WorkoutPlanEditor 
      mode={isEditing ? 'edit' : 'create'}
      initialData={existingTemplate}
      onSubmit={(data) => saveMutation.mutateAsync(data)}
      isSubmitting={saveMutation.isPending}
      isTemplate={true}
    />
  );
}
