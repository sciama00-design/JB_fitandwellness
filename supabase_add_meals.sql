-- Migration to add meals column to weekly_planner
ALTER TABLE weekly_planner 
ADD COLUMN IF NOT EXISTS meals JSONB DEFAULT '{}';
