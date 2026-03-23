import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { geminiService } from '../../services/geminiService';
import { recipeService } from '../../services/recipeService';
import { 
  Heart, 
  X, 
  Sparkles, 
  Info, 
  ChefHat,
  Flame,
  Clock,
  ChevronRight
} from 'lucide-react';


interface Recipe {
  name: string;
  description: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
  instructions: string;
}

export default function RecipeSwiper({ athleteId, targetKcal, preferences }: { athleteId: string, targetKcal: number, preferences: any }) {
  const queryClient = useQueryClient();
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const fetchNewRecipe = async () => {
    setIsGenerating(true);
    try {
      const recipe = await geminiService.generateRecipe(targetKcal, preferences);
      setCurrentRecipe(recipe);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    fetchNewRecipe();
  }, []);

  const saveRecipeMutation = useMutation({
    mutationFn: (recipe: Recipe) => recipeService.saveRecipe({
      ...recipe,
      coach_id: null,
      is_public: false
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['saved-recipes', athleteId] });
      handleNext();
    }
  });

  const handleNext = () => {
    setDirection(null);
    setShowDetails(false);
    fetchNewRecipe();
  };

  const onSwipe = (dir: 'left' | 'right') => {
    setDirection(dir);
    setTimeout(() => {
      if (dir === 'right' && currentRecipe) {
        saveRecipeMutation.mutate(currentRecipe);
      } else {
        handleNext();
      }
    }, 300);
  };

  if (isGenerating && !currentRecipe) {
    return (
      <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
          <ChefHat className="w-6 h-6 text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <p className="text-slate-400 font-medium animate-pulse">L'IA sta cucinando per te...</p>
      </div>
    );
  }

  if (!currentRecipe) return null;

  return (
    <div className="relative max-w-sm mx-auto h-[500px] flex flex-col items-center justify-center px-4">
      {/* Recipe Card */}
      <div 
        className={`relative w-full h-full bg-slate-900 rounded-[2.5rem] border-2 border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 transform ${
          direction === 'left' ? '-translate-x-[150%] -rotate-12 opacity-0' : 
          direction === 'right' ? 'translate-x-[150%] rotate-12 opacity-0' : 
          'scale-100 opacity-100'
        }`}
      >
        {/* Placeholder for Image - using gradient since we don't have images yet */}
        <div className="h-48 w-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
          <Sparkles className="w-12 h-12 text-white/10 absolute -top-2 -right-2 rotate-12" />
          <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
             <ChefHat className="w-8 h-8 text-emerald-400" />
             <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Ricetta IA</p>
                <p className="text-sm font-bold text-white leading-tight">Suggerimento Strategico</p>
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-black text-white italic leading-tight">{currentRecipe.name}</h3>
            <p className="text-slate-400 text-xs mt-1 line-clamp-2">{currentRecipe.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="bg-slate-950/50 p-3 rounded-2xl border border-slate-800 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <div>
                   <p className="text-xs font-bold text-white">{currentRecipe.kcal}</p>
                   <p className="text-[8px] uppercase font-black text-slate-500">Calories</p>
                </div>
             </div>
             <div className="bg-slate-950/50 p-3 rounded-2xl border border-slate-800 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <div>
                   <p className="text-xs font-bold text-white">~ 15 min</p>
                   <p className="text-[8px] uppercase font-black text-slate-500">Tempo</p>
                </div>
             </div>
          </div>

          <div className="flex items-center justify-between pt-2">
             <div className="flex gap-2 text-[10px] font-black uppercase text-slate-500">
                <span>P: {currentRecipe.protein}g</span>
                <span>C: {currentRecipe.carbs}g</span>
                <span>F: {currentRecipe.fat}g</span>
             </div>
             <button 
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs font-bold text-emerald-500 flex items-center gap-1 hover:text-emerald-400 transition-colors"
             >
               {showDetails ? 'Chiudi' : 'Dettagli'}
               <ChevronRight className={`w-3 h-3 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
             </button>
          </div>

          {showDetails && (
            <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
               <div className="h-px bg-slate-800" />
               <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-500 mb-1">Ingredienti</h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {currentRecipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-emerald-500" />
                         {ing}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          )}
        </div>

        {/* Swipe Overlays */}
        {direction === 'left' && (
          <div className="absolute inset-0 bg-rose-500/20 flex items-center justify-center backdrop-blur-[2px]">
             <div className="px-6 py-2 border-4 border-rose-500 rounded-2xl rotate-12 bg-slate-950/80">
                <span className="text-2xl font-black text-rose-500 uppercase tracking-widest">SKIP</span>
             </div>
          </div>
        )}
        {direction === 'right' && (
          <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center backdrop-blur-[2px]">
             <div className="px-6 py-2 border-4 border-emerald-500 rounded-2xl -rotate-12 bg-slate-950/80">
                <span className="text-2xl font-black text-emerald-500 uppercase tracking-widest">LIKE</span>
             </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button 
          onClick={() => onSwipe('left')}
          disabled={isGenerating || !!direction}
          className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-rose-500 hover:border-rose-500/50 hover:bg-rose-500/5 transition-all shadow-xl disabled:opacity-50 group"
        >
          <X className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
        <button 
          onClick={() => fetchNewRecipe()}
          disabled={isGenerating || !!direction}
          className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-400/50 transition-all shadow-lg disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onSwipe('right')}
          disabled={isGenerating || !!direction}
          className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all shadow-xl disabled:opacity-50 group"
        >
          <Heart className="w-8 h-8 group-hover:scale-110 fill-current transition-transform" />
        </button>
      </div>

      {/* Info Tip */}
      <p className="mt-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
        <Info className="w-3 h-3" />
        Scorri a destra se ti ispira!
      </p>
    </div>
  );
}
