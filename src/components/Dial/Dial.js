import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'3px solid yellow',margin:"10px",padding:'10px'}}>
            <h2>This is dial</h2>
            <p>Step count so far :{ props.steps}</p>
        </div>
    );
};

export default Dial;