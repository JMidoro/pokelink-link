/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { getServerAuthSession } from "@/server/auth";

export const playthroughRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const session = await getServerAuthSession();
    if (!session?.user) throw new Error("No session found");
    const accounts = await ctx.db.account.findMany({
      where: {
        userId: session.user.id,
      },
    });

    if (!accounts[0]) throw new Error("No account found");

    return await ctx.db.playthrough.findMany({
      where: {
        accountId: accounts[0].id,
      },
    });
  }),

  savePlaythrough: publicProcedure
    .input(z.any())
    .mutation(async ({ ctx, input }) => {
      const session = await getServerAuthSession();
      if (!session?.user) throw new Error("No session found");

      const accounts = await ctx.db.account.findMany({
        where: {
          userId: session.user.id,
        },
      });

      if (!accounts[0]) throw new Error("No account found");

      const { title, subTitle, id } = input;
      const playthrough = await ctx.db.playthrough.update({
        where: {
          id,
        },
        data: {
          title,
          subTitle,
        },
      });

      return playthrough;
    }),

  getPlaythroughById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.db.playthrough.findUnique({
        where: {
          id: input,
        },
        include: {
          pokemon: true,
        },
      });
    }),

  getCurrentPlaythrough: publicProcedure.query(async ({ ctx }) => {
    const latestPlaythrough = await ctx.db.playthrough.findFirst({
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (!latestPlaythrough) throw new Error("No playthrough found");

    return latestPlaythrough;
  }),
});
