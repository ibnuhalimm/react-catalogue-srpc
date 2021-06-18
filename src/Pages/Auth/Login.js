import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Components/Button';
import { FormGroup, InputText, Label, RequiredMark } from '../../Components/Form';
import { PageTitleContext } from '../../Context/pageTitleContext';
import logo from '../../logo.svg';
import { loginUser, logoutUser } from '../../Context/Auth/action';
import { useAuthState, useAuthDispatch } from '../../Context/Auth/context';
import Card from './Components/Card';
import Title from './Components/Title';
import Logo from './Components/Logo';


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


    const loginSubmitHandler = async (event) => {
        event.preventDefault();

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

        return false;
    }


    return (
        <main className="mt-10 mb-28">
            <div className="w-4/5 sm:w-2/5 md:w-1/2 lg:w-2/5 xl:w-1/3 xl:max-w-sm mx-auto">
                <Card>
                    <div className="w-32 mx-auto">
                        <Logo />
                    </div>
                    <div className="text-center mt-3">
                        <Title>
                            Login
                        </Title>
                    </div>
                    <div className="lg:px-6 mt-8">

                        {errorMessage
                        ? <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                        : '' }

                        <form method="post" onSubmit={(event) => loginSubmitHandler(event)}>
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
                                    type="submit"
                                    color="default"
                                    className="w-full">
                                    {loading ? 'Logging in...' : 'Login'}
                                </Button>
                            </div>
                        </form>
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
                </Card>
            </div>
        </main>
    );
}

export default Login;