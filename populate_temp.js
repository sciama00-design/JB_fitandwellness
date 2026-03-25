import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from "@google/generative-ai";

const SUPABASE_URL = "https://pgwfaiwvtwwuebisatqp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnd2ZhaXd2dHd3dWViaXNhdHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDAwMzQyMywiZXhwIjoyMDg5NTc5NDIzfQ.evCUqdOkmPV_NTa21mADUOImg7mH3Cvqo6GGdiZN-r0";
const GEMINI_KEY = "AIzaSyBXmzGn98nzpkAxwuqrG0flFyDU4tK-bFY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const embedModel = genAI.getGenerativeModel({ model: "gemini-embedding-001" });

const buildDenseExerciseString = (ex) => {
  return [
    `Esercizio: ${ex.name_it || ex.name}`,
    ex.name ? `Nome originale: ${ex.name}` : '',
    ex.muscle_group ? `Muscoli: ${ex.muscle_group}${ex.muscle_group_secondary ? ', ' + ex.muscle_group_secondary : ''}` : '',
    ex.equipment ? `Attrezzatura: ${ex.equipment}` : '',
    ex.mechanic ? `Meccanica: ${ex.mechanic}` : '',
    ex.force ? `Forza: ${ex.force}` : '',
    ex.description_it || ex.description ? `Istruzioni: ${(ex.description_it || ex.description).substring(0, 300)}...` : ''
  ].filter(Boolean).join(' | ');
};

async function run() {
  console.log("Inizio popolamento...");
  
  const { data: exercises, error } = await supabase
    .from('exercise_library')
    .select('*')
    .is('embedding', null);

  if (error) {
    console.error("Errore fetch:", error);
    return;
  }

  console.log(`Trovati ${exercises.length} esercizi da processare.`);

  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const text = buildDenseExerciseString(ex);
    
    let success = false;
    let retries = 3;
    
    while (!success && retries > 0) {
      try {
        const result = await embedModel.embedContent({
          content: { role: 'user', parts: [{ text }] },
          outputDimensionality: 768
        });
        const embedding = result.embedding.values;
        
        const { error: updError } = await supabase
          .from('exercise_library')
          .update({ embedding })
          .eq('id', ex.id);
          
        if (updError) {
          console.error(`Errore update ${ex.id}:`, updError);
        } else {
          success = true;
          if ((i+1) % 10 === 0 || i === exercises.length - 1) {
            console.log(`Progresso: ${i+1}/${exercises.length}`);
          }
        }
      } catch (e) {
        retries--;
        if (retries === 0) {
          console.error(`Errore embedding DEFINITIVO ${ex.name}:`, e.message);
        } else {
          console.log(`Ritento ${ex.name}... (mancano ${retries})`);
          await new Promise(r => setTimeout(r, 2000));
        }
      }
    }
    
    // Pausa extra ogni 50 esercizi
    if ((i+1) % 50 === 0) {
      console.log("Pausa di raffreddamento (5s)...");
      await new Promise(r => setTimeout(r, 5000));
    }

    // Delay base di 1 secondo tra le richieste
    await new Promise(r => setTimeout(r, 1000)); 
  }
  
  console.log("Fine popolamento.");
}

run();
