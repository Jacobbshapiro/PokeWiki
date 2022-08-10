import { useEffect } from "react"

export default function FetchRequest({ getPokemon, setPokemon }) {

    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => response.json())
        .then((pokemonData) => console.log(pokemonData));
    
    useEffect(() => {
        getPokemon().then((pokemonData) => {
            setPokemon(pokemonData);
        });
    }, []);
}