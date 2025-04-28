import {useMyContext} from "../contextAPI"
import SimpleBtn from "./simpleButton"
import ParameterBtn from "./parameterBtn"

function SlideMenu(props){

    const {closeIcon} = useMyContext()

    return (
        <div className={"fixed top-0 h-[100%] overflow-x-hidden left-0 duration-200 md:hidden"} style={{backgroundColor:"rgba(0,0,0,0.8)",width:props.slideContWidth,zIndex:"35"}}>
            <div className={"relative h-full pt-12 box-border duration-200"} style={{backgroundColor:'white',width:props.slideWidth}}>
                <ParameterBtn innerText={closeIcon} par1={"0"} par2={"0"} handleClick={props.closeSlideMenu} btnClass={"absolute right-2 top-2 text-[1.5rem] py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer "}/>
                {
                    props.children
                }
            </div>
        </div>
    )

}

export default SlideMenu