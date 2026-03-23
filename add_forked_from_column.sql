
-- Add forked_from column to track personal copies of system exercises
-- This allows the UI to hide the original system exercise when a personal one exists.

ALTER TABLE public.exercise_library 
ADD COLUMN IF NOT EXISTS forked_from UUID REFERENCES public.exercise_library(id) ON DELETE SET NULL;

-- Ensure RLS allows coaches to see and update this column
-- (The previously applied 'Coaches can edit system exercises' policy should already handle updates)

-- You might want to add an index for performance if the library grows large:
CREATE INDEX IF NOT EXISTS idx_exercise_library_forked_from ON public.exercise_library(forked_from);
