import React, { useEffect, useState } from 'react';
import getYugiohCard from '@/services/yugioh/get-card';
import { YugiohCard } from '@/types/card/yugiohCard';

type Props = {
    id: number
}

const YugiohCard = (props: Props) => {
    const [yugioh, setYugioh] = useState<YugiohCard | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getYugiohCard({ id: props.id })
                setYugioh(response)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
    
        fetchData()
    }, [])

    return (
        <div>
          {yugioh ? (<img src={`${yugioh.image}/high.jpg`} alt={yugioh.name}></img>) : (<p>Loading...</p>)}
        </div>
    )
}

export default YugiohCard