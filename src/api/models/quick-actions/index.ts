import { DiceRoll } from "../dice"
import { CharacterStat } from "../stats"

export type QuickAttack = {
  attackDice: DiceRoll[],
  attackBonus: number,
  statType: CharacterStat,
  info?: string
}