import React from 'react'

const validation = (props) => {
    let message = '';
    const long = 'Text long enough';
    (props.textLength < 5) ? message = 'Text too short' : message='Text long enough';

    return (
        <div>
            <p>{message}</p>
        </div>
    )};

export default validation;