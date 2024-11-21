import './Card__img.css'

function ImageCard(props) {
    return (
        <img className='card__img' src={props.src}/>
    )
}

export default ImageCard