import { types } from "../types/types";

const initialState = {
    user: {
        account: ''
    },
    logged: false,

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                user: { ...action.payload },
                logged: true
            }
        case types.authLogout:
            return {
                ...initialState
            }

        default:
            return state;
            }
    }