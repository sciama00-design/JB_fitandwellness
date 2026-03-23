-- ATTENZIONE: Questo script elimina tutti gli esercizi di sistema (coach_id IS NULL)
-- per permettere una ricarica pulita della libreria con gli ID corretti e le traduzioni.
-- Gli esercizi personalizzati creati dai coach (coach_id IS NOT NULL) NON verranno toccati.

DELETE FROM public.exercise_library 
WHERE coach_id IS NULL;
