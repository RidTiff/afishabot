import './Card.css'
import ImageCard from './Img/Card__img.js'
import Date from './Date/Card__date.js'
import EventName from './Name/Card__name.js'
import Place from './Place/Card__place.js'
import InfoButton from './Button/Card__button.js'

function Card(props) {
    return (
    <section className='card' id={props.id}>
        <ImageCard src={props.img}></ImageCard>
        <EventName>{props.name}</EventName>
        <Place>{props.place}</Place>
        <Date>{props.date}</Date>
        <InfoButton src={props.src} onClick={props.onClick}></InfoButton>
    </section>)
}

export default Card;