import { useState, useEffect } from "react";

export default function PokemonDetail({ pokemon }) {
    const [pokemonDetail, setPokemonDetail] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?${pokemon.id}}`)
        .then((response) => response.json())
        .then((pokemonDetail) => 
            {
                console.log(pokemonDetail.results)
                setPokemonDetail(pokemonDetail.results)
            });
    }, [])
    
    return (
        <h1>PokemonDetail</h1>
    )
}