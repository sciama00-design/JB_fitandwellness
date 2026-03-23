
-- Fix RLS for exercise_library to allow coaches to update system exercises
-- (those where coach_id is NULL). This allows adding videos to the shared library.

-- 1. Ensure RLS is enabled
ALTER TABLE public.exercise_library ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing policies if they conflict (be careful!)
-- DROP POLICY IF EXISTS "Coaches can edit system exercises" ON public.exercise_library;
-- DROP POLICY IF EXISTS "Coaches can edit their own exercises" ON public.exercise_library;

-- 3. Policy: Authenticated coaches can update system exercises (coach_id is NULL)
CREATE POLICY "Coaches can edit system exercises" ON public.exercise_library
FOR UPDATE TO authenticated
USING (coach_id IS NULL)
WITH CHECK (coach_id IS NULL);

-- 4. Policy: Authenticated coaches can manage their OWN exercises
CREATE POLICY "Coaches can manage their own exercises" ON public.exercise_library
FOR ALL TO authenticated
USING (coach_id = auth.uid());

-- 5. Policy: Everyone can view all exercises
CREATE POLICY "Everyone can view all exercises" ON public.exercise_library
FOR SELECT TO authenticated
USING (true);

-- NOTE: If you receive a 'policy already exists' error, you may need to 
-- drop the existing policies first or adjust them in the Supabase Dashboard.
