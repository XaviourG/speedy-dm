import { useState } from 'react';
import { ContextProviderProps } from '..';
import { CharacterLibraryContext } from './context';

const CharacterLibraryContextProvider = ({ children }: ContextProviderProps) => {
  const [players, setPlayers] = useState([]);
  const [npcs, setNpcs] = useState([]);

  return <CharacterLibraryContext.Provider value={{ players, npcs }}>{children}</CharacterLibraryContext.Provider>;
};

export default CharacterLibraryContextProvider;
