'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserState {
  user: string | null;
  isInitialized: boolean;
  setUser: (name: string) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserState | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserState(storedUser);
    }
    setIsInitialized(true); // Indicate initialization is complete
  }, []);

  const setUser = (name: string) => {
    localStorage.setItem('user', name); // Persist user in localStorage
    setUserState(name);
  };

  const clearUser = () => {
    localStorage.removeItem('user'); // Remove user from localStorage
    setUserState(null);
  };

  return (
    <UserContext.Provider value={{ user, isInitialized, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
