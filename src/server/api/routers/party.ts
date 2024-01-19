/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const partyRouter = createTRPCRouter({
  getParty: publicProcedure.query(async ({ ctx }) => {
    const latestPlaythrough = await ctx.db.playthrough.findFirst({
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (!latestPlaythrough) throw new Error("No playthrough found");

    const party = await ctx.db.pokemon.findMany({
      where: {
        playthroughId: latestPlaythrough.id,
      },
    });

    // We need to order our party by slot, and only return those with a value for slot field
    const orderedParty = party;

    const pokemon = orderedParty.map((p) => {
      const type1 = p.type1[0]?.toUpperCase() + p.type1.toString().slice(1);
      const type2 =
        p.type2 && p.type2?.[0]?.toUpperCase() + p.type2?.toString().slice(1);

      return {
        name: p.nickname,
        level: p.level,
        pid: p.pid,
        id: p.id,
        playthroughId: p.playthroughId,
        species: p.speciesName,
        number: p.species,
        type1: type1,
        type2: type2 ?? undefined,
        slotId: p.slotId,
        hasDied: p.hasDied,
        ivs: {
          hp: p.hpIV,
          attack: p.atkIV,
          defense: p.defIV,
          specialAttack: p.spAtkIV,
          specialDefense: p.spDefIV,
          speed: p.speedIV,
        },
        evs: {
          hp: p.hpEV,
          attack: p.atkEV,
          defense: p.defEV,
          specialAttack: p.spAtkEV,
          specialDefense: p.spDefEV,
          speed: p.speedEV,
        },
        nature: p.nature,
        gender: p.isGenderless ? "NA" : p.isFemale ? "F" : "M",
        shiny: p.isShiny,
        hp: {
          current: p.currentHP,
          max: p.maxHP,
        },
        ability: p.ability,
        friendship: p.friendship,
        move1: {
          name: p.move1Name,
          pp: p.move1PP,
        },
        move2: {
          name: p.move2Name,
          pp: p.move2PP,
        },
        move3: {
          name: p.move3Name,
          pp: p.move3PP,
        },
        move4: {
          name: p.move4Name,
          pp: p.move4PP,
        },
        status: {
          poison: p.poison,
          burn: p.burn,
          freeze: p.freeze,
          paralysis: p.paralysis,
          sleep: p.sleep,
        },
        exp: p.exp,
        levelMet: p.levelMet,
        locationMet: p.locationMet,
      };
    });

    return pokemon;
  }),

  getPartyByPlaythroughId: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const party = await ctx.db.pokemon.findMany({
        where: {
          playthroughId: input,
        },
      });

      const pokemon = party.map((p) => {
        const type1 = p.type1[0]?.toUpperCase() + p.type1.toString().slice(1);
        const type2 =
          p.type2 && p.type2?.[0]?.toUpperCase() + p.type2?.toString().slice(1);

        return {
          name: p.nickname,
          level: p.level,
          pid: p.pid,
          id: p.id,
          playthroughId: p.playthroughId,
          species: p.speciesName,
          number: p.species,
          type1: type1,
          type2: type2 ?? undefined,
          slotId: p.slotId,
          hasDied: p.hasDied,
          ivs: {
            hp: p.hpIV,
            attack: p.atkIV,
            defense: p.defIV,
            specialAttack: p.spAtkIV,
            specialDefense: p.spDefIV,
            speed: p.speedIV,
          },
          evs: {
            hp: p.hpEV,
            attack: p.atkEV,
            defense: p.defEV,
            specialAttack: p.spAtkEV,
            specialDefense: p.spDefEV,
            speed: p.speedEV,
          },
          nature: p.nature,
          gender: p.isGenderless ? "NA" : p.isFemale ? "F" : "M",
          shiny: p.isShiny,
          hp: {
            current: p.currentHP,
            max: p.maxHP,
          },
          ability: p.ability,
          friendship: p.friendship,
          move1: {
            name: p.move1Name,
            pp: p.move1PP,
          },
          move2: {
            name: p.move2Name,
            pp: p.move2PP,
          },
          move3: {
            name: p.move3Name,
            pp: p.move3PP,
          },
          move4: {
            name: p.move4Name,
            pp: p.move4PP,
          },
          status: {
            poison: p.poison,
            burn: p.burn,
            freeze: p.freeze,
            paralysis: p.paralysis,
            sleep: p.sleep,
          },
          exp: p.exp,
          levelMet: p.levelMet,
          locationMet: p.locationMet,
        };
      });

      return pokemon;
    }),
});
