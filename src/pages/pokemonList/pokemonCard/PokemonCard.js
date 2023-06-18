import styles from "./PokemonCard.module.css"
import {NavLink} from "react-router-dom"

export default function PokemonCard({ pokemon, imgStyle }){
    return (
        
        <NavLink to={`pokedex/${pokemon.name.fr}`} id={styles.card} className="block bg-white drop-shadow-xl hover:drop-shadow-none transition duration-300 relative">
            <div className="flex">
                <h2 className="text-2xl font-bold flex-1">{pokemon.name.fr}</h2>
                <span className="italic font-bold">#{pokemon.pokedexId}</span>
            </div>
            <img alt={pokemon.name.fr} src={pokemon.sprites[imgStyle]} className="h-36 w-36 rounded-lg drop-shadow-lg m-auto"/>
            <div className="text-xl text-center my-4">{pokemon.category}</div>
            <div className="flex">
                {
                    pokemon.egg_groups && pokemon.egg_groups.map((g,index) => <div key={index} className="flex-auto text-center">{g}</div>)
                }
            </div>
            <hr className="my-2" />
            <div className="flex">
                <div className="flex-auto text-center">
                    <div className="font-bold">{pokemon.weight}</div>
                    <div className="text-xs italic">Poids</div>
                </div>
                <div className="flex-auto text-center">
                    <div className="font-bold">{pokemon.height}</div>
                    <div className="text-xs italic">Hauteur</div>
                </div>
            </div>
            <hr className="my-2"/>
        </NavLink>
    )
}