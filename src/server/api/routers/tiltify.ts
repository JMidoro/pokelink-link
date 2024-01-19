/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

const TiltifyToken = z.object({
  access_token: z.string(),
  created_at: z.date(),
  expires_in: z.number(),
  refresh_token: z.null(),
  scope: z.string(),
  token_type: z.string(),
});

type TiltifyToken = z.infer<typeof TiltifyToken>;

export const tiltifyRouter = createTRPCRouter({
  getCampaign: publicProcedure.query(async ({ ctx }) => {
    const latestToken = await ctx.db.tokens.findFirst({
      where: {
        platform: "tiltify",
      },
      orderBy: { createdAt: "desc" },
    });

    if (
      !latestToken ||
      latestToken?.createdAt.getTime() + latestToken?.expiresIn * 1000 <
        Date.now()
    ) {
      const tokenHeaders = new Headers();
      tokenHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        client_id: process.env.TILTIFY_CLIENT_ID,
        client_secret: process.env.TILTIFY_CLIENT_SECRET,
        grant_type: "client_credentials",
        scope: "public",
      });
      const requestOptions = {
        method: "POST",
        headers: tokenHeaders,
        body: raw,
        redirect: "follow",
      };
      const token = await fetch(
        "https://v5api.tiltify.com/oauth/token",
        requestOptions as RequestInit,
      )
        .then((response) => response.json())
        .catch((error) => console.log("error", error));

      if (!token) {
        return {
          token: null,
        };
      }

      const newToken = await ctx.db.tokens.create({
        data: {
          platform: "tiltify",
          token: token.access_token,
          expiresIn: token.expires_in,
          createdAt: token.created_at,
        },
      });

      return {
        token: token.access_token,
      };
    }

    return {
      token: latestToken.token,
    };
  }),

  getToken: publicProcedure.query(async ({ ctx }) => {
    const latestToken = await ctx.db.tokens.findFirst({
      where: {
        platform: "tiltify",
      },
      orderBy: { createdAt: "desc" },
    });

    if (
      !latestToken ||
      latestToken?.createdAt.getTime() + latestToken?.expiresIn * 1000 <
        Date.now()
    ) {
      const tokenHeaders = new Headers();
      tokenHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        client_id:
          "dec0f4bab050e5e6f6a241abae50b2cde4666035062988537afcb02f83846452",
        client_secret:
          "be6c4701c9c20aa679e55c9ef548f997d709f0176f9e862a7ec9e0f9aea7ab10",
        grant_type: "client_credentials",
        scope: "public",
      });
      const requestOptions = {
        method: "POST",
        headers: tokenHeaders,
        body: raw,
        redirect: "follow",
      };
      const token = await fetch(
        "https://v5api.tiltify.com/oauth/token",
        requestOptions as RequestInit,
      )
        .then((response) => response.json())
        .catch((error) => console.log("error", error));

      if (!token) {
        return {
          token: null,
        };
      }

      const newToken = await ctx.db.tokens.create({
        data: {
          platform: "tiltify",
          token: token.access_token,
          expiresIn: token.expires_in,
          createdAt: token.created_at,
        },
      });

      return {
        token: token.access_token,
      };
    }

    return {
      token: latestToken.token,
    };
  }),
});
