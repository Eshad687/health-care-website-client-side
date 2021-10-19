import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import logo from '../../images/error.png'

const NotFound = () => {
    const history = useHistory()
    const handleGoBack = () => {
        history.push('/home');
    }
    return (
        <div className="text-center my-5">
            <img src={logo} alt="" />

            <br />
            <Button onClick={handleGoBack} variant="success">Go Back to Home Page </Button>
        </div>
    );
};

export default NotFound;