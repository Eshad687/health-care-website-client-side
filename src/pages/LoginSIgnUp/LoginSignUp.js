import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo-removebg-preview.png'
import './LoginSignUp.css'

const LoginSignUp = () => {
    const { createUser, signInWithGoogle, signInWithEmailPassword, setErrorMessage, updateName, setIsLoading } = useAuth();
    const [login, setLogin] = useState(true)
    const toggleLoginSignUp = () => {
        setLogin(!login);
    }
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/'

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setIsLoading(true);
        login ? signInWithEmailPassword(data.email, data.password)
            .then((result) => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
            .finally(() => setIsLoading(false))
            : createUser(data.email, data.password)
                .then((result) => {


                    updateName(data.name)
                    history.push(redirect_uri)


                })
                .catch((error) => {
                    setErrorMessage(error.message);
                })
                .finally(() => setIsLoading(false));

    };


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {

                history.push(redirect_uri)
            }).catch(error => setErrorMessage(error.message))
            .finally(() => setIsLoading(false));
    }
    return (

        <div className="form text-center banner bg-center bg-no-repeat py-5">
            <img className="mx-auto" width="90px" src={logo} alt="" />
            {
                login ? <h5>Please Log In</h5> : <h5>Please Sign Up</h5>
            }
            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>

                {
                    !login && <> <input type="name" className="p-2 rounded-3 border-0" placeholder="Enter your name" {...register("name", { required: true })} /> <br />  {errors.email && <small className="text-danger m-0 p-0">This field is required</small>}<br /> </>
                }

                <input type="email" className=" p-2  rounded-3 border-0" placeholder="Enter your email" {...register("email", { required: true })} />

                <br />
                {errors.email && <small className="text-danger m-0 p-0">This field is required</small>}
                <br />
                <input type="password" className="bg-gray-200 p-2 w-80 rounded-3 border-0" placeholder="Enter Your password" {...register("password", { required: true })} />


                <br />
                {errors.password && <small className="text-danger">This field is required</small>}
                <br />
                {
                    login ? <input className="bg-info text-white px-5 py-2 w-80 rounded-3 border-0 btn" type="submit" value="Log In" /> : <input className="bg-info text-white px-5 py-2 rounded-3 border-0 btn" type="submit" value="Sign Up" />
                }



            </form>

            {
                login ? <small onClick={toggleLoginSignUp} className="text-primary link-button">Don't have an account?</small>
                    : <small onClick={toggleLoginSignUp} className=" text-primary link-button">Already have an account?</small>
            }
            <br />
            <small>or</small>
            <br />
            <Button onClick={handleGoogleLogin} variant="danger" className=" px-5 py-2 rounded-3 border-0 btn">Sign in with Google</Button>
        </div>

    );
};

export default LoginSignUp;