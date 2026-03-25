import { supabase } from '../lib/supabase';
import type { WorkoutPlanTemplate, PlanTemplateExercise } from '../types/database';

export const templateService = {
  async getCoachTemplates(coachId: string) {
    const { data, error } = await supabase
      .from('workout_plan_templates')
      .select('*')
      .eq('coach_id', coachId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as WorkoutPlanTemplate[];
  },

  async getTemplateWithExercises(templateId: string) {
    const { data: template, error: templateError } = await supabase
      .from('workout_plan_templates')
      .select('*')
      .eq('id', templateId)
      .single();

    if (templateError) throw templateError;

    const { data: exercises, error: exercisesError } = await supabase
      .from('plan_template_exercises')
      .select('*')
      .eq('template_id', templateId)
      .order('order_index');

    if (exercisesError) throw exercisesError;

    return { ...template, exercises: exercises as PlanTemplateExercise[] };
  },

  async createTemplate(template: Partial<WorkoutPlanTemplate>, exercises: Partial<PlanTemplateExercise>[]) {
    // 1. Insert Template
    const { data: newTemplate, error: templateError } = await supabase
      .from('workout_plan_templates')
      .insert([template])
      .select()
      .single();

    if (templateError) throw templateError;

    // 2. Insert Exercises
    const exercisesWithTemplateId = exercises.map((ex, index) => ({
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
      template_id: newTemplate.id,
    }));

    const { error: exercisesError } = await supabase
      .from('plan_template_exercises')
      .insert(exercisesWithTemplateId);

    if (exercisesError) throw exercisesError;

    return newTemplate;
  },

  async updateTemplate(templateId: string, template: Partial<WorkoutPlanTemplate>, exercises: Partial<PlanTemplateExercise>[]) {
    // 1. Update Template
    const { error: templateError } = await supabase
      .from('workout_plan_templates')
      .update({ ...template, updated_at: new Date().toISOString() })
      .eq('id', templateId);

    if (templateError) throw templateError;

    // 2. Delete old exercises
    const { error: deleteError } = await supabase
      .from('plan_template_exercises')
      .delete()
      .eq('template_id', templateId);

    if (deleteError) throw deleteError;

    // 3. Insert new exercises
    const exercisesWithTemplateId = exercises.map((ex, index) => ({
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
      template_id: templateId,
    }));

    const { error: exercisesError } = await supabase
      .from('plan_template_exercises')
      .insert(exercisesWithTemplateId);

    if (exercisesError) throw exercisesError;
  },

  async deleteTemplate(templateId: string) {
    const { error } = await supabase
      .from('workout_plan_templates')
      .delete()
      .eq('id', templateId);
    
    if (error) throw error;
  }
};
