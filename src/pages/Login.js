import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { FormGroup, InputText, Label, RequiredMark } from '../components/Form';
import { PageTitleContext } from '../context/pageTitleContext';
import logo from '../logo.svg';
import { loginUser, logoutUser } from '../context/Auth/action';
import { useAuthState, useAuthDispatch } from '../context/Auth/context';


function Login(props) {
    const { pageTitle, setPageTitle } = useContext(PageTitleContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    useEffect(() => {
        setPageTitle('Login');
        logoutUser(dispatch);
    }, []);


    const loginSubmitHandler = async () => {
        let userPayload = {
            email: email,
            password: password
        };

        let response = await loginUser(dispatch, userPayload);
        if (response.data) {
            window.location.href = '/';
        }

        setEmail('');
        setPassword('');
        return;
    }


    return (
        <main className="mt-10 mb-28">
            <div className="w-4/5 sm:w-2/5 md:w-1/2 lg:w-2/5 xl:w-1/3 xl:max-w-sm mx-auto">
                <div className="bg-transparent md:bg-white dark:md:bg-gray-700 md:rounded-lg md:shadow-lg md:px-8 lg:px-3 md:py-10">
                    <div className="w-32 mx-auto">
                        <img src={logo} alt="Logo" className="w-full h-auto" />
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
                            Login
                        </h1>
                    </div>
                    <div className="lg:px-6 mt-8">

                        {errorMessage
                        ? <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                        : '' }

                        <div>
                            <FormGroup>
                                <Label>
                                    Email Address <RequiredMark/>
                                </Label>
                                <InputText
                                    type="text"
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email} />
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Password <RequiredMark/>
                                </Label>
                                <InputText
                                    type="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password} />
                            </FormGroup>
                            <div>
                                <Button
                                    color="default"
                                    className="w-full"
                                    onClick={loginSubmitHandler} >
                                    {loading ? 'Logging in...' : 'Login'}
                                </Button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-center">
                                <span className="text-gray-600 dark:text-gray-300">
                                    Don't have an account?
                                </span>

                                <NavLink to="/register"
                                    className="ml-1 underline font-bold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300">
                                    Register
                                </NavLink>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;