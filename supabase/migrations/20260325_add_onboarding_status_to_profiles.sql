-- Add onboarding_completed column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;

-- Add comment to profiles table
COMMENT ON COLUMN public.profiles.onboarding_completed IS 'Flag to track if the coach has completed the AI onboarding process.';
