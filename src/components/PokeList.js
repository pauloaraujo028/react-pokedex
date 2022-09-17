import axios from "axios";
import { useEffect, useState } from "react";
import "./PokeList.css";
import PokemonCard from "./PokemonCard";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i < 899; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.data.name}
              id={pokemon.data.id.toString().padStart(3, "0")}
              image={
                pokemon.data.sprites.other["official-artwork"].front_default
              }
              name={pokemon.data.name.replace(/^./, (str) => str.toUpperCase())}
              /*type={pokemon.data.types[0].type.name}*/
              weight={pokemon.data.weight}
              height={pokemon.data.height}
              stats={pokemon.data.stats
                .map((stat) => stat.base_stat)
                .slice(0, 6)}
              statsName={pokemon.data.stats
                .map((stat) => stat.stat.name)
                .slice(0, 6)}
              type={pokemon.data.types
                .map((type) => type.type.name)
                .slice(0, 1)}
              types={pokemon.data.types.map((type) => type.type.name).slice(1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeList;
