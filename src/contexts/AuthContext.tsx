import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    
    // Mock authentication - replace with your Node.js backend call
    if (email === 'admin@example.com' && password === 'admin123') {
      const mockUser = { id: '1', email: 'admin@example.com' };
      setUser(mockUser);
      setIsAdmin(true);
      setLoading(false);
      return { error: null };
    } else {
      setLoading(false);
      return { error: 'Invalid credentials' };
    }
  };

  const signOut = async () => {
    setUser(null);
    setIsAdmin(false);
  };

  const value = {
    user,
    loading,
    signIn,
    signOut,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};