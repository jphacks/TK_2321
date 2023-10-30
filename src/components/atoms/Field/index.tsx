import React, {useState, useEffect} from 'react'
import { BackGroundKind } from '@/types/Field';

type Props = {
    background?: BackGroundKind
    rows: number
    cols: number
}


const BattleField = (props: Props) => {
    const [background, setBackGround] = useState<string>("@/assets/backgrounds/defaultBattleField.avif")

    const [rows, setRows] = useState<number>(10)
    const [cols, setCols] = useState<number>(10)

    useEffect(() => {
        switch(props.background) {
            case "Pokemon":
                setBackGround("@/assets/pokemonBattleField.jpeg");
                break;
            case "Yugioh":
                setBackGround("@/assets/backgrounds/yugiohBattleField.jpg");
                break;
            default:
                setBackGround("@/assets/backgrounds/defaultBattleField.avif");
                break;
        }

        setRows(props.rows)
        setCols(props.cols)
    }, [])


    return(
        <img src="@/assets/backgrounds/pokemonBattleField.jpeg" alt="background" />
    )
}

export default BattleField;