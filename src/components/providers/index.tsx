'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react';

const RootProviderCollection = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default RootProviderCollection;