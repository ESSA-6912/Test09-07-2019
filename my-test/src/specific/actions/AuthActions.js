import jsonFetch from "../../common/lib/Fetcher";

export const AUTH_ACTIONS = {
    loginTeacher: "LOGIN_TEACHER"
}

export const loginTeacher = (username, password) => {
    return {
        type: AUTH_ACTIONS.loginTeacher,
        payload: jsonFetch("/api/login", {
            method: "POST",
            body: {
                username, password
            }
        })
    }
}

/*
({
    type: AUTH_ACTIONS.loginTeacher,
    payload: {
        username,
        password
    }
})
*/