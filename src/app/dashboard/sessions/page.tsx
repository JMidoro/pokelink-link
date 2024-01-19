import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { api } from "@/trpc/server";
import Link from "next/link";

export default async function Dashboard() {
  const playthroughs = await api.playthrough.getAll.query();
  console.log(playthroughs);

  return (
    <>
      <h1 className="font-semibold text-lg md:text-2xl mb-4">Content Area</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>SubTitle</TableHead>
            <TableHead>Game</TableHead>
            <TableHead>Generation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {playthroughs.map((session) => (
            <TableRow key={session.id}>
              <TableCell className="font-medium"><Link href={`/dashboard/sessions/${session.id}`}>{session.id}</Link></TableCell>
              <TableCell><Link href={`/dashboard/sessions/${session.id}`}>{session.title}</Link></TableCell>
              <TableCell><Link href={`/dashboard/sessions/${session.id}`}>{session.subTitle}</Link></TableCell>
              <TableCell><Link href={`/dashboard/sessions/${session.id}`}>{session.gameTitle}</Link></TableCell>
              <TableCell><Link href={`/dashboard/sessions/${session.id}`}>{session.generation}</Link></TableCell>
              <TableCell>
                <Link href={`/dashboard/sessions/${session.id}`}><Button variant="outline" className="btn btn-default btn-xs mx-2 p-2">Edit</Button></Link>
                <Button variant="outline" className="btn btn-default btn-xs mx-2 p-2">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* {data.map((item, index) => (
        <Card className="my-4 shadow-lg rounded-xl bg-neutral-200 text-neutral-800" key={index}>
        <CardHeader className="pb-4">
            <CardTitle className="text-2xl py-0">Playthrough Title</CardTitle>
            <div>playthrough Subtitle</div>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-4">
            <Card>
                <CardHeader className="m-0 py-2">
                    <CardTitle className="text-xl">
                        Game
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>Game: Pokemon White</div>
                    <div>Generation 5</div>
                    <div>Players: 1</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="m-0 py-2">
                    <CardTitle className="text-xl">
                        Pokedex
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>Badges: 0/8</div>
                    <div>Pokemon Seen: 10</div>
                    <div>Pokemon Caught: 10</div>
                    <div>Pokemon Deaths: 10</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="m-0 py-2">
                    <CardTitle className="text-xl">
                        Content
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>Streams: 3</div>
                    <div>Clips: 24</div>
                    <div>Clips: 4</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="m-0 py-2">
                    <CardTitle className="text-xl">
                        Streams
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>Avg CCU: 72</div>
                    <div>Avg Stream: 4h27m</div>
                    <div>Longest Stream: 6h</div>
                    <div>Shortest Stream: 2h</div>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
    ))} */}
    </>
  )
}

