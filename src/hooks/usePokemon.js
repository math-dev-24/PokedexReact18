import { useEffect, useState } from "react"
import { getPokemonByGen } from "../apis/pokemon"


export function usePokemon(gen){
    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState([])

    useEffect(()=> {
        async function fetchPokemon(){
            try{
                setIsLoading(true)
                if(gen){
                    const fetchedPokemon = await getPokemonByGen(gen)
                    setPokemon(x => [...fetchedPokemon])
                }else{
                    setPokemon(['test'])
                }
            }catch(e){
                setError(e)
            }finally{
                setIsLoading(false)
            }
        }
        fetchPokemon()
    }, [gen])

    return [pokemon, isLoading, error]

}