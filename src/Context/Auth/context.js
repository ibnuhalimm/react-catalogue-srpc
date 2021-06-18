import React, { createContext, useContext, useReducer } from 'react';
import { initialState, AuthReducer } from './reducer';


const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const useAuthState = () => {
    const context = useContext(AuthStateContext);

    if (context === undefined) {
        throw new Error(`useAuthState should be within AuthProvider`);
    }

    return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);

    if (context === undefined) {
        throw new Error(`useAuthDispatch should be within AuthProvider`);
    }

    return context;
}

export const AuthProvider = ({ children }) => {
    const [ token, dispatch ] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={token}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}