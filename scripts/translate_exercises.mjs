import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" }); 

const SOURCE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const OUTPUT_FILE = 'update_exercises_it.sql';

async function translateExercises() {
  if (!API_KEY) {
    console.error("VITE_GEMINI_API_KEY not found in .env");
    return;
  }

  console.log('Fetching exercises from GitHub...');
  const response = await fetch(SOURCE_URL);
  const exercises = await response.json();
  console.log(`Processing ${exercises.length} exercises...`);

  const batchSize = 10;
  fs.writeFileSync(OUTPUT_FILE, '-- Update exercise_library with Italian translations\n\n');

  for (let i = 0; i < exercises.length; i += batchSize) {
    let sql = '';
    const batch = exercises.slice(i, i + batchSize);
    console.log(`Translating batch ${i / batchSize + 1} of ${Math.ceil(exercises.length / batchSize)}...`);

    const prompt = `
      Traduci in Italiano i seguenti nomi e descrizioni di esercizi di fitness.
      Mantieni i nomi propri o termini tecnici comuni se non hanno una traduzione diretta (es. "Clean", "Snatch").
      Traduci le istruzioni in modo professionale e chiaro.
      
      ESERCIZI:
      ${batch.map((ex, idx) => `[ID: ${ex.id}]
NAME: ${ex.name}
DESC: ${ex.instructions.join('\n')}`).join('\n\n')}

      Rispondi ESCLUSIVAMENTE con un array JSON di oggetti:
      [
        { "id": "ID_ESERCIZIO", "name_it": "Nome Tradotto", "description_it": "Descrizione Tradotta" }
      ]
    `;

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const cleanJson = text.replace(/```json|```/g, "").trim();
      const translations = JSON.parse(cleanJson);

      translations.forEach(trans => {
        const escape = (str) => {
          if (!str) return 'NULL';
          return `'${String(str).replace(/'/g, "''")}'`;
        };
        // Note: The ID in the exercises.json is the name-based ID, not the UUID I generated.
        // This is a problem. I should probably match by name instead, or re-run the whole import with translations.
        // Actually, the user already ran the import with UUIDs.
        // If I want to update correctly, I should map by the original NAME.
        sql += `UPDATE public.exercise_library \nSET name_it = ${escape(trans.name_it)}, description_it = ${escape(trans.description_it)} \nWHERE name = ${escape(batch.find(b => b.id === trans.id).name)};\n\n`;
      });

      // Saving progress frequently
      fs.appendFileSync(OUTPUT_FILE, sql);
      sql = ''; // clear for next batch
    } catch (error) {
      console.error(`Error in batch ${i}:`, error);
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`Done! SQL script saved to ${OUTPUT_FILE}`);
}

translateExercises();
