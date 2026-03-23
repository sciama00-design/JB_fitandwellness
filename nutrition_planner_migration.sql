-- Weekly Planner Table
CREATE TABLE IF NOT EXISTS weekly_planner (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  athlete_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  commitments TEXT,
  daily_preferences TEXT,
  ai_suggestions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(athlete_id, date)
);

-- Recipes Table
CREATE TABLE IF NOT EXISTS recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  kcal NUMERIC,
  protein NUMERIC,
  carbs NUMERIC,
  fat NUMERIC,
  image_url TEXT,
  external_link TEXT,
  ingredients JSONB DEFAULT '[]',
  instructions TEXT,
  is_public BOOLEAN DEFAULT false,
  coach_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for weekly_planner
ALTER TABLE weekly_planner ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own weekly_planner"
  ON weekly_planner FOR ALL
  USING (auth.uid() = athlete_id);

CREATE POLICY "Coaches can view their athletes' weekly_planner"
  ON weekly_planner FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = weekly_planner.athlete_id
      AND profiles.coach_id = auth.uid()
    )
  );

-- RLS for recipes
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Recipes are viewable by everyone if public or owned"
  ON recipes FOR SELECT
  USING (is_public = true OR auth.uid() = coach_id OR EXISTS (
    SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.coach_id = recipes.coach_id
  ));

CREATE POLICY "Coaches can manage their own recipes"
  ON recipes FOR ALL
  USING (auth.uid() = coach_id);
