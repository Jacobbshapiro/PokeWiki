export default function AllPokemon ({ pokemonData, getPokemon, pokemon }) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => console.log(data))

    return(
        <>
            <h1>All Pokemon</h1>
            {pokemonData.map((data, idx) => {
                <li>{data}</li>
            })}

        </>
    )
}