import {createBrowserRouter} from "react-router-dom"
import Home from "./all-page/home"
import SignUp from "./all-page/sign-up"
import LogIn from "./all-page/log-in"
import BuyerLayout from "./buyer-components/buyerLayout"
import SellerLayout from "./seller-components/sellerLayout"

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
    },
    {
     path:'seller/:id',
     element:<SellerLayout/>   
    }
]) 

export default routes