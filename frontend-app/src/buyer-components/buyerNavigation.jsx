import TopNavbar from "../components/top-navbar"
import {useMyContext} from "../contextAPI"
import SimpleBtn from "../components/simpleButton"
import HeroText from "../components/hero-text"
import Form from "../components/form"
import Input from "../components/Input"
import NavLinker from "../components/navLink"
import {NavLink} from "react-router-dom"
import ParameterBtn from "../components/parameterBtn"

function BuyerNavigation(props){

    const {barsIcon,searchIcon,buyerLinks,accountIcon,buyerMenuIcon} = useMyContext()

    const buyerLinksMaps = buyerLinks.map((each)=>{
        return <li key={`buyerLinks${each.id}`} className={'ml-10 text-[1.5rem]'}><NavLinker url={each.url} icon={each.icon}/></li>
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
                <div className={'md:w-[20%]'}>
                    <HeroText heroStyle={'ml-1 inline md:ml-0'}/>
                </div>
                <div className={'md:w-[35%] lg:w-[30%] hidden md:block'}>
                    <Form formName={'search-form'} formStyle={'inline ml-3'}>
                        <Input inputType={"text"} inputStyle={'w-[70%] border-2 py-[.2rem] rounded-md'}/>
                        <SimpleBtn btnType={"submit"} innerText={searchIcon} btnStyle={"ml-2 bg-black text-white px-4 py-1 rounded-md"}/>
                    </Form>
                </div>
                <div className={'md:w-[45%] lg:w-[50%] hidden md:block'}>
                    {
                        <ul className={'flex '}>
                            <li className={'text-[1.5rem]'}><NavLink to={"menu"}>{buyerMenuIcon}</NavLink></li>
                            {buyerLinksMaps}
                            <li className={'ml-auto text-[1.5rem]'}><NavLinker url={'account'} icon={accountIcon}></NavLinker></li>

                        </ul>
                    }
                </div>
                <div className={'ml-auto mr-2 md:hidden'}>
                    <SimpleBtn
                    btnType={'button'}
                    innerText={searchIcon}
                    handleClick={props.openSearchModal}
                    btnStyle={"mr-2 cursor-pointer py-1 px-3 rounded-xl hover:bg-gray-300"}/>
                </div>
            </TopNavbar>
        </div>
    )

}

export default BuyerNavigation