/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";
import { type NextApiRequest } from "next";
import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name")!;
  const pokedex = await P.getPokemonByName(name);

  return NextResponse.json(pokedex);
}
