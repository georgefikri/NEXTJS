'use client';

import React, { ReactNode } from 'react';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>
      <UserProvider>{children}</UserProvider>
    </AppProvider>
  );
};

export default GlobalProvider;
