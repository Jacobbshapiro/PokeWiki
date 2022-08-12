import { Link } from 'react-router-dom';
import { useState, useEffect} from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import PokemonDetailPage from "../PokemonDetailPage/PokemonDetail"

export default function AllPokemon ( {setPokemon, getPokemon, pokemonData, pokemonType, pokemon} ) {
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
                <Link to={`/PokemonDetail/${pokemon.id}`}>
                    <div className="container">
                        {allPokemonData.map((pokemon, idx) => {
                            return <PokemonCard pokemon={pokemon} key={idx} />;
                        })}
                    </div>
                </Link>  
            <footer className="footer">PokeWiki by Jacob Shapiro</footer>
        </>
    )
}