import { supabase } from '../src/lib/supabase';
import { geminiService, buildDenseExerciseString } from '../src/services/geminiService';

async function populateEmbeddings() {
  console.log('--- Inizio popolamento embedding libreria esercizi ---');

  // 1. Get all exercises that don't have an embedding yet
  const { data: exercises, error } = await supabase
    .from('exercise_library')
    .select('*')
    .is('embedding', null);

  if (error) {
    console.error('Errore durante il recupero degli esercizi:', error);
    return;
  }

  if (!exercises || exercises.length === 0) {
    console.log('Tutti gli esercizi hanno già un embedding.');
    return;
  }

  console.log(`Trovati ${exercises.length} esercizi da processare.`);

  let successCount = 0;
  let failCount = 0;

  for (const ex of exercises) {
    const denseString = buildDenseExerciseString(ex);
    
    try {
      const embedding = await geminiService.generateEmbedding(denseString);
      
      if (embedding) {
        const { error: updateError } = await supabase
          .from('exercise_library')
          .update({ embedding })
          .eq('id', ex.id);
          
        if (updateError) {
          console.error(`Errore durante l'aggiornamento dell'esercizio ${ex.id}:`, updateError);
          failCount++;
        } else {
          successCount++;
          if (successCount % 10 === 0) {
            console.log(`Progressi: ${successCount}/${exercises.length} completati...`);
          }
        }
      } else {
        console.error(`Impossibile generare embedding per l'esercizio ${ex.id}`);
        failCount++;
      }
    } catch (e) {
      console.error(`Errore imprevisto per l'esercizio ${ex.id}:`, e);
      failCount++;
    }
    
    // Piccola attesa per evitare rate limiting se necessario (Gemini Flash ha limiti alti ma meglio essere cauti)
    // await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log(`--- Popolamento completato! ---`);
  console.log(`Successi: ${successCount}`);
  console.log(`Falliti: ${failCount}`);
}

// Nota: Questo script è inteso per essere eseguito in un ambienteNode.js che supporti l'import degli alias o percorsi relativi del progetto.
// In un progetto Vite/TS, potrebbe essere necessario configurare ts-node o un piccolo wrapper.
populateEmbeddings();
