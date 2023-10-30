import { PokemonCardType } from "@/types/card/pokemonCard";
import { fetcher } from "@/utils";

/**
 * Pokemon API (get one Pokemon Card)
 * @returns All Cards
 */
const getAllPokemonCard = async (): Promise<[PokemonCardType]> => {
  return await fetcher({
    resource: `${process.env.NEXT_PUBLIC_POKEMONTCG_API_URL}/cards`
  });
}

export default getAllPokemonCard;