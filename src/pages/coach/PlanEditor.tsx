import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { planService } from '../../services/planService';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/auth';
import WorkoutPlanEditor from '../../components/coach/WorkoutPlanEditor';
import type { WorkoutPlan, PlanExercise } from '../../types/database';

export default function PlanEditor() {
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const athleteIdFromUrl = searchParams.get('athleteId');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const isEditing = !!planId;

  // Fetch athletes (coaches only)
  const { data: athletes } = useQuery({
    queryKey: ['coach-athletes', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('coach_id', user?.id)
        .eq('role', 'athlete');
      
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const { data: existingPlan, isLoading: isLoadingPlan } = useQuery({
    queryKey: ['plan', planId],
    queryFn: () => planService.getPlanWithExercises(planId!),
    enabled: isEditing,
  });

  const saveMutation = useMutation({
    mutationFn: async (data: { plan: Partial<WorkoutPlan>; exercises: Partial<PlanExercise>[] }) => {
      if (isEditing) {
        await planService.updatePlan(planId!, data.plan, data.exercises as PlanExercise[]);
      } else {
        await planService.createPlan({ ...data.plan, coach_id: user?.id }, data.exercises as PlanExercise[]);
      }
    },
    onSuccess: () => {
      const athleteId = existingPlan?.athlete_id || athleteIdFromUrl;
      
      queryClient.invalidateQueries({ queryKey: ['coach-plans', user?.id] });
      if (athleteId) {
        queryClient.invalidateQueries({ queryKey: ['athlete-detail', athleteId] });
        navigate(`/coach/athletes/${athleteId}`);
      } else {
        navigate('/coach');
      }
    }
  });

  if (isLoadingPlan && isEditing) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <Loader2 className="animate-spin text-primary-500 w-12 h-12" />
        <p className="text-slate-500 font-bold animate-pulse">Caricamento scheda...</p>
      </div>
    );
  }

  return (
    <WorkoutPlanEditor 
      mode={isEditing ? 'edit' : 'create'}
      initialData={existingPlan || (athleteIdFromUrl ? { athlete_id: athleteIdFromUrl } as any : undefined)}
      athletes={athletes || []}
      onSubmit={(data) => saveMutation.mutateAsync(data)}
      isSubmitting={saveMutation.isPending}
      onBack={() => navigate(-1)}
    />
  );
}
