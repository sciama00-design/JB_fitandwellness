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

export const geminiService = {
  async generateStrategicAdvice(athleteData: any, workoutData: any) {
    if (!API_KEY) {
      console.warn("Gemini API Key missing. Skipping strategic advice.");
      return null;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

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

    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

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

    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

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

    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

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
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

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
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

    const prompt = `
      Sei un assistente per un coach di fitness. Genera un briefing sintetico (max 150 parole) sull'atleta corrente.
      Profilo: ${JSON.stringify(athleteProfile)}
      Dieta: ${JSON.stringify(dietPlan)}
      Allenamento: ${JSON.stringify(workoutPlan)}
      Log recenti: ${JSON.stringify(recentLogs)}
      
      Riassumi progressi, aderenza al piano e suggerisci eventuali aggiustamenti necessari. Sii diretto e professionale.
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
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

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
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

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
      model: "gemini-3.1-flash-lite-preview",
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
  }
};



