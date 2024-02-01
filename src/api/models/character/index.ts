import { QuickAttack } from "../quick-actions"
import { CharacterStatArray } from "../stats"
import { StatusAilements } from "../status-ailments"

export interface Character {
  state: {
    health: number,
    maxHealth: number,
    armourClass: number,
    actions: number,
    bonusActions: number,
    movement: number,
  },
  stats: CharacterStatArray,
  statusAilments: StatusAilements[]
}

export interface Npc extends Character {
  quickAttacks: QuickAttack[]
}

export interface Horde extends Character {}

export interface Player extends Character {

}