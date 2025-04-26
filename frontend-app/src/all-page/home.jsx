import HomeNavbar from "../components/home-navbar"
import {useMyContext} from "../contextAPI"

function Home(){

    const {responsiveWidth} = useMyContext()

    const backgroundImg = 'bg-[url(https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww)]'

    return (
        <div>
            <HomeNavbar/>
            <div className={`h-[100vh] w-full ${backgroundImg} bg-no-repeat bg-cover bg-center flex flex-col justify-center`}>
                <div className={`text-white -mt-10 text-[2rem] ${responsiveWidth}`}>
                    <h2>Everything done in your cellphone and laptop in easy steps.</h2>
                    <p>Where ever you are,whenever the time,your item will be delivered with us Sign up or Log in <mark className={'px-2'} style={{backgroundColor:'#1877F2'}}><b>Now</b></mark></p>
                </div>
            </div>
        </div>
    )

}

export default Home