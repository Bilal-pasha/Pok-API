"use client";

import { useState } from "react";
import { SearchBar } from "@/components/molecules";
import { usePokemon } from "@/hooks/usePokemon";
import ShimmerGrid from "../molecules/ShimmerGrid";
import PokemonCard from "../organisms/PokemonCard";
import { Pokemon } from "@/types";

export function PokemonSearchPage() {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const { data: pokemon, error, isLoading } = usePokemon(query);

  if (isLoading) return <ShimmerGrid count={3} columns={3} />;

  return (
    <div className="flex flex-col gap-4 ">
      <SearchBar
        value={name}
        onChange={setName}
        onSearch={() => setQuery(name)}
      />
      {error && <p className="text-red-500 text-sm">Pokémon not found!</p>}
      <PokemonCard pokemon={pokemon as Pokemon} />
    </div>
  );
}
