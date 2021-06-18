import React, { createContext, useEffect, useState } from 'react';

export const PageTitleContext = createContext();

export const PageTitleProvider = ({ children }) => {
    const [ pageTitle, setPageTitle ] = useState('React App');

    const setPageTitleHandler = (pageTitle) => {
        document.title = pageTitle;
    }

    useEffect(() => {
        setPageTitleHandler(pageTitle);
    }, [pageTitle]);

    return (
        <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
            {children}
        </PageTitleContext.Provider>
    );
}