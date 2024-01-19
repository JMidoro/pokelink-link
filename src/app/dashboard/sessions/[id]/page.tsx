/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type ChangeEvent, useState } from "react"
import { Label } from "@/components/ui/label"
import { api } from "@/trpc/react"
import { Skeleton } from "@/components/ui/skeleton"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { type PokemonType } from "@/lib/types"

export default function ProfileForm({ params }: { params: { id: string } }) {
    const [input, setInput] = useState({} as any)

    const labelClassName = "font-medium text-right w-[150px] pr-4"
    const id = params.id

    const { isLoading } = api.playthrough.getPlaythroughById.useQuery(id, {
        onSuccess: (data) => {
            setInput(data!)
        },
    })

    const { mutateAsync: savePlaythrough } = api.playthrough.savePlaythrough.useMutation();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.id]: e.target.value }); // Update specific field
    };

    const handleSave = () => {
        void savePlaythrough(input); // Proper function call
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4">
                    {isLoading ? <div className="flex gap-2 my-2"><Skeleton className="h-4 w-[75px] bg-neutral-600 inline-block rounded-xl" /><Skeleton className="h-4 w-[100px] bg-neutral-600 inline-block rounded-xl" /></div> : <div><span className="font-bold pr-2">PlaythroughID:</span> {input.id}</div>}
                    {isLoading ? <div className="flex gap-2 my-2"><Skeleton className="h-4 w-[100px] bg-neutral-600 inline-block rounded-xl" /><Skeleton className="h-4 w-[125px] bg-neutral-600 inline-block rounded-xl" /></div> : <div><span className="font-bold pr-2">Pokelink ID:</span>{input.pokelinkId}</div>}
                    {isLoading ? <div className="flex gap-2 my-2"><Skeleton className="h-4 w-[75px] bg-neutral-600 inline-block rounded-xl" /><Skeleton className="h-4 w-[100px] bg-neutral-600 inline-block rounded-xl" /></div> : <div><span className="font-bold pr-2">Generation:</span>{input.generation}</div>}
                    {isLoading ? <div className="flex gap-2 my-2"><Skeleton className="h-4 w-[65px] bg-neutral-600 inline-block rounded-xl" /><Skeleton className="h-4 w-[125px] bg-neutral-600 inline-block rounded-xl" /></div> : <div><span className="font-bold pr-2">Game:</span>{input.gameTitle}</div>}
                    {isLoading ? <div className="flex gap-2 my-2"><Skeleton className="h-4 w-[100px] bg-neutral-600 inline-block rounded-xl" /><Skeleton className="h-4 w-[125px] bg-neutral-600 inline-block rounded-xl" /></div> : <div><span className="font-bold pr-2">Game ID:</span>{input.gameId}</div>}
                    {isLoading ? <div className="flex gap-2 my-2"><Skeleton className="h-4 w-[75px] bg-neutral-600 inline-block rounded-xl" /><Skeleton className="h-4 w-[100px] bg-neutral-600 inline-block rounded-xl" /></div> : <div><span className="font-bold pr-2">Caught:</span>{input.pokemon.length}</div>}
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4 col-span-2">
                    <div className="mb-6">
                        <Label htmlFor="title" className={labelClassName}>Title</Label>
                        <Input
                            id="title"
                            type="text"
                            value={input?.title}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="subTitle" className={labelClassName}>Sub-Title</Label>
                        <Input
                            id="subTitle"
                            type="text"
                            value={input?.subTitle}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">ID</TableHead>
                            <TableHead>Species</TableHead>
                            <TableHead>Nickname</TableHead>
                            <TableHead>Level</TableHead>
                            <TableHead>Nature</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {input.pokemon?.map((p: PokemonType) => (
                            <TableRow key={p.pid}>
                                <TableCell className="font-medium">{p.pid}</TableCell>
                                <TableCell>{p.species}</TableCell>
                                <TableCell>{p.name}</TableCell>
                                <TableCell>{p.level}</TableCell>
                                <TableCell>{p.nature}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {!isLoading && (
                <div className="w-100 flex justify-end py-4 gap-4">
                    <Button className="border" onClick={handleSave}>Save</Button>
                    <Button className="border">Delete</Button>
                </div>
            )}
        </div>
    )
}
