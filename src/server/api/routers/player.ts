/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const playerRouter = createTRPCRouter({
  getUserByPlayerName: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          name: input.userId,
        },
        select: {
          id: true,
          name: true,
          accounts: true,
        },
      });

      //   Get the most recently updated playthrough where the account id is among the user's accounts
      const playersMostRecentPlaythrough = await ctx.db.playthrough.findFirst({
        where: {
          accountId: {
            in: user?.accounts.map((a) => a.id),
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

      return {
        id: user?.id,
        name: user?.name,
        playthrough: user ? playersMostRecentPlaythrough : null,
      };
    }),
});
