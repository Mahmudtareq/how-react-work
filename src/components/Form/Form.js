import React from 'react';

const Form = () => {
    return (
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  p-6'>
            <form >
                <div>
                    <label className='block'>
                    <span className='block text-sm font-medium text-slate-700'>User Name</span>
                        <input className='mt-1  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:' type="text" placeholder='name' />
                    </label>
                    <label className='block'>
                    <span className='block text-sm font-medium text-slate-700'>User Email</span>
                        <input className='mt-1  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:' type="email" placeholder='Email' />
                    </label>
                </div>
                
                
              </form>
        </div>
    );
};

export default Form;