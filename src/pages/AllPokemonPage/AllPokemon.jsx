import { useState, useEffect } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"

export default function AllPokemon () {
    const [allPokemonData, setAllPokemonData] = useState([])

    fetch('https://pokeapi.co/api/v2/pokemon/')
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
            {console.log(pokemonData, "this is the log")}
            
            {pokemonData.map((pokemon, idx) => {
                <PokemonCard pokemon={pokemon} key={idx} />;
            })}
            <footer className="footer">PokeWiki by Jacob Shapiro</footer>
        </>
    )
}