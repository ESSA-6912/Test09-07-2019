import { STUDENT_ACTIONS } from "../actions/StudentActions";

export default function StudentReducer(state = {}, action) {
    switch (action.type) {
        case STUDENT_ACTIONS.fetchUsers + "_FULFILLED":
            return {
                ...state,
                list: action.payload
            }
    }
    return state;
}