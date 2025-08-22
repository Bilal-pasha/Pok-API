"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePokemon } from "@/hooks/usePokemon";
import { NextImage } from "../atoms";
import { PokemonAbility, PokemonType } from "./types";

export function PokemonSearchPage() {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const { data: pokemon, error, isLoading } = usePokemon(query);
  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="flex space-x-2">
        <Input
          placeholder="Enter Pokémon name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={() => setQuery(name)} disabled={!name || isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-sm">Pokémon not found!</p>}

      {/* Result */}
      {pokemon && (
        <Card  className="max-w-fit">
          <CardContent>
            <NextImage
              src={pokemon.sprites.front_default ?? "/fallback.png"}
              alt={pokemon.name}
              width={80}
              height={80}
            />
            <h2 className="capitalize">{pokemon.name}</h2>
            <p>Base XP: {pokemon.base_experience}</p>
            <p>
              Types:{" "}
              {pokemon.types.map((t: PokemonType) => t.type.name).join(", ")}
            </p>
            <p>
              Abilities:{" "}
              {pokemon.abilities
                .map((a:PokemonAbility) => a.ability.name)
                .join(", ")}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
