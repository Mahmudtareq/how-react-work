import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const handleStepCount = () => {
        const stepsCount = steps + 1;
        setSteps(stepsCount);
        // console.log(steps);
    }
    useEffect(() => {
        console.log(steps);
    },[steps])
    return (
    <>
        <div style={{border:'3px solid yellow',margin:"10px",padding:'10px'}}>
            <h1>This is my smart  watch</h1>
            <h3>My Current Steps : {steps}</h3>
            <button  style={{backgroundColor:'green',padding:'10px'}}  onClick={handleStepCount}>Step Count</button>
            <Display name='garmin' steps={steps} />
        </div>
             {/* <Display name='garmin' steps={steps} /> */}
    </>
    );
};

export default Watch;