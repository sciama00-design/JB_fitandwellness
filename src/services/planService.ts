import { supabase } from '../lib/supabase';
import { templateService } from './templateService';
import type { WorkoutPlan, PlanExercise, PlanTemplateExercise } from '../types/database';

export const planService = {
  async getCoachPlans(coachId: string) {
    const { data, error } = await supabase
      .from('workout_plans')
      .select('*, profiles:athlete_id(*)')
      .eq('coach_id', coachId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  async getAthletePlans(athleteId: string) {
    const { data, error } = await supabase
      .from('workout_plans')
      .select('*')
      .eq('athlete_id', athleteId)
      .eq('active', true)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as WorkoutPlan[];
  },

  async getPlanWithExercises(planId: string) {
    const { data: plan, error: planError } = await supabase
      .from('workout_plans')
      .select('*')
      .eq('id', planId)
      .single();

    if (planError) throw planError;

    const { data: exercises, error: exercisesError } = await supabase
      .from('exercises')
      .select('*')
      .eq('plan_id', planId)
      .order('order_index');

    if (exercisesError) throw exercisesError;

    return { ...plan, exercises: exercises as PlanExercise[] };
  },

  async createPlan(plan: Partial<WorkoutPlan>, exercises: Partial<PlanExercise>[]) {
    // 1. Insert Plan
    const { data: newPlan, error: planError } = await supabase
      .from('workout_plans')
      .insert([plan])
      .select()
      .single();

    if (planError) throw planError;
 
    // 2. Insert Exercises
    const exercisesWithPlanId = exercises.map((ex, index) => ({
      exercise_library_id: ex.exercise_library_id,
      name: ex.name,
      target_sets: ex.target_sets,
      target_reps: ex.target_reps,
      target_reps_detail: ex.target_reps_detail,
      rest_seconds: ex.rest_seconds,
      rest_esercizio: ex.rest_esercizio,
      order_index: index,
      video_urls: ex.video_urls || [],
      image_url: ex.image_url,
      coach_notes: ex.coach_notes,
      superset_id: ex.superset_id,
      group_id: ex.group_id,
      group_name: ex.group_name,
      group_iterations: ex.group_iterations || 1,
      is_time_based: ex.is_time_based || false,
      plan_id: newPlan.id,
    }));
 
    const { error: exercisesError } = await supabase
      .from('exercises')
      .insert(exercisesWithPlanId);
 
    if (exercisesError) throw exercisesError;
 
    return newPlan;
  },

  async updatePlan(planId: string, plan: Partial<WorkoutPlan>, exercises: Partial<PlanExercise>[]) {
    // 1. Update Plan
    const { error: planError } = await supabase
      .from('workout_plans')
      .update(plan)
      .eq('id', planId);

    if (planError) throw planError;

    // 2. Delete old exercises
    const { error: deleteError } = await supabase
      .from('exercises')
      .delete()
      .eq('plan_id', planId);

    if (deleteError) throw deleteError;
 
    // 3. Insert new exercises
    const exercisesWithPlanId = exercises.map((ex, index) => ({
      exercise_library_id: ex.exercise_library_id,
      name: ex.name,
      target_sets: ex.target_sets,
      target_reps: ex.target_reps,
      target_reps_detail: ex.target_reps_detail,
      rest_seconds: ex.rest_seconds,
      rest_esercizio: ex.rest_esercizio,
      order_index: index,
      video_urls: ex.video_urls || [],
      image_url: ex.image_url,
      coach_notes: ex.coach_notes,
      superset_id: ex.superset_id,
      group_id: ex.group_id,
      group_name: ex.group_name,
      group_iterations: ex.group_iterations || 1,
      is_time_based: ex.is_time_based || false,
      plan_id: planId,
    }));
 
    const { error: exercisesError } = await supabase
      .from('exercises')
      .insert(exercisesWithPlanId);
 
    if (exercisesError) throw exercisesError;
  },

  async deletePlan(planId: string) {
    // 1. Delete exercises first
    const { error: exercisesError } = await supabase
      .from('exercises')
      .delete()
      .eq('plan_id', planId);

    if (exercisesError) throw exercisesError;

    // 2. Delete plan
    const { error: planError } = await supabase
      .from('workout_plans')
      .delete()
      .eq('id', planId);

    if (planError) throw planError;
  },

  async createPlanFromTemplate(templateId: string, athleteId: string, coachId: string) {
    // 1. Get template details with exercises
    const template = await templateService.getTemplateWithExercises(templateId);

    // 2. Create new plan based on template
    const newPlanData: Partial<WorkoutPlan> = {
      name: template.name,
      description: template.description,
      athlete_id: athleteId,
      coach_id: coachId,
      active: true,
    };

    // 3. Prepare exercises (remove IDs and set new plan_id)
    const newExercisesData: Partial<PlanExercise>[] = template.exercises.map((ex: PlanTemplateExercise) => {
      return {
        exercise_library_id: ex.exercise_library_id,
        name: ex.name,
        target_sets: ex.target_sets,
        target_reps: ex.target_reps,
        rest_seconds: ex.rest_seconds,
        rest_esercizio: ex.rest_esercizio,
        order_index: ex.order_index,
        video_urls: ex.video_urls,
        image_url: ex.image_url,
        coach_notes: ex.coach_notes,
        superset_id: ex.superset_id,
        group_id: ex.group_id,
        group_name: ex.group_name,
        group_iterations: ex.group_iterations,
        target_reps_detail: ex.target_reps_detail,
        is_time_based: ex.is_time_based,
      };
    });

    return this.createPlan(newPlanData, newExercisesData);
  },

  async updatePlanStatus(planId: string, active: boolean) {
    const { error } = await supabase
      .from('workout_plans')
      .update({ active })
      .eq('id', planId);
    if (error) throw error;
  }
};

