export default function SelectGen({setGen}){

    function handleChangeGen(e) {
        const value = e.target.value
        setGen(value)
    }

    return (
        <select onChange={handleChangeGen} className="p-2 rounded">
            <optgroup label="Choix de la génération">
                <option value="1">1er gen</option>
                <option value="2">2ième gen</option>
                <option value="3">3ième gen</option>
                <option value="4">4ième gen</option>
                <option value="5">5ième gen</option>
                <option value="6">6ième gen</option>
                <option value="7">7ième gen</option>
                <option value="8">8ième gen</option>
                <option value="9">9ième gen</option>
            </optgroup>
        </select>
    )
}