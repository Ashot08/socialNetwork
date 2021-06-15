import {authAPI} from "../api";

const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const LOG_OUT = 'LOG_OUT';

export const setLoginDataActionCreator = (data) => {
    return {type: SET_LOGIN_DATA, data}
}
export const logOutAC = () => {
    return {type: SET_LOGIN_DATA}
}

export const logOutTC = () => {
    return (dispatch) => {
        authAPI.logOut().then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(logOutAC());
                }
            }
        )
    }
}
export const logInTC = (data) => {
    return (dispatch) => {
        return authAPI.logIn(data).then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(setLoginDataActionCreator({id: response.data.userId}))
                } else if (response.resultCode === 10) {
                    return authAPI.getCaptcha().then(r => {
                        return {messages: response.messages, captcha: r.url};
                    });
                } else {
                    return {messages: response.messages};
                }
            }
        )
    }
}

const defaultState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
            }
        default:
            return state
    }

}

export default authReducer;