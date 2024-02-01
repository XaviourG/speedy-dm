import { CharacterLibraryContext } from '@/components/providers/character-library/context';
import { useContext } from 'react';

const useCharacterLibrary = () => {
  const context = useContext(CharacterLibraryContext);
  return context;
};

export default useCharacterLibrary;
