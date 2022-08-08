import { useEffect, useState } from "react"
 
export default function AllPokemon ({ getPokemon, pokemonData }) {

    // const getPokemons = () => {
    //     return fetch(URL).then((response) => response.json())
    // }
    
    // useEffect(() => {
    //     getPokemons().then((data) => {
    //         console.log(data)
    //     })
    // }, [])

    
    return(
        <>
            <h1>All Pokemon</h1>
            {pokemonData.map((pokemon) => {
                <li className="pokemonName">{pokemon}</li>
            })}
        </>
    )
}