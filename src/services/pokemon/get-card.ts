import { PokemonCardType } from "@/types/card/pokemonCard";
import { fetcher } from "@/utils";

export type GetPokemonCardParams = {
  /**
   * ID of the Pokemon Card to get
   */
  id: number
}

/**
 * Pokemon API (get one Pokemon Card)
 * @param params Pokemon Card ID
 * @returns Card
 */
const getPokemonCard = async ( prop: GetPokemonCardParams ): Promise<PokemonCardType> => {
  return await fetcher({
    resource: `${process.env.NEXT_PUBLIC_POKEMONTCG_API_URL}/cards/${prop.id}`,
  });
}

export default getPokemonCard;