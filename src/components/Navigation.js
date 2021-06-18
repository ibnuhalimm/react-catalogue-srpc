import React, { useState } from 'react';
import logo from '../logo.svg';
import { NavLink, Redirect } from 'react-router-dom';
import { logoutUser } from '../context/Auth/action';
import { useAuthDispatch } from '../context/Auth/context';


function Navigation(props) {
    const [ sidebarClass, setSidebarClass ] = useState('');
    const [ backdropClass, setBackdropClass ] = useState('opacity-0 pointer-events-none');

    const dispatch = useAuthDispatch();

    const toggleSidebarHandler = (action) => {
        let currentSidebarClass = '';
        let currentBackdropClass = 'opacity-0 pointer-events-none';

        if (action === 'open') {
            currentSidebarClass = 'left-sidebar--open';
            currentBackdropClass = '';
        }

        setSidebarClass(currentSidebarClass);
        setBackdropClass(currentBackdropClass);
    };


    const logoutUserHandler = () => {
        logoutUser(dispatch);
        window.location.href = '/login';
    }


    return (
        <header className="fixed top-0 left-0 w-full border border-solid border-t-0 border-r-0 border-l-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-600">
            <nav className="flex flex-row items-center justify-between xl:justify-end">
                <div className={ backdropClass + ' w-full h-full fixed inset-0 z-20 transition-opacity duration-500' }
                    onClick={() => toggleSidebarHandler('close')}>
                    <div className="absolute w-full h-full bg-gray-900 bg-opacity-50 z-40"></div>
                </div>
                <div className={ sidebarClass + ' transform -translate-x-full xl:translate-x-0 fixed top-0 left-0 w-[63%] sm:w-1/3 lg:w-1/4 xl:w-52 h-full bg-white dark:bg-gray-600 xl:bg-transparent dark:xl:bg-transparent ease-in-out transition-all duration-300 z-30 border lg:border-0 border-solid border-t-0 border-r-0 border-b-0 border-gray-100' }>
                    <div className="w-full h-full flex flex-col overflow-y-auto">
                        <div className="w-1/2 xl:w-full py-4">
                            <NavLink to="/" className="block xl:relative xl:-top-3 xl:mx-3">
                                <img src={logo} alt="Webservice" className="w-16 h-auto" />
                            </NavLink>
                        </div>
                        <div className="w-full">
                            <NavLink to="/"
                                exact
                                className="w-11/12 px-4 xl:px-6 py-3 xl:py-2 text-gray-600 dark:text-gray-100 inline-flex items-center rounded-full rounded-tl-none rounded-bl-none"
                                activeClassName="bg-blue-100 dark:bg-gray-700 text-blue-600 bg-transparent"
                                onClick={() => toggleSidebarHandler('close')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                </svg>
                                <span className="ml-4">
                                    Kategori
                                </span>
                            </NavLink>
                            <NavLink to="/settings"
                                className="w-11/12 px-4 xl:px-6 py-3 xl:py-2 text-gray-600 dark:text-gray-100 inline-flex items-center rounded-full rounded-tl-none rounded-bl-none"
                                activeClassName="bg-blue-100 dark:bg-gray-700 text-blue-600 bg-transparent"
                                onClick={() => toggleSidebarHandler('close')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                </svg>
                                <span className="ml-4">
                                    Pengaturan
                                </span>
                            </NavLink>
                            <button type="button"
                                className="w-11/12 px-4 xl:px-6 py-3 xl:py-2 text-gray-600 dark:text-gray-100 inline-flex items-center rounded-full rounded-tl-none rounded-bl-none"
                                onClick={() => logoutUserHandler()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                </svg>
                                <span className="ml-4">
                                    Logout
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 xl:hidden">
                    <button type="button"
                        className="p-5 md:px-10 outline-none focus:outline-none"
                        onClick={() => toggleSidebarHandler('open')}>
                        <svg className="h-6 w-6 text-gray-700 dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="w-1/3 py-3 xl:hidden">
                    <NavLink to="/" className="block h-8 w-20 mx-auto relative -top-1">
                        <img src={logo} alt="Webservice" className="w-14 h-auto mx-auto" />
                    </NavLink>
                </div>
                <div className="w-1/3 xl:pr-5">
                    <NavLink to="/" className="px-6 py-5 md:px-10 xl:py-4 outline-none focus:outline-none float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-100" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;