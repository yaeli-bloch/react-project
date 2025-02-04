import { createContext, Dispatch, useReducer, useState } from "react";
import { Action, User, userReducer } from "./User";
import Login from "./Login";
import { Box, Button, } from "@mui/material";
import UserName from "./userName";
import UpDate from "./UpDate";
import AddRecipe from "./AddRecipe"
export type UserContextType = {
  user: User;
  userDispatch: Dispatch<Action>;
};
export const UserContext = createContext<UserContextType | undefined>(undefined);

const HomePage = () => {
  const [isLogin, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [register, setRgister] = useState(false);
  const initialUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    adress: '',
    phone: ''
  };
  const handleLoginClick = () => {
    setOpen(prevOpen => !prevOpen);// הופך את המצב כל לחיצה
  };
  const handleRegisterClick = () => {
    setRgister(prevOpen => !prevOpen);// הופך את המצב כל לחיצה
  };
  const handlLoginSuccess = (flag: boolean) => {
    setLogin(flag);

  }
  const [user, userDispatch] = useReducer(userReducer, initialUser)
  return (<>
    {isLogin === false && <div style={{ display: 'grid', position: 'absolute', top: 10, left: 10 }}>
      <Button onClick={() => { handleLoginClick() }} variant="outlined" size="medium">
        Login
      </Button>
      <Button onClick={() => { handleRegisterClick() }} variant="outlined" size="medium">register</Button>
    </div>}
    <Box
      sx={{
        position: "fixed",
        top: 7,
        left: 7,
      }}
    >
      <UserContext value={{ user, userDispatch }}>
        {open && <Login onLoginSuccess={handlLoginSuccess} flag={true} setopenn={handleLoginClick} register={false}></Login>}
        {register && <Login onLoginSuccess={handlLoginSuccess} flag={true} setopenn={handleRegisterClick} register={true}></Login>}
        
        {isLogin && <UserName></UserName>}
        {isLogin && <UpDate></UpDate>}
        {isLogin && <AddRecipe></AddRecipe>}
      </UserContext>
    </Box>


  </>)
}
export default HomePage;