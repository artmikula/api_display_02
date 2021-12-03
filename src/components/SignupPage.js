import React from "react";
import { useState } from "react";

function SignupPage({ Signup, error, setSignupPage }) {
  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const signupHandler = (e) => {
    e.preventDefault();
    Signup(newUserData);
  };

  return (
    <div className="container">
      <form id="loginform" autoComplete="off" onSubmit={signupHandler}>
        <div className="form-inner">
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) =>
                setNewUserData({ ...newUserData, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setNewUserData({ ...newUserData, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              onChange={(e) =>
                setNewUserData({
                  ...newUserData,
                  passwordConfirm: e.target.value,
                })
              }
            />
          </div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
