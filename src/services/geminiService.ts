import { GoogleGenerativeAI } from "@google/generative-ai";
import { skillRegistry } from "./ai/skillRegistry";

// Import raw prompts for nutritionist agent
// @ts-ignore
import promptDecompose from './ai/agents/nutritionist/skill_decompose_meal/prompt.txt?raw';
// @ts-ignore
import promptExtract from './ai/agents/nutritionist/skill_extract_commitments/prompt.txt?raw';

// Import tool definitions per skill
import { tools as toolsDecompose } from './ai/agents/nutritionist/skill_decompose_meal/tools';
import { tools as toolsExtract } from './ai/agents/nutritionist/skill_extract_commitments/tools';

// @ts-ignore
import promptPlanner from './ai/agents/planner/skill_guided_compilation/prompt.txt?raw';
import { tools as toolsPlanner } from './ai/agents/planner/skill_guided_compilation/tools';

// Note: In a production app, the API key should be stored in an environment variable
// VITE_GEMINI_API_KEY. For now, we'll assume it's available.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

const getTodayContext = () => {
  const now = new Date();
  const dayName = new Intl.DateTimeFormat('it-IT', { weekday: 'long' }).format(now);
  return `Oggi è ${dayName} ${now.toISOString().split('T')[0]}.`;
};

/**
 * Builds a dense string representation of an exercise for better embedding quality.
 */
export const buildDenseExerciseString = (ex: any) => {
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

export const geminiService = {
  async generateEmbedding(text: string) {
    if (!API_KEY) return null;
    try {
      // Use the newest embedding model suggested by the user
      const model = genAI.getGenerativeModel({ model: "gemini-embedding-2-preview" });
      const result = await model.embedContent(text);
      return result.embedding.values;
    } catch (error) {
      console.warn("Embedding with primary model failed, trying fallback...", error);
      try {
        const fallbackModel = genAI.getGenerativeModel({ model: "text-embedding-004" });
        const result = await fallbackModel.embedContent(text);
        return result.embedding.values;
      } catch (fallbackError) {
        console.error("All embedding models failed:", fallbackError);
        return null;
      }
    }
  },

  async generateStrategicAdvice(athleteData: any, workoutData: any) {
    if (!API_KEY) {
      console.warn("Gemini API Key missing. Skipping strategic advice.");
      return null;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const context = getTodayContext();
    const prompt = `
      ${context}
      Sei un esperto nutrizionista sportivo. 
      Analizza i seguenti dati dell'atleta e il suo programma di allenamento per oggi.
      Dati Atleta: ${JSON.stringify(athleteData)}
      Allenamento Oggi: ${JSON.stringify(workoutData)}
      
      Fornisci 3 consigli strategici brevi (max 20 parole l'uno) su come gestire l'alimentazione oggi per massimizzare la performance.
      Rispondi in formato JSON: { "advice": ["consiglio 1", "consiglio 2", "consiglio 3"] }
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // Basic JSON cleaning if needed
      const cleanJson = text.replace(/```json|```/g, "").trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error("Error generating strategic advice:", error);
      return null;
    }
  },

  async suggestRecipesForMeal(targetMacros: { kcal: number, protein: number, carbs: number, fat: number }, ppreferences: string = "") {
    if (!API_KEY) return null;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Suggerisci 3 idee di pasti veloci che rispettino circa questi macro:
      Kcal: ${targetMacros.kcal}, Proteine: ${targetMacros.protein}g, Carboidrati: ${targetMacros.carbs}g, Grassi: ${targetMacros.fat}g.
      Preferenze aggiuntive: ${ppreferences}
      
      Rispondi in formato JSON: 
      { "recipes": [ { "name": "Nome", "description": "Breve desc", "macros": "Kcal: X, P: Y, C: Z, F: W" } ] }
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const cleanJson = text.replace(/```json|```/g, "").trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error("Error suggesting recipes:", error);
      return null;
    }
  },

  async generateMealPlan(coachGuidelines: string | null, targetMacros: any, athletePreferences: any) {
    if (!API_KEY) return null;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const context = getTodayContext();
    const prompt = `
      ${context}
      Sei un esperto nutrizionista sportivo. Il tuo compito è generare un piano alimentare giornaliero (Colazione, Spuntino, Pranzo, Cena) su misura per un atleta.
      
      OBIETTIVO MACRONUTRIENTI (da rispettare con tolleranza massima di ±5%):
      ${JSON.stringify(targetMacros)}
      
      LINEE GUIDA DEL COACH STRATEGICO:
      "${coachGuidelines || 'Nessuna specifica. Bilancia bene i macro.'}"
      
      VINCOLI E PREFERENZE DELL'ATLETA:
      - Preferenze/Stile: ${athletePreferences?.dietary_preferences?.join(', ') || 'Nessuna'}
      - Intolleranze/Allergie: ${athletePreferences?.intolerances?.join(', ') || 'Nessuna'}
      - Cibi non graditi: ${athletePreferences?.disliked_foods?.join(', ') || 'Nessuno'}
      - Impegni/Orari: ${athletePreferences?.schedule_constraints || 'Nessun problema di orario'}
      
      REGOLE DI OUTPUT:
      - Fornisci pasti appetitosi e ben abbinati.
      - Rispondi ESCLUSIVAMENTE con un JSON valido strutturato in questo modo:
      {
        "meals": [
          {
            "name": "Colazione",
            "time_hint": "Es. 08:00 (dedurlo dagli impegni se presenti)",
            "foods": [
              { "name": "Nome alimento", "qty_grams": 50, "macros": { "kcal": 180, "p": 5, "c": 30, "f": 2 } }
            ],
            "total_kcal": 400
          }
        ],
        "daily_totals": { "kcal": 2000, "protein": 150, "carbs": 200, "fat": 60 }
      }
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const cleanJson = text.replace(/```json|```/g, "").trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error("Error generating meal plan with AI:", error);
      return null;
    }
  },

  async regenerateMeal(mealName: string, targetMealMacros: any, constraints: any, reason: string) {
    if (!API_KEY) return null;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Voglio sostituire il pasto "${mealName}".
      Motivo/Richiesta: "${reason}"
      
      Il nuovo pasto deve rispettare circa questi macronutrienti per mantenere il piano bilanciato:
      ${JSON.stringify(targetMealMacros)}
      
      Ricorda di evitare questi cibi/intolleranze:
      ${JSON.stringify(constraints)}
      
      Rispondi ESCLUSIVAMENTE con un JSON valido:
      {
        "name": "${mealName}",
        "foods": [
          { "name": "Nome alimento", "qty_grams": 100, "macros": { "kcal": 100, "p": 20, "c": 0, "f": 2 } }
        ],
        "total_kcal": 300
      }
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const cleanJson = text.replace(/```json|```/g, "").trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error("Error regenerating meal:", error);
      return null;
    }
  },

  async generateNutritionEnrichment(dietPlan: any, profile: any, workoutPlan: any) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Sei un nutrizionista esperto. Arricchisci il seguente piano alimentare spiegando come si adatta alle preferenze dell'atleta e al suo allenamento.
      Piano: ${JSON.stringify(dietPlan)}
      Preferenze: ${JSON.stringify(profile)}
      Allenamento: ${JSON.stringify(workoutPlan)}
      
      Fornisci una descrizione chiara, motivante e professionale in italiano. 
      Evidenzia come i pasti supportano le sessioni di allenamento specifiche.
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Error generating nutrition enrichment:", error);
      return "Impossibile generare l'arricchimento del piano in questo momento.";
    }
  },

  async generateAthleteBriefing(athleteProfile: any, dietPlan: any, workoutPlan: any, recentLogs: any) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Sei un assistente per un coach di fitness. Genera un briefing sintetico (max 150 parole) sull'atleta corrente.
      Profilo: ${JSON.stringify(athleteProfile)}
      Dieta: ${JSON.stringify(dietPlan)}
      Allenamento: ${JSON.stringify(workoutPlan)}
      Log recenti: ${JSON.stringify(recentLogs)}
      
      Riassumi progressi, aderenza al piano e suggerisci eventuali aggiustamenti necessari. Sii diretto e professionale.
      Usa la formattazione Markdown (grassetti, liste puntate, eventuale tabella sintetica) per rendere il briefing facile da leggere.
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Error generating athlete briefing:", error);
      return "Impossibile generare il briefing in questo momento.";
    }
  },

  async generateWeeklyOptimization(weekEntries: any[], dietPlan: any, activeWorkout: any, profile: any) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const context = getTodayContext();
    const prompt = `
      ${context}
      Sei un consulente strategico per un atleta. Ottimizza la settimana in base agli impegni inseriti.
      
      Impegni della Settimana:
      ${JSON.stringify(weekEntries)}
      
      Piano Alimentare Base:
      ${JSON.stringify(dietPlan)}
      
      Piano Allenamento Attivo:
      ${JSON.stringify(activeWorkout)}
      
      Profilo Atleta:
      ${JSON.stringify(profile)}
      
      Analizza gli impegni (es. cene, allenamenti spostati, giorni intensi) e fornisci una lista di suggerimenti pratici e strategici per adattare alimentazione e allenamento giorno per giorno.
      Sii sintetico, professionale e motivante in italiano.
    `;


    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Error generating weekly optimization:", error);
      return "Impossibile ottimizzare la giornata in questo momento.";
    }
  },

  async generateRecipe(targetKcal: number, preferences: any) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Genera una ricetta fitness di circa ${targetKcal} kcal.
      Preferenze/Intolleranze: ${JSON.stringify(preferences)}
      
      Rispondi SOLO con un oggetto JSON valido con questa struttura:
      {
        "name": "Nome Ricetta",
        "description": "Breve descrizione",
        "kcal": 500,
        "protein": 30,
        "carbs": 50,
        "fat": 15,
        "ingredients": ["ingrediente 1", "ingrediente 2"],
        "instructions": "passaggi per la preparazione"
      }
    `;

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const cleanJson = text.replace(/```json|```/g, "").trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error("Error generating recipe:", error);
      return null;
    }
  },

  async runAgentSkill(agentName: string, skillName: string, systemPrompt: string, userMessage: string, skillTools: any) {
    if (!API_KEY) return null;

    const functionDeclarations = Object.values(skillTools).map((t: any) => ({
      name: t.name,
      description: t.description,
      parameters: t.parameters
    }));

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash-lite",
      tools: [{ functionDeclarations }] as any
    });

    const chat = model.startChat();
    // Inseriamo il prompt di sistema come primo messaggio o istruzione
    const initialPrompt = `${systemPrompt}\n\nUSER REQUEST: ${userMessage}`;

    try {
      let result = await chat.sendMessage(initialPrompt);
      let response = result.response;
      
      let iterations = 0;
      while (response.candidates?.[0]?.content?.parts?.some(p => p.functionCall) && iterations < 8) {
        iterations++;
        const functionCalls = response.candidates[0].content.parts.filter(p => p.functionCall);
        
        const toolResponses = await Promise.all(functionCalls.map(async (part) => {
          const call = part.functionCall!;
          // Cerchiamo il tool specifico nella skill o nel registro globale
          const tool = (skillTools as any)[call.name] || (skillRegistry as any)[call.name];
          if (!tool) throw new Error(`Tool ${call.name} not found`);
          
          const data = await tool.execute(call.args);
          return {
            functionResponse: {
              name: call.name,
              response: data
            }
          };
        }));

        result = await chat.sendMessage(toolResponses);
        response = result.response;
      }

      const text = response.text();
      const cleanJson = text.replace(/```json|```/g, "").trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error(`Error in ${agentName}/${skillName}:`, error);
      return null;
    }
  },

  async decomposeMeal(dishName: string, targetKcal: number = 500) {
    const context = getTodayContext();
    return this.runAgentSkill(
      'nutritionist', 
      'decompose_meal', 
      promptDecompose, 
      `${context}\nScomponi: ${dishName} (Target: ${targetKcal} kcal)`,
      toolsDecompose
    );
  },

  async extractWeeklyCommitments(text: string, weekDates: string[]) {
    const context = getTodayContext();
    const promptWithDates = promptExtract
      .replace('{today}', context)
      .replace('{weekDates}', weekDates.join(", "));
    const result = await this.runAgentSkill(
      'nutritionist',
      'extract_commitments',
      promptWithDates,
      text,
      toolsExtract
    );
    return result || [];
  },

  async runGuidedWeeklyPlanner(athleteId: string, userMessage: string, weekDates: string[]) {
    const context = getTodayContext();
    const start_date = weekDates[0];
    const end_date = weekDates[weekDates.length - 1];
    
    const userRequestWithContext = `${context}\nAtleta ID: ${athleteId}. Settimana: ${start_date} -> ${end_date}.\nRichiesta Utente: ${userMessage}`;

    return this.runAgentSkill(
      'planner',
      'guided_compilation',
      promptPlanner,
      userRequestWithContext,
      toolsPlanner
    );
  },

  async processWorkoutAudio(audioBase64: string, existingMappings: any[], currentPlan: any[] = [], preferences: any[] = []) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    // 1. First, we need the transcription to understand what the coach said
    // We do a quick first pass with Gemini to get just the transcription
    const transcriptionPrompt = `Trascrivi fedelmente questo audio di un coach di fitness che descrive un allenamento. Rispondi solo con la trascrizione.`;
    
    let transcription = "";
    try {
      const transResult = await model.generateContent([
        transcriptionPrompt,
        { inlineData: { mimeType: "audio/webm", data: audioBase64 } }
      ]);
      transcription = transResult.response.text().trim();
    } catch (e) {
      console.error("Transcription failed", e);
    }

    // 2. Search for relevant exercises in the library via vector search
    // We send the transcription to generate an embedding
    let searchContext = "Nessun esercizio rilevante trovato nella libreria.";
    if (transcription) {
      const queryEmbedding = await this.generateEmbedding(transcription);
      if (queryEmbedding) {
        const { exerciseService } = await import('./exerciseService');
        const similarExercises = await exerciseService.searchSimilarExercises(queryEmbedding, 0.3, 15);
        if (similarExercises && similarExercises.length > 0) {
          searchContext = similarExercises.map((ex: any) => `- ${ex.name_it || ex.name} (ID: ${ex.id}) [Muscoli: ${ex.muscle_group}, Attrezzatura: ${ex.equipment}]`).join('\n');
        }
      }
    }

    const mappingContext = existingMappings.map(m => `- "${m.slang_name}" -> ${m.standard_exercise_id}`).join('\n');
    const preferencesContext = preferences.map(p => `- ${p.content}`).join('\n');
    const planContext = currentPlan.length > 0 
      ? JSON.stringify(currentPlan.map(ex => ({
          name: ex.name,
          sets: ex.target_sets,
          reps: ex.target_reps,
          rest_between_sets: ex.rest_seconds,
          rest_after_exercise: ex.rest_esercizio,
          group: ex.group_name,
          iterations: ex.group_iterations
        })))
      : "La scheda è attualmente VUOTA.";
    
    const prompt = `
      Sei un assistente AI per un coach di fitness. Analizza questo audio e aggiorna la scheda di allenamento.
      
      TRASCRIZIONE AUDIO:
      "${transcription}"

      STATO ATTUALE DELLA SCHEDA:
      ${planContext}

      PREFERENZE E NOTE DEL COACH (Usa queste per mappare termini o sequenze):
      ${preferencesContext || 'Nessuna preferenza specifica.'}
      
      MAPPING GIA' ESISTENTI (Slang -> ID Libreria):
      ${mappingContext || 'Nessun mapping esistente.'}
      
      CONTESTO LIBRERIA RILEVANTE (Usa QUESTI ID per mappare gli esercizi se corrispondono):
      ${searchContext}
      
      ISTRUZIONI:
      1. Se la scheda ha già esercizi, MODIFICALI solo se il coach lo chiede espressamente (es: "cambia le serie di X", "rimuovi il gruppo Y"). 
      2. Altrimenti, aggiungi i nuovi esercizi/gruppi alla fine della scheda.
      3. Se il coach descrive una sequenza complessa che hai nelle PREFERENZE (es: "Riscaldamento standard"), espandila negli esercizi corrispondenti.
      4. Ogni esercizio DEVE avere un "group_name". Mantieni la suddivisione in gruppi del coach.
      5. Supporta il campo "group_iterations" per il numero di giri/round di un gruppo.
      6. Supporta l'ordine dei gruppi: se il coach dice "prima facciamo X, poi Y", assicurati che l'ordine sia corretto.
      7. Se un esercizio nell'audio somiglia molto a uno nel CONTESTO LIBRERIA, usa quell'ID.
      8. Restituisci SEMPRE la lista completa degli esercizi finali (quelli vecchi mantenuti + quelli nuovi/modificati).

      FORMATO OUTPUT JSON:
      {
        "transcription": "${transcription.replace(/"/g, '\\"')}",
        "action_taken": "append" | "modify",
        "exercises": [
          {
            "name": "Nome Esercizio",
            "spoken_name": "Nome usato nell'audio",
            "exercise_library_id": "uuid o null",
            "target_sets": 3,
            "target_reps": 10,
            "rest_seconds": 60,
            "rest_esercizio": 0,
            "coach_notes": "...",
            "group_name": "...",
            "group_iterations": 1,
            "is_superset": false
          }
        ]
      }
    `;

    try {
      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: "audio/webm",
            data: audioBase64
          }
        }
      ]);
      const text = result.response.text();
      const start = text.indexOf('{');
      const end = text.lastIndexOf('}');
      if (start === -1 || (end === -1)) {
        throw new Error("Gemini response did not contain JSON: " + text.substring(0, 100));
      }
      const cleanJson = text.substring(start, end + 1).trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error("Error processing workout audio (FULL DETAILS):", error);
      if (error instanceof Error) {
        return { error: error.message };
      }
      return { error: String(error) };
    }
  },

  async extractPreferenceEssence(audioBase64: string) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Sei un assistente AI per un coach di fitness. Analizza questo audio in cui il coach esprime una preferenza, una regola o un'associazione per i suoi allenamenti.
      
      OBIETTIVO:
      Estrai l'essenza della preferenza in una frase breve, chiara e atomica in italiano.
      
      ESEMPI:
      - Audio: "D'ora in poi quando dico panca piana intendo quella con manubri" -> "Panca piana significa Panca piana con manubri"
      - Audio: "Il mio riscaldamento standard sono 5 minuti di salto della corda e 20 pushups" -> "Riscaldamento standard: 5 min corda + 20 pushups"
      - Audio: "Usa sempre 60 secondi di recupero per gli esercizi di isolamento" -> "Recupero di 60s per esercizi di isolamento"

      RISPONDI SOLO CON IL TESTO DELLA PREFERENZA ESTRATTA. No introduzioni, no spiegazioni.
    `;

    try {
      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: "audio/webm",
            data: audioBase64
          }
        }
      ]);
      return result.response.text().trim();
    } catch (error) {
      console.error("Error extracting preference essence:", error);
      return null;
    }
  },

  async structureNutritionalDirectives(rawText: string, athleteContext: { weight?: number, targetKcal?: number, macros?: any, preferences?: string[], intolerances?: string[], dislikedFoods?: string[] }) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Sei un nutrizionista sportivo professionista. Il coach ha scritto delle indicazioni nutrizionali in forma libera.
      Il tuo compito è ristrutturare queste indicazioni in un documento Markdown standardizzato, chiaro e professionale.
      
      TESTO DEL COACH:
      "${rawText}"
      
      CONTESTO ATLETA:
      - Peso: ${athleteContext.weight || 'N/A'} kg
      - Target Kcal: ${athleteContext.targetKcal || 'N/A'}
      - Macro: ${JSON.stringify(athleteContext.macros || {})}
      - Preferenze alimentari: ${athleteContext.preferences?.join(', ') || 'Nessuna'}
      - Intolleranze: ${athleteContext.intolerances?.join(', ') || 'Nessuna'}
      - Cibi sgraditi: ${athleteContext.dislikedFoods?.join(', ') || 'Nessuno'}
      
      STRUTTURA OBBLIGATORIA DEL DOCUMENTO MD (usa queste sezioni, ometti quelle per cui non ci sono informazioni):
      
      ## 🎯 Obiettivo Nutrizionale
      Breve descrizione dell'obiettivo (es. definizione, massa, ricomposizione)
      
      ## ⏰ Timing & Frequenza Pasti
      Numero pasti, finestre alimentari, timing pre/post workout
      
      ## 🥩 Priorità Proteiche
      Indicazioni specifiche sulle proteine
      
      ## 🍞 Gestione Carboidrati
      Indicazioni su carbo, ciclizzazione, timing
      
      ## 🫒 Grassi & Micronutrienti
      Indicazioni su grassi, integrazioni, micronutrienti
      
      ## 💧 Idratazione
      Indicazioni su acqua e liquidi
      
      ## ⚠️ Regole Specifiche
      Restrizioni, alimenti da evitare, note particolari
      
      ## 📝 Note del Coach
      Qualsiasi altra indicazione non categorizzabile
      
      REGOLE:
      - Mantieni TUTTE le informazioni del coach, non perdere nulla
      - Aggiungi contesto e razionale dove possibile basandoti sul contesto atleta
      - Usa liste puntate, bold per i concetti chiave
      - Sii conciso ma completo
      - Se il testo del coach è vuoto o minimo, genera comunque una struttura base con placeholder
      - Rispondi SOLO con il documento Markdown, nient'altro
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (error) {
      console.error("Error structuring nutritional directives:", error);
      return null;
    }
  },

  async chatDietDirectives(currentMd: string, userMessage: string, athleteContext: { weight?: number, targetKcal?: number, macros?: any }) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Sei un assistente AI per un coach di fitness. Il coach vuole modificare le direttive nutrizionali di un atleta tramite chat.
      
      DOCUMENTO ATTUALE:
      ${currentMd || '(vuoto)'}
      
      CONTESTO ATLETA:
      - Peso: ${athleteContext.weight || 'N/A'} kg
      - Target Kcal: ${athleteContext.targetKcal || 'N/A'}
      - Macro: ${JSON.stringify(athleteContext.macros || {})}
      
      RICHIESTA DEL COACH:
      "${userMessage}"
      
      ISTRUZIONI:
      - Applica la modifica richiesta al documento esistente
      - Mantieni la struttura Markdown con le sezioni (## 🎯, ## ⏰, ## 🥩, ecc.)
      - Se la modifica riguarda una sezione esistente, aggiornala. Se è nuova, aggiungila nella sezione appropriata
      - Non rimuovere contenuto esistente a meno che il coach non lo chieda esplicitamente
      - Rispondi SOLO con il documento Markdown completo aggiornato, nient'altro
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (error) {
      console.error("Error in chat diet directives:", error);
      return null;
    }
  },
  async structureFocusObjectives(rawText: string, athleteContext: { first_name?: string, last_name?: string, weight?: number, height?: number, age?: number, gender?: string }) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const prompt = `
      Sei un coach di fitness e performance professionista. Il tuo compito è trasformare delle note sparse sugli obiettivi e sul focus di un atleta in un documento strategico Markdown ben strutturato e motivante.
      
      NOTE DEL COACH/ATLETA:
      "${rawText}"
      
      CONTESTO ATLETA:
      - Nome: ${athleteContext.first_name} ${athleteContext.last_name}
      - Biometria: ${athleteContext.weight || 'N/A'}kg, ${athleteContext.height || 'N/A'}cm, ${athleteContext.age || 'N/A'} anni, ${athleteContext.gender || 'N/A'}
      
      STRUTTURA OBBLIGATORIA DEL DOCUMENTO MD (usa queste sezioni, ometti quelle per cui non ci sono informazioni):
      
      ## 🎯 Obiettivo Principale
      Descrizione chiara del macro-obiettivo (es. Powerbuilding, Preparazione Gara, Weight Loss, Longevity)
      
      ## 🔥 Focus Corrente (Macro-Ciclo)
      Su cosa ci stiamo concentrando in questo momento (es. Tecniche di esecuzione, Ipertrofia funzionale, Forza massimale)
      
      ## 📈 Key Results & Milestone
      Cosa vogliamo ottenere nel breve/medio termine (es. +5kg su panca, -2cm vita, 10 pull-ups)
      
      ## 🧠 Mindset & Approccio
      Indicazioni sull'attitudine mentale, gestione dello stress, motivazione
      
      ## 📝 Note Strategiche
      Qualsiasi altra indicazione non categorizzabile
      
      REGOLE:
      - Usa un tono professionale, autoritario ma incoraggiante
      - Mantieni TUTTE le note fornite, arricchendole con il tuo expertise
      - Usa liste puntate e grassetti per leggibilità
      - Rispondi SOLO con il documento Markdown, nient'altro
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (error) {
      console.error("Error structuring focus objectives:", error);
      return null;
    }
  },

  async chatFocusObjectives(currentMd: string, userMessage: string, athleteContext: any) {
    if (!API_KEY) return null;
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const prompt = `
      Sei un coach di fitness esperto. Vuoi aiutare un altro coach a modificare il documento "Focus e Obiettivi" di un atleta tramite chat.
      
      DOCUMENTO ATTUALE:
      ${currentMd || '(vuoto)'}
      
      CONTESTO ATLETA:
      ${JSON.stringify(athleteContext)}
      
      RICHIESTA DEL COACH:
      "${userMessage}"
      
      ISTRUZIONI:
      - Applica la modifica richiesta mantenendo lo stile e la struttura Markdown
      - Se la richiesta è una nuova informazione, inseriscila nella sezione corretta
      - Se è una modifica a qualcosa di esistente, aggiorna la sezione relativa
      - Rispondi SOLO con il documento Markdown completo aggiornato, nient'altro
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (error) {
      console.error("Error in chat focus objectives:", error);
      return null;
    }
  }
};
