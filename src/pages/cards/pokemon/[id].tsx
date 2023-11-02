import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

import PokemonCard from '@/components/atoms/Card/PokemonCard'

import getPokemonCard from '@/services/pokemon/get-card'
import getAllPokemonCard from '@/services/pokemon/get-all-cards'

import { PokemonCardType } from '@/types/card/pokemonCard'

type PokemonCardProps = {
  id: string
  card: PokemonCardType
}

const PokemonCardPage: NextPage<PokemonCardProps> = (props) => {
  const { id, card } = props

  const router = useRouter()

  if (router.isFallback) {
    return <div> Loading ...</div>
  }

  return (
    <div>
      <Head>
        <title>Pokemon Card</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <p>{`/pokemon/${id}`}</p>
        <PokemonCard id={card.id} />
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cards = await getAllPokemonCard()
  const paths = cards.map((card) => ({
    params: {
      id: card.id,
    },
  }))

  return { paths, fallback: false }
}

interface PokemonCardParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<
  PokemonCardProps,
  PokemonCardParams
> = async (context) => {
  if (!context.params) {
    throw new Error('param is undefined')
  }

  const cardId = context.params.id
  const card = await getPokemonCard({ id: cardId })

  return {
    props: {
      id: cardId,
      card,
    },
  }
}

export default PokemonCardPage
