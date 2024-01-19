import { Card } from "@/components/ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { type PokemonType } from "@/lib/types";
import { PokemonContent } from "./PokemonContent";

function getTypeBackground(pokemon: PokemonType) {
    const backgrounds: Record<string, string> = {
        "Bug": "bug.png",
        "Dark": "dark.png",
        "Dragon": "dragon.png",
        "Electric": "electric.png",
        "Fairy": "fairy.png",
        "Fighting": "fighting.png",
        "Fire": "fire.png",
        "Flying": "flying.png",
        "Ghost": "ghost.png",
        "Grass": "grass.png",
        "Ground": "ground.png",
        "Ice": "ice.png",
        "Normal": "normal.png",
        "Poison": "poison.png",
        "Psychic": "psychic.png",
        "Rock": "rock.png",
        "Steel": "steel.png",
        "Water": "water.png"
    }

    if (pokemon.type1) {
        return backgrounds[pokemon.type1]
    }
}

export const PokemonSection = ({ party }: { party: PokemonType[] }) => {
    return (
        <div className="container text-white my-8" id="allPokemon">
            <h1 className="text-4xl font-bold text-white teko uppercase m-0 w-full max-w-screen bg-black rounded-xl text-center p-4">All Pokemon</h1>
            <div className="grid-cols-2 md:grid-cols-5 grid gap-4 text-white my-4">

                {party.map((pokemon: PokemonType) => {
                    return (
                        <Sheet key={pokemon.id}>
                            <SheetTrigger asChild>
                                <Card className="hover:backdrop-filter hover:backdrop-contrast-200 hover:backdrop-blur-sm w-full h-full align-bottom items-end relative overflow-hidden content-between group hover:shadow-2xl transition" style={{ filter: !pokemon.slotId ? 'grayscale(100%) brightness(50%)' : 'none' }}>
                                    <h1 className="text-center bg-neutral-900 font-bold">{pokemon.name}</h1>
                                    <div className="hover:backdrop-filter hover:backdrop-contrast-200 hover:backdrop-blur-sm w-full h-full align-bottom items-end border-none overflow-hidden content-between group rounded-none hover:shadow-2xl transition relative">
                                        <div className="min-h-32 relative">
                                            <div className="grow min-w-24 min-h-24 w-full absolute md:left-50 h-full group-hover:scale-125 transition duration-150" style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url("/sprites/sprites/pokemon/other/official-artwork/${pokemon.number}.png")` }} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-full object-cover -z-10" style={{ backgroundImage: `url(/type-backgrounds/${getTypeBackground(pokemon)})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />

                                </Card>
                            </SheetTrigger>
                            <PokemonContent pokemon={pokemon} />
                        </Sheet>

                    )
                }
                )}
            </div>
        </div>

    )
}