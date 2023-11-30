import React, { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import CardBody from '../Components/CardBody';
import CardHeader from '../Components/CardHeader';
import { CurrentLocation, Link, PathWrapper, Separator } from '../Components/Path';
import light_theme_preview from '../Img/Theme/light_preview.svg';
import dark_theme_preview from '../Img/Theme/dark_preview.svg';
import { ThemeContext } from '../Context/themeContext';
import { PageTitleContext } from '../Context/pageTitleContext';
import AppLayout from '../Components/AppLayout';


function Settings() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { pageTitle, setPageTitle } = useContext(PageTitleContext);

    useEffect(() => {
        setPageTitle('Pengaturan');
    }, [setPageTitle]);

    const isDark = () => {
        return theme === 'dark';
    }

    const toggleThemeHandler = color => {
        setTheme(color);
    }

    return (
        <AppLayout>
            <PathWrapper>
                <Link to="/">Beranda</Link>
                <Separator></Separator>
                <CurrentLocation>
                    {pageTitle}
                </CurrentLocation>
            </PathWrapper>
            <Card>
                <CardHeader>
                    <h1 className="text-xl">Pengaturan Tema</h1>
                </CardHeader>
                <CardBody>
                    <div className="px-6 pb-10">
                        <div className="w-full sm:w-3/5 md:w-1/2 lg:w-2/5 flex flex-row">
                            <div className="w-1/2 mr-2">
                                <div
                                    className={isDark()
                                            ? 'border-2 border-solid rounded-lg bg-gray-500 hover:cursor-pointer border-gray-500'
                                            : 'border-2 border-solid rounded-lg bg-white hover:cursor-pointer border-react-blue'}
                                    onClick={() => toggleThemeHandler('light')}>
                                    <img src={light_theme_preview} alt="Light Theme Preview" className="rounded-md rounded-bl-none rounded-br-none"/>
                                    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-500 rounded-lg rounded-tl-none rounded-tr-none">
                                        <div className="flex items-center">
                                            <div className={isDark()
                                                        ? 'bg-white border-4 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 border-gray-300'
                                                        : 'bg-white border-4 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 border-react-blue'}></div>
                                            <span>
                                                Light
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 ml-2">
                                <div
                                    className={isDark()
                                        ? 'border-2 border-solid rounded-lg bg-gray-500 hover:cursor-pointer border-react-blue'
                                        : 'border-2 border-solid rounded-lg bg-white hover:cursor-pointer border-gray-500'}
                                    onClick={() => toggleThemeHandler('dark')}>
                                    <img src={dark_theme_preview} alt="Dark Theme Preview" className="rounded-md rounded-bl-none rounded-br-none"/>
                                    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-500 rounded-lg rounded-tl-none rounded-tr-none">
                                        <div className="flex items-center">
                                            <div className={isDark()
                                                        ? 'bg-white border-4 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 border-react-blue'
                                                        : 'bg-white border-4 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 border-gray-300'}></div>
                                            <span>
                                                Dark
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </AppLayout>
    );
}

export default Settings;