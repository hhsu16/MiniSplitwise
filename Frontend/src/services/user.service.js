import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

// const updateUserProfile = (username, newUsername, email, phoneNumber) => {
//   return axios
//     .put(API_URL + "user/updateUserProfile", {
//       // username: username,
//       // newUsername: newUsername,
//       // email: email,
//       // phoneNumber: phoneNumber,

//       username,
//       newUsername,
//       email,
//       phoneNumber,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(newUsername));
//       }

//       return response.data;
//     });
// };

export default {
  getPublicContent,
  getUserBoard,
  // updateUserProfile,
};
