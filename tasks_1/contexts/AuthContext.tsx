// contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../app/supabaseClient'; // Adjust path if needed

interface AuthContextType {
  session: Session | null;
  signIn: (email: string, password?: string) => Promise<void>;
  signUp: (email: string, password?: string) => Promise<void>;
  signOut: () => Promise<void>;
  user: any; // You can type this more specifically if needed
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<any>(null); // User data
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user || null);
      setIsLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
    });
  }, []);

  const signIn = async (email: string, password?: string) => {
    setIsLoading(true); // Start loading before API call
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: password || '', // Handle potential undefined password
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.message); // Basic error handling - improve this in production
    } finally {
      setIsLoading(false); // End loading after API call (success or failure)
    }
  };

  const signUp = async (email: string, password?: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: password || '',
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    session,
    signIn,
    signUp,
    signOut,
    user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading ? children : <View className="flex-1 justify-center items-center"><ActivityIndicator size="large" /></View>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};