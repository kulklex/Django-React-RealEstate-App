import { combineReducers } from "redux";
import alertReducer from "./alert"
import authReducer from "./auth"

export default combineReducers({
    alertReducer,
    authReducer
})