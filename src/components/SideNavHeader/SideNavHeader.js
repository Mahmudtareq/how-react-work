import React from 'react';

const SideNavHeader = () => {
    return (
        <div className=' hover:ring-offset-3 hover:ring-2 ring-slate-600  mx-auto my-3 bg-[#DDDDDD] rounded-xl shadow-md overflow-hidden max-w-[450px] h-full p-10 space-y-8 md:max-h-4xl'>
            <h1 className='text-left text-bold text-[#4C43B7] text-4xl'>Archive</h1>
            <div className='rounded-lg  p-5 flex items-center justify-between border bg-[#C7C1C1] text-dark'>Year <span>
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M11.826 15.1268L0.328387 0.69837L24.2763 0.917706L11.826 15.1268Z" fill="black"/>
</svg>
</span></div>
        </div>
    );
};

export default SideNavHeader;