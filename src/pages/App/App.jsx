import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios"
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import IndexView from "../IndexViewPage/IndexView"
import AllPokemon from "../AllPokemonPage/AllPokemon"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [pokemon, setPokemon] = useState([])
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState("")

  const getPokemon = async () => {
    const toArr = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      toArr.push(res.data)
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArr)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/AllPokemon" element={<AllPokemon pokemonData={pokemonData} getPokemon={getPokemon} pokemon={pokemon} />}/>
            <Route path="/index" element={<IndexView  setPokemon={setPokemon} getPokemon={getPokemon} pokemonData={pokemonData} pokemonType={pokemonType} pokemon={pokemon} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
