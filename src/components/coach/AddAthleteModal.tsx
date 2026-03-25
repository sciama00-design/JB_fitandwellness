import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import { Loader2, UserPlus, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { ResponsiveDrawer } from '../ui/Drawer';

interface AddAthleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddAthleteModal({ isOpen, onClose, onSuccess }: AddAthleteModalProps) {
  const { user: coach } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      const tempClient = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false
        }
      });

      const { data: authData, error: authError } = await tempClient.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            role: 'athlete',
            coach_id: coach?.id,
          }
        }
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('Athlete creation failed');

      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: authData.user.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          role: 'athlete',
          coach_id: coach?.id,
        });

      if (profileError) {
        console.error('Profile creation error:', profileError);
        throw profileError;
      }

      onSuccess();
      onClose();
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
    } catch (err: any) {
      console.error('Error adding athlete:', err);
      setError(err.message || 'Errore durante la creazione dell\'atleta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResponsiveDrawer open={isOpen} onOpenChange={(open) => !open && onClose()} title="Aggiungi Atleta">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Header info */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/[0.05] border border-primary/[0.1]">
          <div className="w-9 h-9 rounded-lg bg-primary/[0.1] flex items-center justify-center text-primary shrink-0">
            <UserPlus className="w-4 h-4" />
          </div>
          <p className="text-[12px] text-muted-foreground/60 font-medium">
            Crea un nuovo account per un tuo atleta. Riceverà le credenziali per accedere all'app.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm font-medium">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-muted-foreground/50 uppercase tracking-[0.1em] ml-1">Nome</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/30" />
              <input
                required
                type="text"
                placeholder="Nome"
                className="w-full pl-10 pr-3 h-11 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all placeholder:text-muted-foreground/25"
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-muted-foreground/50 uppercase tracking-[0.1em] ml-1">Cognome</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/30" />
              <input
                required
                type="text"
                placeholder="Cognome"
                className="w-full pl-10 pr-3 h-11 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all placeholder:text-muted-foreground/25"
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground/50 uppercase tracking-[0.1em] ml-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/30" />
            <input
              required
              type="email"
              placeholder="atleta@esempio.com"
              className="w-full pl-10 pr-3 h-11 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all placeholder:text-muted-foreground/25"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground/50 uppercase tracking-[0.1em] ml-1">Password Iniziale</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/30" />
            <input
              required
              type="password"
              placeholder="Minimo 6 caratteri..."
              className="w-full pl-10 pr-3 h-11 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all placeholder:text-muted-foreground/25"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>

        <div className="pt-2 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 h-11 bg-white/[0.04] hover:bg-white/[0.08] text-foreground/80 font-semibold rounded-xl transition-all border border-white/[0.06] text-sm"
          >
            Annulla
          </button>
          <button
            disabled={loading}
            className="flex-[2] h-11 btn btn-primary rounded-xl font-bold text-sm shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              'Crea Account'
            )}
          </button>
        </div>
      </form>
    </ResponsiveDrawer>
  );
}
