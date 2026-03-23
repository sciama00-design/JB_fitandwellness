import fs from 'fs';
import crypto from 'crypto';

const SOURCE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const TRANSLATIONS_FILE = 'update_exercises_it.sql';
const ORIGINAL_POPULATE_FILE = 'populate_exercise_library.sql';

// Helper to generate a stable UUID from a string
function getDeterministicUUID(name) {
  const hash = crypto.createHash('sha1').update(name).digest('hex');
  // Format as 8-4-4-4-12
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

async function generateFullPopulate() {
  console.log('Fetching source exercises...');
  const response = await fetch(SOURCE_URL);
  const exercises = await response.json();

  console.log('Parsing translations...');
  const translationsMap = new Map();
  const translationsContent = fs.readFileSync(TRANSLATIONS_FILE, 'utf8');
  
  const updateRegex = /SET name_it = ('(?:''|.)*?'), description_it = ('(?:''|.)*?') \s+WHERE name = ('(?:''|.)*?');/gs;
  let match;
  while ((match = updateRegex.exec(translationsContent)) !== null) {
    const name_it = match[1];
    const description_it = match[2];
    const name = match[3].slice(1, -1).replace(/''/g, "'"); // unescape
    translationsMap.set(name, { name_it, description_it });
  }

  console.log('Parsing existing UUIDs if any...');
  const idMap = new Map();
  if (fs.existsSync(ORIGINAL_POPULATE_FILE)) {
    const originalContent = fs.readFileSync(ORIGINAL_POPULATE_FILE, 'utf8');
    // Robust regex for ( 'UUID', 'Name'
    const insertRegex = /\(\s*'([a-f0-9-]{36})',\s*'((?:''|.)*?)',/g;
    let iMatch;
    while ((iMatch = insertRegex.exec(originalContent)) !== null) {
      const id = iMatch[1];
      const name = iMatch[2].replace(/''/g, "'");
      idMap.set(name, id);
    }
  }

  console.log('Generating SQL...');
  const batchSize = 100;
  for (let b = 0; b < exercises.length; b += batchSize) {
    const batchExercises = exercises.slice(b, b + batchSize);
    let sql = `-- Full population of exercise_library with Italian translations (Batch ${Math.floor(b/batchSize) + 1})\n\n`;
    sql += `INSERT INTO public.exercise_library (\n  id, name, name_it, description, description_it, \n  muscle_group, muscle_group_secondary, equipment, difficulty_level, \n  mechanic, force, images, created_at\n) VALUES\n`;

    const values = batchExercises.map((ex, idx) => {
      const trans = translationsMap.get(ex.name) || { name_it: 'NULL', description_it: 'NULL' };
      const id = idMap.get(ex.name) || getDeterministicUUID(ex.name);
      
      const escape = (str) => {
        if (!str || str === 'NULL') return 'NULL';
        if (str.startsWith("'") && str.endsWith("'")) return str; // already escaped
        return `'${String(str).replace(/'/g, "''")}'`;
      };

      const description = ex.instructions.join('\n');
      const images = ex.images.map(img => `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${img}`);
      const imagesSql = images.length > 0 
        ? `ARRAY[${images.map(img => escape(img)).join(', ')}]` 
        : 'ARRAY[]::text[]';
      
      return `(\n  '${id}', \n  ${escape(ex.name)}, \n  ${trans.name_it}, \n  ${escape(description)}, \n  ${trans.description_it}, \n  ${escape(ex.primaryMuscles[0])}, \n  ${escape(ex.secondaryMuscles[0])}, \n  ${escape(ex.equipment)}, \n  ${escape(ex.level)}, \n  ${escape(ex.mechanic)}, \n  ${escape(ex.force)}, \n  ${imagesSql}, \n  NOW()\n)`;
    });

    sql += values.join(',\n');
    sql += `\nON CONFLICT (id) DO UPDATE SET\n  name = EXCLUDED.name,\n  name_it = EXCLUDED.name_it,\n  description = EXCLUDED.description,\n  description_it = EXCLUDED.description_it,\n  muscle_group = EXCLUDED.muscle_group,\n  muscle_group_secondary = EXCLUDED.muscle_group_secondary,\n  equipment = EXCLUDED.equipment,\n  difficulty_level = EXCLUDED.difficulty_level,\n  mechanic = EXCLUDED.mechanic,\n  force = EXCLUDED.force,\n  images = EXCLUDED.images;`;

    const fileName = `populate_lib_part_${Math.floor(b/batchSize) + 1}.sql`;
    fs.writeFileSync(fileName, sql);
    console.log(`Created ${fileName}`);
  }
  console.log(`Done!`);
}

generateFullPopulate();
