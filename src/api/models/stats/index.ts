export enum CharacterStat {
  Strength = 'strength',
  Charisma = 'charisma',
  Dexterity = 'dexterity',
  Wisdom = 'wisdom',
  Intelligence = 'intelligence',
  Constitution = 'constitution'
}

export interface CharacterStatArray {
  [CharacterStat.Strength]: number;
  [CharacterStat.Charisma]: number;
  [CharacterStat.Dexterity]: number;
  [CharacterStat.Wisdom]: number;
  [CharacterStat.Intelligence]: number;
  [CharacterStat.Constitution]: number;
}
