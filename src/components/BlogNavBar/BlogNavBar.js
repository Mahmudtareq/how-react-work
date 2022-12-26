import React from 'react';

const BlogNavBar = () => {
    return (
        <div className='max-w-[1140px] mx-auto my-5 p-4  bg-white flex justify-between items-center relative'>
            <div className=' uppercase text-start text-[#000000] text-3xl'>
               Blog
            </div>
            <div className='flex items-center justify-between'>
                <div className='mr-4 '>
                    <p className=''>Short By:</p>
                </div>
                <div className='mr-2 '>
                    <span className='flex items-center justify-center'>
                         Category
                    <svg width="16" className='ml-3' height="12" margin-left="20" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.826 15.1268L0.328387 0.69837L24.2763 0.917706L11.826 15.1268Z" fill="black" />
                    </svg>
                </span>
           </div>
            <div className='ml-3'>
                <span  className='flex items-center justify-center'>Rating
                    <svg width="16" height="12"  className='ml-3' viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.826 15.1268L0.328387 0.69837L24.2763 0.917706L11.826 15.1268Z" fill="black" />
                    </svg>
                </span>
           </div>

            </div>
          
        </div>
    );
};

export default BlogNavBar;