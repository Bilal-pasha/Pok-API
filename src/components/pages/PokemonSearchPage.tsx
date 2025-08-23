"use client";

import { usePokemon } from "@/hooks/usePokemon";
import ShimmerGrid from "../molecules/ShimmerGrid";
import PokemonCard from "../organisms/PokemonCard";
import SearchBar from "../molecules/SearchBar";
import { Pokemon } from "@/types";
import { useState } from "react";

export default function PokemonSearchPage() {
  const [query, setQuery] = useState("");
  const { data: pokemon, error, isLoading } = usePokemon(query);

  const handleSearch = (name: string) => {
    setQuery(name);
  };

  return (
    <div className="flex flex-col gap-4">
      <SearchBar onSearch={handleSearch} />
      {isLoading && <ShimmerGrid count={3} columns={3} />}
      {error && <p className="text-red-500 text-sm">Pokémon not found!</p>}
      {pokemon && <PokemonCard pokemon={pokemon as Pokemon} />}
    </div>
  );
}
