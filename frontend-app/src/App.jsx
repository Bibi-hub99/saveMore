import ContextAPI from "./contextAPI"
import {RouterProvider} from "react-router-dom"
import routes from "./routes"

function App(){

  return (
    <ContextAPI>
      <RouterProvider router={routes}></RouterProvider>
    </ContextAPI>

  )

}

export default App