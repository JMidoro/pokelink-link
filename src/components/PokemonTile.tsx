import { Card } from "@/components/ui/card";
import { type Key } from "react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { type PokemonType } from "@/lib/types";
import { PokemonContent } from "./PokemonContent";


const getTypeColors = (pokemon: PokemonType) => {
  const typeColors: Record<string, string> = {
    "Normal": "rgba(168, 167, 122, 0.5)",
    "Fire": "rgba(240, 128, 48, 0.5)",
    "Water": "rgba(99, 144, 240, 0.5)",
    "Electric": "rgba(247, 208, 44, 0.5)",
    "Grass": "rgba(122, 199, 76, 0.5)",
    "Ice": "rgba(150, 217, 214, 0.5)",
    "Fighting": "rgba(194, 46, 40, 0.5)",
    "Poison": "rgba(163, 62, 161, 0.5)",
    "Ground": "rgba(226, 191, 101, 0.5)",
    "Flying": "rgba(169, 143, 243, 0.5)",
    "Psychic": "rgba(249, 85, 135, 0.5)",
    "Bug": "rgba(166, 185, 26, 0.5)",
    "Rock": "rgba(182, 161, 54, 0.5)",
    "Ghost": "rgba(115, 87, 151, 0.5)",
    "Dragon": "rgba(111, 53, 252, 0.5)",
    "Dark": "rgba(112, 87, 70, 0.5)",
    "Steel": "rgba(183, 183, 206, 0.5)",
    "Fairy": "rgba(214, 133, 173, 0.5)"
  }

  const typeColorsSecondary: Record<string, string> = {
    "Normal": "rgba(168, 167, 122, 0.1)",
    "Fire": "rgba(0, 0, 0, 0.1)",
    "Water": "rgba(99, 144, 240, 0.1)",
    "Electric": "rgba(247, 208, 44, 0.1)",
    "Grass": "rgba(122, 199, 76, 0.1)",
    "Ice": "rgba(150, 217, 214, 0.1)",
    "Fighting": "rgba(194, 46, 40, 0.1)",
    "Poison": "rgba(163, 62, 161, 0.1)",
    "Ground": "rgba(226, 191, 101, 0.1)",
    "Flying": "rgba(169, 143, 243, 0.1)",
    "Psychic": "rgba(249, 85, 135, 0.1)",
    "Bug": "rgba(166, 185, 26, 0.1)",
    "Rock": "rgba(182, 161, 54, 0.1)",
    "Ghost": "rgba(0, 0, 0, 0.1)",
    "Dragon": "rgba(111, 53, 252, 0.1)",
    "Dark": "rgba(112, 87, 70, 1)",
    "Steel": "rgba(183, 183, 206, 0.1)",
    "Fairy": "rgba(214, 133, 173, 0.1)"
  }

  if (pokemon.type2) {
    return `linear-gradient(180deg, ${typeColors[pokemon.type2]} 0%, ${typeColors[pokemon.type1]} 100%)`
  }

  return `linear-gradient(180deg, ${typeColors[pokemon.type1]} 0%, ${typeColorsSecondary[pokemon.type1]} 100%)`
}

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

const topItemClasses = "flex items-center justify-center row-span-4 relative"
const bottomItemClasses = "flex items-center justify-center row-span-4 relative"

export const EmptyPokemonTile = ({ index }: { index: number }) => {
  return (
    <div key={index} className={index < 3 ? topItemClasses : bottomItemClasses}>
      <Card className="w-full h-full align-bottom items-end border shadow-none relative overflow-hidden content-between group rounded-none backdrop-filter backdrop-grayscale backdrop-brightness-[.25] hidden md:block">
        <div className="grow min-w-24 md:w-full absolute top-0 left-0 h-full group-hover:scale-125 transition duration-150" />
      </Card>
      <div className="absolute bottom-0 left-0 w-full h-full object-cover -z-10" style={{ backgroundImage: `url(/type-backgrounds/normal.png)`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
    </div>
  )
}

export const PokemonTile = (pokemon: PokemonType, index: Key) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          key={index}
          className={
            index?.toString() < "3" ? topItemClasses : bottomItemClasses
          }
          style={{
            background: getTypeColors(pokemon),
            filter: pokemon.hasDied
              ? "grayscale(100%) brightness(50%)"
              : "none",
          }}
        >
          <Card className="group relative h-full w-full content-between items-end overflow-hidden rounded-none border-none align-bottom transition hover:shadow-2xl hover:backdrop-blur-sm hover:backdrop-contrast-200 hover:backdrop-filter">
            <div
              className="absolute left-0 top-0 h-full min-w-24 grow transition duration-150 group-hover:scale-125 md:w-full z-[2]"
              style={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url("/sprites/sprites/pokemon/other/official-artwork/${pokemon.number}.png")`,
              }}
            />
            <Card className="m-2 flex shrink flex-row items-center justify-between border-none bg-black bg-opacity-95 pl-24 text-white shadow-xl sm:pr-4 md:px-4 -z-10">
              <div className="flex h-full flex-col justify-evenly p-4">
                <span
                  className="teko card-drop-shadow relative block align-middle text-2xl"
                  style={{
                    textDecoration: pokemon.hasDied ? "line-through" : "none",
                  }}
                >
                  {pokemon.name}
                </span>
                <div
                  className="teko card-drop-shadow relative block text-sm"
                  style={{
                    textDecoration: pokemon.hasDied ? "line-through" : "none",
                  }}
                >
                  {pokemon.species}
                </div>
              </div>
              <div className="flex h-full flex-col items-end justify-evenly p-4 text-right">
                <div
                  className="teko card-drop-shadow relative block"
                  style={{
                    textDecoration: pokemon.hasDied ? "line-through" : "none",
                  }}
                >
                  {pokemon.type1}
                  {pokemon.type2 && `/${pokemon.type2}`}
                </div>
                <div
                  className="teko card-drop-shadow relative block text-sm"
                  style={{
                    textDecoration: pokemon.hasDied ? "line-through" : "none",
                  }}
                >
                  Lv.{pokemon.level}
                </div>
              </div>
            </Card>
          </Card>
          <div
            className="absolute bottom-0 left-0 -z-10 h-full w-full object-cover"
            style={{
              backgroundImage: `url(/type-backgrounds/${getTypeBackground(
                pokemon,
              )})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      </SheetTrigger>
      <PokemonContent pokemon={pokemon} />
    </Sheet>
  );
}