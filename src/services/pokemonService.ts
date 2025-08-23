import { Pokemon } from "@/types";
import { API_ENDPOINTS } from "@/utils/api.endpoints";
import http from '@/utils/axiosConfig';

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const { data } = await http.get(API_ENDPOINTS.POKEMON + name.toLowerCase());
  return data;
};
