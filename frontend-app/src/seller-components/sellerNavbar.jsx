import TopNavbar from "../components/top-navbar"
import ParameterBtn from "../components/parameterBtn"
import HeroText from "../components/hero-text"
import SimpleBtn from "../components/simpleButton"
import {useMyContext} from "../contextAPI"
import Form from "../components/form"
import Input from "../components/Input"
import {NavLink} from "react-router-dom"
import NavLinker from "../components/navLink"


function SellerNavbar(props){

    const {barsIcon,searchIcon,sellerHomeIcon,sellerLinks} = useMyContext()

    const sellerLinksMap = sellerLinks.map((each)=>{
        return (
            <li key={`sellerLinks${each.id}`} className={'ml-14 text-[1.5rem]'}><NavLinker url={each.url} icon={each.icon}/></li>
        )
    })

    return (
        <div>
            <TopNavbar zIndex={'25'}>
                <div className={'md:hidden'}>
                    <ParameterBtn
                    innerText={barsIcon}
                    btnClass={"cursor-pointer"}
                    par1={props.par1}
                    par2={props.par2}
                    handleClick={props.openSlideMenu}/>
                </div>
                <div className={'md:w[20%]'}>
                    <HeroText heroStyle={"ml-1 inline"}/>
                </div>
                <div className={'hidden md:block w-[35%] lg:w-[30%]'}>
                    <Form formName={'search-form'} formStyle={"inline ml-3"}>
                        <Input
                        inputName={'searchInput'}
                        inputType={'text'}
                        inputStyle={'w-[70%] border-2 py-[.2rem] rounded-md'}/>

                        <SimpleBtn
                        btnType={'submit'}
                        innerText={searchIcon}
                        btnStyle={'ml-2 bg-black text-white px-4 py-1 rounded-md'}/>

                    </Form>
                </div>
                <div className={'hidden md:block w-[45%] lg:w-[50%]'}>
                    <ul className={'flex'}>
                        <li className={'ml-14 text-[1.5rem]'}><NavLink>{sellerHomeIcon}</NavLink></li>
                        {sellerLinksMap}
                    </ul>
                </div>
                <div className={"ml-auto md:hidden"}>
                    <SimpleBtn 
                    btnType={'button'}
                    innerText={searchIcon}
                    handleClick={props.openSearchModal}
                    btnStyle={'mr-2 cursor-pointer py-1 px-3 rounded-xl hover:bg-gray-300'}/>
                </div>
            </TopNavbar>
        </div>
    )

}

export default SellerNavbar