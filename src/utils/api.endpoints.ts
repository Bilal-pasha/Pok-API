export const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://pokeapi.co/api';
export const APPLICATION_ROUTES = {
  VERSION: '/v2',
} as const;

export const API_ENDPOINTS = {
  POKEMON: `${APPLICATION_ROUTES.VERSION}/pokemon/`,
} as const;

export const publicApiEndpoints: readonly string[] = [API_ENDPOINTS.POKEMON];
