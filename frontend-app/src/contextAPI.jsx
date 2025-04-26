import {createContext,useContext} from "react"
import { FaBars } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";


const Context = createContext()

export const useMyContext = ()=>{
    return useContext(Context)
}

const sharedValues = {
    barsIcon:<FaBars className={'block'}/>,
    searchIcon:<GoSearch/>,
    backIcon:<FaArrowLeftLong className={'inline'}/>,
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