-- Migration: Add birth_date and anamnesi fields to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS birth_date DATE,
ADD COLUMN IF NOT EXISTS gender TEXT,
ADD COLUMN IF NOT EXISTS height NUMERIC,
ADD COLUMN IF NOT EXISTS weight NUMERIC,
ADD COLUMN IF NOT EXISTS activity_level TEXT,
ADD COLUMN IF NOT EXISTS experience_level TEXT,
ADD COLUMN IF NOT EXISTS injuries TEXT,
ADD COLUMN IF NOT EXISTS equipment TEXT,
ADD COLUMN IF NOT EXISTS training_frequency INTEGER,
ADD COLUMN IF NOT EXISTS target_deficit INTEGER DEFAULT 500;

-- Comments for clarity
COMMENT ON COLUMN public.profiles.birth_date IS 'Athlete birth date for age calculation';
COMMENT ON COLUMN public.profiles.experience_level IS 'Technical experience: beginner, intermediate, advanced';
COMMENT ON COLUMN public.profiles.injuries IS 'Medical notes, injuries, pathologies';
COMMENT ON COLUMN public.profiles.equipment IS 'Available equipment: home, gym, specific tools';
COMMENT ON COLUMN public.profiles.training_frequency IS 'Desired workout sessions per week';
