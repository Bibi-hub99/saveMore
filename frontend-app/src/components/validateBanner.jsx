import ReactDOM from "react-dom"
import SimpleBtn from "./simpleButton"

function ValidateBanner(props){

    return (
        ReactDOM.createPortal(
        <>
            {props.isError === true && <div className={'fixed top-0 h-full w-full'} style={{backgroundColor:"rgba(0,0,0,0.8)",zIndex:'5'}}>
                <div className={'bg-white relative top-[20%] rounded-md py-5 w-[90%] md:w-[50%] m-auto px-2 box-border'}>
                    <p>
                        {props.errorMessage}
                    </p>
                    <SimpleBtn 
                    btnType={'button'} 
                    innerText={'close'}
                    btnName={'close-error'} 
                    btnId={props.btnId} 
                    btnStyle={'bg-red-500 mt-5 px-5 py-2 rounded-lg cursor-pointer'}
                    handleClick={props.handleClick}/>
                </div>
            </div>}
        </>,document.getElementById("error-banner"))
    )

}

export default ValidateBanner