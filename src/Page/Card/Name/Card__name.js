import './Card__name.css'

function EventName(props) {
    return (
        <p className='card__name'>{props.children}</p>
    )
}

export default EventName