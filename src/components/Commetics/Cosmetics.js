import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    },[])
    return (
        <div>
            <h1>well come to my cosmetics store </h1>
            <div className='grid md:grid-cols-3 gap-4 py-10 m-auto max-w-[1140px] '>
            
            {
                cosmetics.map(cosmetic =>
                    <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    />)
                }
        </div>
            
        </div>
    );
};

export default Cosmetics;