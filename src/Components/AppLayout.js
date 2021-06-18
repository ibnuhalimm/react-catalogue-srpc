import React from 'react';
import Navigation from './Navigation';


function AppLayout({children}) {
    return (
        <>
            <Navigation/>
            <main className="my-20 xl:ml-52">
                <div className="px-5 xl:px-10">
                    {children}
                </div>
            </main>
        </>
    );
}

export default AppLayout;