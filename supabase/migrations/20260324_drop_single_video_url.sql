-- Drop redundant video_url columns from exercise-related tables
-- This is done after migrating the data to the video_urls array column

-- 1. Table: exercise_library
ALTER TABLE exercise_library DROP COLUMN IF EXISTS video_url;

-- 2. Table: exercises (assigned exercises in plans)
ALTER TABLE exercises DROP COLUMN IF EXISTS video_url;

-- 3. Table: plan_template_exercises
ALTER TABLE plan_template_exercises DROP COLUMN IF EXISTS video_url;
