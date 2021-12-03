import { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import SignUpPage from "./components/SignupPage";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function App() {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  const [userData, setUserData] = useState({
    username: null,
    password: null,
  });

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState(null);
  const [signUp, setSignUp] = useState(null);

  const LoginUser = () => {
    if (
      userData.username === adminUser.username &&
      userData.password === adminUser.password
    ) {
      console.log("Succesfully logged in");
      setUser({
        username: userData.username,
      });
      setError(null);
    } else {
      setError("Invalid data");
    }
  };

  const signUpNewUser = (newUserData) => {
    if (
      newUserData.username &&
      newUserData.password === newUserData.passwordConfirm
    ) {
      console.log("New user created");
      setSignUp(true);
      setError(null);
    } else {
      setError("Invalid data");
    }
  };

  const logout = () => {
    setUser({ username: null });
  };

  return (
    <Container component="main" maxWidth="lg">
      {user.username && signUp === null && (
        <div className="welcome">
          <h2>Welcome, {userData.username}</h2>
          <Button variant="contained" color="primary" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
      <LoginForm
        LoginUser={LoginUser}
        error={error}
        userData={userData}
        setUserData={setUserData}
      />
    </Container>
  );
}

export default App;
