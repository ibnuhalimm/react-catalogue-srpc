import React from 'react';

function Button(props) {
    const { color, onClick } = props;

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
        <button className={`${colorTheme} outline-none focus:outline-none inline-flex items-center hover:bg-opacity-80 transition duration-300 px-5 py-2 rounded-md text-sm shadow-md mx-1 mb-1`}
            onClick={onClick}>
            {props.children}
        </button>
    );
}

export default Button;