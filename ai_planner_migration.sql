-- Update profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS dietary_preferences TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS intolerances TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS disliked_foods TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS schedule_constraints TEXT;

-- Update diet_plans table
ALTER TABLE diet_plans
ADD COLUMN IF NOT EXISTS target_protein NUMERIC,
ADD COLUMN IF NOT EXISTS target_carbs NUMERIC,
ADD COLUMN IF NOT EXISTS target_fats NUMERIC,
ADD COLUMN IF NOT EXISTS ai_guidelines TEXT;

-- Create ai_meal_plans table
CREATE TABLE IF NOT EXISTS ai_meal_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  athlete_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  coach_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  meals JSONB DEFAULT '[]', -- The generated meals array
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(athlete_id, date)
);

-- RLS for ai_meal_plans
ALTER TABLE ai_meal_plans ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Athletes can view their own ai_meal_plans" ON ai_meal_plans;
DROP POLICY IF EXISTS "Athletes can update their own ai_meal_plans (for swapping)" ON ai_meal_plans;
DROP POLICY IF EXISTS "Athletes can manage their own ai_meal_plans" ON ai_meal_plans;

CREATE POLICY "Athletes can manage their own ai_meal_plans"
  ON ai_meal_plans FOR ALL
  USING (auth.uid() = athlete_id);

DROP POLICY IF EXISTS "Coaches can view their athletes' ai_meal_plans" ON ai_meal_plans;
DROP POLICY IF EXISTS "Coaches can manage ai_meal_plans" ON ai_meal_plans;

CREATE POLICY "Coaches can manage ai_meal_plans"
  ON ai_meal_plans FOR ALL
  USING (auth.uid() = coach_id);

-- Ensure unique constraint for upsert
ALTER TABLE ai_meal_plans 
DROP CONSTRAINT IF EXISTS ai_meal_plans_athlete_id_date_key,
ADD CONSTRAINT ai_meal_plans_athlete_id_date_key UNIQUE (athlete_id, date);
