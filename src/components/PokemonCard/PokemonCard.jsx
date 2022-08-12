export default function PokemonCard( {pokemon} ) {
    return ( 
        <div className="pokemon-card">
            <br />
            {pokemon.name.toUpperCase()}
            <br />
        </div>
    )
}