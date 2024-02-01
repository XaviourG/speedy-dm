import { Horde, Npc, Player } from '@/api/models/character';

export type CharacterLibrary = {
  players: Player[];
  npcs: Npc[];
};
