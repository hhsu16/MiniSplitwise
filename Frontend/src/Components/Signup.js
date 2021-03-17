// import React, { useState } from "react";
// import axios from "axios";
// import { login } from "../features/userSlice";
// import { useDispatch } from "react-redux";

// const Signup = () => {
//   const [usernameSignUp, setUsernameSignUp] = useState("");
//   const [passwordSignUp, setPasswordSignUp] = useState("");

//   const dispatch = useDispatch();

//   const signUp = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:3001/signUp", {
//         username: usernameSignUp,
//         password: passwordSignUp,
//       })
//       .then((response) => {
//         dispatch(
//           login({
//             username: usernameSignUp,
//             password: passwordSignUp,
//             loggedIn: true,
//           })
//         );
//       });
//   };

//   return (
//     <div className="App">
//       <div className="signUp">
//         <h1>Sign up</h1>
//         <label>Username</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setUsernameSignUp(e.target.value);
//           }}
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setPasswordSignUp(e.target.value);
//           }}
//         />
//         <button onClick={signUp}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import axios from "axios";
import { signup } from "../features/userSlice";
import { useDispatch } from "react-redux";

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
        if (response.data.message === "success") {
          setLoginStatus(response.data.message);
          dispatch(
            signup({
              username: usernameSignUp,
              password: passwordSignUp,
              signedup: true,
            })
          );
        } else {
          setLoginStatus(response.data.message);
        }
      });
  };

  return (
    <div className="App">
      <div className="Signup">
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsernameSignUp(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
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
