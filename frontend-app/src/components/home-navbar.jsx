import TopNavbar from "./top-navbar"
import HeroText from "./hero-text"
import HomeNavbarLinks from "./home-navbarLinks"

function HomeNavbar(){

    return(
        <TopNavbar topNavStyle={'bg-white'}>
            <div>
                <HeroText/>
            </div>
            <div className={'ml-auto'}>
                <HomeNavbarLinks/>
            </div>
        </TopNavbar>
    )

}

export default HomeNavbar