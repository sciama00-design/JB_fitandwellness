import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import { X, Loader2, UserPlus, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../lib/auth';

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

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Create a temporary Supabase client to avoid logging out the coach
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      const tempClient = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false
        }
      });

      // 2. Sign up the athlete
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

      // 3. Create the profile record (in case trigger doesn't exist or we need to add coach_id)
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg glass rounded-3xl border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-500/20 rounded-xl text-primary-400">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Aggiungi Atleta</h2>
              <p className="text-xs text-slate-400">Crea un nuovo account per un tuo atleta</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Nome</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  required
                  type="text"
                  placeholder="Nome"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500/50 outline-none transition-all placeholder:text-slate-600"
                  value={formData.firstName}
                  onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Cognome</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  required
                  type="text"
                  placeholder="Cognome"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500/50 outline-none transition-all placeholder:text-slate-600"
                  value={formData.lastName}
                  onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                required
                type="email"
                placeholder="atleta@esempio.com"
                className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500/50 outline-none transition-all placeholder:text-slate-600"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Password Iniziale</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                required
                type="password"
                placeholder="Scelta dal coach..."
                className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500/50 outline-none transition-all placeholder:text-slate-600"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all border border-slate-800"
            >
              Annulla
            </button>
            <button
              disabled={loading}
              className="flex-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Crea Account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
