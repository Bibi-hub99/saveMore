import Form from './form'
import Input from "./Input"
import SimpleBtn from "./simpleButton"
import {useMyContext} from "../contextAPI"
import ReactDOM from "react-dom"

function SearchModal(props){

    const {responsiveWidth,searchIcon,closeIcon} = useMyContext()

    return (
        ReactDOM.createPortal(
        <>
            {props.isOpen && <div className={'h-[100vh] w-full fixed top-0 pt-10 md:hidden'} style={{backgroundColor:"rgba(1,0,0,0.5)",zIndex:'30'}}>
                <div className={`bg-white ${responsiveWidth} relative py-2 px-2 box-border rounded-md`}>
                    <SimpleBtn btnType={"button"} innerText={closeIcon} btnStyle={"text-[1.5rem] hover:bg-gray-300 py-1 px-2 rounded-lg cursor-pointer"} handleClick={props.closeSearchModal}/>
                    <Form formName={'search-form'}>
                        <div>
                            <Input inputName={'search-form'} inputType={"text"} inputStyle={"border-2 w-[78%] py-2 px-2 box-border rounded-md"}/>
                            <SimpleBtn btnType={"submit"} innerText={searchIcon} btnStyle={"w-[20%] ml-[2%] rounded-md text-white py-[.7rem] bg-black"}/>
                        </div>
                    </Form>
                </div>
            </div>}
        </>,document.getElementById("search-modal"))
    )

}

export default SearchModal