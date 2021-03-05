import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants";

const initialState = {
  username: null,
  password: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.data,
        password: action.data1,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        username: null,
        password: null,
      };
    default:
      return state;
  }
};

export default authReducer;
