'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import useAppState, { AppState } from '../state/useCounterState';

// Define the type of the context
type AppContextType = AppState;

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider for AppContext
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const state = useAppState();

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

// Hook to use the AppContext
export const useCounterContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an CounterContext');
  }
  return context;
};
