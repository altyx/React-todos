import React from "react";
import './task.css';

const task = (props) => {
    return (
        <div className="task">
            <h1>{props.title}</h1> 
            <p>{props.content}</p>
        </div>
    );
};

export default task;