import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {

    // solving page reload getting back to login page
    const { user, isLoading } = useAuth();
    // console.log(isLoading)
    if (isLoading) {

        return <Spinner animation="border" variant="danger" />

    }
    return (
        // setting up private route
        <Route

            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/loginsignup",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;