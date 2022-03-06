import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    name: string,
    url: string,
}

export default function PokemonCard(props:Props) {
	const [imagePokemon, setImagePokemon] = useState('')
	useEffect(()=>{
		axios.get(props.url).then(response=>{
			setImagePokemon(response.data.sprites.front_default)
		})
	}, [props.url])
  return (
      <div className="PokemonCard m-8 w-36 border-4 p-6 bg-zinc-900 text-white border-zinc-800 rounded-lg flex flex-col items-center">
        <div className="ImagePokemon">
          <img src={imagePokemon} alt="" className=''/>
        </div>
        <div className="NamePokemon uppercase font-bold">
          <h1>{props.name}</h1>
        </div>
      </div>
  )
}
