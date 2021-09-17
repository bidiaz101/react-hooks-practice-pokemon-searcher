import React, {useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({search, pokemon, setPokemon}) {
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(pokedata => setPokemon(pokedata))
  }, [])

  const pokemonToDisplay = pokemon.filter(pokemon => {
    if(search) {
      return pokemon.name.includes(search.toLowerCase())
    }
    return true
  }).map(pokemon => {
    return <PokemonCard 
      name={pokemon.name} 
      hp={pokemon.hp} 
      front={pokemon.sprites.front}
      back={pokemon.sprites.back}
      key={pokemon.id}
    />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
