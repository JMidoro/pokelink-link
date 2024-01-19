interface MainInterface {
  id: string;
  username: string;
  trainer: TrainerInterface;
  party: PartyInterface[];
  boxes: unknown[];
  pokedex: PokedexInterface;
}

interface TrainerInterface {
  badges: BadgeInterface[];
  game: GameInterface;
  trainerName: string | null;
  trainer_id: string | null;
  secret_id: string | null;
  money: number | null;
}

interface BadgeInterface {
  name: string;
  value: boolean;
}

interface GameInterface {
  id: string;
  friendlyName: string;
  generation: number;
  gen3_game_key: number;
  gen3_subgame_key: number;
  gen45_game_key: number;
  gen45_subgame_key: number;
}

interface PartyInterface {
  pokemon: PokemonInterface | null;
  slotId: number;
  changeId: number;
}

interface PokemonInterface {
  encounterType: number;
  isEgg: boolean;
  nature: string;
  move2: MoveInterface;
  status: StatusInterface;
  level: number;
  markings: number;
  nickname: string;
  alternateForm: string;
  ability: string;
  friendship: number;
  pokerus: number;
  otid: number;
  locationMet: number;
  move3: MoveInterface;
  exp: number;
  hp: HPInterface;
  isGenderless: boolean;
  pokeball: number;
  species: number;
  levelMet: number;
  heldItem: number;
  move4: MoveInterface;
  isFemale: boolean;
  pid: number;
  eggLocationMet: number;
  gift: boolean;
  isShiny: boolean;
  evs: EVsInterface;
  hiddenpower: string;
  otsid: number;
  speciesName: string;
  ivs: IVsInterface;
  alternateFormId: number;
  move1: MoveInterface;
}

interface StatusInterface {
  psn: number;
  frz: number;
  slp: number;
  par: number;
  brn: number;
}

interface MoveInterface {
  name: string;
  pp: number;
}

interface HPInterface {
  max: number;
  current: number;
}

interface EVsInterface {
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  hp: number;
  spd: number;
}

interface IVsInterface {
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  hp: number;
  spd: number;
}

interface PokedexInterface {
  stats: PokedexStatsInterface;
  seen: number[];
  caught: number[];
  dead: PokemonInterface[];
  routes: Record<string, string>;
}

interface PokedexStatsInterface {
  seen: number;
  caught: number;
  dead: number;
}

export type {
  MainInterface,
  TrainerInterface,
  BadgeInterface,
  GameInterface,
  PartyInterface,
  PokemonInterface,
  StatusInterface,
  MoveInterface,
  HPInterface,
  EVsInterface,
  IVsInterface,
  PokedexInterface,
  PokedexStatsInterface,
};
