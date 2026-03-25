import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  Activity, 
  Weight, 
  Calendar as CalendarIcon,
  ChevronDown,
  Search,
  Zap
} from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

interface AthleteAnalyticsProps {
  athleteId: string;
}

export default function AthleteAnalytics({ athleteId }: AthleteAnalyticsProps) {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [exerciseSearch, setExerciseSearch] = useState('');

  // Fetch Weight History (Merged from body_measurements and daily_logs)
  const { data: weightData } = useQuery({
    queryKey: ['athlete-weight-history', athleteId],
    queryFn: async () => {
      // 1. Fetch from body_measurements (Coach)
      const { data: measurements, error: mError } = await supabase
        .from('body_measurements')
        .select('recorded_at, weight, body_fat_percentage')
        .eq('athlete_id', athleteId);
      
      if (mError) throw mError;

      // 2. Fetch from daily_logs (Athlete)
      const { data: logs, error: lError } = await supabase
        .from('daily_logs')
        .select('date, weight_kg')
        .eq('athlete_id', athleteId)
        .not('weight_kg', 'is', null);
      
      if (lError) throw lError;

      // 3. Merge and Sort
      const merged = [
        ...(measurements || []).map(m => ({
          date: m.recorded_at,
          weight: m.weight,
          bf: m.body_fat_percentage,
          source: 'Coach'
        })),
        ...(logs || []).map(l => ({
          date: l.date,
          weight: l.weight_kg,
          bf: null,
          source: 'Atleta'
        }))
      ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      return merged.map(d => ({
        ...d,
        displayDate: format(new Date(d.date), 'dd MMM', { locale: it }),
        fullDate: d.date
      }));
    }
  });

  // Fetch Exercises for Selection
  const { data: availableExercises } = useQuery({
    queryKey: ['athlete-exercises-list', athleteId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('exercise_logs')
        .select(`
          exercises!inner(
            exercise_library_id,
            exercise_library!inner(name, name_it)
          ),
          workout_sessions!inner(athlete_id)
        `)
        .eq('workout_sessions.athlete_id', athleteId)
        .order('name', { foreignTable: 'exercises', ascending: true });
      
      if (error) {
        console.error('Error fetching exercises list:', error);
        return [];
      }
      
      // Unique exercises by library ID
      const unique = new Map();
      data?.forEach((item: any) => {
        const lib = item.exercises?.exercise_library;
        const libId = item.exercises?.exercise_library_id;
        if (lib && libId) {
          unique.set(libId, lib.name_it || lib.name);
        }
      });
      
      return Array.from(unique.entries()).map(([id, name]) => ({ id, name }));
    }
  });

  // Fetch Progression for Selected Exercise
  const { data: progressionData } = useQuery({
    queryKey: ['exercise-progression', athleteId, selectedExercise],
    queryFn: async () => {
      if (!selectedExercise) return null;
      
      const { data, error } = await supabase
        .from('exercise_logs')
        .select(`
          weight,
          reps,
          set_number,
          workout_sessions!inner(started_at, athlete_id),
          exercises!inner(exercise_library_id)
        `)
        .eq('workout_sessions.athlete_id', athleteId)
        .eq('exercises.exercise_library_id', selectedExercise)
        .order('started_at', { foreignTable: 'workout_sessions', ascending: true });

      if (error) {
        console.error('Error fetching progression data:', error);
        return [];
      }

      // Group by session and take the max weight or volume
      const sessionsMap: Record<string, any> = {};
      data.forEach((log: any) => {
        const dateRaw = log.workout_sessions.started_at;
        const date = format(new Date(dateRaw), 'dd/MM');
        if (!sessionsMap[date]) {
          sessionsMap[date] = { date, weight: 0, volume: 0, reps: 0 };
        }
        if (log.weight > sessionsMap[date].weight) {
          sessionsMap[date].weight = log.weight;
        }
        sessionsMap[date].volume += (log.weight || 0) * (log.reps || 0);
        sessionsMap[date].reps += log.reps || 0;
      });

      return Object.values(sessionsMap);
    },
    enabled: !!selectedExercise
  });

  // Fetch Adherence Metrics
  const { data: adherenceData } = useQuery({
    queryKey: ['athlete-adherence', athleteId],
    queryFn: async () => {
      const { data: logs, error } = await supabase
        .from('daily_logs')
        .select('date, kcal_eaten, sleep_hours')
        .eq('athlete_id', athleteId)
        .order('date', { ascending: true })
        .limit(30);

      if (error) {
        console.error('Error fetching adherence data:', error);
        return [];
      }

      return (logs || []).map(l => ({
        date: format(new Date(l.date), 'dd/MM'),
        kcal: l.kcal_eaten || 0,
        sleep: l.sleep_hours || 0
      }));
    }
  });

  const filteredExercises = availableExercises?.filter(ex => 
    ex.name.toLowerCase().includes(exerciseSearch.toLowerCase())
  ) || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp size={64} className="text-primary-500" />
          </div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Peso Recente</p>
          <div className="flex items-end gap-2">
            <h4 className="text-3xl font-black text-white">{weightData?.[weightData.length - 1]?.weight || '--'}</h4>
            <span className="text-sm font-bold text-slate-400 mb-1">kg</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">Ultimo aggiornamento: {weightData?.[weightData.length - 1]?.date || 'N/A'}</p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={64} className="text-amber-500" />
          </div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Volume Totale</p>
          <div className="flex items-end gap-2">
            <h4 className="text-3xl font-black text-white">
              {progressionData?.reduce((acc, curr) => acc + curr.volume, 0).toLocaleString() || '--'}
            </h4>
            <span className="text-sm font-bold text-slate-400 mb-1">kg</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">Volume complessivo sessioni analizzate</p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity size={64} className="text-emerald-500" />
          </div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Media Sonno</p>
          <div className="flex items-end gap-2">
            <h4 className="text-3xl font-black text-white">
              {adherenceData && adherenceData.length > 0 ? (adherenceData.reduce((acc, curr) => acc + curr.sleep, 0) / adherenceData.length).toFixed(1) : '--'}
            </h4>
            <span className="text-sm font-bold text-slate-400 mb-1">h</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">Basata su ore di sonno medie (ultimi 30gg)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weight Progression Chart */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 pt-8 min-h-[400px]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <Weight className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Andamento Peso</h3>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Biometria & Composizione</p>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            {weightData && weightData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weightData}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                    tickFormatter={(val) => format(new Date(val), 'dd MMM', { locale: it })}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    domain={['dataMin - 1', 'dataMax + 1']}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-2xl">
                            <p className="text-[10px] text-slate-500 mb-1">{format(new Date(data.date), 'dd MMMM yyyy HH:mm', { locale: it })}</p>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-bold text-white">{data.weight} kg</span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${data.source === 'Coach' ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                                {data.source}
                              </span>
                            </div>
                            {data.bf && <p className="text-[10px] text-slate-400">Grasmo Corporeo: {data.bf}%</p>}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend 
                    verticalAlign="top" 
                    align="right" 
                    iconType="circle" 
                    wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="weight" 
                    name="Andamento Peso"
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorWeight)" 
                    animationDuration={1500}
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (!cx || !cy) return null;
                      const color = payload.source === 'Coach' ? '#3b82f6' : '#10b981';
                      return (
                        <circle cx={cx} cy={cy} r={4} fill={color} stroke="#0f172a" strokeWidth={2} key={`dot-${payload.date}`} />
                      );
                    }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-600">
                <p className="text-xs font-medium uppercase tracking-widest">Nessun dato peso disponibile</p>
              </div>
            )}
          </div>
        </div>

        {/* Exercise Performance Chart */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 pt-8 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Performance Esercizio</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Progressione carichi massimi</p>
              </div>
            </div>

            {/* Exercise Selector */}
            <div className="relative group">
              <button className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs font-bold text-white hover:border-amber-500/50 transition-colors">
                {selectedExercise ? availableExercises?.find(e => e.id === selectedExercise)?.name : "Scegli Esercizio"}
                <ChevronDown size={14} className="text-slate-500" />
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-64 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                <div className="relative mb-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Cerca..." 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-[11px] text-white focus:outline-none focus:border-amber-500"
                    value={exerciseSearch}
                    onChange={(e) => setExerciseSearch(e.target.value)}
                  />
                </div>
                <div className="max-h-48 overflow-y-auto custom-scrollbar">
                  {filteredExercises.map(ex => (
                    <button
                      key={ex.id}
                      onClick={() => setSelectedExercise(ex.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-[11px] transition-colors ${selectedExercise === ex.id ? 'bg-amber-500/10 text-amber-400 font-bold' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}
                    >
                      {ex.name}
                    </button>
                  ))}
                  {filteredExercises.length === 0 && <p className="text-[10px] text-slate-600 p-3 text-center">Nessun esercizio trovato</p>}
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            {selectedExercise ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressionData || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '12px', color: '#fff' }}
                    labelStyle={{ fontSize: '10px', color: '#64748b', marginBottom: '4px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#f59e0b" 
                    strokeWidth={4}
                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4, stroke: '#0f172a' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center animate-pulse">
                  <Activity className="w-8 h-8 opacity-20" />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-600">Seleziona un esercizio per vedere la progressione</p>
              </div>
            )}
          </div>
        </div>

        {/* Wellness Trends */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 pt-8 lg:col-span-2 min-h-[400px]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <CalendarIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Benessere & Energia</h3>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Trend soggettivo ultimi 30 giorni</p>
            </div>
          </div>
          
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={adherenceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#64748b" 
                  fontSize={8} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar dataKey="kcal" fill="#6366f1" radius={[4, 4, 0, 0]} name="Kcal" />
                <Bar dataKey="sleep" fill="#10b981" radius={[4, 4, 0, 0]} name="Ore Sonno" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
