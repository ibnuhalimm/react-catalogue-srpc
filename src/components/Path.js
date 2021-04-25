import React from 'react';
import { NavLink } from 'react-router-dom';

export const PathWrapper = props => {
    return (
        <div className="mb-4 w-full overflow-x-auto">
            <ul className="mx-1 breadcrumb">
                {props.children}
            </ul>
        </div>
    );
}


export const Link = props => {
    const { to } = props;

    return (
        <li className="inline-block">
            <NavLink to={to} className="text-gray-800 hover:underline">
                {props.children}
            </NavLink>
        </li>
    );
};


export const Separator = _ => {
    return (
        <li className="inline-block">
            <span className="text-gray-400">&raquo;</span>
        </li>
    );
};


export const CurrentLocation = props => {
    return (
        <li className="inline-block">
            <span className="text-gray-600">
                {props.children}
            </span>
        </li>
    );
};