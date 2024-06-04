import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextProps {
  authToken: string | null;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    if (token) {
      setAuthToken(token);
    }
    if (userId) {
      setUserId(userId);
    }
  }, []);

  const login = (token: string, userId: string) => {
    setAuthToken(token);
    setUserId(userId);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
