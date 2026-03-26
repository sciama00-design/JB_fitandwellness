import { GoogleGenerativeAI } from "@google/generative-ai";
import { skillRegistry } from "./ai/skillRegistry";
import { geminiKeyManager } from "./geminiKeyManager";

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

// @ts-ignore
import promptAnalyst from './ai/agents/analyst/skill_athlete_briefing/prompt.txt?raw';
import { tools as toolsAnalyst } from './ai/agents/analyst/skill_athlete_briefing/tools';

// Use GeminiKeyManager to rotate between multiple API keys if available
const getGenAI = () => {
  const key = geminiKeyManager.getNextKey();
  return key ? new GoogleGenerativeAI(key) : null;
};

export const GEMINI_MODELS = [
  'gemini-2.5-flash-lite',
  'gemini-3.1-flash-lite-preview',
  'gemini-3-flash-preview',
  'gemini-2.5-flash'
] as const;

export type GeminiModelType = typeof GEMINI_MODELS[number];

let overrideModel: GeminiModelType = (localStorage.getItem('selected_gemini_model') as GeminiModelType) || 'gemini-2.5-flash-lite';

const getModel = (options?: { model?: string, tools?: any, responseSchema?: any }) => {
  const modelName = options?.model || overrideModel;
  const genAI = getGenAI();
  if (!genAI) return null;
  
  return genAI.getGenerativeModel({ 
    model: modelName,
    tools: options?.tools,
    generationConfig: options?.responseSchema ? {
      responseMimeType: "application/json",
      responseSchema: options.responseSchema
    } : undefined
  });
};

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

const WORKOUT_SCHEMA = {
  type: "object",
  properties: {
    thinking: { type: "string" },
    plan_title: { type: "string", nullable: true },
    plan_description: { type: "string", nullable: true },
    action_taken: { 
      type: "string", 
      enum: ["append", "modify", "replace"] 
    },
    exercises: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string", nullable: true },
          name: { type: "string" },
          spoken_name: { type: "string" },
          exercise_library_id: { type: "string", nullable: true },
          confidence_score: { type: "number" },
          needs_confirmation: { type: "boolean" },
          alternatives: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                name: { type: "string" }
              },
              required: ["id", "name"]
            }
          },
          target_sets: { type: "number" },
          target_reps: { type: "number" },
          target_reps_detail: {
            type: "array",
            items: { type: "number" }
          },
          is_time_based: { type: "boolean" },
          rest_seconds: { type: "number" },
          rest_esercizio: { type: "number" },
          coach_notes: { type: "string", nullable: true },
          group_name: { type: "string" },
          group_iterations: { type: "number" },
          is_superset: { type: "boolean" }
        },
        required: [
          "name", "spoken_name", "confidence_score", "needs_confirmation", 
          "target_sets", "target_reps", "target_reps_detail", "is_time_based", 
          "rest_seconds", "rest_esercizio", "group_name", "group_iterations", "is_superset"
        ]
      }
    }
  },
  required: ["thinking", "action_taken", "exercises"]
};

export const geminiService = {
  async generateEmbedding(text: string) {
    const genAI = getGenAI();
    if (!genAI) return null;
    try {
      // Use gemini-embedding-001 with forced 768 dimensions to match DB schema
      const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
      const result = await model.embedContent({
        content: { role: 'user', parts: [{ text }] },
        // @ts-ignore
        outputDimensionality: 768
      });
      return result.embedding.values;
    } catch (error) {
      console.error("Error generating embedding (768 diminished):", error);
      return null;
    }
  },

  async generateStrategicAdvice(athleteData: any, workoutData: any) {
    const model = getModel();
    if (!model) {
      console.warn("Gemini API Key missing or rotation failed. Skipping strategic advice.");
      return null;
    }

    const context = getTodayContext();
    const prompt = `
      ### RUOLO
      Sei un Performance Consultant ed esperto di nutrizione sportiva.
      
      ### CONTESTO
      ${context}
      
      **Dati Atleta**: ${JSON.stringify(athleteData)}
      **Allenamento Programmato**: ${JSON.stringify(workoutData)}
      
      ### COMPITO
      Fornisci 3 consigli strategici "flash" (estremamente concisi) per massimizzare la performance di oggi. 
      Concentrati su:
      1. Timing dei nutrienti rispetto all'allenamento.
      2. Idratazione o Focus mentale.
      3. Gestione del recupero.

      ### OUTPUT FORMAT
      Rispondi ESCLUSIVAMENTE con un JSON valido.
      { 
        "advice": [
          "Consiglio 1: ...", 
          "Consiglio 2: ...", 
          "Consiglio 3: ..."
        ] 
      }
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
    const model = getModel();
    if (!model) return null;

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
    const model = getModel();
    if (!model) return null;

    const context = getTodayContext();
    const prompt = `
      ### RUOLO
      Sei un esperto Nutrizionista Sportivo e Performance Coach. Il tuo compito è generare un piano alimentare giornaliero (Colazione, Spuntino, Pranzo, Cena) su misura per un atleta di alto livello.
      
      ### OBIETTIVO MACRONUTRIENTI (Tolleranza ±3%)
      ${JSON.stringify(targetMacros)}
      
      ### CONTESTO
      ${context}
      
      **Linee Guida del Coach Strategico**:
      "${coachGuidelines || 'Nessuna specifica. Bilancia bene i macro secondo i ritmi circadiani.'}"
      
      **Vincoli e Preferenze Atleta**:
      - Preferenze/Stile: ${athletePreferences?.dietary_preferences?.join(', ') || 'Nessuna'}
      - Intolleranze/Allergie: ${athletePreferences?.intolerances?.join(', ') || 'Nessuna'}
      - Cibi Sgraditi: ${athletePreferences?.disliked_foods?.join(', ') || 'Nessuno'}
      - Impegni/Orari: ${athletePreferences?.schedule_constraints || 'Senza vincoli particolari'}
      
      ### REGOLE DI GENERAZIONE
      1. **Sostenibilità**: Proponi pasti appetitosi, facili da preparare e coerenti tra loro.
      2. **Timing**: Suggerisci orari (time_hint) basandoti sugli impegni dell'atleta.
      3. **Precisione**: La somma dei macro dei singoli alimenti DEVE corrispondere al totale del pasto e del giorno.
      4. **Varietà**: Evita ripetizioni eccessive di fonti proteiche nello stesso giorno.

      ### OUTPUT FORMAT
      Rispondi ESCLUSIVAMENTE con un JSON valido. Includi una chiave "thinking" per spiegare la tua strategia nutrizionale per questa giornata.
      {
        "thinking": "Analisi dei macro e scelta degli ingredienti basata sulle preferenze...",
        "meals": [
          {
            "name": "Colazione | Spuntino | Pranzo | Cena",
            "time_hint": "HH:MM",
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
    const model = getModel();
    if (!model) return null;

    const prompt = `
      ### OBIETTIVO
      Sostituisci il pasto "${mealName}" con un'alternativa valida.
      
      ### MOTIVAZIONE DELLA RICHIESTA
      "${reason}"
      
      ### VINCOLI NUTRIZIONALI
      Target Macro: ${JSON.stringify(targetMealMacros)}
      Evita assolutamente: ${JSON.stringify(constraints)}
      
      ### OUTPUT FORMAT
      Rispondi ESCLUSIVAMENTE con un JSON valido. Includi una chiave "thinking" per spiegare perché questa alternativa soddisfa la richiesta.
      {
        "thinking": "...",
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
    const model = getModel();
    if (!model) return null;

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

  async generateAthleteBriefing(athleteProfile: any, dietPlan: any, workoutPlan: any, _recentLogs: any) {
    if (!geminiKeyManager.hasKeys()) return null;
    
    const athleteId = athleteProfile.id;
    const today = getTodayContext();
    
    const userMessage = `
      Genera il briefing per l'atleta ${athleteProfile.first_name} ${athleteProfile.last_name} (ID: ${athleteId}).
      Dieta Attuale (Target): ${JSON.stringify(dietPlan)}
      Workout Attivo: ${workoutPlan?.name || 'Nessuno'}
      ${today}
      
      Usa i tool per estrarre insight sui carichi degli ultimi allenamenti e sulla tendenza del peso prima di concludere.
    `;

    try {
      const result = await this.runAgentSkill(
        'analyst',
        'athlete_briefing',
        promptAnalyst,
        userMessage,
        toolsAnalyst
      );
      
      // Since briefing is expected to be a text summary, let's ensure we return the text
      // if it's already a markdown string (as structured by promptAnalyst)
      return result?.text || result?.summary || (typeof result === 'string' ? result : JSON.stringify(result));
    } catch (error) {
      console.error("Error generating athlete briefing with tools:", error);
      return "Impossibile generare il briefing avanzato in questo momento.";
    }
  },

  async generateWeeklyOptimization(weekEntries: any[], dietPlan: any, activeWorkout: any, profile: any) {
    const model = getModel();
    if (!model) return null;

    const context = getTodayContext();
    const prompt = `
      ### RUOLO
      Sei un Consulente di Ottimizzazione della Performance.
      
      ### CONTESTO
      ${context}
      
      **Impegni della Settimana (Eventi, Cene, Viaggi)**:
      ${JSON.stringify(weekEntries)}
      
      **Piani Correnti**:
      - Alimentazione: ${JSON.stringify(dietPlan)}
      - Allenamento: ${JSON.stringify(activeWorkout)}
      - Profilo Atleta: ${JSON.stringify(profile)}
      
      ### COMPITO
      Analizza le possibili interferenze tra vita sociale/personale e piani sportivi. Fornisci suggerimenti di adattamento pratici.
      
      ### STRUTTURA OUTPUT (Markdown)
      - **🚩 Criticità**: Identifica i giorni a rischio (es. cena aziendale mercoledì).
      - **🔄 Strategie di Adattamento**: Come spostare sessioni o gestire pasti "fuori piano" per minimizzare l'impatto.
      - **💎 Bonus Tip**: Un consiglio motivazionale specifico per le sfide della settimana.
      
      ### REGOLE
      - Tono professionale, incoraggiante e proattivo.
      - Rispondi in Italiano.
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
    const model = getModel();
    if (!model) return null;

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
    if (!geminiKeyManager.hasKeys()) return null;

    const functionDeclarations = Object.values(skillTools).map((t: any) => ({
      name: t.name,
      description: t.description,
      parameters: t.parameters
    }));

    const model = getModel({ 
      tools: [{ functionDeclarations }] as any
    });

    if (!model) return null;

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
              response: { result: data }
            }
          };
        }));

        result = await chat.sendMessage(toolResponses);
        response = result.response;
      }

      const text = response.text();
      try {
        const cleanJson = text.replace(/```json|```/g, "").trim();
        return JSON.parse(cleanJson);
      } catch (e) {
        // Se non è JSON, ritorniamo il testo puro (alcuni agenti come l'analyst usano markdown)
        return { text: text.trim() };
      }
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

  async transcribeAudio(audioBase64: string) {
    const model = getModel();
    if (!model) return null;

    const prompt = `Trascrivi fedelmente questo audio in italiano. Rispondi SOLO con la trascrizione testuale, senza commenti o altro.`;
    
    try {
      const result = await model.generateContent([
        prompt,
        { inlineData: { mimeType: "audio/webm", data: audioBase64 } }
      ]);
      return result.response.text().trim();

    } catch (e) {
      console.error("Transcription failed", e);
      return null;
    }
  },


  async processWorkoutAudio(audioBase64: string, existingMappings: any[], currentPlan: any[] = [], preferences: any[] = [], coachId?: string, planTitle?: string, planDescription?: string) {
    if (!geminiKeyManager.hasKeys()) return null;
    
    const transcription = await this.transcribeAudio(audioBase64);

    if (!transcription) return { error: "Audio vuoto o non comprensibile." };

    return this.processWorkoutInstructions(transcription, existingMappings, currentPlan, preferences, coachId, planTitle, planDescription);
  },

  async processWorkoutChat(text: string, existingMappings: any[], currentPlan: any[] = [], preferences: any[] = [], coachId?: string, planTitle?: string, planDescription?: string) {
    return this.processWorkoutInstructions(text, existingMappings, currentPlan, preferences, coachId, planTitle, planDescription);
  },

  async processWorkoutInstructions(instructions: string, existingMappings: any[], currentPlan: any[] = [], preferences: any[] = [], coachId?: string, planTitle?: string, planDescription?: string) {
    // 1. EXTRACT EXERCISE NAMES (Pre-analysis)
    let extractedNames: string[] = [];
    try {
      const model = getModel();
      if (!model) return null;

      const extractionPrompt = `
        Analizza queste istruzioni di allenamento: "${instructions}"
        Estrai SOLO i nomi degli esercizi menzionati (es. "panca piana", "squat", "plank").
        
        REGOLE di ESTRAZIONE:
        1. Se un esercizio è una correzione (es. "No, intendevo panca inclinata"), estrai solo il nome CORRETTO.
        2. Normalizza i nomi: se un coach usa termini italiani comuni (es. "Pulley basso", "Panca piana", "Croci"), fornisci SIA il nome originale SIA la traduzione standard in inglese (es. "Pulley basso | Low Pulley Row", "Panca piana | Bench Press"). Questo aiuta il matching testuale.
        3. Singolare/Plurale: Se il nome è ambiguo, fornisci entrambe le varianti (es. "crunch | crunches").
        
        Rispondi con una lista separata da virgole (puoi usare il pipe | all'interno degli elementi per i sinonimi). 
        Se non trovi nulla, rispondi con "NULL".
      `;
      const extractionResult = await model.generateContent(extractionPrompt);
      const extractionText = extractionResult.response.text().trim();
      if (extractionText !== "NULL") {
        const rawNames = extractionText.split(',').map(s => s.trim()).filter(Boolean);
        extractedNames = rawNames.flatMap(n => n.includes('|') ? n.split('|').map(s => s.trim()) : [n]);
      }
    } catch (e) {
      console.error("Name extraction failed:", e);
      extractedNames = [instructions];
    }

    // 2. SEARCH FOR EACH EXTRACTED NAME
    let searchContext = "Nessun esercizio rilevante trovato nella libreria.";
    const allSimilarExercises: any[] = [];
    
    if (extractedNames.length > 0) {
      const { exerciseService } = await import('./exerciseService');
      
      await Promise.all(extractedNames.map(async (name) => {
        const nameEmbedding = await this.generateEmbedding(name);
        if (!nameEmbedding) return;
        const results = await exerciseService.searchExercises(name, nameEmbedding, coachId, 0.25, 5);
        allSimilarExercises.push(...results);
      }));

      if (allSimilarExercises.length > 0) {
        const filteredMap = new Map<string, any>();
        allSimilarExercises.forEach((ex: any) => {
          const baseId = ex.forked_from || ex.id;
          const existing = filteredMap.get(baseId);
          if (!existing || (ex.coach_id === coachId && existing.coach_id !== coachId) || (ex.similarity > existing.similarity + 0.1)) {
            filteredMap.set(baseId, ex);
          }
        });

        const finalMap = new Map<string, any>();
        Array.from(filteredMap.values()).forEach(ex => {
          const nameKey = (ex.name_it || ex.name).toLowerCase();
          const existing = finalMap.get(nameKey);
          if (!existing || (ex.coach_id === coachId && existing.coach_id !== coachId) || (ex.similarity > existing.similarity + 0.1)) {
            finalMap.set(nameKey, ex);
          }
        });

        // Limit results to keep context manageable
        const finalExercises = Array.from(finalMap.values()).sort((a,b) => b.similarity - a.similarity).slice(0, 15);
        searchContext = finalExercises.map((ex: any) => 
          `- ${ex.name_it || ex.name} (ID: ${ex.id}) [Muscoli: ${ex.muscle_group}, Attrezzatura: ${ex.equipment}]${ex.coach_id === coachId ? ' [CUSTOM COACH]' : ''}`
        ).join('\n');
      }
    }

    const mappingContext = existingMappings.map(m => `- "${m.slang_name}" -> ${m.standard_exercise_id}`).join('\n');
    const preferencesContext = preferences.map(p => `- ${p.content}`).join('\n');
    const planContext = currentPlan.length > 0 
      ? JSON.stringify(currentPlan.map(ex => ({
          name: ex.name,
          id: ex.id,
          library_id: ex.exercise_library_id,
          sets: ex.target_sets,
          reps: ex.target_reps,
          rest_between_sets: ex.rest_seconds,
          rest_after_exercise: ex.rest_esercizio,
          group: ex.group_name,
          iterations: ex.group_iterations
        })))
      : "La scheda è attualmente VUOTA.";
    
    // 3. INTELLIGENT MODEL SELECTION
    let selectedModel = overrideModel;
    const complexityScore = (instructions.length / 500) + (allSimilarExercises.length / 10);
    if (complexityScore > 1.5 && overrideModel.includes('lite')) {
      const betterModel = GEMINI_MODELS.find(m => !m.includes('lite') && !m.includes('preview'));
      if (betterModel) selectedModel = betterModel;
      console.log(`Switching to robust model: ${selectedModel} (complexity: ${complexityScore.toFixed(1)})`);
    }

    const model = getModel({ 
      model: selectedModel,
      // @ts-ignore
      responseSchema: WORKOUT_SCHEMA 
    });
    if (!model) return null;

    const prompt = `
      ### RUOLO
      Sei l'Assistente AI di un elite coach di fitness. Il tuo compito è tradurre le istruzioni del coach in una scheda di allenamento strutturata, mappando gli esercizi alla LIBRERIA ufficiale.

      ### STATO SCHEDA ATTUALE
      - **Titolo Attuale**: ${planTitle || "Senza titolo"}
      - **Descrizione Attuale**: ${planDescription || "Nessuna descrizione."}
      - **Esercizi già presenti**:
      ${planContext}

      ### ISTRUZIONI DEL COACH
      "${instructions}"

      ### RISORSE DI MAPPING
      1. **Libreria Rilevante (Ricerca Vettoriale)**:
      ${searchContext}
      
      2. **Mapping Personalizzati (Priorità Assoluta)**:
      ${mappingContext || 'Nessun mapping personalizzato trovato.'}

      3. **Preferenze Generali del Coach**:
      ${preferencesContext || 'Nessuna specifica.'}
      
      ### REGOLE DI ELABORAZIONE (CRITICAL)
      1. **Intestazione Scheda**:
         - Se il 'Titolo Attuale' è vuoto o generico (es. "Senza titolo"), ESTRAI o GENERA un titolo accattivante e tecnico basato sul contenuto (es. "Massive Chest & Shoulders").
         - Se le istruzioni contengono una descrizione o un obiettivo generale, aggiungilo/aggiornalo in 'plan_description'.

      2. **Analisi Azione**:
         - 'append': Aggiungi nuovi esercizi in coda o in una posizione specifica.
         - 'modify': Cambia parametri (set, rep, rest) di esercizi GIÀ PRESENTI (usa l'ID esistente).
         - 'replace': Sostituisci un esercizio esistente con uno nuovo o cancella/correggi l'ultimo inserimento.
      
      3. **Matching Esercizi (Strict Mapping)**:
         - **DEVI SEMPRE CERCARE DI MAPPARE ALLA LIBRERIA**.
         - **Priorità Base Exercises**: Tra più match simili, scegli l'esercizio più standard e comune. Esempio: se il coach dice "Lat Machine", scegli quella a "presa larga" o standard, non varianti esotiche, a meno che non sia specificato.
         - Se esiste un **Mapping Personalizzato**, USALO sempre se il nome coincide con lo slang del coach.
         - **Dubbi**: Se la confidenza è < 85% o l'esercizio è ambiguo, imposta 'needs_confirmation: true' e fornisci 2-3 'alternatives' (ID e Nome) dalla 'Libreria Rilevante'.
      
      4. **Parametri Tecnici & Repetizioni**:
         - **Serie e Ripetizioni**: Se il coach indica ripetizioni diverse per ogni serie (es. "prima serie 10, seconda 12..."), popola l'array 'target_reps_detail' in modo corrispondente (es. [10, 12, ...]).
         - Se viene data una sola indicazione (es. 3x10), popola 'target_reps_detail' con lo stesso valore ripetuto per 'target_sets'.
         - Se è a tempo (es. "Plank 60s"): 'is_time_based: true', 'target_reps: 60' (secondi).
         - 'rest_seconds': Recupero tra le serie. 'rest_esercizio': Recupero post esercizio.
         - 'group_name': Sempre presente. **IMPORTANTE**: Usa lo stesso nome di gruppo per tutti gli esercizi di una sequenza (es. "Allenamento", "Parte A"), a meno che il coach non indichi esplicitamente una divisione (es. "passiamo alla parte B", "poi in circuito", "dopo fai..."). **NON** creare gruppi diversi per ogni singolo esercizio (evita "Esercizio 1", "Esercizio 2").

      5. **Note del Coach**:
         - Inserisci in 'coach_notes' info come RPE, carichi suggeriti, fermi isometrici, ecc. Se il coach ha dettato ripetizioni complesse, scrivile anche qui in formato testuale leggibile.

      ### OUTPUT FORMAT
      Rispondi ESCLUSIVAMENTE con un JSON valido che rispetti lo schema richiesto.
    `;

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const start = text.indexOf('{');
      const end = text.lastIndexOf('}');
      if (start === -1 || (end === -1)) {
        throw new Error("Gemini response did not contain JSON: " + text.substring(0, 100));
      }
      const cleanJson = text.substring(start, end + 1).trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      console.error("Error processing workout instructions:", error);
      if (error instanceof Error) {
        return { error: error.message };
      }
      return { error: String(error) };
    }
  },

  async extractPreferenceEssence(audioBase64: string) {
    const model = getModel();
    if (!model) return null;

    const prompt = `
      ### RUOLO
      Sei un assistente AI per un coach di fitness. Il tuo compito è estrarre l'essenza di una preferenza o regola espressa vocalmente.
      
      ### OBIETTIVO
      Analizza l'audio e trasforma l'istruzione in una frase breve, atomica e "di sistema" in italiano.
      
      ### ESEMPI
      - Audio: "D'ora in poi quando dico panca piana intendo quella con manubri" -> "Panca piana = Panca piana con manubri"
      - Audio: "Il mio riscaldamento standard sono 5 minuti di salto della corda e 20 pushups" -> "Riscaldamento standard: 5 min corda + 20 pushups"
      - Audio: "Usa sempre 60 secondi di recupero per gli esercizi di isolamento" -> "Recupero 60s per esercizi di isolamento"
      - Audio: "Non mettermi mai le croci ai cavi perché ho dolore alla spalla" -> "Evita sempre: Croci ai cavi (dolore spalla)"

      ### REGOLE
      - Rispondi **SOLO** con il testo della preferenza estratta.
      - Massima brevità (max 15 parole).
      - Usa uno stile diretto e professionale.
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
    const model = getModel();
    if (!model) return null;

    const prompt = `
      ### RUOLO
      Sei un Nutrizionista Sportivo Professionista. Il tuo compito è trasformare le note informali di un coach in un documento Markdown strutturato, tecnico e motivante.
      
      ### TESTO DEL COACH
      "${rawText}"
      
      ### CONTESTO ATLETA
      - Peso: ${athleteContext.weight || 'N/A'} kg
      - Target Kcal: ${athleteContext.targetKcal || 'N/A'}
      - Macro: ${JSON.stringify(athleteContext.macros || {})}
      - Preferenze: ${athleteContext.preferences?.join(', ') || 'Nessuna'}
      - Intolleranze: ${athleteContext.intolerances?.join(', ') || 'Nessuna'}
      - Cibi Sgraditi: ${athleteContext.dislikedFoods?.join(', ') || 'Nessuno'}
      
      ### STRUTTURA DOCUMENTO (Markdown)
      Genera il documento seguendo rigorosamente queste sezioni:
      
      ## 🎯 Obiettivo Nutrizionale
      Analisi dell'obiettivo (es. Declinazione, Massa, Performance) basata sulle note.
      
      ## ⏰ Timing & Frequenza Pasti
      Distribuzione dei pasti e finestre di timing (pre/intra/post workout).
      
      ## 🥩 Ripartizione Macronutrienti
      Focus su Proteine, Carbo e Grassi con razionale tecnico.
      
      ## 💧 Idratazione & Integrazione
      Linee guida su acqua e supplementi suggeriti.
      
      ## ⚠️ Vincoli & Regole d'Oro
      Cosa evitare e su cosa non transigere.
      
      ## 📝 Note Strategiche
      Consigli extra per la gestione sociale o imprevisti.
      
      ### REGOLE
      - Mantieni TUTTE le info del coach.
      - Usa un tono professionale ("Elite Performance").
      - Usa grassetti e liste puntate per la leggibilità.
      - Rispondi SOLO con il Markdown.
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
    const model = getModel();
    if (!model) return null;

    const prompt = `
      ### RUOLO
      Sei l'Assistente AI del Nutrizionista. Devi aggiornare le direttive esistenti in base alle nuove istruzioni della chat.
      
      ### DOCUMENTO ATTUALE
      ${currentMd || '(vuoto)'}
      
      ### CONTESTO ATLETA
      - Peso: ${athleteContext.weight || 'N/A'} kg | Target Kcal: ${athleteContext.targetKcal || 'N/A'}
      
      ### MESSAGGIO DEL COACH
      "${userMessage}"
      
      ### COMPITO
      1. Integra le nuove informazioni nel Markdown esistente senza distruggerne la struttura.
      2. Se il coach chiede un cambio radicale, riorganizza le sezioni interessate.
      3. Mantieni lo stile professionale e tecnico.
      4. Rispondi SOLO con il Markdown completo aggiornato.
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
    const model = getModel();
    if (!model) return null;

    const prompt = `
      ### RUOLO
      Sei un Head Coach di Fitness e Performance. Il tuo compito è trasformare le note sparse su obiettivi e focus in un documento strategico Markdown.
      
      ### NOTE DEL COACH/ATLETA
      "${rawText}"
      
      ### CONTESTO ATLETA
      - Nome: ${athleteContext.first_name} ${athleteContext.last_name}
      - Biometria: ${athleteContext.weight || 'N/A'}kg, ${athleteContext.height || 'N/A'}cm, ${athleteContext.age || 'N/A'} anni
      
      ### SEZIONI OBBLIGATORIE (Markdown)
      
      ## 🎯 Obiettivo Centrale
      Definizione chiara della "Stella Polare" (es. Powerbuilding, Body Recomp).
      
      ## 🔥 Focus del Macro-Ciclo
      Priorità tecniche e fisiche attuali (es. "Saturazione Ipertrofica dorsali").
      
      ## 📈 Milestone & KPI
      3-5 risultati chiave misurabili nel breve termine.
      
      ## 🧠 Mindset & Habits
      Indicazioni su attitudine e gestione extra-palestra.
      
      ### REGOLE
      - Tono autorevole, professionale ed elite.
      - Usa grassetti e liste puntate.
      - Rispondi SOLO con il Markdown.
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
    const model = getModel();
    if (!model) return null;

    const prompt = `
      ### RUOLO
      Sei l'Assistente AI del Coach. Devi aggiornare il documento "Focus e Obiettivi" tramite chat context.
      
      ### DOCUMENTO ATTUALE
      ${currentMd || '(vuoto)'}
      
      ### CONTESTO ATLETA
      ${JSON.stringify(athleteContext)}
      
      ### RICHIESTA DEL COACH
      "${userMessage}"
      
      ### ISTRUZIONI
      - Integra le modifiche salvaguardando il tono professionale e la struttura a sezioni (## 🎯, ## 🔥, ecc.).
      - Mantieni la coerenza con gli obiettivi a lungo termine.
      - Rispondi SOLO con il Markdown completo aggiornato.
    `;

    try {
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (error) {
      console.error("Error in chat focus objectives:", error);
      return null;
    }
  },

  async processOnboardingMessage(params: {
    message?: string;
    audioBase64?: string;
    currentProfile: any;
    currentPreferences: any;
    history: { role: 'user' | 'model'; parts: { text: string }[] }[];
    mission: 'BIOMETRICS' | 'EXPERIENCE' | 'GOALS' | 'PHILOSOPHY';
  }) {
    const model = getModel();
    if (!model) return null;

    let userText = params.message || '';
    if (params.audioBase64) {
      const transcription = await this.transcribeAudio(params.audioBase64);
      if (!transcription) return { error: "Non ho capito l'audio. Prova a ripetere o scrivere." };
      userText = transcription;
    }

    const prompt = `
      ### RUOLO
      Sei l'Assistente AI Elitè di JB Fit. Il tuo compito è guidare il coach attraverso un onboarding conversazionale "Elite Performance".
      
      ### MISSIONE ATTUALE
      ${params.mission}
      
      ### STATO ATTUALE (Quello che già sappiamo)
      - Profilo: ${JSON.stringify(params.currentProfile)}
      - Preferenze AI: ${JSON.stringify(params.currentPreferences)}
      
      ### CAMPI DA COMPLETARE PER QUESTA MISSIONE:
      ${params.mission === 'BIOMETRICS' ? '- Data di nascita (birth_date), Genere (gender: M/F), Altezza (height), Peso (weight), Livello Attività (activity_level)' : ''}
      ${params.mission === 'EXPERIENCE' ? '- Livello Esperienza (experience_level), Infortuni (injuries), Attrezzatura disponibile (equipment)' : ''}
      ${params.mission === 'GOALS' ? '- Frequenza allenamento (training_frequency), Obiettivi focus (focus_objectives), Deficit calorico target (target_deficit)' : ''}
      ${params.mission === 'PHILOSOPHY' ? '- Filosofia Allenamento (workout), Linee Guida Alimentazione (nutrition), Briefing Strategico (strategic)' : ''}
      
      ### REGOLE DI RISPOSTA
      1. **Tono**: Professionale, incoraggiante, conciso. Parla come un assistente di alto livello.
      2. **Estrazione**: Identifica OGNI dato fornito dall'utente nel messaggio e mappalo ai campi corretti.
      3. **Conversazione**: Rispondi al messaggio dell'utente (es. "Perfetto, ho segnato l'altezza!") e chiedi SUBITO il prossimo dato mancante della missione.
      4. **Completamento**: Se hai tutti i dati della missione corrente, informa l'utente e preparalo alla prossima fase (o concludi se è l'ultima).
      5. **Lingua**: Italiano.
      
      ### FORMATO OUTPUT (JSON)
      {
        "reply": "Il tuo messaggio naturale qui...",
        "extractedFields": { "field": value },
        "extractedPreferences": { "category": "content" },
        "isMissionComplete": true/false
      }
      
      MESSAGGIO UTENTE: "${userText}"
    `;

    try {
      const chat = model.startChat({ history: params.history });
      const result = await chat.sendMessage(prompt);
      const text = result.response.text();
      const start = text.indexOf('{');
      const end = text.lastIndexOf('}');
      const cleanJson = text.substring(start, end + 1).trim();
      const parsed = JSON.parse(cleanJson);
      return { ...parsed, userText };
    } catch (error) {
      console.error("Error in processOnboardingMessage:", error);
      return { error: "Errore nel processamento del messaggio." };
    }
  },

  setOverrideModel(model: GeminiModelType) {
    overrideModel = model;
  }
};
