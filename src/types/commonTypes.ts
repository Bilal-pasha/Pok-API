export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprite {
  front_default: string | null;
  back_default?: string | null;
  other?: {
    ["official-artwork"]?: {
      front_default: string | null;
    };
  };
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: PokemonSprite;
  moves: PokemonMove[];
}
