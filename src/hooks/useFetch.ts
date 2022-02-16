import { useState, useEffect} from 'react'
import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co'
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig){
    const [pokemons, setPokemons] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(()=>{
        api.get(url, options).then(response=>{
          setPokemons(response.data.results)
          console.log(response.data.results)
        }).finally(()=>{
            setIsFetching(false)
        })
      }, [])

      return { pokemons, isFetching }
}