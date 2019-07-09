import { AUTH_ACTIONS } from "../actions/AuthActions";

export default function AuthReducer(state = { loggedIn: true }, action) {
    switch (action.type) {
        case AUTH_ACTIONS.loginTeacher + "_FULFILLED":
            return {
                ...state,
                loggedIn: true,
            }
        case AUTH_ACTIONS.loginTeacher + "_REJECTED":
            return {
                ...state,
                loggedIn: false,
            }
    }
    return state;
}