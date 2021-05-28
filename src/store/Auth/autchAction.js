import {LOGIN_USER, LOGOUT_USER} from "../types";
import {userApi} from "../../services/api";

export const setUser = (payload) => ({
    type: LOGIN_USER,
    payload
})

export const loginUser = (data) => async (dispatch) => {
    try {
        let dataFrom = await userApi.login(data)
        dispatch(setUser(dataFrom))
    } catch (e) {
        console.log(e)
    }

}

export const logoutUser = () => ({
    type: LOGOUT_USER
})



