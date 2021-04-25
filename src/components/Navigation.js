import React, { useState } from 'react';
import logo from '../logo.svg';

function Navigation() {
    const [ sidebarClass, setSidebarClass ] = useState('');
    const [ backdropClass, setBackdropClass ] = useState('opacity-0 pointer-events-none');

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


    return (
        <header className="fixed top-0 left-0 w-full border border-solid border-t-0 border-r-0 border-l-0 border-gray-200 bg-white">
            <nav className="flex flex-row items-center justify-between xl:justify-end">
                <div className={ backdropClass + ' w-full h-full fixed inset-0 z-20 transition-opacity duration-500' }
                    onClick={() => toggleSidebarHandler('close')}>
                    <div className="absolute w-full h-full bg-gray-900 bg-opacity-50 z-40"></div>
                </div>
                <div className={ sidebarClass + ' transform -translate-x-full xl:translate-x-0 fixed top-0 left-0 w-[63%] sm:w-1/3 lg:w-1/4 xl:w-52 h-full bg-white xl:bg-transparent ease-in-out transition-all duration-300 z-30 border lg:border-0 border-solid border-t-0 border-r-0 border-b-0 border-gray-100' }>
                    <div className="w-full h-full flex flex-col overflow-y-auto">
                        <div className="w-1/2 xl:w-full py-4">
                            <a href="index.html" className="block xl:relative xl:-top-3 xl:mx-3">
                                <img src={logo} alt="PKL IKU" className="w-16 h-auto" />
                            </a>
                        </div>
                        <div className="w-full">
                            <a href="index.html" className="w-11/12 px-4 xl:px-6 py-3 xl:py-2 text-gray-600 xl:text-blue-600 inline-flex items-center rounded-full rounded-tl-none rounded-bl-none bg-blue-100 xl:bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                </svg>
                                <span className="ml-4">
                                    Categories
                                </span>
                            </a>
                            <a href="index.html" className="w-11/12 px-4 xl:px-6 py-3 xl:py-2 text-gray-600 inline-flex items-center rounded-full rounded-tl-none rounded-bl-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                                    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
                                </svg>
                                <span className="ml-4">
                                    Products
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 xl:hidden">
                    <button type="button"
                        className="p-5 md:px-10 outline-none focus:outline-none"
                        onClick={() => toggleSidebarHandler('open')}>
                        <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="w-1/3 py-3 xl:hidden">
                    <a href="index.html" className="block h-8 w-20 mx-auto relative -top-1">
                        <img src={logo} alt="PKL IKU" className="w-14 h-auto mx-auto" />
                    </a>
                </div>
                <div className="w-1/3 xl:pr-5">
                    <a href="index.html" className="px-6 py-5 md:px-10 xl:py-4 outline-none focus:outline-none float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;