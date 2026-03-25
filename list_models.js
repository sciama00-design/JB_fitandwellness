// Utilizzo fetch nativo di Node 24

const API_KEY = "AIzaSyBXmzGn98nzpkAxwuqrG0flFyDU4tK-bFY";

async function run() {
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await res.json();
    if (data.models) {
      const embeddingModels = data.models.filter(m => m.supportedGenerationMethods.includes('embedContent'));
      console.log("Modelli di Embedding Disponibili:");
      embeddingModels.forEach(m => {
        console.log(`- ${m.name} (Output dim: ${m.outputTokenLimit || '?'})`);
        // Note: outputTokenLimit doesn't strictly mean vector dimension, but we'll see
      });
      console.log("\nFull JSON of embedding models:");
      console.log(JSON.stringify(embeddingModels, null, 2));
    } else {
      console.log("Nessun modello trovato o errore:", data);
    }
  } catch (e) {
    console.error(e);
  }
}

run();
