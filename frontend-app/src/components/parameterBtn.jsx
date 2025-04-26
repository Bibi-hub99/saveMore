
function ParameterBtn(props){

    const btnClass = `${props.btnClass}`//styling of button based on props

    //button which takes arguments to function it perform function assigned to it at time

    return (
        <button type={'button'} name={props.btnName} id={props.btnId} onClick={()=>props.handleClick(props.par1,props.par2,props.par3)} className={btnClass}>{props.innerText}</button>
    )

}

export default ParameterBtn