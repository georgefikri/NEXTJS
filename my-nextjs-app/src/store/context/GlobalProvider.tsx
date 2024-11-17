'use client';

import React, { ReactNode } from 'react';
import { CounterProvider } from './CounterContext';

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return <CounterProvider>{children}</CounterProvider>;
};

export default GlobalProvider;
