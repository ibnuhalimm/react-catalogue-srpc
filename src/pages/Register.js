import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { InputText, Label, RequiredMark } from '../components/Form';
import logo from '../logo.svg';


function Register() {
    return (
        <main className="mt-10 mb-28">
            <div className="w-4/5 sm:w-2/5 md:w-4/5 lg:w-3/5 xl:max-w-xl mx-auto">
                <div className="bg-transparent md:bg-white md:rounded-lg md:shadow-lg md:px-8 lg:px-3 md:py-10">
                    <div className="w-32 mx-auto">
                        <img src={logo} className="w-full h-auto" />
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Register
                        </h1>
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
                                <span className="text-gray-600">
                                    Already have an account?
                                </span>

                                <NavLink to="/login"
                                    className="ml-1 underline font-bold text-gray-700 hover:text-gray-900 transition-all duration-300">
                                    Login
                                </NavLink>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;