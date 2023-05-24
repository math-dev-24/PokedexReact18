export default function StatPokemon({stats}){
    return (
        <div className="text-center">
            <div>
                HP : {stats.hp}
            </div>
            <div>
                Atk : {stats.atk}
            </div>
            <div>
                Def : {stats.def}
            </div>
            <div>
                Atk spé : {stats.spe_atk}
            </div>
            <div>
                Def spé : {stats.spe_def}
            </div>
            <div>
                Vit : {stats.vit}
            </div>
        </div>
    )
}