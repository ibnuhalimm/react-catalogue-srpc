import React from 'react';

function Card(props) {
    return (
        <div className="w-full bg-white border border-solid border-gray-200 rounded-lg">
            {props.children}
        </div>
    );
}

export default Card;