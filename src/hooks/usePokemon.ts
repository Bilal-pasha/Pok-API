import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "@/services/pokemonService";

export function usePokemon(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name),
    enabled: !!name,
  });
}
