import NavBar from "./NavBar"
import {Outlet} from "react-router"

const AppLayout =()=>{
    return(<>      
    <NavBar />
    <Outlet/>
    </>

    )
   
}
export default AppLayout