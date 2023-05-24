export default function MegaEvolution({mega}){
    return (
        <div className="border flex-1 m-5 p-4 rounded bg-gray-50 flex flex-col content-center items-center">
            <img src={mega.sprites.regular} alt={mega.orbe} className="h-40"/>
            <h3>{mega.orbe}</h3>
        
        </div>
    )
}