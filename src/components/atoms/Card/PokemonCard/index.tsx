import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getPokemonCard from '@/services/pokemon/get-card'
import { PokemonCardType } from '@/types/card/pokemonCard'
import pokemonCardBack from '@/assets/cards/pokemonCardBack.png'

type Props = {
  id: string
}

const PokemonCard = (props: Props) => {
  const [pokemon, setPokemon] = useState<PokemonCardType | null>(null)
  const [frontBack, setFrontBack] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonCard({ id: props.id })
        setPokemon(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {pokemon ? (
        <Image
          src={`${pokemon.image}/high.jpg`}
          alt={pokemon.name}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PokemonCard
