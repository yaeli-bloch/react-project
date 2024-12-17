import { createContext, Dispatch, useReducer, useState } from "react";
import { Action, User, userReducer } from "./User";
import Login from "./Login";
import { Box } from "@mui/material";
import UserName from "./userName";
import UpDate from "./UpDate";
export type UserContextType = {
    user: User;
    userDispatch:Dispatch<Action>; 
};
export const UserContext = createContext<UserContextType | undefined>(undefined); 

const HomePage = () => {
    const [isLogin,setLogin] = useState(false);    
     const initialUser: User = {
        firstName: 'yaeli',
        lastName: 'bloch',
        email: '',
        password: '1111',
        adress: '',
        phone: ''
    };
    const handlLoginSuccess =()=>{        
        setLogin(true)
    }   
    const [user, userDispatch] = useReducer(userReducer,initialUser)
    return (<>
    <Box
     sx={{
        position: "fixed",
        top: 7,
        left: 7,         
      }}
      >
       <UserContext.Provider value = {{ user, userDispatch,}}>
        {isLogin === false && <Login onLoginSuccess={handlLoginSuccess}></Login> }   
        {isLogin && <UserName></UserName>}
        {isLogin && <UpDate></UpDate>}
       </UserContext.Provider>
       </Box>
        {"hello"} 
       {user.lastName}
       {user.firstName}
    
    </>)
}
export default HomePage;