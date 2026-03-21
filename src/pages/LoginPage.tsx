import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { LogIn, Mail, Lock, Loader2, Dumbbell } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'Error logging in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#020617]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="glass w-full max-w-md p-8 sm:p-10 space-y-8 rounded-[2.5rem] relative z-10 animate-fade-in shadow-2xl border-t border-l border-white/10">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary-500/10 rounded-3xl mx-auto flex items-center justify-center border border-primary-500/20 shadow-inner">
             <Dumbbell className="w-10 h-10 text-primary-400" />
          </div>
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent tracking-tighter italic">
              JB FIT
            </h1>
            <p className="mt-2 text-slate-400 font-medium">Bentornato! Accedi per continuare.</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2 group">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
              <input
                type="email"
                required
                className="input-field pl-12"
                placeholder="nome@esempio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
              <input
                type="password"
                required
                className="input-field pl-12"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-2xl flex items-center gap-3 animate-slide-up duration-300">
              <div className="w-1 h-5 bg-red-500 rounded-full"></div>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full h-14 rounded-2xl text-lg font-black tracking-wider italic uppercase"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              <div className="flex items-center justify-center gap-2">
                Accedi <LogIn className="w-5 h-5" />
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
