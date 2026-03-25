-- Add category column to coach_preferences
ALTER TABLE public.coach_preferences 
ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'workout';

-- Add check constraint for allowed categories
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'coach_preferences_category_check') THEN
        ALTER TABLE public.coach_preferences
        ADD CONSTRAINT coach_preferences_category_check 
        CHECK (category IN ('workout', 'nutrition', 'strategic'));
    END IF;
END $$;

-- Update comment
COMMENT ON COLUMN public.coach_preferences.category IS 'The category of the preference (workout, nutrition, or strategic).';
