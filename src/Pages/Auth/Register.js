import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Components/Button';
import { InputText, Label, RequiredMark } from '../../Components/Form';
import { PageTitleContext } from '../../Context/pageTitleContext';
import logo from '../../logo.svg';
import Card from './Components/Card';
import Logo from './Components/Logo';
import Title from './Components/Title';


function Register() {
    const { setPageTitle } = useContext(PageTitleContext);

    useEffect(() => {
        setPageTitle('Register');
    }, []);

    return (
        <main className="mt-10 mb-28">
            <div className="w-4/5 sm:w-2/5 md:w-4/5 lg:w-3/5 xl:max-w-xl mx-auto">
                <Card>
                    <div className="w-32 mx-auto">
                        <Logo />
                    </div>
                    <div className="text-center mt-3">
                        <Title>
                            Register
                        </Title>
                    </div>
                    <div className="lg:px-6 mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8">
                            <div>
                                <Label>
                                    Full Name <RequiredMark/>
                                </Label>
                                <InputText type="text" />
                            </div>
                            <div>
                                <Label>
                                    Email Address <RequiredMark/>
                                </Label>
                                <InputText type="text" />
                            </div>
                            <div>
                                <Label>
                                    Password <RequiredMark/>
                                </Label>
                                <InputText type="password" />
                            </div>
                            <div>
                                <Label>
                                    Confirm Password <RequiredMark/>
                                </Label>
                                <InputText type="password" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <Button color="default" className="w-full">
                                Register
                            </Button>
                        </div>
                        <div className="mt-8">
                            <p className="text-center">
                                <span className="text-gray-600 dark:text-gray-300">
                                    Already have an account?
                                </span>

                                <NavLink to="/login"
                                    className="ml-1 underline font-bold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300">
                                    Login
                                </NavLink>

                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}

export default Register;