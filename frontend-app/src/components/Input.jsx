function Input(props){

    const inputStyle = {

    }

    return <input 
    type={props.inputType} 
    name={props.inputName}
    id={props.inputId}
    placeholder={props.inputPlaceholder} 
    value={props.inputValue} 
    className={`${props.inputStyle}`}
    onChange={props.inputChange}
    style={inputStyle}></input>

}

export default Input