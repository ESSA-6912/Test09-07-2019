import { createStore, applyMiddleware, combineReducers } from 'redux'
import AuthReducer from './specific/reducers/AuthReducer'
import thunk from "redux-thunk"
import promiseMiddleware from 'redux-promise-middleware';

import { createLogger } from 'redux-logger'
import TeacherReducer from './specific/reducers/TeacherReducer';
import StudentReducer from './specific/reducers/StudentReducer';

const logger = createLogger({
    // ...options
});

const store = createStore(
    combineReducers({
        auth: AuthReducer,
        teacher: TeacherReducer,
        students: StudentReducer
    }),
    applyMiddleware(promiseMiddleware, logger))

export default store;