import { Meta } from '@storybook/react'
import Card from './index'

const meta: Meta<typeof Card> = {
  title: "Atoms/Card"
};

export default meta;

type Props = {
  imageSrc: string
  description: string
};


export const PokemonCard = (props: Props) => {};