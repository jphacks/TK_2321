import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getYugiohCard from '@/services/yugioh/get-card'
import { YugiohCardType, CardInfo } from '@/types/card/yugiohCard'

type Props = {
  id: string
}

const YugiohCard = (props: Props) => {
  const [yugioh, setYugioh] = useState<YugiohCardType | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getYugiohCard({ id: props.id })
        setYugioh(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {yugioh ? (
        <Image
          src={`${yugioh.data[0].card_images[0].image_url}`}
          alt={yugioh.data[0].name}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default YugiohCard
