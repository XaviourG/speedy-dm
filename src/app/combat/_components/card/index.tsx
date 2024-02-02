import { Character } from '@/api/models/character';
import './styles.css';
import { useState } from 'react';
import ProgressBar from '@/components/progress-bar';

interface CombatCardProps {
  character: Character;
  update: (input: Character) => void;
  remove: () => void;
  duplicate: () => void;
}

const CharacterCombatCard = ({ character, update, remove, duplicate }: CombatCardProps) => {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className='combat-card'>
        <input onChange={(e) => update({ ...character, name: e.target.value })} value={character.name} />
        <button className='text-btn' onClick={() => setEditing(false)}>
          save
        </button>
      </div>
    );
  }

  return (
    <div className='combat-card'>
      <ProgressBar value={character.state.health} max={character.state.maxHealth} />

      <div className='group'>
        <div>{character.name}</div>
        <div>
          {character.state.actions} {character.state.bonusActions} {character.state.armourClass}
        </div>
      </div>

      <div className='group'>
        <div className='stats'>
          S:{character.stats.strength} D:{character.stats.dexterity} C:{character.stats.constitution} I:{character.stats.intelligence} W:
          {character.stats.wisdom} C:{character.stats.charisma}
        </div>
        <div className='card-controls'>
          <button className='text-btn' onClick={() => setEditing(true)}>
            edit
          </button>
          <button className='text-btn' onClick={duplicate}>
            duplicated
          </button>
          <button className='text-btn' onClick={remove}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCombatCard;
