-- Final migration to support time-based exercises

-- Add is_time_based to exercises (active plans)
ALTER TABLE exercises 
ADD COLUMN IF NOT EXISTS is_time_based BOOLEAN DEFAULT FALSE;

-- Add is_time_based to plan_template_exercises (templates)
ALTER TABLE plan_template_exercises 
ADD COLUMN IF NOT EXISTS is_time_based BOOLEAN DEFAULT FALSE;

-- Add is_time_based to exercise_logs (session history)
ALTER TABLE exercise_logs 
ADD COLUMN IF NOT EXISTS is_time_based BOOLEAN DEFAULT FALSE;
