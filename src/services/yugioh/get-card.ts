import { YugiohCardType } from "@/types/card/yugiohCard";
import { fetcher } from "@/utils";

export type GetYugiohCardParams = {
  /**
   * ID of the Yugioh Card to get
   */
  id: number
}

/**
 * Yugioh API (get one Yugioh Card)
 * @param params Yugioh Card ID
 * @returns Card
 */
const getYugiohCard = async ( prop: GetYugiohCardParams ): Promise<YugiohCardType> => {
  return await fetcher({
    resource: `${process.env.NEXT_PUBLIC_YUGIOH_URL}?id=${prop.id}`,
  });
}

export default getYugiohCard;