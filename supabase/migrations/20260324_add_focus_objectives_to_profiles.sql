-- Add focus_objectives column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS focus_objectives TEXT;
