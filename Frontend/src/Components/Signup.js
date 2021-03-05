import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../features/userSlice";

const Signup = () => {
  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/signUp", {
        username: usernameSignUp,
        password: passwordSignUp,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <div className="signUp">
        <h1>Sign up</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameSignUp(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordSignUp(e.target.value);
          }}
        />
        <button onClick={signUp}>Submit</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Signup;
