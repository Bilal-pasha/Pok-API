export interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  base_experience: number;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}
