import { ApiClient, Auth } from '../../Constant/API';
import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    REQUEST_LOGIN,
    REQUEST_REGISTER
} from './actionTypes';
import {
    FORM_ERROR
} from '../../Constant/StatusCode';


export const registerUser = (dispatch, registerPayload) => {
    try {
        dispatch({
            type: REQUEST_REGISTER
        });

        return ApiClient.post(Auth.REGISTER, registerPayload)
                .then(response => {
                    let responseData = response.data;

                    if (responseData.data.token) {
                        dispatch({
                            type: REGISTER_SUCCESS,
                            payload: responseData.data.token,
                            info: responseData.message
                        });

                        localStorage.setItem('currentUser', JSON.stringify({ token: responseData.data.token }));

                    } else {
                        dispatch({
                            type: REGISTER_ERROR,
                            error: responseData.message
                        });

                    }

                    return Promise.resolve(responseData);
                })
                .catch(({ response }) => {
                    let responseData = response.data;
                    let errorMessages = '';

                    if (response.status === FORM_ERROR) {
                        let errorFields = Object.keys(responseData.errors);

                        errorFields.map(field => {
                            let errorText = responseData.errors[field][0];
                            errorMessages +=  `${errorText}\n`;
                        });

                    } else {
                        errorMessages = responseData.message;

                    }

                    dispatch({
                        type: REGISTER_ERROR,
                        error: errorMessages
                    });

                    return Promise.resolve(responseData);
                });

    } catch (error) {
        dispatch({
            type: REGISTER_ERROR,
            error: error
        });

        return Promise.reject(error);
    }
}

export const loginUser = (dispatch, loginPayload) => {
    try {
        dispatch({ type: REQUEST_LOGIN });

        return ApiClient.post(Auth.LOGIN, loginPayload)
            .then(response => {
                let responseData = response.data;

                if (responseData.data.token) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: responseData.data.token
                    });

                    localStorage.setItem('currentUser', JSON.stringify({ token: responseData.data.token }));

                } else {
                    dispatch({
                        type: LOGIN_ERROR,
                        error: responseData.message
                    });

                }

                return Promise.resolve(responseData);
            })
            .catch(({ response }) => {
                let responseData = response.data;
                let errorMessages = '';

                if (response.status === FORM_ERROR) {
                    let errorFields = Object.keys(responseData.errors);

                    errorFields.map(field => {
                        let errorText = responseData.errors[field][0];
                        errorMessages +=  `${errorText}\n`;
                    });

                } else {
                    errorMessages = responseData.message;

                }

                dispatch({
                    type: LOGIN_ERROR,
                    error: errorMessages
                });

                return Promise.resolve(responseData);
            });

    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            error: error
        });

        return Promise.reject(error);
    }
}

export const logoutUser = (dispatch) => {
    dispatch({
        type: LOGOUT
    });

    localStorage.removeItem('currentUser');
}