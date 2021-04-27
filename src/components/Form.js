import React from 'react';


export function FormGroup(props) {
    return (
        <div className="mb-4">
            {props.children}
        </div>
    );
}


export function Label(props) {
    return (
        <label className="block mb-2">
            {props.children}
        </label>
    );
}


export function InputText(props) {
    const { onChange, name, value } = props;

    return (
        <input
            type="text"
            className="outline-none focus:outline-none w-full border border-solid border-gray-200 dark:border-gray-500 rounded-md px-4 py-2 dark:bg-gray-500"
            name={name}
            onChange={onChange}
            value={value} />
    );
}