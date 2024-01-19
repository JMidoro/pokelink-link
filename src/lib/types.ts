export interface PokemonType {
  name: string | null;
  type1: string;
  type2?: string;
  species: string;
  number: number;
  level: number;
  pid: string;
  id: string;
  playthroughId: string;
  hasDied: boolean | undefined;
  ivs: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  evs: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  nature: string;
  gender: string;
  shiny: boolean | null;
  hp: {
    current: number | null;
    max: number | null;
  };
  ability: string | null;
  friendship: number | null;
  move1: {
    name: string | null;
    pp: number | null;
  } | null;
  move2: {
    name: string | null;
    pp: number | null;
  } | null;
  move3: {
    name: string | null;
    pp: number | null;
  } | null;
  move4: {
    name: string | null;
    pp: number | null;
  } | null;
  status: {
    poison: boolean | null;
    sleep: boolean | null;
    paralysis: boolean | null;
    freeze: boolean | null;
    burn: boolean | null;
  };
  exp: number;
  levelMet: number | null;
  locationMet: number | null;
  slotId: number | null;
}
