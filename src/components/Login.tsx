import { Box, Button, Modal } from "@mui/material"
import { useContext, useRef, useState } from "react";
import { UserContext } from "./HomePage";

const Login = ({onLoginSuccess}:{onLoginSuccess:Function})=>{ 
    const [open, setOpen] = useState(false);    
    const nameref = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)
    const context = useContext(UserContext)
    console.log("innnnnnnnnnn");
    
    const handleSubmit = ()=>{
      if(context){
        setOpen(false);
        if(context.user.firstName===nameref.current?.value&&context.user.password===passwordref.current?.value){
            context.userDispatch({type:'CREATE',data:{firstName: nameref.current?.value || '', password: passwordref.current?.value || '' }})
            onLoginSuccess(true)
        }
      }
    }
    return(<>
     <Button onClick={() =>{ setOpen(true)}} variant="outlined" size="medium">Login</Button>
     <Modal
      open={open}
      onClose={() =>{ setOpen(false)}}
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