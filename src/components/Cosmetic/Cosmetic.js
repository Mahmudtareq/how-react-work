import React from 'react';

const Cosmetic = ({ cosmetic }) => {
    const { id, name, price } = cosmetic;
    const handler = (id) => {
        console.log('items added',id);

    };
    // const addToCartWithParam = () => handler(id);
    return (
        <div className='border bg-slate-600 p-8   rounded-lg text-white'>
            <h5>Id: {id}</h5>
            <h4>Name : {name}</h4>
            <p>Price : {price}</p>
            <button onClick={()=>handler(id)} className='bg-gray-900 border rounded-lg text-white p-2 mt-3'>Add to cart</button>
        </div>
    );
};

export default Cosmetic;