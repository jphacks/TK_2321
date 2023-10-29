type CardVariant = {
  normal:         boolean   //Card available without any shines
  reverse:	      boolean   //	Card available in Reverse (colored background is shining)
  holo:		        boolean   //Card available in Holo (picture is shining)
  firstEdition:		boolean   //Card has a small 1st edition in the middle left
}

type CardItem = {
  name :          string    // Item name
  effect:         string    // Item effect
}

type CardCound = {
  total:          number    // The total amount of cards in this set (including hidden)
  official: 		  number    // The amount of cards in this set (displayed on the bottom left/right of the card)
}

type SetResume = {
  id:             string    // Set Unique ID	
  name:           string    // Set Name	
  logo: 	        string    // Set logo (you can add .(webp|png|jpg) to customize the format)
  symbol: 	      string    // Set Symbol (you can add .(webp|png|jpg) to customize the format
  cardCount:      CardCount //Contain information about the number of cards in the set
}

// Card
type Card = {
  id:               string                // Card Unique ID
  localId:          string | number       // Card Local ID
  name:	            string                // Card Name
  image:            string                // Card Image
  category:	        string                // Card category (Pokemon, Energy, Trainer)	
  illustrator:      string                // Card illustrator
  rarity:           string                // Card rarity
  variants:	      	CardVariant           // The possible variants of this card
  set:              SetResume             //Basic informations about the card set
  dexId:		        [number]              //The National Pokedex ID of the pokémons on the card
  hp:             	number                //The Pokémon HP	
  types:            string                //The types of the Pokémon	Array of
  evolveFrom:	      string                //The Pokémon name it evolve from	
  description:      string                //the card description (generally in the bottom right)
  level:            string                //The Pokémon Level
  stage:	          string                //The Pokémon Stage
  suffix:           string                // The Card suffix
  item:	            CardItem              //The Pokémon Item	
}
  


// API Context
export type EnvType = {
  NEXT_PUBLIC_POKEMONTCG_API_URL: string
}