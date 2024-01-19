import { z } from "zod";

export const BadgeSchema = z.object({
  name: z.string(),
  value: z.boolean(),
});

export const GameSchema = z.object({
  id: z.string(),
  friendlyName: z.string(),
  generation: z.number(),
  gen3_game_key: z.number(),
  gen3_subgame_key: z.number(),
  gen45_game_key: z.number(),
  gen45_subgame_key: z.number(),
});

export const TrainerSchema = z.object({
  badges: z.array(BadgeSchema),
  game: GameSchema,
  trainerName: z.string().nullable(),
  trainer_id: z.string().nullable(),
  secret_id: z.string().nullable(),
  money: z.number().nullable(),
});

export const MoveSchema = z.object({
  name: z.string(),
  pp: z.number(),
});

export const StatusSchema = z.object({
  psn: z.number(),
  frz: z.number(),
  slp: z.number(),
  par: z.number(),
  brn: z.number(),
});

export const HPInterfaceSchema = z.object({
  max: z.number(),
  current: z.number(),
});

export const EVsSchema = z.object({
  atk: z.number(),
  def: z.number(),
  spatk: z.number(),
  spdef: z.number(),
  hp: z.number(),
  spd: z.number(),
});

export const IVsSchema = z.object({
  atk: z.number(),
  def: z.number(),
  spatk: z.number(),
  spdef: z.number(),
  hp: z.number(),
  spd: z.number(),
});

export const PokemonSchema = z.object({
  encounterType: z.number(),
  isEgg: z.boolean(),
  nature: z.string(),
  move2: MoveSchema,
  status: StatusSchema,
  level: z.number(),
  markings: z.number(),
  nickname: z.string(),
  alternateForm: z.string(),
  ability: z.string(),
  friendship: z.number(),
  pokerus: z.number(),
  otid: z.number(),
  locationMet: z.number(),
  move3: MoveSchema,
  exp: z.number(),
  hp: HPInterfaceSchema,
  isGenderless: z.boolean(),
  pokeball: z.number(),
  species: z.number(),
  levelMet: z.number(),
  heldItem: z.number(),
  move4: MoveSchema,
  isFemale: z.boolean(),
  pid: z.number(),
  eggLocationMet: z.number(),
  gift: z.boolean(),
  isShiny: z.boolean(),
  evs: EVsSchema,
  hiddenpower: z.string(),
  otsid: z.number(),
  speciesName: z.string(),
  ivs: IVsSchema,
  alternateFormId: z.number(),
  move1: MoveSchema,
});

export const PartySchema = z.object({
  pokemon: PokemonSchema.nullable(),
  slotId: z.number(),
  changeId: z.number(),
});

export const PokedexStatsSchema = z.object({
  seen: z.number(),
  caught: z.number(),
  dead: z.number(),
});

export const PokedexSchema = z.object({
  stats: PokedexStatsSchema,
  seen: z.array(z.number()),
  caught: z.array(z.number()),
  dead: z.array(PokemonSchema),
  routes: z.record(z.string()),
});

export const playthroughSchema = z.array(
  z.object({
    id: z.string(),
    username: z.string(),
    trainer: TrainerSchema,
    party: z.array(PartySchema),
    boxes: z.array(z.any()), // Specify a more detailed schema if necessary
    pokedex: PokedexSchema,
  }),
);

export type playthroughSchemaPayload = z.infer<typeof playthroughSchema>;
