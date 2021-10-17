import React from 'react';

function Project (props){
    return (
        <div>
        <h1>Here is my {props.name}</h1>
        <p>Paragraph {props.description}</p>
        </div>
    )
}

export default Project