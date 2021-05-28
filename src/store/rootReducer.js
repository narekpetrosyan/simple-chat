import {combineReducers} from "redux";
import {messageReducer} from "./Messages/messagesReducer";
import {authReducer} from "./Auth/authReducer";

export const rootReducer = combineReducers({
    messages: messageReducer,
    auth: authReducer,
});
