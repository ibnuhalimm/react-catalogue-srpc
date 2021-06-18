import React from 'react';
import { Link } from 'react-router-dom';

function TableButtonLink(props) {
    const { color, to, onClick } = props;

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

        case 'default':
            colorTheme = 'bg-react-blue text-react-black';
            break;

        default:
            colorTheme = 'bg-react-blue text-react-black';
            break;
    }

    return (
        <Link to={to} className={`${colorTheme} outline-none focus:outline-none inline-flex items-center hover:bg-opacity-80 transition duration-300 px-4 py-1 rounded-md text-xs shadow-md mx-1 mb-1`}
            onClick={onClick}>
            {props.children}
        </Link>
    );
};

export default TableButtonLink;