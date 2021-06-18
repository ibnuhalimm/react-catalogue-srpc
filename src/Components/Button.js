import React from 'react';

function Button(props) {
    const { color, onClick, className, type } = props;

    let colorTheme = 'bg-green-500 text-white';

    switch (color) {
        case 'red':
            colorTheme = 'bg-red-500 text-white';
            break;

        case 'green':
            colorTheme = 'bg-green-500 text-white';
            break;

        case 'blue':
            colorTheme = 'bg-blue-500 text-white';
            break;

        case 'gray':
            colorTheme = 'bg-gray-500 text-white';
            break;

        case 'default':
            colorTheme = 'bg-react-blue text-react-black';
            break;

        default:
            colorTheme = 'bg-react-blue text-react-black';
            break;
    }

    return (
        <button
            type={type ? type : 'button'}
            className={`${colorTheme} inline-flex items-center justify-center outline-none focus:outline-none px-5 py-2 h-10 rounded-md shadow-md mb-1 hover:bg-opacity-80 transition duration-300 text-sm ${className}`}
            onClick={onClick}>
            {props.children}
        </button>
    );
}

export default Button;