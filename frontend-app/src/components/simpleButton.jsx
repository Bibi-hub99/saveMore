function SimpleBtn(props){

    const btnStyle = {
        backgroundColor:props.themeColor
    }

    return (
        <button type={props.btnType}
         name={props.btnName} 
         id={props.btnId} 
         className={`${props.btnStyle}`} 
         style={btnStyle}
         onClick={props.handleClick}
         >{props.innerText}</button>
    )

}

export default SimpleBtn