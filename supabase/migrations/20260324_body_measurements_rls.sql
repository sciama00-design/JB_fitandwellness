-- Enable RLS if not enabled
ALTER TABLE body_measurements ENABLE ROW LEVEL SECURITY;

-- Allow athletes to manage their own measurements
DROP POLICY IF EXISTS "Users can manage their own measurements" ON body_measurements;
CREATE POLICY "Users can manage their own measurements"
ON body_measurements
FOR ALL
TO authenticated
USING (auth.uid() = athlete_id)
WITH CHECK (auth.uid() = athlete_id);

-- Allow coaches to manage measurements for their athletes
DROP POLICY IF EXISTS "Coaches can manage measurements for their athletes" ON body_measurements;
CREATE POLICY "Coaches can manage measurements for their athletes"
ON body_measurements
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = body_measurements.athlete_id
    AND profiles.coach_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = body_measurements.athlete_id
    AND profiles.coach_id = auth.uid()
  )
);
