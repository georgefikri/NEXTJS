'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserState {
  user: string | null;
  setUser: (name: string) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserState | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<string | null>(null);

  const setUser = (name: string) => {
    setUserState(name);
  };

  const clearUser = () => {
    setUserState(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
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
