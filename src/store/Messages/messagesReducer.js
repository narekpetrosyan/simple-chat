import {SET_MESSAGE} from "../types";

const initialState = {
    messages: []
};

export const messageReducer = (state = initialState,action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, payload]
            }
        default:
            return state;
    }
};
