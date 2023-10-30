import React, {useState, useEffect} from 'react'
import { BackGroundKind } from '@/types/Field';
import Image, { StaticImageData } from 'next/image';
import pokemonBF from '@/assets/backgrounds/pokemonBattleField.jpeg'
import yugiohBF from '@/assets/backgrounds/yugiohBattleField.jpg'
import defaultBF from '@/assets/backgrounds/defaultBattleField.avif'

type Props = {
    background?: BackGroundKind
    rows: number
    cols: number
}


const BattleField = (props: Props) => {
    const [background, setBackGround] = useState<StaticImageData>(defaultBF)

    const [rows, setRows] = useState<number>(10)
    const [cols, setCols] = useState<number>(10)

    useEffect(() => {
        switch(props.background) {
            case "Pokemon":
                setBackGround(pokemonBF);
                break;
            case "Yugioh":
                setBackGround(yugiohBF);
                break;
            default:
                setBackGround(defaultBF);
                break;
        }

        setRows(props.rows)
        setCols(props.cols)
    }, [])


    return(
        <Image 
            src={background} 
            alt="background" 
            width={1200} 
            height={1000}
        />
    )
}

export default BattleField;