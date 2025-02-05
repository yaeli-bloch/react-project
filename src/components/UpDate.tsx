import { Box, Button, Modal } from "@mui/material";
import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./HomePage";

const UpDate = () => {
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const context = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("update");
    setOpen(false);
      if (!context?.user.id) {      
      console.log("User ID is missing!");
      return;
    }    
    try {
        const res = await fetch("http://localhost:3000/api/user/", {
        method: "PUT",
        body: JSON.stringify({
          firstName:context.user.firstName,
          lastName: lastNameRef.current?.value || "",
          email: emailRef.current?.value || "",
          adress: addressRef.current?.value || "",
          phone: phoneRef.current?.value || "",
        }),
        headers: { "user-id":context?.user.id.toString(),"Content-Type": "application/json" },
      });          
      if (res.status === 404) {
        console.log("user not found");
      } else {
        if (context) {
          context.userDispatch({ type: "UPDATE", data: { id: context?.user.id } });
        }
        
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: " #40E0D0 ",
          color: "white",
          border: "2px solid black",
          top: 25,
        }}
        variant="contained"
        color="success"
      >
        upDate 
        details
      </Button>
      {open && (
        <Modal
          open={open}
          aria-labelledby="form-modal-title"
          aria-describedby="form-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              background:
                "linear-gradient(50deg, #40E0D0 50%,  #D3D3D3 80%)",
              border: "3px solid #40E0D0 ",
              boxShadow: 24,
              borderRadius: "16px",
              p: 4,
            }}
          >
            <form onSubmit={handleSubmit}>
              <input ref={lastNameRef} placeholder="lastname" />
              <br />
              <input ref={emailRef} placeholder="email" />
              <br />
              <input ref={addressRef} placeholder="adress" />
              <br />
              <input ref={phoneRef} placeholder="phone" />
              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#40E0D0",
                  marginTop: "15px",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    color: "#40E0D0",
                  },
                }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default UpDate;
