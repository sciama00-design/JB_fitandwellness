-- Enable the pgvector extension to work with embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Add the embedding column to the exercise_library table
-- Gemini text-embedding-004 produces 768-dimensional vectors
ALTER TABLE public.exercise_library 
ADD COLUMN IF NOT EXISTS embedding vector(768);

-- Create a function to match exercises based on embedding similarity
-- This will be callable via Supabase RPC
CREATE OR REPLACE FUNCTION match_exercises (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  name_it TEXT,
  muscle_group TEXT,
  equipment TEXT,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    exercise_library.id,
    exercise_library.name,
    exercise_library.name_it,
    exercise_library.muscle_group,
    exercise_library.equipment,
    1 - (exercise_library.embedding <=> query_embedding) AS similarity
  FROM exercise_library
  WHERE 1 - (exercise_library.embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;

-- Create an HNSW index for better performance on large datasets
-- (using cosine distance <=>)
CREATE INDEX IF NOT EXISTS exercise_library_embedding_idx 
ON public.exercise_library 
USING hnsw (embedding vector_cosine_ops);
