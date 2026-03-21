import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  role: 'coach' | 'athlete' | null;
  initialized: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
  role: null,
  initialized: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<'coach' | 'athlete' | null>(null);
  const [initialized, setInitialized] = useState(false);

  const fetchRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      if (error) {
        console.warn('Profile not found or error fetching role:', error.message);
        return null;
      }
      
      if (data) {
        setRole(data.role);
        return data.role;
      }
      return null;
    } catch (err) {
      console.error('Unexpected error fetching role:', err);
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;

    const handleAuth = async (currentSession: Session | null) => {
      if (!mounted) return;

      try {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        if (currentSession?.user) {
          await fetchRole(currentSession.user.id);
        } else {
          setRole(null);
        }
      } catch (error) {
        console.error('Auth handler error:', error);
      } finally {
        if (mounted) {
          setLoading(false);
          setInitialized(true);
        }
      }
    };

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      handleAuth(currentSession);
    });

    // Initial check
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      handleAuth(initialSession);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const value = React.useMemo(() => ({
    user,
    session,
    loading,
    signOut,
    role,
    initialized
  }), [user, session, loading, role, initialized]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
