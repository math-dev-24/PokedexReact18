export default function TypeDetail({ name, image }) {
    return (
        <div className="flex content-center items-center flex-1 m-auto bg-gray-100 p-3 rounded-2xl mx-5 my-2 drop-shadow">
            <img src={image} alt={name} className="h-8"/>
            <span className="block ml-3">{name}</span>
        </div>
    )
}