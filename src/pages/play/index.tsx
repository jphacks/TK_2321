import React, { useEffect, useState } from "react";
import getPokemonCard from "../../services/pokemon/get-card";
import { Card } from "../../types";
import PokemonCard from "../../components/atoms/Card";

const Test = () => {
  const [pokemon, setPokemon] = useState<Card | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonCard({ id: 136 });
        setPokemon(response);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {pokemon ? ( <img src={`${pokemon.image}/high.jpg`} alt={pokemon.name}></img> ) : ( <p>Loading...</p> )}
      {pokemon ? ( <PokemonCard imageSrc={`${pokemon.image}/high.jpg`} description={pokemon.name}/> ) : ( <p>Loading</p>)}
    </div>
  );
};

export default Test;