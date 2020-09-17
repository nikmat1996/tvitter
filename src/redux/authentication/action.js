import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
  } from "./actionTypes";
import axios from "axios";
  
export const registerUserRequest = () => ({
type: REGISTER_USER_REQUEST
});

export const registerUserSuccess = payload => ({
type: REGISTER_USER_SUCCESS,
payload
});

export const registerUserFailure = payload => ({
type: REGISTER_USER_FAILURE,
error: payload
});

export const registerUserEmail = payload => {
console.log("register")
return dispatch => {
    dispatch(registerUserRequest());
    return axios
    .post("", {
        email: payload.email,
        password: payload.password,
        firstName: payload.firstName,
        lastName: payload.lastName
    })
    .then(res => {
        dispatch(registerUserSuccess(res.data));
    })
    .catch(() => dispatch(registerUserFailure()));
};
};


export const loginUserRequest = () => ({
type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
type: LOGIN_USER_SUCCESS,
payload
});

export const loginUserFailure = payload => ({
type: LOGIN_USER_FAILURE,
error: payload
});

export const loginUserEmail = payload => {
console.log("login")

return dispatch => {
    dispatch(loginUserRequest());
    return axios
    .post("", {
        email: payload.email,
        password: payload.password
    })
    .then(res => {
        dispatch(loginUserSuccess(res.data));
    })
    .catch(() => dispatch(loginUserFailure()));
};
};


export const logoutUserRequest = payload => ({
type: LOGOUT_USER_REQUEST,
payload
});

export const logoutUserSuccess = payload => ({
type: LOGOUT_USER_SUCCESS,
payload
});

export const logoutUserFailure = payload => ({
type: LOGOUT_USER_FAILURE,
error: payload
});



export const logoutUser = payload => {
return dispatch => {
    dispatch(logoutUserRequest());
    return axios
    .post("",
        {},
        {
        headers: {
            Authorization: payload.token
        }
        }
    )
    .then(res => {
        dispatch(logoutUserSuccess(res));
    })
    .catch(err => dispatch(logoutUserFailure(err.message)));
};
};