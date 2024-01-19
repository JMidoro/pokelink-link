
import { ScrollArea } from "@/components/ui/scroll-area";
import { PokemonTile, EmptyPokemonTile } from "@/components/PokemonTile";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import NavUser from "@/components/Nav/NavUser";
import { RulesSection } from "@/components/RulesSection";
import { FaqSection } from "@/components/FaqSection";
import { PokemonSection } from "@/components/PokemonSection";
import Footer from "@/components/Footer";
import NavAnon from "@/components/Nav/NavAnon";
import { CampaignSection } from "@/components/CampaignSection";
import { type PokemonType } from "@/lib/types";
import { notFound } from 'next/navigation';


export default async function Home({ params }: { params: { player: string } }) {
    const playerNameQuery = api.player.getUserByPlayerName.query(
        { userId: params.player }
    );

    const player = await playerNameQuery
    if (!player) {
        notFound();
        return null;
    }
    if (!player.playthrough) {
        notFound();
        return null;
    }

    const partyQuery = api.party.getPartyByPlaythroughId.query(
        player.playthrough.id
    );

    const party = await partyQuery
    // const debugOutput = party
    // return (<pre>{JSON.stringify(debugOutput, null, 2)}</pre>)
    const playthrough = player.playthrough
    const session = await getServerAuthSession();
    const activeParty = party.filter(pokemon => pokemon.slotId !== null).sort((a, b) => a.slotId! - b.slotId!);

    const tiles = [];

    for (let index = 0; index < 6; index++) {
        if (!activeParty[index]) {
            tiles.push(
                <>
                    {index === 3 ? (
                        <div className="bg-black px-6 w-full text-center col-span-3 row-span-1 items-center flex flex-col justify-evenly relative order-first md:order-none pl-12 md:m-0">
                            <h1 className="text-4xl font-bold text-white teko uppercase p-0 m-0">{playthrough.title !== "Untitled" ? playthrough.title : playthrough.gameTitle}</h1>
                            <p className="text-xl text-white teko p-0 m-0">{playthrough.subTitle !== "Untitled" ? playthrough.subTitle : "Currently Playing"}</p>
                        </div>
                    ) : null}
                    <EmptyPokemonTile index={index} />
                </>
            )
        } else {
            const pokemon = activeParty[index] as PokemonType;
            if (!pokemon) return console.log("No pokemon");
            const pokemonTile = PokemonTile(pokemon, index)
            tiles.push(
                <>
                    {index === 3 ? (
                        <div className="bg-black px-6 w-full text-center col-span-3 row-span-1 items-center flex flex-col justify-evenly relative order-first md:order-none pl-12 md:m-0">
                            <h1 className="text-4xl font-bold text-white teko uppercase p-0 m-0">{playthrough.title !== "Untitled" ? playthrough.title : playthrough.gameTitle}</h1>
                            <p className="text-xl text-white teko p-0 m-0">{playthrough.subTitle !== "Untitled" ? playthrough.subTitle : "Currently Playing"}</p>
                        </div>
                    ) : null}
                    {pokemonTile}
                </>
            )
        }
    }

    return (
        <>
            <ScrollArea className="w-full h-screen reative md:pt-10" style={{ scrollBehavior: 'smooth' }}>
                {!!session?.user ? <NavUser /> : <NavAnon />}
                <div className="md:mb-8 md:container md:aspect-video" id="party">
                    <div className="w-full h-full flex flex-col md:grid md:grid-cols-3 grid-rows-9 ">
                        {tiles}
                    </div>
                </div>
                <CampaignSection />
                <RulesSection />
                <PokemonSection party={party} />
                <FaqSection />
                {/* <ClipsSection /> */}
                {/* <PostsSection /> */}
                <Footer />
                <div className="absolute top-0 left-0 w-screen h-screen -z-20 filter brightness-50" style={{ backgroundImage: 'url("/wp.png")', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundSize: 'cover' }} />
            </ScrollArea>
        </>
    )
}

