import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:'1px solid green',margin:"10px"}}>
            <h2>Name : {props.name}</h2>
            <p>Total step count : {props.steps}</p>
            <Dial steps={props.steps} />
        </div>
    );
};

export default Display;