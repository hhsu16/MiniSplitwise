import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants";

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  data: null,
  data1: null,
});

export const loginSuccess = (username, password) => ({
  type: LOGIN_SUCCESS,
  data1: username,
  data2: password,
});
