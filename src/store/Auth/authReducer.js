import {LOGIN_USER, LOGOUT_USER} from "../types";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || ""
};

export const authReducer = (state = initialState,action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            localStorage.setItem("user",JSON.stringify(payload.user))
            return {
                ...state,
                user: payload.user,
                token: payload.token
            }
        case LOGOUT_USER:
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            return {
            ...state,
            user: null,
            token: ""
        };
        default:
            return state;
    }
};
