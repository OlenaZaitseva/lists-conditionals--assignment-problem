import React from 'react'
import Char from'./Char.css'
const char  = (props) =>
{
    return (
        <p className="Char" onClick={props.click}>{props.character}</p>
    )
};

export default char