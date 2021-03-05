import { createStore, combineReducers } from "redux";
import auth from "./auth/reducers";

const rootReducer = combineReducers({
  auth: auth,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
