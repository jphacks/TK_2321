import { Card } from "../../types";
import { fetcher } from "../../utils";

/**
 * Pokemon API (get one Pokemon Card)
 * @returns All Cards
 */
const getAllPokemonCard = async (): Promise<[Card]> => {
  return await fetcher({
    resource: `${process.env.NEXT_PUBLIC_POKEMONTCG_API_URL}/cards`
  });
}

export default getAllPokemonCard;