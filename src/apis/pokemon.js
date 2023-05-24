const BASE_URL = 'https://api-pokemon-fr.vercel.app/api/v1'

export async function getPokemonByGen(gen){
    try{
        const response = await fetch(`${BASE_URL}/gen/${gen}`,{method:'GET'})
        if(response.ok){
            return await response.json()
        }else{
            throw new Error('Error')
        }
    }catch(e){
        throw new Error(e)
    }
}

export async function getPokemonByName(name){
    try{
        const response = await fetch(`${BASE_URL}/pokemon/${name}`, {method:'GET'})
        if(response.ok){
            return await response.json()
        }else{
            throw new Error('Error')
        }
    }catch(e){
        throw new Error(e)
    }

}