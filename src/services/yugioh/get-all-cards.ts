import { YugiohCardType } from "@/types/card/yugiohCard";
import { fetcher } from "@/utils";

/**
 * Yugioh API (get one Yugioh Card)
 * @returns All Cards
 */
const getAllYugiohCard = async (): Promise<YugiohCardType[]> => {
    return await fetcher({
        resource: `${process.env.NEXT_PUBLIC_YUGIOH_URL}`,
    });
  }
  
  export default getAllYugiohCard;