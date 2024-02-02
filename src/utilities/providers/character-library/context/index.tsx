import { createContext } from 'react';
import { CharacterLibrary } from '../models';

export const CharacterLibraryContext = createContext<CharacterLibrary>({
  players: [],
  npcs: []
});
