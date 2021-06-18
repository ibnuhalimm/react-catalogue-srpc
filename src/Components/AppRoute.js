import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuthState } from '../Context/Auth/context';


function AppRoute({ component: Component, path, isPrivate, ...otherProps }) {
    const currentUser = useAuthState();

    return (
        <Route
            path={path}
            render={(props) =>
                isPrivate && !Boolean(currentUser.token) ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
            {...otherProps}
        />
    );
}

export default AppRoute;