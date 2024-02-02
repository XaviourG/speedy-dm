import { D4 } from '../dice';
import { QuickAttack } from '../quick-actions';
import { CharacterStat, CharacterStatArray } from '../stats';
import { StatusAilements } from '../status-ailments';

export enum CharacterType {
  Player = 'player',
  Npc = 'npc'
}

export type Character = {
  type: CharacterType;
  name: string;
  notes: string;
  state: {
    health: number;
    maxHealth: number;
    armourClass: number;
    actions: number;
    bonusActions: number;
    movement: number;
  };
  stats: CharacterStatArray;
  statusAilments: StatusAilements[];
};

export type Npc = Character & {
  type: CharacterType.Npc;
  quickAttacks: QuickAttack[];
};

export interface Player extends Character {
  type: CharacterType.Player;
}

export const PLAYER_TEMPLATE: Player = {
  type: CharacterType.Player,
  name: 'player template',
  notes: '',
  state: {
    health: 10,
    maxHealth: 10,
    armourClass: 12,
    actions: 1,
    bonusActions: 1,
    movement: 30
  },
  stats: {
    [CharacterStat.Strength]: 10,
    [CharacterStat.Charisma]: 10,
    [CharacterStat.Dexterity]: 10,
    [CharacterStat.Wisdom]: 10,
    [CharacterStat.Intelligence]: 10,
    [CharacterStat.Constitution]: 10
  },
  statusAilments: []
};

export const NPC_TEMPLATE: Npc = {
  type: CharacterType.Npc,
  name: 'mob template',
  notes: '',
  state: {
    health: 10,
    maxHealth: 10,
    armourClass: 12,
    actions: 1,
    bonusActions: 1,
    movement: 30
  },
  stats: {
    [CharacterStat.Strength]: 10,
    [CharacterStat.Charisma]: 10,
    [CharacterStat.Dexterity]: 10,
    [CharacterStat.Wisdom]: 10,
    [CharacterStat.Intelligence]: 10,
    [CharacterStat.Constitution]: 10
  },
  statusAilments: [],
  quickAttacks: [
    {
      name: 'Unarmed Strike',
      attackDice: [D4],
      attackBonus: 0,
      statTypes: [CharacterStat.Strength, CharacterStat.Dexterity],
      info: 'A basic melee attack'
    }
  ]
};
