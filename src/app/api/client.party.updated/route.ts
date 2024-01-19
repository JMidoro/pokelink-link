/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import Pokedex from "pokedex-promise-v2";

interface IPokemonPartyMember {
  nickname: string;
  speciesName: string;
  level: number;
  pid: string;
  encounterType: string;
  isEgg: boolean;
  nature: string;
  move1: { name: string; pp: number };
  move2: { name: string; pp: number };
  move3: { name: string; pp: number };
  move4: { name: string; pp: number };
  status: {
    psn: boolean;
    frz: boolean;
    par: boolean;
    brn: boolean;
    slp: boolean;
  };
  markings: string[];
  alternateForm: string;
  ability: string;
  friendship: number;
  pokerus: boolean;
  otid: string;
  locationMet: string;
  exp: number;
  hp: { max: number; current: number };
  isGenderless: boolean;
  pokeball: string;
  species: string;
  levelMet: number;
  heldItem: string;
  isFemale: boolean;
  eggLocationMet: string;
  gift: boolean;
  isShiny: boolean;
  evs: {
    atk: number;
    def: number;
    spatk: number;
    spdef: number;
    hp: number;
    spd: number;
  };
  hiddenpower: string;
  otsid: string;
  ivs: {
    atk: number;
    def: number;
    spatk: number;
    spdef: number;
    hp: number;
    spd: number;
  };
  alternateFormId: string;
}

interface IIndividualPokemon {
  pokemon: IPokemonPartyMember;
  slotId: string;
}

const P = new Pokedex();
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const input = await req.json();
  const party = input.update.party;
  if (!input) throw new Error("No playthrough data provided");

  const mostRecentlyUpdatedPlaythrough = await prisma.playthrough.findFirst({
    orderBy: {
      updatedAt: "desc",
    },
  });

  const allPokemon = party.map(
    async (individualPokemon: IIndividualPokemon) => {
      const p = individualPokemon.pokemon;
      if (!individualPokemon.pokemon) {
        if (individualPokemon.slotId) {
          console.log("No pokemon found in slot " + individualPokemon.slotId);
          // Is there a pokemon with this slotId?
          const pokemonInSlot = await prisma.pokemon.findFirst({
            where: {
              playthroughId: mostRecentlyUpdatedPlaythrough?.id,
              slotId: individualPokemon.slotId
                ? parseInt(individualPokemon.slotId)
                : undefined,
            },
          });

          if (pokemonInSlot) {
            // Set the slotId to null
            await prisma.pokemon.update({
              where: { pid: pokemonInSlot.pid },
              data: { slotId: null },
            });
          }
        }

        return null;
      }

      // If this pokemon has a slot id, there may be another pokemon that has this slotid. We should check for that and set the preexisting pokemon's slotId to null
      if (individualPokemon.slotId) {
        const pokemonInSlot = await prisma.pokemon.findFirst({
          where: {
            playthroughId: mostRecentlyUpdatedPlaythrough?.id,
            slotId: individualPokemon.slotId
              ? parseInt(individualPokemon.slotId)
              : undefined,
          },
        });

        if (pokemonInSlot) {
          // Set the slotId to null
          await prisma.pokemon.update({
            where: { pid: pokemonInSlot.pid },
            data: { slotId: null },
          });
        }
      }

      const pokedex = await P.getPokemonByName(p.speciesName.toLowerCase());
      return {
        name: p.nickname,
        playthroughId: mostRecentlyUpdatedPlaythrough?.id,
        level: p.level,
        pid: mostRecentlyUpdatedPlaythrough?.id + p.pid,
        encounterType: p.encounterType,
        isEgg: !!p.isEgg,
        nature: p.nature,
        move1Name: p.move1.name,
        move1PP: p.move1.pp,
        move2Name: p.move2.name,
        move2PP: p.move2.pp,
        move3Name: p.move3.name,
        move3PP: p.move3.pp,
        move4Name: p.move4.name,
        move4PP: p.move4.pp,
        poison: !!p.status.psn,
        freeze: !!p.status.frz,
        paralysis: !!p.status.par,
        burn: !!p.status.brn,
        sleep: !!p.status.slp,
        markings: p.markings,
        nickname: p.nickname,
        alternateForm: p.alternateForm,
        ability: p.ability.toString(),
        friendship: p.friendship,
        pokerus: p.pokerus,
        otid: p.otid,
        locationMet: p.locationMet,
        exp: p.exp,
        maxHP: p.hp.max,
        currentHP: p.hp.current,
        isGenderless: p.isGenderless,
        pokeball: p.pokeball,
        species: p.species,
        levelMet: p.levelMet,
        heldItem: p.heldItem,
        isFemale: p.isFemale,
        eggLocationMet: p.eggLocationMet,
        gift: p.gift,
        isShiny: p.isShiny,
        atkEV: p.evs.atk,
        defEV: p.evs.def,
        spAtkEV: p.evs.spatk,
        spDefEV: p.evs.spdef,
        hpEV: p.evs.hp,
        speedEV: p.evs.spd,
        hiddenPower: p.hiddenpower,
        otsid: p.otsid,
        speciesName: p.speciesName,
        atkIV: p.ivs.atk,
        defIV: p.ivs.def,
        spAtkIV: p.ivs.spatk,
        spDefIV: p.ivs.spdef,
        hpIV: p.ivs.hp,
        speedIV: p.ivs.spd,
        alternateFormId: p.alternateFormId,
        slotId: individualPokemon.slotId || 0,
        type1: pokedex.types[0]?.type.name,
        type2: pokedex.types[1]?.type.name ?? undefined,
        hasDied: p.hp.current === 0 || undefined,
      };
    },
  );

  //   TODO: Add a death endpoint

  for (const p of await allPokemon) {
    const thisPokemon = await p;
    if (!thisPokemon) continue;
    if (!thisPokemon.pid) {
      console.log("Wtf. No pid?");
      console.log(thisPokemon);
      console.log(thisPokemon.pid);
      continue;
    }
    await prisma.pokemon.upsert({
      where: { pid: thisPokemon.pid },
      update: thisPokemon,
      create: thisPokemon,
    });
  }
  return NextResponse.json({ success: true });
}
