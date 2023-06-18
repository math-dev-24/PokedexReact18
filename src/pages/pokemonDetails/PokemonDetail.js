import { NavLink, useLoaderData } from "react-router-dom";
import TypeDetail from "./components/TypeDetail/TypeDetail";
import MegaEvolution from "./components/MegaEvolution/MegaEvolution";
import StatPokemon from "./components/StatPokemon/StatPokemon";
import { useEffect } from "react";

export default function PokemonDetail() {
    const pokemon = useLoaderData()

    useEffect(() => { document.title = `Pokedex | ${pokemon.name.fr}` }, [pokemon.name.fr])

    return (
        <div className={`p-10 container m-auto`}>
            <NavLink to={`../..`} className="block border w-full md:w-1/3 rounded-lg px-6 py-2 bg-slate-600 text-white hover:bg-slate-500 transition duration-500">Retour</NavLink>
            <main className="border rounded-2xl bg-white drop-shadow-lg m-auto mt-5 p-5">
                <img src={pokemon.sprites.regular} alt={pokemon.name.fr} className="h-52 w-52 m-auto" />
                <div className="flex mt-5">
                    {pokemon.types && pokemon.types.map(t => <TypeDetail key={t.name} name={t.name} image={t.image} />)}
                </div>
                <hr className="my-5" />
                <h1 className="text-2xl font-bold text-center">{pokemon.name.fr}</h1>
                <div className="flex my-5">
                    <div className="flex-1 text-center">
                        <div>{pokemon.weight}</div>
                        <div className="italic text-sm text-gray-400">Poids</div>
                    </div>
                    <div className="h-10 w-0.5 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 text-center">
                        <div>{pokemon.height}</div>
                        <div className="italic text-sm text-gray-400">Taille</div>
                    </div>
                    {
                        pokemon.sexe &&
                        <>
                            <div className="h-10 w-0.5 bg-gray-200 rounded-full"></div>
                            <div className="flex-1 text-center">
                                <div>{pokemon.sexe.male}% / {pokemon.sexe.female} % </div>
                                <div className="italic text-sm text-gray-400">M / F</div>
                            </div>
                        </>
                    }
                </div>
                <hr className="my-5" />
                <StatPokemon stats={pokemon.stats} />
                <hr className="my-5" />
                {
                    pokemon.evolution && pokemon.evolution.pre &&
                    <div>
                        <h2 className="text-xl mb-2">Pré-évolution :</h2>
                        {pokemon.evolution.pre
                            .map(p => <NavLink key={p.name} to={`../pokedex/${p.name}`} className='block hover:text-red-500 ml-2'>
                                {p.name}
                            </NavLink>)}
                        <hr className="my-5" />
                    </div>
                }
                {
                    pokemon.evolution && pokemon.evolution.next &&
                    <div>
                        <h2 className="text-xl mb-2">Evolution :</h2>
                        {pokemon.evolution.next
                            .map(e => <NavLink to={`../pokedex/${e.name}`} key={e.name} className="block hover:text-green-500 ml-2">
                                {e.name} | Condition : {e.condition}
                            </NavLink>)}
                        <hr className="my-5" />
                    </div>
                }
                {
                    pokemon.evolution && pokemon.evolution.mega &&
                    <div>
                        <h2 className="text-xl mb-2">Mega :</h2>
                        <div className="flex flex-wrap">
                            {pokemon.evolution.mega.map(mega => <MegaEvolution mega={mega} key={mega.orbe} />)}
                        </div>
                    </div>
                }
            </main>
        </div>

    )
}