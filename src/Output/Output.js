import React from 'react'

const output = (props) => {
    return (
        <div>
            <input type='text' onChange={props.changed} value={props.input}/>
            <p>{props.output}</p>
        </div>
    )};

export default output;