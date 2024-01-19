import { SheetContent } from "./ui/sheet"
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import { type PokemonType } from "@/lib/types";

export const PokemonContent = ({ pokemon }: { pokemon: PokemonType }) => {
    return (
        <SheetContent className="w-screen border-neutral-700 bg-black text-white">
            <ScrollArea className="h-screen">
                <div className="grid gap-2 py-6">
                    <div className="flex flex-row w-full justify-between">
                        <div className="">
                            <h2 className="text-5xl">{pokemon.name}</h2>
                            <div className="text-xl">
                                the {pokemon.species}{" "}
                                {(pokemon.hasDied ?? !pokemon.slotId) && <span className="text-xl">(RIP)</span>}
                            </div>
                            {pokemon.shiny && (
                                <div className="text-xl">
                                    ✨<span className="font-bold italic">Shiny!</span>✨
                                </div>
                            )}
                            <div className="text-xl">
                                <span className="font-bold">Gender:</span> {pokemon.gender === "M" ? "♂" : pokemon.gender === "F" ? "♀" : "N/A"}
                            </div>
                            <div className="text-xl">
                                <span className="font-bold">Type:</span> {pokemon.type1}
                                {pokemon.type2 && `/${pokemon.type2}`}
                            </div>
                            <div className="text-xl">
                                <span className="font-bold">Ability:</span> {pokemon.ability}
                            </div>
                            <div className="text-xl">
                                <span className="font-bold">Nature:</span> {pokemon.nature}
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src={`/sprites/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.number}.gif`}
                                alt={pokemon.name ?? pokemon.species}
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <Separator className="border border-neutral-700" />
                    <div className="text-xl">
                        <span className="font-bold">Level:</span> {pokemon.level}
                    </div>
                    <div className="text-xl">
                        <span className="font-bold">HP:</span> {pokemon.hp?.current}/
                        {pokemon.hp?.max}
                    </div>
                    <div className="text-xl">
                        <span className="font-bold">EXP:</span> {pokemon.exp}
                    </div>
                    <div className="text-xl">
                        <span className="font-bold">Friendship:</span> {pokemon.friendship}
                    </div>
                    <Separator className="border border-neutral-700" />
                    {/* Moevs */}
                    <div className="text-xl">
                        <span className="font-bold">Moves:</span>
                    </div>
                    <Table>
                        <TableBody>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>{pokemon.move1?.name ?? '--'}</TableCell>
                                <TableCell>{pokemon.move1?.pp ?? '--'}pp</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>{pokemon.move2?.name ?? '--'}</TableCell>
                                <TableCell>{pokemon.move2?.pp ?? '--'}pp</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>{pokemon.move3?.name ?? '--'}</TableCell>
                                <TableCell>{pokemon.move3?.pp ?? '--'}pp</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>{pokemon.move4?.name ?? '--'}</TableCell>
                                <TableCell>{pokemon.move4?.pp ?? '--'}pp</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Separator className="border border-neutral-700" />
                    <div className="text-xl">
                        <span className="font-bold">Stats:</span>
                    </div>
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/3"></TableHead>
                                <TableHead className="w-1/3 border">IV</TableHead>
                                <TableHead className="w-1/3 border">EV</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="border">
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>HP</TableCell>
                                <TableCell className="border-l-2">{pokemon.ivs.hp}</TableCell>
                                <TableCell className="border-l-2">{pokemon.evs.hp}</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>Atk</TableCell>
                                <TableCell className="border-l-2">{pokemon.ivs.attack}</TableCell>
                                <TableCell className="border-l-2">{pokemon.evs.attack}</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>Def</TableCell>
                                <TableCell className="border-l-2">{pokemon.ivs.defense}</TableCell>
                                <TableCell className="border-l-2">{pokemon.evs.defense}</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>SpA</TableCell>
                                <TableCell className="border-l-2">{pokemon.ivs.specialAttack}</TableCell>
                                <TableCell className="border-l-2">{pokemon.evs.specialAttack}</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-white hover:text-black">
                                <TableCell>SpD</TableCell>
                                <TableCell className="border-l-2">{pokemon.ivs.specialDefense}</TableCell>
                                <TableCell className="border-l-2">{pokemon.evs.specialDefense}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
                </div>
            </ScrollArea>
        </SheetContent>
    )
}