import { DiceRoll } from '../dice';
import { CharacterStat } from '../stats';

export type QuickAttack = {
  name: string;
  attackDice: DiceRoll[];
  attackBonus: number;
  statTypes: CharacterStat[];
  info?: string;
};
