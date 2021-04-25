import React from 'react';

function CardHeader(props) {
    return (
        <div className="p-5">
            {props.children}
        </div>
    );
}

export default CardHeader;