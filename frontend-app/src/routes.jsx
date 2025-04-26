import {createBrowserRouter} from "react-router-dom"
import Home from "./all-page/home"
import SignUp from "./all-page/sign-up"
import LogIn from "./all-page/log-in"

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
    }
])

export default routes