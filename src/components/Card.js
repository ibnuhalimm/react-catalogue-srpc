import React from 'react';

function Card(props) {
    return (
        <div className="w-full bg-white dark:bg-gray-500 dark:bg-opacity-30 border border-solid border-gray-200 dark:border-gray-500 rounded-lg">
            {props.children}
        </div>
    );
}

export default Card;