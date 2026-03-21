export interface SwapOption {
  name: string;
  baseQty: number; // For 1911 kcal target
}

export interface DietFood {
  name: string;
  baseQty: number; 
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  normalSwaps: SwapOption[];
  veganSwaps: SwapOption[];
}

export interface Meal {
  name: string;
  foods: DietFood[];
}

export interface DietTemplate {
  id: string;
  name: string;
  description: string;
  meals: Meal[];
}

export const DIET_TEMPLATES: DietTemplate[] = [
  {
    id: "4_pasti",
    name: "Dieta a 4 Pasti",
    description: "Ideale per chi preferisce mangiare frequentemente, distribuendo i nutrienti lungo la giornata.",
    meals: [
      {
        name: "Colazione",
        foods: [
          {
            name: "Uova intere (1 uovo)",
            baseQty: 70,
            kcal: 108,
            protein: 9,
            carbs: 0.8,
            fat: 7.7,
            normalSwaps: [
              { name: "Ricotta intera", baseQty: 80 },
              { name: "Formaggio fresco", baseQty: 100 },
              { name: "Fiocchi di latte", baseQty: 65 },
              { name: "Prosciutto cotto", baseQty: 70 },
              { name: "Salmone affumicato", baseQty: 65 }
            ],
            veganSwaps: [
              { name: "Tofu strapazzato con curcuma", baseQty: 95 },
              { name: "Frittata di ceci (farinata)", baseQty: 80 },
              { name: "Tempeh a fette", baseQty: 65 },
              { name: "Proteine vegane in polvere", baseQty: 20 }
            ]
          },
          {
            name: "Albumi",
            baseQty: 70,
            kcal: 36,
            protein: 7.7,
            carbs: 0.5,
            fat: 0.1,
            normalSwaps: [
              { name: "Whey protein", baseQty: 10 },
              { name: "Bresaola", baseQty: 25 },
              { name: "Fesa di tacchino", baseQty: 35 },
              { name: "Skyr", baseQty: 55 }
            ],
            veganSwaps: [
              { name: "Tofu silken", baseQty: 75 },
              { name: "Edamame bolliti", baseQty: 65 },
              { name: "Lupini sgusciati", baseQty: 65 }
            ]
          },
          {
            name: "Pane integrale tostato",
            baseQty: 40,
            kcal: 106,
            protein: 4.1,
            carbs: 19.9,
            fat: 1.0,
            normalSwaps: [
              { name: "Fette biscottate integrali", baseQty: 30 },
              { name: "Crackers integrali", baseQty: 25 },
              { name: "Pane di segale", baseQty: 45 },
              { name: "Avena", baseQty: 30 }
            ],
            veganSwaps: [
              { name: "Avena", baseQty: 40 },
              { name: "Gallette di riso (5 pz)", baseQty: 40 },
              { name: "Pane di segale", baseQty: 40 }
            ]
          },
          {
            name: "Frutta fresca (es. fragole/mirtilli)",
            baseQty: 65,
            kcal: 21,
            protein: 0.4,
            carbs: 4.9,
            fat: 0.2,
            normalSwaps: [
              { name: "Banana", baseQty: 20 },
              { name: "Mela", baseQty: 40 },
              { name: "Kiwi", baseQty: 40 },
              { name: "Uva", baseQty: 30 }
            ],
            veganSwaps: [
              { name: "Mirtilli", baseQty: 75 },
              { name: "Banana", baseQty: 65 },
              { name: "Arancia", baseQty: 115 }
            ]
          }
        ]
      },
      {
        name: "Pranzo",
        foods: [
          {
            name: "Petto di pollo / tacchino",
            baseQty: 120,
            kcal: 139,
            protein: 28.7,
            carbs: 0,
            fat: 2.3,
            normalSwaps: [
              { name: "Lonza di maiale", baseQty: 90 },
              { name: "Bistecca magra", baseQty: 90 },
              { name: "Merluzzo", baseQty: 195 },
              { name: "Tonno", baseQty: 135 }
            ],
            veganSwaps: [
              { name: "Tofu compatto", baseQty: 125 },
              { name: "Tempeh", baseQty: 95 },
              { name: "Seitan", baseQty: 90 },
              { name: "Legumi cotti", baseQty: 125 }
            ]
          },
          {
            name: "Riso integrale / Farro",
            baseQty: 55,
            kcal: 195,
            protein: 4.3,
            carbs: 41.9,
            fat: 0.6,
            normalSwaps: [
              { name: "Pasta di grano duro", baseQty: 55 },
              { name: "Gnocchi di patate", baseQty: 145 },
              { name: "Orzo", baseQty: 55 }
            ],
            veganSwaps: [
              { name: "Quinoa", baseQty: 65 },
              { name: "Pasta di ceci", baseQty: 60 },
              { name: "Bulgur", baseQty: 60 }
            ]
          },
          {
            name: "Verdure miste (zucchine/broccoli)",
            baseQty: 135,
            kcal: 34,
            protein: 1.7,
            carbs: 5.4,
            fat: 0.3,
            normalSwaps: [
              { name: "Spinaci", baseQty: 135 },
              { name: "Cavolfiore", baseQty: 135 },
              { name: "Asparagi", baseQty: 135 }
            ],
            veganSwaps: [
              { name: "Mix verdure", baseQty: 135 }
            ]
          },
          {
            name: "Olio EVO",
            baseQty: 5,
            kcal: 57,
            protein: 0,
            carbs: 0,
            fat: 6.3,
            normalSwaps: [
              { name: "Burro", baseQty: 10 },
              { name: "Avocado", baseQty: 35 },
              { name: "Olive", baseQty: 50 }
            ],
            veganSwaps: [
              { name: "Avocado", baseQty: 35 },
              { name: "Tahini", baseQty: 10 }
            ]
          }
        ]
      },
      {
        name: "Spuntino",
        foods: [
          {
            name: "Ricotta magra o Yogurt",
            baseQty: 50,
            kcal: 56,
            protein: 5.7,
            carbs: 2.5,
            fat: 2.5,
            normalSwaps: [
              { name: "Yogurt greco", baseQty: 50 },
              { name: "Fiocchi di latte", baseQty: 50 }
            ],
            veganSwaps: [
              { name: "Yogurt di soia", baseQty: 75 },
              { name: "Hummus", baseQty: 50 }
            ]
          },
          {
            name: "Frutta secca / Mandorle",
            baseQty: 10,
            kcal: 57,
            protein: 1.6,
            carbs: 1.6,
            fat: 5.1,
            normalSwaps: [
              { name: "Noci", baseQty: 10 },
              { name: "Nocciole", baseQty: 10 }
            ],
            veganSwaps: [
              { name: "Semi di chia", baseQty: 10 },
              { name: "Burro d'arachidi", baseQty: 10 }
            ]
          }
        ]
      },
      {
        name: "Cena",
        foods: [
          {
            name: "Salmone o Merluzzo",
            baseQty: 80,
            kcal: 102,
            protein: 16.0,
            carbs: 0,
            fat: 4.0,
            normalSwaps: [
              { name: "Petto di pollo", baseQty: 80 },
              { name: "Carne rossa magra", baseQty: 80 },
              { name: "Tonno", baseQty: 100 }
            ],
            veganSwaps: [
              { name: "Tofu grigliato", baseQty: 125 },
              { name: "Burger di lenticchie", baseQty: 115 },
              { name: "Seitan", baseQty: 95 }
            ]
          },
          {
            name: "Patate dolci o Legumi",
            baseQty: 55,
            kcal: 47,
            protein: 1.1,
            carbs: 11.0,
            fat: 0.1,
            normalSwaps: [
              { name: "Fagioli borlotti", baseQty: 70 },
              { name: "Lenticchie", baseQty: 70 },
              { name: "Piselli", baseQty: 100 }
            ],
            veganSwaps: [
              { name: "Lenticchie rosse", baseQty: 115 },
              { name: "Fagioli neri", baseQty: 100 },
              { name: "Ceci", baseQty: 80 }
            ]
          },
          {
            name: "Insalata o Verdure",
            baseQty: 125,
            kcal: 22,
            protein: 1.3,
            carbs: 3.5,
            fat: 0.3,
            normalSwaps: [
              { name: "Mix verdure", baseQty: 125 }
            ],
            veganSwaps: [
              { name: "Insalata mista", baseQty: 125 }
            ]
          },
          {
            name: "Olio EVO",
            baseQty: 5,
            kcal: 57,
            protein: 0,
            carbs: 0,
            fat: 6.3,
            normalSwaps: [
              { name: "Avocado", baseQty: 30 },
              { name: "Olive", baseQty: 40 }
            ],
            veganSwaps: [
              { name: "Avocado", baseQty: 30 },
              { name: "Tahini", baseQty: 10 }
            ]
          }
        ]
      }
    ]
  }
];
