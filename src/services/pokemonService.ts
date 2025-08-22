import { Pokemon } from "@/components/pages/types";
import axios from "axios";

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  return res.data;
};
