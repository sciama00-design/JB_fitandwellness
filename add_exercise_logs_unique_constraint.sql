-- Migration to fix the "42P10" error (missing unique constraint for ON CONFLICT)
-- This enables the upsert functionality in the workout session logger

ALTER TABLE exercise_logs 
ADD CONSTRAINT exercise_logs_session_exercise_set_key 
UNIQUE (session_id, exercise_id, set_number);
