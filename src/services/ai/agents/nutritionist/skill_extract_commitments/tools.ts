import { nutritionService } from "../../../../nutritionService";

export const tools = {
  find_official_food: {
    name: "find_official_food",
    description: "Cerca un alimento specifico nel database ufficiale per ottenere i valori nutrizionali esatti (kcal, proteine, carbo, grassi).",
    parameters: {
      type: "OBJECT",
      properties: {
        food_name: {
          type: "string",
          description: "Il nome dell'alimento da cercare (es. 'Petto di pollo', 'Riso basmati')"
        },
        grams: {
          type: "number",
          description: "La quantità in grammi (opzionale, default 100g)"
        }
      },
      required: ["food_name"]
    },
    execute: async (args: { food_name: string, grams?: number }) => {
      const match = nutritionService.findMatch(args.food_name);
      if (match) {
        const qty = args.grams || 100;
        const factor = qty / 100;
        return {
          found: true,
          name: match.name,
          qty_grams: qty,
          macros: {
            kcal: Math.round(match.kcal * factor),
            p: Math.round(match.p * factor * 10) / 10,
            c: Math.round(match.c * factor * 10) / 10,
            f: Math.round(match.f * factor * 10) / 10
          }
        };
      }
      return { found: false, message: "Alimento non trovato nel database ufficiale." };
    }
  }
};
