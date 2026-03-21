export type UserRole = 'coach' | 'athlete';

export type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  role: UserRole;
  coach_id: string | null;
  created_at: string;
};

export type ExerciseLibrary = {
  id: string;
  name: string;
  description: string | null;
  video_url: string | null;
  muscle_group: string | null;
  muscle_group_secondary: string | null;
  equipment: string | null;
  difficulty_level: string | null;
  mechanic: string | null;
  force: string | null;
  images: string[] | null;
  coach_id: string | null;
  created_at: string;
};

export type WorkoutPlan = {
  id: string;
  name: string;
  description: string | null;
  coach_id: string;
  athlete_id: string;
  created_at: string;
  active: boolean;
};

export type WorkoutPlanTemplate = {
  id: string;
  name: string;
  description: string | null;
  coach_id: string;
  created_at: string;
  updated_at: string;
};

export type PlanTemplateExercise = {
  id: string;
  template_id: string;
  exercise_library_id: string | null;
  name: string;
  target_sets: number;
  target_reps: number;
  rest_seconds: number;
  rest_between_reps_seconds: number;
  order_index: number;
  video_url: string | null;
  image_url: string | null;
  coach_notes: string | null;
  superset_id: string | null;
  group_id: string | null;
  group_name: string | null;
  target_reps_detail: number[] | null;
  created_at: string;
};

export type PlanExercise = {
  id: string;
  plan_id: string;
  exercise_library_id: string | null;
  name: string;
  target_sets: number;
  target_reps: number;
  rest_seconds: number;
  rest_between_reps_seconds: number;
  order_index: number;
  video_url: string | null;
  image_url: string | null;
  coach_notes: string | null;
  superset_id: string | null;
  group_id: string | null;
  group_name: string | null;
  target_reps_detail: number[] | null;
  created_at: string;
};

export type WorkoutSession = {
  id: string;
  plan_id: string;
  athlete_id: string;
  started_at: string;
  completed_at: string | null;
  notes: string | null;
  duration_seconds: number | null;
};

export type ExerciseLog = {
  id: string;
  session_id: string;
  exercise_id: string;
  set_number: number;
  reps: number;
  weight: number | null;
  notes: string | null;
  athlete_feedback: string | null;
  rpe: number | null;
  created_at: string;
};

export type BodyMeasurement = {
  id: string;
  athlete_id: string;
  weight: number | null;
  body_fat_percentage: number | null;
  neck: number | null;
  chest: number | null;
  waist: number | null;
  hips: number | null;
  biceps: number | null;
  thighs: number | null;
  calves: number | null;
  notes: string | null;
  recorded_at: string;
};

export type Appointment = {
  id: string;
  coach_id: string;
  athlete_id: string | null;
  title: string;
  description: string | null;
  start_time: string;
  end_time: string;
  location: string | null;
  created_at: string;
};
