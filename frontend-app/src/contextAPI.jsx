import {createContext,useContext} from "react"
import { FaBars } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImSpinner8 } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { AiOutlineBars } from "react-icons/ai";

const Context = createContext()

export const useMyContext = ()=>{
    return useContext(Context)
}

const sharedValues = {
    barsIcon:<FaBars className={'inline'}/>,
    heartIcon:<FaHeart className={'inline'}/>,
    cartIcon:<MdOutlineShoppingCartCheckout className={'inline'}/>,
    historyIcon:<LuHistory className={'inline'}/>,
    filterIcon:<AiOutlineBars className={'inline'}/>,
    searchIcon:<GoSearch className={'inline'}/>,
    accountIcon:<FaUserCircle className={"inline"}/>,
    backIcon:<FaArrowLeftLong className={'inline'}/>,
    menuIcon:<AiFillProduct className={"inline"}/>,
    spinnerIcon:<ImSpinner8 className={'inline'}/>,
    themeColor:"#1877F2",
    responsiveWidth:'w-[97%] mx-auto'
}

function ContextAPI({children}){

    return (
        <Context.Provider value={sharedValues}>
            {children}
        </Context.Provider>
    )
}

export default ContextAPI