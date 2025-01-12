import { Box, Button, Modal } from "@mui/material"
import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./HomePage";

const Login = ({onLoginSuccess,flag,setopenn,register}:{onLoginSuccess:Function,flag:boolean,setopenn:Function,register:boolean})=>{ 
     const [openo, setOpeno] = useState(flag); 
    //  const[user,setUser] =useState({});  
    const nameref = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)
    const context = useContext(UserContext)
    console.log("innnnnnnnnnn");
    
    const handleSubmit = async (e: FormEvent)=>{     
      e.preventDefault();
      setOpeno(false);    
      setopenn() ;
      console.log("Name:", nameref.current?.value);  // בדוק אם השדה "name" לא ריק
  console.log("Password:", passwordref.current?.value);  // בדוק אם השדה "password" לא ריק
      if(!register){
        console.log("login");
      try {
        const name1=nameref.current?.value;
        const password1=passwordref.current?.value
        const res = await fetch('http://localhost:3000/api/user/login',
            {             
                method: 'POST',
                body: JSON.stringify({
                    firstName: nameref.current?.value,
                    password: passwordref.current?.value
                }),
                headers: { 'Content-Type': 'application/json' }
            }
        )
        console.log(res);
            if (res.status === 401) { alert('name or password are not correct') }
            else if (!res.ok) { throw new Error(`fetch error ${res.status}`) }            
            else{          
            const data = await res.json();
            // setUser(res);
            console.log(data);            
            onLoginSuccess(true);
            const userId = data.user?.id;
            console.log(JSON.stringify(data, null, 2)+"pppppppppppp");
            console.log(userId+"llllllllllllllllll");
            if(context)
              context.userDispatch({type:'CREATE',data:{firstName: name1|| '?', password: password1 || '?', id:userId}})
              console.log("User data dispatched:", {
              firstName: nameref.current?.value,
              password: passwordref.current?.value
            });
            } 
      
    }
    catch (e) {
      console.log(e);
    }}
    else{
      console.log("register");
      try{
        const name1=nameref.current?.value;
        const password1=passwordref.current?.value
        const res = await fetch('http://localhost:3000/api/user/register',
          {
              method: 'POST',
              body: JSON.stringify({
                  firstName: nameref.current?.value,
                  password: passwordref.current?.value
              }),
              headers: { 'Content-Type': 'application/json' }
          }
      )             
          const data = await res.json(); 
          if (res.status === 400) { console.log("register  failed") } 
          else{ 
            const userId = data.userId;
            console.log(JSON.stringify(data, null, 2)+"pppppppppppp");
            console.log(userId+"llllllllllllllllll");
          if(context){
          context.userDispatch({type:'CREATE',data:{firstName:name1||'?' , password: password1|| '?',id:userId}
          }
        )
        console.log("User data dispatched:", {
          name: nameref.current?.value,
          password: passwordref.current?.value
        });
          onLoginSuccess(true); 
      }
        }   
      }
      catch(e){
        console.log(e);
      }
    }
     
  }
    return(<>
     {/* <Button onClick={() =>{ setOpen(true)}} variant="outlined" size="medium">Login</Button> */}
     <Modal
      open={openo}
      onClose={() =>{ setOpeno(false)}}
      aria-labelledby="form-modal-title"
      aria-describedby="form-modal-description"
    >
      <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            background: 'linear-gradient(50deg, #40E0D0 50%,  #D3D3D3 80%)',
            border: '3px solid #40E0D0 ',
            boxShadow: 24,
            borderRadius: '16px',
            p: 4,
        }}
      > 
      <form onSubmit={handleSubmit}>
      <input ref={nameref} placeholder="name" />
              <br></br>
              <input ref={passwordref} placeholder="password" />
              <br></br>
              <Button onClick={handleSubmit} variant="contained" sx={{
                // backgroundColor: 'white',
                color: ' #40E0D0 ',
                marginTop: '15px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            //   endIcon={<SendIcon />}
              >
                Send
              </Button>          
        </form>                 
      </Box>
    </Modal>       

 </>)
}

export default Login