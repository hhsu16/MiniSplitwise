import React, { useState } from "react";
import axios from "axios";

function App() {
  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const signUp = () => {
    axios
      .post("http://localhost:3001/signUp", {
        username: usernameSignUp,
        password: passwordSignUp,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const loginIn = () => {
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
        }
        // console.log(response.data);
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

      <div className="logIn">
        <h1>Log in</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
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
}

export default App;
