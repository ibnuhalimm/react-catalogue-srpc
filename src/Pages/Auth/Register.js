import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Components/Button';
import { InputText, Label, RequiredMark } from '../../Components/Form';
import { logoutUser, registerUser, resetState } from '../../Context/Auth/action';
import { useAuthDispatch, useAuthState } from '../../Context/Auth/context';
import { PageTitleContext } from '../../Context/pageTitleContext';
import Card from './Components/Card';
import Title from './Components/Title';
import Logo from '../../Components/Logo';


function Register() {
    const { setPageTitle } = useContext(PageTitleContext);

    const dispatch = useAuthDispatch();
    const { loading, errorMessage, infoMessage } = useAuthState();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(() => {
        setPageTitle('Register');
        logoutUser(dispatch);
        resetState(dispatch);
    }, []);


    const registerUserHandler = async (event) => {
        event.preventDefault();

        let userPayload = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirm
        };

        let response = await registerUser(dispatch, userPayload);
        if (response.data) {
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        }

        return false;
    }


    return (
        <main className="mt-10 mb-28">
            <div className="w-4/5 sm:w-2/5 md:w-4/5 lg:w-3/5 xl:max-w-xl mx-auto">
                <Card>
                    <div className="w-16 mx-auto">
                        <Logo />
                    </div>
                    <div className="text-center mt-3">
                        <Title>
                            Daftar
                        </Title>
                    </div>
                    <div className="lg:px-6 mt-8">

                        {errorMessage
                        ? <div className="text-red-500 text-center mb-4 whitespace-pre-wrap">{errorMessage}</div>
                        : '' }

                        {infoMessage
                        ? <div className="text-green-500 text-center mb-4 whitespace-pre-wrap">{infoMessage}</div>
                        : '' }

                        <form method="post" onSubmit={(event) => registerUserHandler(event)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8">
                                <div>
                                    <Label>
                                        Nama Lengkap <RequiredMark/>
                                    </Label>
                                    <InputText
                                        type="text"
                                        onChange={(event) => setName(event.target.value)}
                                        value={name} />
                                </div>
                                <div>
                                    <Label>
                                        Email <RequiredMark/>
                                    </Label>
                                    <InputText
                                        type="text"
                                        onChange={(event) => setEmail(event.target.value)}
                                        value={email} />
                                </div>
                                <div>
                                    <Label>
                                        Password <RequiredMark/>
                                    </Label>
                                    <InputText
                                        type="password"
                                        onChange={(event) => setPassword(event.target.value)}
                                        value={password} />
                                </div>
                                <div>
                                    <Label>
                                        Ulangi Password <RequiredMark/>
                                    </Label>
                                    <InputText
                                        type="password"
                                        onChange={(event) => setPasswordConfirm(event.target.value)}
                                        value={passwordConfirm} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    color="default"
                                    className="w-full">
                                    {loading ? 'Memproses...' : 'Daftar'}
                                </Button>
                            </div>
                        </form>
                        <div className="mt-8">
                            <p className="text-center">
                                <span className="text-gray-600 dark:text-gray-300">
                                    Sudah punya akun?
                                </span>

                                <NavLink to="/login"
                                    className="ml-1 underline font-bold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300">
                                    Masuk
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