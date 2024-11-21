import './Card__place.css'

function Place(props) {
    return (
        <p className='card__place'>{props.children}</p>
    )
}

export default Place