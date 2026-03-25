-- Comprehensive migration to fix exercise tables schema

-- Table: exercises (active plans)
ALTER TABLE exercises 
ADD COLUMN IF NOT EXISTS is_time_based BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS needs_confirmation BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS confidence_score NUMERIC,
ADD COLUMN IF NOT EXISTS alternatives JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS spoken_name TEXT,
ADD COLUMN IF NOT EXISTS group_iterations INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS video_urls TEXT[] DEFAULT '{}';

-- Table: plan_template_exercises (templates)
ALTER TABLE plan_template_exercises 
ADD COLUMN IF NOT EXISTS is_time_based BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS needs_confirmation BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS confidence_score NUMERIC,
ADD COLUMN IF NOT EXISTS alternatives JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS spoken_name TEXT,
ADD COLUMN IF NOT EXISTS group_iterations INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS video_urls TEXT[] DEFAULT '{}';

-- Table: exercise_logs (session history)
ALTER TABLE exercise_logs 
ADD COLUMN IF NOT EXISTS is_time_based BOOLEAN DEFAULT FALSE;
