import SellerNavbar from "./sellerNavbar"
import SearchModal from "../components/searchModal"
import SlideMenu from "../components/slideMenu"
import {useState} from "react"
import {useMyContext} from "../contextAPI"
import {NavLink} from "react-router-dom"
import NavLinker  from "../components/navLink"

function SellerLayout(){

    const {sellerHomeIcon,sellerLinks} = useMyContext()

    const [isOpen,setIsOpen] = useState(false)
    const [slideContWidth,setSlideContWidth] = useState('0%')
    const [slideWidth,setSlideWidth] = useState("0%")

    const openSearchModal = ()=>{
        setIsOpen(true)
    }

    const closeSearchModal = ()=>{
        setIsOpen(false)
    }

    const toggleSlideMenu = (width1,width2)=>{
        setSlideContWidth(`${width1}%`)
        setSlideWidth(`${width2}%`)
    }

    const all = 'block w-[98%] m-auto py-3 px-2 box-border rounded-md mb-2'
    const active = 'bg-black text-white '+all
    const inActive = 'hover:bg-gray-300 '+all

    const sellerLinksMap = sellerLinks.map((each)=>{
        return <NavLinker key={`slideSellerLink${each.id}`} url={each.url} title={each.title} icon={each.icon} activeLink={active} inActiveLink={inActive}/>
    })

    return (
        <div>
            <SellerNavbar openSearchModal={openSearchModal} par1={'100'} par2={'50'} openSlideMenu={toggleSlideMenu}/>
            <div>

            </div>
            <SearchModal isOpen={isOpen} closeSearchModal={closeSearchModal}/>
            <SlideMenu par1={"0"} par2={"0"} slideContWidth={slideContWidth} slideWidth={slideWidth} closeSlideMenu={toggleSlideMenu}>
                <NavLink to={''} className={({isActive}) => isActive ? active:inActive}>Home {sellerHomeIcon}</NavLink>
                {sellerLinksMap}
            </SlideMenu>
        </div>
    )

}

export default SellerLayout