export default function StatPokemon({ stats }) {

    const coefficients_bar = 1.2

    return (
        <div>
            <div className="flex flex-col content-start items-start my-2">
                <span className="font-bold ml-2">HP :</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${stats.hp / coefficients_bar}%` }}></div>
                </div>
            </div>
            <div className="flex flex-col content-start items-start my-2">
                <span className="font-bold ml-2">Atk :</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: `${stats.atk / coefficients_bar}%` }}></div>
                </div>
            </div>
            <div className="my-2 flex flex-col content-start items-start">
                <span className="font-bold ml-2">Def :</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: `${stats.def / coefficients_bar}%` }}></div>
                </div>
            </div>
            <div className="my-2 flex flex-col content-start items-start">
                <span className="font-bold ml-2">Atk spé :</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-orange-700 h-2.5 rounded-full" style={{ width: `${stats.spe_atk / coefficients_bar}%` }}></div>
                </div>
            </div>           
            <div className="my-2 flex flex-col content-start items-start">
                <span className="font-bold ml-2">Def spé :</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-slate-800 h-2.5 rounded-full" style={{ width: `${stats.spe_def / coefficients_bar}%` }}></div>
                </div>
            </div>            
            <div className="my-2 flex flex-col content-start items-start">
                <span className="font-bold ml-2">Vitesse :</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: `${stats.vit / coefficients_bar}%` }}></div>
                </div>
            </div>
        </div>
    )
}