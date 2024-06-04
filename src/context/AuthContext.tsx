import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  authToken: string | null;
  userId: string | null;
  user: User | null; // Adicionando o objeto de usuário
  login: (token: string, userId: string, user: User) => void;
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
  const [user, setUser] = useState<User | null>(null); // Inicializando user como null

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    const userDataString = localStorage.getItem('user');
    if (token) {
      setAuthToken(token);
    }
    if (userId) {
      setUserId(userId);
    }
    if (userDataString) {
      setUser(JSON.parse(userDataString));
    }
  }, []);

  const login = (token: string, userId: string, user: User) => {
    setAuthToken(token);
    setUserId(userId);
    setUser(user);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
