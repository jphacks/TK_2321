type CardSet = {
  set_name: string
  set_code: string
  set_rarity: string
  set_rarity_code: string
  set_price: string
}

type CardImages = {
    id: number
    image_url: string
    image_url_small: string
    image_url_cropped: string
}

type CardPrices = {
    cardmarket_price: number
    tcgplayer_price: number
    ebay_price: number
    amazon_price: number
    coolstuffinc_price: number
}

// Card
type YugiohCard = {
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
  card_sets: [CardSet]
}