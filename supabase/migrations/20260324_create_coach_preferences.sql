-- Create coach_preferences table
CREATE TABLE IF NOT EXISTS public.coach_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Add RLS policies
ALTER TABLE public.coach_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Coaches can manage their own preferences"
ON public.coach_preferences
FOR ALL
USING (auth.uid() = coach_id)
WITH CHECK (auth.uid() = coach_id);

-- Add comment
COMMENT ON TABLE public.coach_preferences IS 'Stores persistent coach preferences for the AI workout compiler (e.g., slang names, sequences).';
