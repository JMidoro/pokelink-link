import { postRouter } from "@/server/api/routers/post";
import { partyRouter } from "@/server/api/routers/party";
import { createTRPCRouter } from "@/server/api/trpc";
import { playthroughRouter } from "@/server/api/routers/playthrough";
import { playerRouter } from "@/server/api/routers/player";
import { tiltifyRouter } from "@/server/api/routers/tiltify";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  party: partyRouter,
  playthrough: playthroughRouter,
  player: playerRouter,
  tiltify: tiltifyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
