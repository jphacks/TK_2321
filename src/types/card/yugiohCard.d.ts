type CardSet = {
  setName: string
  setCode: string
  setRarity: string
  setRarity_code: string
  setPrice: string
}

type CardImages = {
    id: number
    imageUrl: string
    imageUrlSmall: string
    imageUrlCropped: string
}

type CardPrices = {
    cardmarketPrice: number
    tcgplayerPrice: number
    ebayPrice: number
    amazonPrice: number
    coolstuffincPrice: number
}

// Card
export type YugiohCardType = {
  id: number
  name: string
  type: string
  frameType: string
  desc: string
  atk: number
  def: number
  level: number
  race: string
  attribute: string
  archetype: string
  cardSets: [CardSet]
}