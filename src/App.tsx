import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PokemonsAll from './components/PokemonsAll';

type Pokemon = {
  name: string,
  url: string
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [pokeSave, setPokeSave] = useState<Pokemon[]>([])

  const pokemonFilter = (value:string)=>{
    let data:Pokemon[] = []
    pokeSave.forEach((pk)=>{
      if(value !== ''){
        if(pk.name.toLowerCase().includes(value.toLowerCase())){
          data.push(pk)
        }
      }
      setPokemons(data)
    })  
  }

  useEffect(()=>{
    if(searchValue !== ''){
      pokemonFilter(searchValue)
    }else{
      setPokemons(pokeSave)
    }
  }, [searchValue])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=300').then(response=>{
      setPokemons(response.data.results)
      setPokeSave(response.data.results)
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App w-screen h-screen">
      <Header searchValue={searchValue} setSearchVisible={setSearchVisible} searchVisible={searchVisible}/>
      {searchVisible && <Search setPokemons={setPokemons} searchValue={searchValue} setSearchValue={setSearchValue}/>}
      <Routes>
        <Route path='/' element={<PokemonsAll searchVisible={searchVisible} pokemons={pokemons} />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
