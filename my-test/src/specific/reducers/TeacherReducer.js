import { AUTH_ACTIONS } from "../actions/AuthActions";

export default function TeacherReducer(state = {}, action) {
    switch (action.type) {
        case AUTH_ACTIONS.loginTeacher + "_FULFILLED":
            return {
                ...state,
                username: action.payload.username
            }
    }
    return state;
}