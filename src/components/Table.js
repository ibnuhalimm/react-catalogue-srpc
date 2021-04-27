import React from 'react';

export const Table = props => {
    return (
        <table className="table-data">
            {props.children}
        </table>
    );
}

export const Thead = props => {
    return (
        <thead className="border border-l-0 border-r-0 border-solid border-gray-200 dark:border-gray-500">
            {props.children}
        </thead>
    );
};

export const Tbody = props => {
    return (
        <tbody>
            {props.children}
        </tbody>
    );
};

export const Tr = props => {
    return (
        <tr className="border border-solid border-t-0 border-r-0 border-l-0 border-gray-200 dark:border-gray-500">
            {props.children}
        </tr>
    );
};

export const Th = props => {
    const { className } = props;

    return (
        <th className={`px-5 py-3 text-left font-bold ${className}`}>
            {props.children}
        </th>
    );
};

export const Td = props => {
    const { className, colspan } = props;

    return (
        <td className={`px-5 py-3 ${className}`} colSpan={colspan}>
            {props.children}
        </td>
    );
};