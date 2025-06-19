
import { Box,Typography } from "@mui/material"

import NavBar from "./NavBar"
import {Outlet, useLocation} from "react-router"

const AppLayout =()=>{
    const location = useLocation();
    const showText = location.pathname !== "/recipes";
    return(<> 


   <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(-45deg, #ffffff, #f7f9fc, #eaf6f6, #ffffff)",
        backgroundSize: "300% 300%",
        animation: "fadeBg 20s ease infinite",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Outlet />

      {showText && (
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 600,
              color: "turquoise",
              fontFamily: "Quicksand, sans-serif",
              letterSpacing: 1,
              lineHeight: 1.5,
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            Discover the Best Recipes – Everything You Need for Your Kitchen!
          </Typography>
        </Box>
      )}

      <style>
        {`
          @keyframes fadeBg {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
    </Box>
    </>

    )
    
}
export default AppLayout