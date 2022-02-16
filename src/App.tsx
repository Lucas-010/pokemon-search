import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
type Pokemon = {
  name: string
}

function App() {
  const {pokemons, isFetching} = useFetch<Pokemon[]>('/api/v2/pokemon?limit=100')

  return (
    <div className="App" style={{"fontFamily": "Arial"}}>
      {isFetching && <p>Carregando...</p>}
      {pokemons?.map((pk, index)=>{
        return(
          <h1 className='' key={index}>{pk.name}</h1>
        )
      })}
    </div>
  );
}

export default App;
