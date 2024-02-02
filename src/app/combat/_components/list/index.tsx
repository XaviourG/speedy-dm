import { Character, CharacterType, Npc } from '@/api/models/character';
import CharacterCombatCard from '../card';

interface CharacterListProps {
  characters: Character[];
  update: (characters: Character[]) => void;
  remove: (index: number) => void;
  duplicate: (input: Npc) => void;
}

const CombatCharacterList = ({ characters, update, remove, duplicate }: CharacterListProps) => {
  const updateCharacter = (index: number, input: Character) => {
    characters[index] = input;
    update([...characters]);
  };

  const duplicateMob = (input: Character) => {
    if ((input.type = CharacterType.Npc)) {
      duplicate(input as Npc);
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', paddingTop: '24px' }}>
      {characters.map((character, index) => (
        <CharacterCombatCard
          character={character}
          key={index}
          remove={() => remove(index)}
          update={(input: Character) => updateCharacter(index, input)}
          duplicate={() => duplicateMob(character)}
        />
      ))}
    </div>
  );
};

export default CombatCharacterList;
