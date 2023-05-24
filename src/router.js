import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PokemonList from "./pages/pokemonList/PokemonList";
import { lazy } from "react";
import { getPokemonByName } from "./apis/pokemon";
import ErrorLoading from "./pages/errorPage/ErrorLoading";

const PokemonDetail = lazy(() => import('./pages/pokemonDetails/PokemonDetail'))


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorLoading />,
        children:[
            {
                index: true,
                element: <PokemonList />
            },
            {
                path: "pokedex/:pokemonName",
                element: <PokemonDetail />,
                loader: async ({ params: { pokemonName }}) => getPokemonByName(pokemonName)
            }
        ]
    }
])