import PokemonCard from './PokemonCard'

type Pokemons = {
    name: string,
    url: string,
}

type Props = {
    pokemons: Pokemons[],
    searchVisible: boolean
}

export default function PokemonsAll(props:Props){
  return (
    <div className={`PokemonsDiv absolute z-10 ${!props.searchVisible ? 'mt-16 ' : 'mt-40'} flex max-w-full flex-wrap justify-center`}>
        {props.pokemons.map((pk, index)=>{
          return(
              <PokemonCard key={index} name={pk.name} url={pk.url}/>
          )
        })}
    </div>
  )
}
