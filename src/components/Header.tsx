import React from 'react'
import Pokeball from '../logo.png'
import * as S from './Header.styles'
import { FireIcon, HouseIcon, SearchIcon } from './HeroIcons'
import {Link} from "react-router-dom";
type Props = {
    setSearchVisible: Function,
    searchVisible: boolean,
    searchValue: string
}

export default function Header(props:Props) {
  return (
        <div className="Header w-full fixed z-30 h-20 flex items-center p-4 justify-between bg-zinc-800">
        <div className="LogoPokeball">
            <img src={Pokeball} alt="" className=' w-20'/>
        </div>
        <ul className='list-none flex text-white uppercase md:text-2xl'>
            <Link to={'/'}>
            <S.Li onClick={()=> {props.setSearchVisible(false)}}>
                <HouseIcon/> Home
            </S.Li>
            </Link>

            <S.Li className='cursor-pointer' onClick={()=>{
                props.setSearchVisible(!props.searchVisible)
            }}>
                <SearchIcon/> Pokedex
            </S.Li>
        </ul>
    </div>
  )
}
