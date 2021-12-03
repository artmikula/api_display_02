import React, { useState } from "react";
import "../style/login.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function LoginForm({ LoginUser, error, userData, setUserData, setSignUp }) {
  const submitHandler = (e) => {
    e.preventDefault();
    LoginUser();
  };

  const signupUser = (e) => {
    e.preventDefault();
    setSignUp(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Box>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button variant="contained" color="primary" onClick={submitHandler}>
              LOGIN
            </Button>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => signupUser()}
            >
              SIGNUP
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}

export default LoginForm;
