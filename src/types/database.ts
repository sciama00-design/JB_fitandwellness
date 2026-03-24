export type UserRole = 'coach' | 'athlete';

export type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  role: UserRole;
  coach_id: string | null;
  created_at: string;
  dietary_preferences: string[] | null;
  intolerances: string[] | null;
  disliked_foods: string[] | null;
  schedule_constraints: string | null;
  focus_objectives: string | null;
};

export type ExerciseLibrary = {
  id: string;
  name: string;
  name_it?: string | null;
  description: string | null;
  description_it?: string | null;
  video_urls?: string[] | null;
  muscle_group: string | null;
  muscle_group_secondary: string | null;
  equipment: string | null;
  difficulty_level: string | null;
  mechanic: string | null;
  force: string | null;
  images: string[] | null;
  forked_from?: string | null;
  coach_id: string | null;
  embedding?: number[] | null;
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
  rest_esercizio: number;
  order_index: number;
  image_url: string | null;
  coach_notes: string | null;
  superset_id: string | null;
  group_id: string | null;
  group_name: string | null;
  target_reps_detail: number[] | null;
  spoken_name?: string;
  group_iterations?: number | null;
  video_urls?: string[] | null;
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
  rest_esercizio: number;
  order_index: number;
  image_url: string | null;
  coach_notes: string | null;
  superset_id: string | null;
  group_id: string | null;
  group_name: string | null;
  target_reps_detail: number[] | null;
  spoken_name?: string;
  group_iterations?: number | null;
  video_urls?: string[] | null;
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

export type DietPlan = {
  id: string;
  athlete_id: string;
  coach_id: string;
  target_kcal: number;
  target_protein?: number;
  target_carbs?: number;
  target_fats?: number;
  ai_guidelines: string | null;
  template_id: string;
  selections: any; // JSONB
  created_at: string;
  updated_at: string;
};

export type AIMealPlan = {
  id: string;
  athlete_id: string;
  coach_id: string;
  date: string;
  meals: any; // JSONB
  created_at: string;
  updated_at: string;
};

export type WeeklyPlannerEntry = {
  id: string;
  athlete_id: string;
  date: string;
  commitments: string | null;
  meals: any | null;
  daily_preferences: string | null;
  ai_suggestions: string | null;
  created_at: string;
};

export type Recipe = {
  id: string;
  name: string;
  description: string | null;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  image_url: string | null;
  external_link: string | null;
  ingredients: any; // JSONB
  instructions: string | null;
  is_public: boolean;
  coach_id: string | null;
  created_at: string;
};

export type ExerciseMapping = {
  id: string;
  coach_id: string;
  slang_name: string;
  standard_exercise_id: string;
  created_at: string;
};

export type CoachPreference = {
  id: string;
  coach_id: string;
  content: string;
  created_at: string;
};

