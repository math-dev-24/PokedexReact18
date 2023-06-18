import styles from "./PokemonCard.module.css"
import { NavLink } from "react-router-dom"

export default function PokemonCard({ pokemon, imgStyle }) {

    let bg_style = "bg-red-100"

    if (pokemon.types) {
        switch (pokemon.types[0].name) {
            case "Feu":
                bg_style = "bg-red-100"
                break
            case "Plante":
                bg_style = "bg-green-100"
                break
            case "Dragon":
                bg_style = "bg-slate-100"
                break
            case "Poison":
                bg_style = "bg-violet-100"
                break
            case "Insecte":
                bg_style = "bg-indigo-300"
                break
            case "Sol":
            case "Roche":
                bg_style = "bg-amber-200"
                break
            case "Eau": 
                bg_style = "bg-blue-200"
                break
            case "Normal":
                bg_style = "bg-slate-100"
                break
            case "Électrik":
                bg_style = "bg-yellow-200"
                break
            case "Psy":
                bg_style = "bg-pink-200"
                break
            default:
                bg_style = "bg-red-300"
        }
    }


    return (

        <NavLink to={`pokedex/${pokemon.name.fr}`} id={styles.card} className={`bg-white block drop-shadow-xl hover:drop-shadow-none transition duration-300 relative`}>
            <div className="flex">
                <h2 className="text-2xl font-bold flex-1">{pokemon.name.fr}</h2>
                <span className="italic font-bold">#{pokemon.pokedexId}</span>
            </div>
            <img alt={pokemon.name.fr} src={pokemon.sprites[imgStyle]} className={`h-36 w-36 rounded-lg drop-shadow-lg m-auto ${styles.image}`} />
            <div className={styles.content}>
                <div className="text-xl text-center my-4">{pokemon.category}</div>
                <div className="flex">
                    {
                        pokemon.egg_groups && pokemon.egg_groups.map((g, index) => <div key={index} className="flex-auto text-center">{g}</div>)
                    }
                </div>
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
            </div>

            <div className={`${styles.font} ${bg_style}`} ></div>
        </NavLink>
    )
}