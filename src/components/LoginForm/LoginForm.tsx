"use client";
import { login } from "./actions";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";




const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? <CircularProgress size={20} thickness={5} color="inherit" /> : 'Log in'}
    </Button>
  );
};

export const LoginForm = () => {
 

  const [state, loginAction] = useActionState(login,undefined)
  const emailError = state?.errors?.email || []
  const passwordError = state?.errors?.password || []
  return (
   
    
      <form action= {loginAction} >
        <Stack spacing= {1}>
        <TextField
          id="email"
          name="email"
          label="email"
          type="email"
          variant="outlined"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#ffffff",
              fontFamily: "Arial",
              input: { color: 'white' },
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff",
                borderWidth: "1px",
                
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#ffffff",
              input: { color: 'white' }
            },
            
          }}
          error = {!!emailError[0]}
          helperText = {emailError[0]|| " "}
  />

        

        <TextField
          id="password"
          name="password"
          label="password"
          type="password"
          variant="outlined"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#ffffff",
              fontFamily: "Arial",
              input: { color: 'white' },
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff",
                borderWidth: "1px",
                
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#ffffff",
              input: { color: 'white' }
            },
            
          }}
          error = {!!passwordError[0]}
          helperText = {passwordError[0] || " "}
        />

        <SubmitButton />
        </Stack>
      </form>
  
  );
};
