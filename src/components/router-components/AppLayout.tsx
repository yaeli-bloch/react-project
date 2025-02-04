import { Typography } from "@mui/material"
import NavBar from "./NavBar"
import {Outlet, useLocation} from "react-router"

const AppLayout =()=>{
    const location = useLocation();
    const showText = location.pathname !== "/recipes";
    return(<> 
   <NavBar />
   <Outlet/> 
    {showText && ( 
    <Typography
    variant="h3"
    align="center"
    sx={{
      fontWeight: 'bold',
      color: '#40E0D0',
      fontFamily: 'Pacifico, cursive', 
      letterSpacing: '2px',
      textTransform: 'uppercase',
      lineHeight: 1.5,
      padding: 3,
      width: '100%',
      margin: '0 auto',
      marginTop: '50px', 
      transition: 'opacity 0.5s ease-out', 
    }}
  >
    The Best Recipes, Everything You Need for Your Kitchen!
  </Typography> )}
    </>

    )
    
}
export default AppLayout