import React, { createContext, useContext, useState } from 'react';
import type { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading] = useState(false);

  // Simplified auth methods for development
  const login = async (email: string, password: string) => {
    console.log('Login:', email, password);
    setCurrentUser({
      id: '1',
      email,
      name: email.split('@')[0]
    });
  };

  const signup = async (email: string, password: string) => {
    console.log('Signup:', email, password);
    setCurrentUser({
      id: '1',
      email,
      name: email.split('@')[0]
    });
  };

  const logout = async () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};