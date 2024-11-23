import './Card__button.css'

function InfoButton(props) {
    return (
        <button className={`card__button ${props.className}`} type="button" onClick={props.onClick}>Подробнее</button>
    )
}

export default InfoButton