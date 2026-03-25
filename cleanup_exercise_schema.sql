-- Cleanup: Remove extra AI metadata columns but keep is_time_based

-- Table: exercises
ALTER TABLE exercises 
DROP COLUMN IF EXISTS needs_confirmation,
DROP COLUMN IF EXISTS confidence_score,
DROP COLUMN IF EXISTS alternatives,
DROP COLUMN IF EXISTS spoken_name;

-- Table: plan_template_exercises
ALTER TABLE plan_template_exercises 
DROP COLUMN IF EXISTS needs_confirmation,
DROP COLUMN IF EXISTS confidence_score,
DROP COLUMN IF EXISTS alternatives,
DROP COLUMN IF EXISTS spoken_name;

-- Note: is_time_based, group_iterations, and video_urls are KEPT 
-- as they are used for workout display/execution.
