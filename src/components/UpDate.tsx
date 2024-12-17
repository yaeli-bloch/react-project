import { Box, Button, Modal } from "@mui/material";
import { FormEvent, useContext, useRef, useState } from "react"
import { UserContext } from "./HomePage";

const UpDate =()=>{
    const lastNameRef = useRef<HTMLInputElement>(null);    
    const emailRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const context = useContext(UserContext)
     const [open, setOpen1] =useState(false);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); 
         setOpen1(false)           
        if (context) {
            context.userDispatch({
                type: 'UPDATE', data: {

                    lastName: lastNameRef.current?.value || '',
                    email: emailRef.current?.value || '',
                    adress: addressRef.current?.value || '',
                    phone: phoneRef.current?.value || ''
                }
            })
        }
    }
 return(<> 
  <Button onClick={()=>setOpen1(true)} sx={{backgroundColor: ' #40E0D0 ',color: "white", border: '2px solid black',top:25}} variant="contained" color="success">
    upDate
  </Button>
  {open&&<Modal    
      open ={open}
      aria-labelledby = "form-modal-title"
      aria-describedby = "form-modal-description"
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
      <input ref={lastNameRef} placeholder="lastname"/>
              <br></br>
              <input ref={emailRef} placeholder="email"/>
              <br></br>
              <input ref={addressRef} placeholder="adress"/>
              <br></br>
              <input ref={phoneRef} placeholder="phone"/>
              <br></br>
              <Button onClick={handleSubmit} variant="contained" sx={{                
                color: ' #40E0D0 ',
                marginTop: '15px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}            
              >
                Send
              </Button>          
        </form>                 
      </Box>
    </Modal>   
}    
 </>)
}
export default UpDate