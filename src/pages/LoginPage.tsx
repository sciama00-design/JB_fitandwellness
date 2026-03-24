import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { LogIn, Mail, Lock, Loader2, Dumbbell, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-background">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card w-full max-w-md p-8 sm:p-14 space-y-10 sm:space-y-12 rounded-[2.5rem] sm:rounded-[4rem] relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-white/10 bg-card/40 backdrop-blur-3xl"
      >
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-primary/10 rounded-[2.5rem] mx-auto flex items-center justify-center border border-primary/20 shadow-inner relative group"
          >
             <Dumbbell className="w-12 h-12 text-primary group-hover:rotate-12 transition-transform duration-500" />
             <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border border-white/5 rounded-xl flex items-center justify-center shadow-lg">
               <Sparkles className="w-4 h-4 text-primary animate-pulse" />
             </div>
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter italic uppercase leading-none bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
              JB FIT<span className="text-primary text-xl sm:text-2xl not-italic ml-1 opacity-60">®</span>
            </h1>
            <p className="text-muted-foreground font-black uppercase tracking-[0.5em] text-[10px] opacity-30">Strategic Performance Grid</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-3 group">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1 opacity-40 group-focus-within:opacity-100 transition-opacity">Identità Digitale</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors opacity-40" />
              <input
                type="email"
                required
                className="w-full h-14 bg-background/40 border border-white/5 rounded-2xl pl-14 pr-6 text-foreground font-medium outline-none focus:border-primary/40 focus:bg-background/60 transition-all shadow-inner"
                placeholder="nome@esempio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3 group">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-1 opacity-40 group-focus-within:opacity-100 transition-opacity">Chiave di Accesso</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors opacity-40" />
              <input
                type="password"
                required
                className="w-full h-14 bg-background/40 border border-white/5 rounded-2xl pl-14 pr-6 text-foreground font-medium outline-none focus:border-primary/40 focus:bg-background/60 transition-all shadow-inner"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-5 bg-red-500/5 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider rounded-2xl flex items-center gap-4 italic"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-18 bg-primary text-white rounded-[1.8rem] text-[11px] font-black tracking-[0.3em] italic uppercase shadow-[0_20px_50px_rgba(6,182,212,0.4)] hover:shadow-[0_25px_60px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-4 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            {loading ? (
              <Loader2 className="w-8 h-8 animate-spin" />
            ) : (
              <>
                INITIALIZE SESSION <LogIn className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </>
            )}
          </button>
        </form>
        
        <div className="text-center">
           <p className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-20">Strategic Wellness Infrastructure</p>
        </div>
      </motion.div>
    </div>
  );
}

function AlertCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
