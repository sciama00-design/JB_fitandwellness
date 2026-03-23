import fs from 'fs';
import path from 'path';

const SOURCE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
const OUTPUT_FILE = 'populate_exercise_library.sql';

async function importExercises() {
  console.log('Fetching exercises from GitHub...');
  try {
    const response = await fetch(SOURCE_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const exercises = await response.json();

    console.log(`Successfully fetched ${exercises.length} exercises.`);

    let sql = '-- Populate exercise_library from yuhonas/free-exercise-db\n';
    sql += 'INSERT INTO public.exercise_library (\n';
    sql += '  id, name, description, muscle_group, muscle_group_secondary, \n';
    sql += '  equipment, difficulty_level, mechanic, force, images, created_at\n';
    sql += ') VALUES\n';

    const escape = (str) => {
      if (str === null || str === undefined) return 'NULL';
      return `'${String(str).replace(/'/g, "''")}'`;
    };

    const values = exercises.map(ex => {
      const description = ex.instructions ? ex.instructions.join('\n') : null;
      const primaryMuscle = ex.primaryMuscles && ex.primaryMuscles.length > 0 ? ex.primaryMuscles[0] : null;
      const secondaryMuscle = ex.secondaryMuscles && ex.secondaryMuscles.length > 0 ? ex.secondaryMuscles[0] : null;
      const imageUrls = ex.images ? ex.images.map(img => `${IMAGE_BASE_URL}${img}`) : [];
      
      // I'll keep the ID from GitHub as is if it's a UUID-like string or generate a random one if needed.
      // Actually, Supabase expect UUID. The GitHub IDs are like "3_4_Sit-Up". 
      // I should probably generate UUIDs to avoid issues if the table enforces UUID.
      // However, if the table allows text, I'll use them.
      // Re-checking database.ts: ExerciseLibrary has id: string. Usually UUID in Supabase.
      // If I use crypto.randomUUID() it's safer.
      const id = crypto.randomUUID();

      return `(\n  ${escape(id)}, \n  ${escape(ex.name)}, \n  ${escape(description)}, \n  ${escape(primaryMuscle)}, \n  ${escape(secondaryMuscle)}, \n  ${escape(ex.equipment)}, \n  ${escape(ex.level)}, \n  ${escape(ex.mechanic)}, \n  ${escape(ex.force)}, \n  ${escape(JSON.stringify(imageUrls))}, \n  NOW()\n)`;
    });

    // Chunking to avoid massive single insert (Supabase/Postgres limits)
    const chunkSize = 100;
    let finalSql = '';
    for (let i = 0; i < values.length; i += chunkSize) {
      const chunk = values.slice(i, i + chunkSize);
      finalSql += `INSERT INTO public.exercise_library (\n  name, description, muscle_group, muscle_group_secondary, \n  equipment, difficulty_level, mechanic, force, images, created_at\n) VALUES\n${chunk.join(',\n')};\n\n`;
      // Wait, I removed the ID from the column list in the loop to let Supabase generate it if it's SERIAL/UUID default.
      // BUT if I want to keep consistency, I'll include it.
    }

    // Improving the SQL generation to include ID if needed, and handle ON CONFLICT
    finalSql = '-- Populate exercise_library from yuhonas/free-exercise-db\n';
    for (let i = 0; i < values.length; i += chunkSize) {
      const chunk = values.slice(i, i + chunkSize);
      finalSql += `INSERT INTO public.exercise_library (\n  id, name, description, muscle_group, muscle_group_secondary, \n  equipment, difficulty_level, mechanic, force, images, created_at\n) VALUES\n${chunk.join(',\n')}\nON CONFLICT (id) DO NOTHING;\n\n`;
    }

    fs.writeFileSync(OUTPUT_FILE, finalSql);
    console.log(`Generated ${OUTPUT_FILE} with ${exercises.length} exercises.`);

  } catch (error) {
    console.error('Error importing exercises:', error);
  }
}

importExercises();
