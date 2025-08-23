import { Card, CardContent } from "@/components/molecules";
import { NextImage } from "@/components/atoms";
import { Pokemon, PokemonAbility, PokemonType } from "@/types/commonTypes";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <Card className="md:max-w-xs bg-white rounded-xl shadow-md 
      hover:shadow-xl transform hover:-translate-y-1 hover:scale-100 
      transition-all duration-300 ease-in-out">
      <CardContent className="flex flex-col items-center gap-3 p-4">
        <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
          <NextImage
            src={pokemon.sprites.front_default ?? "/fallback.png"} //add a fallback image if needed
            alt={pokemon.name}
            width={112}
            height={112}
            className="object-contain"
          />
        </div>
        <h2 className="capitalize text-xl font-bold text-gray-800">{pokemon.name}</h2>
        <p className="text-gray-600 text-sm">Base XP: {pokemon.base_experience}</p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Types:</span>{" "}
          {pokemon.types.map((t: PokemonType) => t.type.name).join(", ")}
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Abilities:</span>{" "}
          {pokemon.abilities.map((a: PokemonAbility) => a.ability.name).join(", ")}
        </p>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
