-- Rename rest_between_reps_seconds to rest_esercizio in exercises and plan_template_exercises
ALTER TABLE public.exercises RENAME COLUMN rest_between_reps_seconds TO rest_esercizio;
ALTER TABLE public.plan_template_exercises RENAME COLUMN rest_between_reps_seconds TO rest_esercizio;

-- Comment on columns to clarify usage
COMMENT ON COLUMN public.exercises.rest_seconds IS 'Rest between sets of the same exercise';
COMMENT ON COLUMN public.exercises.rest_esercizio IS 'Rest after the last set of the exercise before the next one';

COMMENT ON COLUMN public.plan_template_exercises.rest_seconds IS 'Rest between sets of the same exercise';
COMMENT ON COLUMN public.plan_template_exercises.rest_esercizio IS 'Rest after the last set of the exercise before the next one';
