import { useState, useMemo } from 'react';
import { calculateDietMetrics, type ActivityLevel, type Gender } from '../../services/dietService';
import {
  Flame,
  Activity,
  Dumbbell,
  Droplets,
  Calculator,
  User,
  Scale,
  Ruler,
  TrendingDown,
  ChevronDown,
  RefreshCw,
  Leaf
} from 'lucide-react';
import { DIET_TEMPLATES } from '../../data/dietTemplates';

export default function DietCalculator() {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<Gender>('M');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('lightly_active');
  const [deficit, setDeficit] = useState<number>(500);

  // State for food swaps. Key: "MealName-FoodIndex", Value: { type: 'original' | 'normal' | 'vegan', swapIndex: number }
  const [swaps, setSwaps] = useState<Record<string, { type: 'original' | 'normal' | 'vegan', swapIndex: number }>>({});

  const results = useMemo(() => {
    if (weight > 0 && height > 0 && age > 0) {
      return calculateDietMetrics({
        weight,
        height,
        age,
        gender,
        activityLevel,
        deficit
      });
    }
    return null;
  }, [weight, height, age, gender, activityLevel, deficit]);

  const activityOptions: { value: ActivityLevel; label: string; desc: string }[] = [
    { value: 'sedentary', label: 'Sedentario', desc: 'Poco o nessun esercizio' },
    { value: 'lightly_active', label: 'Leggero', desc: '1-3 gg/settimana' },
    { value: 'moderately_active', label: 'Moderato', desc: '3-5 gg/settimana' },
    { value: 'very_active', label: 'Molto Attivo', desc: '6-7 gg/settimana' },
    { value: 'extremely_active', label: 'Estremo', desc: 'Lavoro fisico intenso / 2x giorno' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 lg:p-6 space-y-6">
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Generatore Dieta</h1>
          <p className="text-slate-400">Calcolo del Fabbisogno e Macronutrienti</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* INPUT FORM */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-primary-400" />
            Dati Personali
          </h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Sesso</label>
                <div className="flex bg-slate-800/50 rounded-xl p-1 relative border border-slate-700/50">
                  <button
                    onClick={() => setGender('M')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${gender === 'M' ? 'bg-primary-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                  >
                    Uomo
                  </button>
                  <button
                    onClick={() => setGender('F')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${gender === 'F' ? 'bg-primary-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                  >
                    Donna
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Età</label>
                <div className="relative">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full bg-slate-800 border items-center border-slate-700 text-white rounded-xl px-4 py-2.5 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                    min="1"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">anni</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Peso</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-500">
                    <Scale className="w-4 h-4" />
                  </div>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl pl-10 pr-8 py-2.5 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                    min="1"
                    step="0.1"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">kg</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Altezza</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-500">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl pl-10 pr-8 py-2.5 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                    min="1"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">cm</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Livello di Attività Fisica</label>
              <div className="relative">
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl pl-4 pr-10 py-3 appearance-none outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-medium"
                >
                  {activityOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label} - {opt.desc}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
               <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
                 <TrendingDown className="w-4 h-4 text-emerald-400" />
                 Deficit Calorico Obiettivo
               </label>
               <div className="relative">
                 <select
                   value={deficit}
                   onChange={(e) => setDeficit(Number(e.target.value))}
                   className="w-full bg-slate-800/80 border border-emerald-900/30 text-emerald-100 rounded-xl pl-4 pr-10 py-3 appearance-none outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                 >
                   <option value={0}>Mantenimento (0 kcal)</option>
                   <option value={300}>Lieve (-300 kcal)</option>
                   <option value={500}>Ricomposizione Corporea (-500 kcal)</option>
                   <option value={800}>Definizione Marcata (-800 kcal)</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500/50 w-5 h-5 pointer-events-none" />
               </div>
               <p className="text-xs text-slate-500 mt-2">
                 L'algoritmo calcolerà il target in base al TDEE sottratto del deficit scelto.
               </p>
            </div>
          </div>
        </div>

        {/* RESULTS PANEL */}
        <div className="lg:col-span-7 space-y-6">
          {results ? (
            <>
              {/* PRIMARY METRICS */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden shadow-xl">
                  <div className="absolute -right-4 -bottom-4 opacity-5">
                    <Activity className="w-32 h-32" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Activity className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">TDEE / Consumo</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white tracking-tight">
                      {Math.round(results.tdee)}
                    </span>
                    <span className="text-slate-500 font-medium">kcal</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">Fabbisogno totale giornaliero</p>
                </div>

                <div className="bg-gradient-to-br from-primary-900/40 to-primary-900/10 border border-primary-500/30 rounded-3xl p-6 relative overflow-hidden shadow-xl">
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <Flame className="w-32 h-32 text-primary-500" />
                  </div>
                  <div className="flex items-center gap-2 text-primary-300 mb-2">
                    <Flame className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">Obiettivo Target</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white tracking-tight">
                      {Math.round(results.targetKcal)}
                    </span>
                    <span className="text-primary-400/60 font-medium">kcal</span>
                  </div>
                  <div className="mt-2 text-sm font-medium flex items-center gap-1.5">
                    <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      -{deficit} kcal
                    </span>
                  </div>
                </div>
              </div>

              {/* MACROS */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-indigo-400" />
                  I Tuoi Macronutrienti
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {/* PROTEIN */}
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-3 text-indigo-400">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-white mb-1">
                      {Math.round(results.macros.protein)}g
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Proteine</span>
                    <span className="text-xs text-slate-500 mt-1">{Math.round(results.macros.protein * 4)} kcal</span>
                  </div>

                  {/* CARBS */}
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mb-3 text-amber-400">
                      <Flame className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-white mb-1">
                      {Math.round(results.macros.carbs)}g
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Carboidrati</span>
                    <span className="text-xs text-slate-500 mt-1">{Math.round(results.macros.carbs * 4)} kcal</span>
                  </div>

                  {/* FATS */}
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center mb-3 text-rose-400">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-white mb-1">
                      {Math.round(results.macros.fat)}g
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Grassi</span>
                    <span className="text-xs text-slate-500 mt-1">{Math.round(results.macros.fat * 9)} kcal</span>
                  </div>
                </div>

                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                  <div 
                    className="h-full bg-indigo-500 transition-all duration-1000"
                    style={{ width: `${((results.macros.protein * 4) / results.targetKcal) * 100}%` }}
                  />
                  <div 
                    className="h-full bg-amber-500 transition-all duration-1000"
                    style={{ width: `${((results.macros.carbs * 4) / results.targetKcal) * 100}%` }}
                  />
                  <div 
                    className="h-full bg-rose-500 transition-all duration-1000"
                    style={{ width: `${((results.macros.fat * 9) / results.targetKcal) * 100}%` }}
                  />
                </div>
                
                <div className="flex justify-between text-xs font-medium text-slate-500 px-1">
                  <span>Prot: {Math.round(((results.macros.protein * 4) / results.targetKcal) * 100)}%</span>
                  <span>Carb: {Math.round(((results.macros.carbs * 4) / results.targetKcal) * 100)}%</span>
                  <span>Fat: {Math.round(((results.macros.fat * 9) / results.targetKcal) * 100)}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                   <div className="text-slate-400 font-medium text-sm">BMR (Metabolismo Basale)</div>
                   <div className="text-white font-bold">{Math.round(results.bmr)} kcal</div>
                 </div>
                 <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                   <div className="text-slate-400 font-medium text-sm">BMI</div>
                   <div className="flex items-center gap-2">
                     <span className="text-white font-bold">{results.bmi.toFixed(1)}</span>
                     {results.bmi < 18.5 && <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">Sottopeso</span>}
                     {results.bmi >= 18.5 && results.bmi < 25 && <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Normale</span>}
                     {results.bmi >= 25 && results.bmi < 30 && <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">Sovrappeso</span>}
                     {results.bmi >= 30 && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">Obesità</span>}
                   </div>
                 </div>
              </div>

              {/* DIET PLAN RENDERER */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    Piano Alimentare Generato
                  </h3>
                  <div className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-xs font-bold border border-primary-500/20">
                    Basato su {Math.round(results.targetKcal)} kcal
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6">
                  Le porzioni sono calcolate matematicamente in base al target calorico di {Math.round(results.targetKcal)} kcal. 
                  Usa i menu a tendina per sostituire gli alimenti con le alternative consigliate.
                </p>

                <div className="space-y-6">
                  {DIET_TEMPLATES[0].meals.map((meal, mealIndex) => (
                    <div key={mealIndex} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden">
                      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700/50 flex items-center justify-between">
                        <span className="font-bold text-white">{meal.name}</span>
                        <span className="text-xs text-slate-400 font-medium">~ {Math.round(results.targetKcal * (meal.name.toLowerCase() === 'pranzo' ? 0.35 : meal.name.toLowerCase() === 'cena' ? 0.30 : meal.name.toLowerCase() === 'colazione' ? 0.25 : 0.10))} kcal</span>
                      </div>
                      <div className="p-2 space-y-2">
                        {meal.foods.map((food, foodIndex) => {
                          const swapKey = `${meal.name}-${foodIndex}`;
                          const currentSwap = swaps[swapKey] || { type: 'original', swapIndex: 0 };
                          
                          let displayFoodName = food.name;
                          let displayBaseQty = food.baseQty;
                          let isVegan = false;

                          if (currentSwap.type === 'normal') {
                            const option = food.normalSwaps[currentSwap.swapIndex];
                            if (option) {
                              displayFoodName = option.name;
                              displayBaseQty = option.baseQty;
                            }
                          } else if (currentSwap.type === 'vegan') {
                            const option = food.veganSwaps[currentSwap.swapIndex];
                            if (option) {
                              displayFoodName = option.name;
                              displayBaseQty = option.baseQty;
                              isVegan = true;
                            }
                          }

                          // Mathematical Dynamic Scaling: ROUND(baseQty * (target / 1911) / 5) * 5
                          const dynamicQty = Math.round((displayBaseQty * (results.targetKcal / 1911)) / 5) * 5;

                          return (
                            <div key={foodIndex} className="bg-slate-900 border border-slate-700/50 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:border-slate-600">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold text-white">{dynamicQty}g</span>
                                  <span className={`text-sm font-medium ${isVegan ? 'text-emerald-400' : 'text-slate-300'}`}>
                                    {displayFoodName}
                                  </span>
                                  {isVegan && <Leaf className="w-3 h-3 text-emerald-500" />}
                                </div>
                              </div>
                              
                              {(food.normalSwaps.length > 0 || food.veganSwaps.length > 0) && (
                                <div className="sm:w-64">
                                  <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                                      <RefreshCw className="w-3.5 h-3.5" />
                                    </div>
                                    <select
                                      value={`${currentSwap.type}-${currentSwap.swapIndex}`}
                                      onChange={(e) => {
                                        const [type, index] = e.target.value.split('-');
                                        setSwaps((prev: Record<string, { type: 'original' | 'normal' | 'vegan', swapIndex: number }>) => ({
                                          ...prev,
                                          [swapKey]: { type: type as any, swapIndex: Number(index) }
                                        }));
                                      }}
                                      className="w-full bg-slate-800 border border-slate-700 text-xs text-slate-300 rounded-lg pl-9 pr-8 py-2 appearance-none outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer hover:bg-slate-700/50"
                                    >
                                      <option value="original-0">Orig: {food.name}</option>
                                      {food.normalSwaps.length > 0 && <optgroup label="Alternative Consigliate">
                                        {food.normalSwaps.map((sw, idx) => (
                                          <option key={`normal-${idx}`} value={`normal-${idx}`}>{sw.name}</option>
                                        ))}
                                      </optgroup>}
                                      {food.veganSwaps.length > 0 && <optgroup label="Opzioni Vegane 🌿">
                                        {food.veganSwaps.map((sw, idx) => (
                                          <option key={`vegan-${idx}`} value={`vegan-${idx}`}>🌿 {sw.name}</option>
                                        ))}
                                      </optgroup>}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 w-3.5 h-3.5 pointer-events-none" />
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </>
          ) : (
            <div className="h-full min-h-[400px] flex items-center justify-center text-slate-500 font-medium bg-slate-900/50 border border-slate-800/50 rounded-3xl border-dashed">
              Inserisci i dati per visualizzare i risultati
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
