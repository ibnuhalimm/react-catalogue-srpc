import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { FormGroup, InputText, Label, RequiredMark } from '../components/Form';
import { PageTitleContext } from '../context/pageTitleContext';
import logo from '../logo.svg';


function Login() {
    const { setPageTitle } = useContext(PageTitleContext);

    useEffect(() => {
        setPageTitle('Login');
    }, []);

    return (
        <main className="mt-10 mb-28">
            <div className="w-4/5 sm:w-2/5 md:w-1/2 lg:w-2/5 xl:w-1/3 xl:max-w-sm mx-auto">
                <div className="bg-transparent md:bg-white md:rounded-lg md:shadow-lg md:px-8 lg:px-3 md:py-10">
                    <div className="w-32 mx-auto">
                        <img src={logo} alt="Logo" className="w-full h-auto" />
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Login
                        </h1>
                    </div>
                    <div className="lg:px-6 mt-8">
                        <div>
                            <FormGroup>
                                <Label>
                                    Email Address <RequiredMark/>
                                </Label>
                                <InputText type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Password <RequiredMark/>
                                </Label>
                                <InputText type="password" />
                            </FormGroup>
                            <div>
                                <Button color="default" className="w-full">
                                    Login
                                </Button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-center">
                                <span className="text-gray-600">
                                    Don't have an account?
                                </span>

                                <NavLink to="/register"
                                    className="ml-1 underline font-bold text-gray-700 hover:text-gray-900 transition-all duration-300">
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