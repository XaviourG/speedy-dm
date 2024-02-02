'use client';

import { Character, CharacterType, NPC_TEMPLATE, Npc, PLAYER_TEMPLATE, Player } from '@/api/models/character';
import { useEffect, useState } from 'react';
import CombatControlPanel from './_components/controls';
import CombatCharacterList from './_components/list';

const CombatPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (window && window?.localStorage) {
      const storedCharacters = localStorage.getItem('combat_characters');
      if (storedCharacters) {
        setCharacters(JSON.parse(storedCharacters));
      }
    }
  }, []);

  const updateCharacters = (characters: Character[]) => {
    console.log({ msg: 'updating characters', characters });
    localStorage.setItem('combat_characters', JSON.stringify(characters));
    setCharacters(characters);
  };

  const wipeCharacters = () => {
    updateCharacters(characters.filter((character) => character.type === CharacterType.Player));
  };

  const addPlayer = (input?: Player) => {
    const player = input?.type === CharacterType.Player ? input : PLAYER_TEMPLATE;
    updateCharacters([player, ...characters]);
  };

  const addMob = (input?: Npc) => {
    const mob = input?.type === CharacterType.Npc ? input : NPC_TEMPLATE;
    updateCharacters([mob, ...characters]);
  };

  const removeCharacter = (index: number) => {
    updateCharacters([...characters.slice(0, index), ...characters.slice(index + 1)]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '95vh' }}>
      <CombatControlPanel wipe={wipeCharacters} addPlayer={addPlayer} addMob={addMob} />
      <CombatCharacterList characters={characters} update={updateCharacters} remove={removeCharacter} duplicate={addMob} />
    </div>
  );
};

export default CombatPage;
