import React from "react";

type Props = {
  imageSrc: string
  description: string
};

const Card = (props: Props) => {
  return (
    <div>
      <img src={props.imageSrc} alt={props.description}/>
    </div>
  );
};

export default Card;