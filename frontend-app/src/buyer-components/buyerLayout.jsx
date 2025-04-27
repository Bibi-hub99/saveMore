import TopNavbar from "../components/top-navbar"
import {useMyContext} from "../contextAPI"
import SimpleBtn from "../components/simpleButton"
import HeroText from "../components/hero-text"

function BuyerLayout(){

    const {barsIcon,searchIcon,filterIcon} = useMyContext()

    return (
        <div>
            <TopNavbar>
                <div>
                    <SimpleBtn
                    btnType={"button"}
                    innerText={barsIcon}
                    btnStyle={""}/>
                </div>
                <div>
                    <HeroText heroStyle={'ml-2 inline'}/>
                </div>
                <div className={'ml-auto mr-2'}>
                    <SimpleBtn
                    btnType={'button'}
                    innerText={searchIcon}
                    btnStyle={"mr-2"}/>
                    {/*<SimpleBtn
                    btnType={"button"}
                    innerText={filterIcon}/>*/}
                </div>
            </TopNavbar>
        </div>
    )

}

export default BuyerLayout