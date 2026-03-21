import { BookOpen, Info, Target, AlertTriangle, Droplets } from 'lucide-react';

export default function NutritionGuide() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Guida Completa al Deficit Calorico</h2>
          <p className="text-slate-400">Tutto ciò che devi sapere sul tuo percorso</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Come Funziona */}
        <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
          <h3 className="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Come Funziona il Calcolo
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Utilizziamo la formula <strong>Mifflin-St Jeor</strong>, la più accurata per stimare il Metabolismo Basale (BMR). Il BMR viene moltiplicato per il tuo fattore di attività per ottenere il TDEE (calorie totali bruciate).
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Dal TDEE vengono sottratte tra le 300 e le 800 kcal creando un <strong>deficit sicuro ed efficace (~0.5-1 kg/settimana)</strong> senza rischiare perdita muscolare o rallentamento metabolico.
          </p>
        </div>

        {/* Timeline Realistica */}
        <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
          <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Timeline Realistica
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="font-bold text-emerald-400 min-w-16">Sett. 1-2:</span>
              <span>Perdi 1-3 kg rapidamente. È principalmente acqua e glicogeno, non grasso. <strong>Normale e atteso.</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-emerald-400 min-w-16">Sett. 3-8:</span>
              <span>La perdita si stabilizza a 0.5-1 kg/settimana. <strong>Questa è la vera perdita di grasso.</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-emerald-400 min-w-16">Sett. 9+:</span>
              <span>Il ritmo potrebbe calare. Aggiorna il tuo peso sull'app se si blocca per più di 2 settimane. Pesa sempre te stesso al mattino, a digiuno.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Proteine e Importanza */}
        <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
          <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
            <Droplets className="w-5 h-5" />
            L'Importanza delle Proteine
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Con un deficit calorico, il corpo può bruciare sia grasso che muscolo. Un'<strong>assunzione proteica alta (2g/kg base)</strong> è l'unico modo per preservare la massa magra. 
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mt-2 pt-2 border-t border-slate-700">
            Inoltre, le proteine hanno un <strong>effetto termico del 25-30%</strong>: il tuo corpo brucia più calorie soltanto per digerirle!
          </p>
        </div>

        {/* Errori da Evitare */}
        <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50 border-l-4 border-l-rose-500">
          <h3 className="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Errori Comuni da Evitare
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">❌</span>
              <span><strong>Non pesare il cibo</strong>: È il motivo #1 per cui il peso non scende. Una manciata di frutta secca extra sono +200 kcal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">❌</span>
              <span><strong>Fidarsi del contapassi</strong>: I dispositivi sovrastimano spesso le calorie bruciate del 40-60%. Segui il piano.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">❌</span>
              <span><strong>Tagliare troppo le kcal</strong>: Sotto 1.200 (donne) o 1.400 (uomini) perdi muscolo e blocchi il metabolismo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">❌</span>
              <span><strong>Liquidi calorici</strong>: Succhi, alcol, troppo latte nel caffè = facilmente 300-500 kcal invisibili al giorno.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
