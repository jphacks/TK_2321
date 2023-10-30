type CardSet = {
  set_name: string
  set_code: string
  set_rarity: string
  set_rarity_code: string
  set_price: string
}

type CardImage = {
    id: number
    image_url: string
    image_url_small: string
    image_url_cropped: string
}

type CardPrice = {
    cardmarket_price: number
    tcgplayer_price: number
    ebay_price: number
    amazon_price: number
    coolstuffinc_price: number
}

export type CardInfo = {
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
  card_sets: CardSet[]
  card_images: CardImage[]
  card_prices: CardPrice[]
}

// Card
export type YugiohCardType = {
  data: CardInfo[]
}