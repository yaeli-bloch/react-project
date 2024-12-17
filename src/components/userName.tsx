import { useContext } from "react";
import { UserContext } from "./HomePage";
import { Avatar, Box,Typography } from "@mui/material";
const UserName =()=>{
    const context = useContext(UserContext);
let l : string=''
let namef :string =''
if(context){
     l = context.user.firstName[0];
    namef = context.user.firstName
}
return (<>
<Box sx={{ display: "flex", alignItems: "center"}}>
 <Avatar sx={{ bgcolor:'  #40E0D0', marginRight: '15px'}}>{l}</Avatar>
 <Typography variant="h6" >
        hello {namef}
 </Typography> 
</Box>
 
</>)
}
export default UserName