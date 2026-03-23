import { DIET_TEMPLATES } from '../data/dietTemplates';

export interface FoodMacros {
  kcal: number;
  p: number;
  c: number;
  f: number;
}

// Estraiamo una mappa dei cibi ufficiali con macro per grammo
const getFoodLibrary = () => {
  const library: Record<string, FoodMacros & { originalName: string }> = {};

  DIET_TEMPLATES.forEach(template => {
    template.meals?.forEach(meal => {
      meal.foods?.forEach(food => {
        // Puliamo il nome per il matching
        const cleanName = food.name.split('(')[0].trim().toLowerCase();
        const baseQty = food.baseQty || 100;
        
        library[cleanName] = {
          kcal: food.kcal / baseQty,
          p: food.protein / baseQty,
          c: food.carbs / baseQty,
          f: food.fat / baseQty,
          originalName: food.name
        };

        // Aggiungiamo anche gli swap se hanno macro definite
        // food.normalSwaps?.forEach(swap => { ... });
      });
    });
  });

  return library;
};

let FOOD_LIBRARY: Record<string, FoodMacros & { originalName: string }> | null = null;

export const nutritionService = {
  getLibrary() {
    if (!FOOD_LIBRARY) {
      FOOD_LIBRARY = getFoodLibrary();
    }
    return FOOD_LIBRARY;
  },

  // Cerca di abbinare un ingrediente IA con uno ufficiale e ricalcola i macro
  normalizeIngredient(name: string, qty: number, aiMacros: FoodMacros) {
    const library = this.getLibrary();
    const searchName = name.toLowerCase().trim();
    
    // Cerchiamo un match esatto o parziale significativo
    const officialNames = Object.keys(library);
    const match = officialNames.find(official => 
      searchName.includes(official) || official.includes(searchName)
    );

    if (match) {
      const macrosPerGram = library[match];
      return {
        name: library[match].originalName, // Usiamo il nome originale dell'Excel
        qty_grams: qty,
        macros: {
          kcal: Math.round(macrosPerGram.kcal * qty),
          p: Number((macrosPerGram.p * qty).toFixed(1)),
          c: Number((macrosPerGram.c * qty).toFixed(1)),
          f: Number((macrosPerGram.f * qty).toFixed(1))
        },
        matched: true
      };
    }

    // Se non troviamo match, usiamo i valori dell'IA
    return {
      name,
      qty_grams: qty,
      macros: aiMacros,
      matched: false
    };
  },

  getOfficialFoodNames() {
    return Object.keys(this.getLibrary());
  },

  findMatch(name: string) {
    const library = this.getLibrary();
    const searchName = name.toLowerCase().trim();
    const officialNames = Object.keys(library);
    
    const match = officialNames.find(official => 
      searchName.includes(official) || official.includes(searchName) || 
      (searchName.split(' ')[0].length > 4 && official.includes(searchName.split(' ')[0]))
    );

    if (match) {
      const macrosPerGram = library[match];
      return {
        name: library[match].originalName,
        kcal: Number((macrosPerGram.kcal * 100).toFixed(0)),
        p: Number((macrosPerGram.p * 100).toFixed(1)),
        c: Number((macrosPerGram.c * 100).toFixed(1)),
        f: Number((macrosPerGram.f * 100).toFixed(1))
      };
    }
    return null;
  }
};
