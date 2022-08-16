import { Link } from 'react-router-dom';
import { useState, useEffect} from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"

export default function AllPokemon () {
    const [allPokemonData, setAllPokemonData] = useState([])

    useEffect(function(){
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=1100&offset=0')
        .then((response) => response.json())
        .then((pokemonData) => 
            {
                console.log(pokemonData.results)
                setAllPokemonData(pokemonData.results)
            });
    }, [])

    return(
        <>
            <h1>All Pokemon</h1>
            <div className="container">
                {allPokemonData.map((pokemon, idx) => {
                    return <PokemonCard pokemon={pokemon} key={idx} />;
                })}
            </div>
        </>
    )
}