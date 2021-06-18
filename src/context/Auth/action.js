import { ApiClient, Auth, CSRFToken } from '../../constant/API';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, REQUEST_LOGIN } from './actionTypes';


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

                dispatch({
                    type: LOGIN_ERROR,
                    error: responseData.message
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