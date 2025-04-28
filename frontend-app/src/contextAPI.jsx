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
import { IoMdClose } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { MdAddBusiness } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";


const Context = createContext()

export const useMyContext = ()=>{
    return useContext(Context)
}

const buyerLinks = [

    {
        id:2,
        icon:<LuHistory className={'inline'}/>,
        title:"History",
        url:'shopping-history'
    },
    {
        id:3,
        icon:<FaHeart className={'inline'}/>,
        title:"favorites",
        url:"favorites"
    },
    {
        id:4,
        icon:<MdOutlineShoppingCartCheckout className={'inline'}/>,
        title:"cart",
        url:"cart"
    }
]

const sellerLinks = [
    {
        id:1,
        title:"Add Items",
        url:'add-items',
        icon:<MdAddBusiness className={'inline'}/>
    },
    {
        id:2,
        title:"See Orders",
        url:"see-orders",
        icon:<FaBasketShopping className={'inline'}/>,
    },
    {
        id:3,
        title:'Account',
        url:"account",
        icon:<FaUserCircle className={'inline'}/>
    }
]

const sharedValues = {
    barsIcon:<FaBars className={'inline'}/>,
    heartIcon:<FaHeart className={'inline'}/>,
    closeIcon:<IoMdClose/>,
    cartIcon:<MdOutlineShoppingCartCheckout className={'inline'}/>,
    historyIcon:<LuHistory className={'inline'}/>,
    buyerMenuIcon:<FaShop className={'inline'}/>,
    searchIcon:<GoSearch className={'inline'}/>,
    accountIcon:<FaUserCircle className={"inline"}/>,
    backIcon:<FaArrowLeftLong className={'inline'}/>,
    sellerHomeIcon:<AiFillProduct className={"inline"}/>,
    spinnerIcon:<ImSpinner8 className={'inline'}/>,
    themeColor:"#1877F2",
    responsiveWidth:'w-[97%] mx-auto',
    buyerLinks:buyerLinks,
    sellerLinks:sellerLinks
}

function ContextAPI({children}){

    return (
        <Context.Provider value={sharedValues}>
            {children}
        </Context.Provider>
    )
}

export default ContextAPI