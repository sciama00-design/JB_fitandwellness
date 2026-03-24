-- Create exercise_mappings table
CREATE TABLE IF NOT EXISTS public.exercise_mappings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    slang_name TEXT NOT NULL,
    standard_exercise_id UUID NOT NULL REFERENCES public.exercise_library(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(coach_id, slang_name)
);

-- Add RLS policies
ALTER TABLE public.exercise_mappings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Coaches can manage their own mappings"
ON public.exercise_mappings
FOR ALL
USING (auth.uid() = coach_id)
WITH CHECK (auth.uid() = coach_id);

-- Add comment
COMMENT ON TABLE public.exercise_mappings IS 'Stores custom naming mappings for workout exercises per coach.';
