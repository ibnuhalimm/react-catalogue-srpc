import React from 'react';


function Card({children}) {
    return (
        <div className="bg-transparent md:bg-white dark:md:bg-gray-700 md:rounded-lg md:shadow-lg md:px-8 lg:px-3 md:py-10">
            {children}
        </div>
    );
}

export default Card;