'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import CharacterLibraryContextProvider from './character-library';

export interface ContextProviderProps {
  children: ReactNode;
}

const RootProviderCollection = ({ children }: ContextProviderProps) => (
  <ThemeProvider>
    <CharacterLibraryContextProvider>{children}</CharacterLibraryContextProvider>
  </ThemeProvider>
);

export default RootProviderCollection;
