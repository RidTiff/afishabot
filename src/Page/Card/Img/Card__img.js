import './Card__img.css'

function ImageCard(props) {
    return (
        <img className={`card__img ${props.className}`} src={props.src}/>
    )
}

export default ImageCard