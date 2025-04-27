import {createBrowserRouter} from "react-router-dom"
import Home from "./all-page/home"
import SignUp from "./all-page/sign-up"
import LogIn from "./all-page/log-in"
import BuyerMenu from "./buyer-components/menu"
import BuyerLayout from "./buyer-components/buyerLayout"

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'sign-up',
        element:<SignUp/>
    },
    {
        path:'log-in',
        element:<LogIn/>
    },
    {
        path:'buyer/:id',
        element:<BuyerLayout/>
    }
]) 

export default routes