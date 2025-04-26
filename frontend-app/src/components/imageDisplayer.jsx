function ImageDisplayer(props){

    return <img src={props.imageURL} className={`${props.imageStyle}`} alt={props.imageALT}></img>

}

export default ImageDisplayer