-- Create todos table
CREATE TABLE IF NOT EXISTS public.todos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    athlete_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    due_date TIMESTAMPTZ NOT NULL,
    completed BOOLEAN DEFAULT false,
    category TEXT DEFAULT 'task',
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS
ALTER TABLE public.todos ENABLE ROW LEVEL SECURITY;

-- Policies for coaches
CREATE POLICY "Coaches can manage their own todos"
    ON public.todos
    FOR ALL
    USING (auth.uid() = user_id);

-- Policies for athletes (private todos)
CREATE POLICY "Athletes can manage their own todos"
    ON public.todos
    FOR ALL
    USING (auth.uid() = user_id);

-- Policy for coaches to see/manage todos assigned to athletes (if shared)
-- Assuming a coach might want to see todos they assigned to an athlete
CREATE POLICY "Coaches can see todos they assigned to athletes"
    ON public.todos
    FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = public.todos.athlete_id 
        AND coach_id = auth.uid()
    ));

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_todos_user_id ON public.todos(user_id);
CREATE INDEX IF NOT EXISTS idx_todos_athlete_id ON public.todos(athlete_id);
CREATE INDEX IF NOT EXISTS idx_todos_due_date ON public.todos(due_date);
