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
            <input type="text" onChange={handleChangeFilter} className="p-2 lg:p-4 ring-1 ring-green-300 rounded drop-shadox-lg mx-auto w-2/3 block outline-none"/>
            <div className="flex my-8">
                <SelectGen setGen={setGen} />
                <div onClick={() => setImgStyle('shiny')} className={`text-center text-sm md:text-lg border bg-green-300 p-3 rounded-lg mx-2 hover:bg-green-200 cursor-pointer transition duration-300 ${imgStyle === "shiny" ? 'bg-green-600' : ''}`}>Mode Shiny</div>
                <div onClick={() => setImgStyle('regular')} className={`text-center text-sm md:text-lg border bg-green-300 p-3 rounded-lg hover:bg-green-200 cursor-pointer transition duration-300 ${imgStyle === "regular" ? 'bg-green-600' : ''}`}>Mode Regular</div>
            </div>
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4">
                {pokemon && pokemon.filter(p => filterPokemon(p)).map(p => <PokemonCard pokemon={p} key={p.pokedexId} imgStyle={imgStyle} />)}
            </div>
        </main>
    )
}