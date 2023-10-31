import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

import YugiohCard from '@/components/atoms/Card/YugiohCard'

import getYugiohCard from '@/services/yugioh/get-card'
import getAllYugiohCard from '@/services/yugioh/get-all-cards'

import { YugiohCardType, CardInfo } from '@/types/card/yugiohCard'

type YugiohCardProps = {
  id: string
  card: CardInfo
}

const YugiohCardPage: NextPage<YugiohCardProps> = (props) => {
  const { id, card } = props

  const router = useRouter()

  if (router.isFallback) {
    return <div> Loading ...</div>
  }

  return (
    <div>
      <Head>
        <title>Yugioh Card</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <p>{`/yugioh/${id}`}</p>
        <YugiohCard id={card.id} />
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cards = await getAllYugiohCard()
  console.log(cards[0])
  const paths = cards[0].data.map((card) => ({
    params: {
      id: card.id,
    },
  }))

  return { paths, fallback: false }
}

interface YugiohCardParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<
  YugiohCardProps,
  YugiohCardParams
> = async (context) => {
  if (!context.params) {
    throw new Error('param is undefined')
  }

  const cardId = context.params.id
  const card = await getYugiohCard({ id: cardId })

  return {
    props: {
      id: cardId,
      card: card.data[0],
    },
  }
}

export default YugiohCardPage
