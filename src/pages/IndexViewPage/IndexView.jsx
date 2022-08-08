import "./IndexView.css"

export default function IndexView({ setPokemon, getPokemon, pokemonData, pokemonType, pokemon }) {

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getPokemon()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleChange} placeholder="Search Pokemon"></input>
                </label>
            </form>
            {pokemonData.map((data) => {
                return (
                    <div className="container">
                        <img src={data.sprites['front_default']} />
                        <div className="table">
                            <div className="body">
                                <div className="row">
                                    <div className="cell">Name</div>
                                    <div className="cell">{pokemon}</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Type</div>
                                    <div className="cell">{pokemonType}</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Height</div>
                                    <div className="cell">{data.height} hexameters</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Weight</div>
                                    <div className="cell">{data.weight} decameters</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Attack</div>
                                    <div className="cell">{}</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Health Points</div>
                                    <div className="cell">{}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}