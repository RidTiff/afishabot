import './Card.css'
import ImageCard from './Img/Card__img.js'
import Date from './Date/Card__date.js'
import EventName from './Name/Card__name.js'
import Place from './Place/Card__place.js'
import InfoButton from './Button/Card__button.js'

function Card(props) {
    return (
    <section className={`card ${props.className}`} id={props.id}>
        <ImageCard className={`${props.className}`} src={props.img}></ImageCard>
        <EventName className={`${props.className}`}>{props.name}</EventName>
        <Place className={`${props.className}`}>{props.place}</Place>
        <Date className={`${props.className}`}>{props.date}</Date>
        <InfoButton className={`${props.className}`} src={props.src} onClick={props.onClick}></InfoButton>
    </section>)
}

export default Card;