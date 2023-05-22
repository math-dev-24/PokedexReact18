import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PokemonList from "./pages/pokemonList/PokemonList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index: true,
                element: <PokemonList />
            }
        ]
    }
])