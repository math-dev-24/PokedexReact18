import { useEffect, useState } from "react"
import { usePokemon } from "../../hooks/usePokemon"
import PokemonCard from "./pokemonCard/PokemonCard"
import SelectGen from "./selectGen/SelectGen"

export default function PokemonList(){
    const [gen, setGen] = useState(1)
    const [imgStyle, setImgStyle] = useState('shiny')
    const [filter, setFilter] = useState('')
    const [pokemon] = usePokemon(gen)


    function handleChangeFilter(e){
        const filterN = e.target.value.trim().toLowerCase()
        setFilter(filterN)
    }

    function filterPokemon(pokemon){
        return pokemon.name.fr.toLowerCase().startsWith(filter)
    }

    useEffect(() => { document.title = "Pokedex"}, [])

    return (
        <main className="container m-auto">
            <h1 className="text-center pt-10 mb-14 text-2xl font-bold">Liste des pokemon</h1>
            <input type="text" onChange={handleChangeFilter} className="p-3 rounded-2xl outline-0 drop-shadow container mx-5"/>
            <div className="flex my-8">
                <SelectGen setGen={setGen} />
                <div onClick={() => setImgStyle('shiny')} className={`border bg-green-300 p-3 rounded-full mx-2 hover:bg-green-200 cursor-pointer transition duration-300 ${imgStyle === "shiny" ? 'bg-green-600' : ''}`}>Mode Shiny</div>
                <div onClick={() => setImgStyle('regular')} className={`border bg-green-300 p-3 rounded-full mx-2 hover:bg-green-200 cursor-pointer transition duration-300 ${imgStyle === "regular" ? 'bg-green-600' : ''}`}>Mode Regular</div>
            </div>
            <div className="flex flex-wrap">
                {pokemon && pokemon.filter(p => filterPokemon(p)).map(p => <PokemonCard pokemon={p} key={p.pokedexId} imgStyle={imgStyle} />)}
            </div>
        </main>
    )
}