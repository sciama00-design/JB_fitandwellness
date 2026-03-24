import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

const SOURCE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const OUTPUT_FILE = 'update_exercises_it.sql';

async function fixBatch(indices) {
  const response = await fetch(SOURCE_URL);
  const exercises = await response.json();
  
  for (const startIndex of indices) {
    console.log(`Fixing batch starting at index ${startIndex}...`);
    const batch = exercises.slice(startIndex, startIndex + 10);
    
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
      
      let sql = '';
      translations.forEach(trans => {
        const escape = (str) => {
          if (!str) return 'NULL';
          return `'${String(str).replace(/'/g, "''")}'`;
        };
        const ex = batch.find(b => b.id === trans.id);
        if (ex) {
          sql += `UPDATE public.exercise_library \nSET name_it = ${escape(trans.name_it)}, description_it = ${escape(trans.description_it)} \nWHERE name = ${escape(ex.name)};\n\n`;
        }
      });
      fs.appendFileSync(OUTPUT_FILE, sql);
    } catch (e) {
      console.error(`Failed to fix index ${startIndex}`, e);
    }
  }
}

fixBatch([80, 590]);
