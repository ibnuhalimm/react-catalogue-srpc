import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    REQUEST_LOGIN,
    REQUEST_REGISTER
} from './actionTypes';


let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).token
    : '';

export const initialState = {
    token: '' || token,
    loading: false,
    errorMessage: null,
    infoMessage: null
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case REQUEST_REGISTER:
            return {
                ...initialState,
                loading: true
            };

        case REGISTER_SUCCESS:
            return {
                ...initialState,
                loading: false,
                errorMessage: null,
                infoMessage: action.info
            };

        case REGISTER_ERROR:
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
                infoMessage: ''
            };

        case REQUEST_LOGIN:
            return {
                ...initialState,
                loading: true
            };

        case LOGIN_SUCCESS:
            return {
                ...initialState,
                loading: false,
                token: action.payload.token,
                errorMessage: null
            };

        case LOGIN_ERROR:
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };

        case LOGOUT:
            return {
                ...initialState,
                token: ''
            };

        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}