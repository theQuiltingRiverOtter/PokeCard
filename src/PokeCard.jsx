import "./styles/pokecard.css"

export default function PokeCard(props){
    
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.number}.png`

    return (
        <div className='container'>
            <h2 className='title'>Pokemon #{props.number}</h2>
            <img src={url} className="image" />
        </div>
    )

}