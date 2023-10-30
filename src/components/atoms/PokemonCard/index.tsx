import React, { useEffect, useState } from 'react'
import getPokemonCard from '../../../services/pokemon/get-card'
import { PokemonCardType } from '@/types/card/pokemonCard'

type Props = {
  id: number
}

const PokemonCard = (props: Props) => {
  const [pokemon, setPokemon] = useState<PokemonCardType | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonCard({ id: props.id })
        setPokemon(response)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {pokemon ? (<img src={`${pokemon.image}/high.jpg`} alt={pokemon.name}></img>) : (<p>Loading...</p>)}
    </div>
  )
}

export default PokemonCard
