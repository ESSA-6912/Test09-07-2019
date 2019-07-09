import jsonFetch from "../../common/lib/Fetcher";

export const STUDENT_ACTIONS = {
    fetchUsers: "FETCH_USERS"
}

export const fetchStudents = () => {
    return {
        type: STUDENT_ACTIONS.fetchUsers,
        payload: jsonFetch("/api/students")
    }
}