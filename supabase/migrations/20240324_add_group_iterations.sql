-- Add group_iterations column to exercises and plan_template_exercises
ALTER TABLE exercises ADD COLUMN IF NOT EXISTS group_iterations INTEGER DEFAULT 1;
ALTER TABLE plan_template_exercises ADD COLUMN IF NOT EXISTS group_iterations INTEGER DEFAULT 1;

-- Also update existing records to have 1 as default
UPDATE exercises SET group_iterations = 1 WHERE group_iterations IS NULL;
UPDATE plan_template_exercises SET group_iterations = 1 WHERE group_iterations IS NULL;
