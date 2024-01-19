import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";

export default async function Dashboard() {
  const partyQuery = api.party.getParty.query();
  const party = await partyQuery

  return (
    <>
      <h1 className="font-semibold text-lg md:text-2xl mb-4">Content Area</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Species</TableHead>
            <TableHead>Nickname</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Nature</TableHead>
            <TableHead className="w-[200px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {party.map((pokemon) => (
            <TableRow key={pokemon.pid}>
              <TableCell>{pokemon.species}</TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell>{pokemon.level}</TableCell>
              <TableCell>{pokemon.nature}</TableCell>
              <TableCell>
                <Button variant="outline" className="btn btn-default btn-xs mx-2 p-2">Edit</Button>
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

