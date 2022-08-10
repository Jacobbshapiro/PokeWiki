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
        <div className="index">
            <form className="input" onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleChange} placeholder="Search Pokemon"></input>
                </label>
            </form>
            {pokemonData.map((data) => {
                return (
                    <div className="container">
                        <img src={data.sprites['front_default']} />
                        <div className="table">
                        <hr />
                            <div className="body">
                                <div className="row">
                                    <div className="cell">Name</div>
                                    <div className="cell">{pokemon}</div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="cell">Type</div>
                                    <div className="cell">{pokemonType}</div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="cell">Height</div>
                                    <div className="cell">{data.height} hexameters</div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="cell">Weight</div>
                                    <div className="cell">{data.weight} decameters</div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="cell">Attack</div>
                                    <div className="cell">{data.stats[1].base_stat}</div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="cell">Defnese</div>
                                    <div className="cell">{data.stats[2].base_stat}</div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="cell">Health Points</div>
                                    <div className="cell">{data.stats[0].base_stat}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        <footer className="footer">PokeWiki by Jacob Shapiro</footer>
        </div>
    )
}