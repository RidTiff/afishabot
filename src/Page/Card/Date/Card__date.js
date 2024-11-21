import './Card__date.css'

function Date(props) {
    return (
        <p className='card__date'>{props.children}</p>
    )
}

export default Date