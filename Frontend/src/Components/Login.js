import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../features/userSlice";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const dispatch = useDispatch();

  const loginIn = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/logIn", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
          dispatch(
            login({
              username: username,
              password: password,
              loggedIn: true,
            })
          );
        }
        // console.log(response.data);
      });
  };

  return (
    <div className="App">
      <div className="logIn">
        <h1>Log in</h1>
        <input
          type="text"
          value={username}
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={loginIn}>Submit</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Login;
