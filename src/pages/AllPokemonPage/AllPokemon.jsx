import { useEffect, useState } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"

export default function AllPokemon ({ pokemonData, getPokemon, pokemon, setPokemon }) {

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then((pokemonData) => console.log(pokemonData));

    useEffect(() => {
        getPokemon().then((pokemonData) => {
          setPokemon(pokemonData);
        });
    }, []);

    return(
        <>
            <h1>All Pokemon</h1>
            {pokemonData.map((name, idx) => {
                <PokemonCard pokemon={name} key={idx} />;
            })}
            <footer className="footer">PokeWiki by Jacob Shapiro</footer>
        </>
    )
}