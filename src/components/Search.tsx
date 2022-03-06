import React from 'react'

type Props = {
  setSearchValue: Function,
  searchValue: string,
  setPokemons: Function
}

export default function Search(props:Props) {
  return (
    <div className="Search fixed z-40 flex items-center w-full h-24 mt-20 bg-zinc-900">
        <input value={props.searchValue} onChange={e=> props.setSearchValue(e.target.value)} type="text" placeholder='Digite o nome de um pokémon' className='w-full p-2 h-full bg-transparent text-white text-2xl outline-none border-none'/>
    </div>
  )
}
