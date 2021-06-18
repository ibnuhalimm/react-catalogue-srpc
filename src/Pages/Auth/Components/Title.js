import React from 'react';


function Title({ children }) {
    return (
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
            {children}
        </h1>
    );
}

export default Title;