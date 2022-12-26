import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const BlogSideNav = () => {
    return (
        <div className=' hover:ring-offset-3 hover:ring-2 ring-slate-600  mx-auto my-3 bg-[#DDDDDD] rounded-xl shadow-md overflow-hidden max-w-[450px] h-full p-10 space-y-8 md:max-h-4xl'>
            <h1 className='text-center my-3 mb-4 text-bold text-[#4C43B7] text-4xl'>Recent Post</h1>
            <div className='flex items-center '>
               
                <BsFillArrowRightCircleFill size={30}className='mr-2' />
                 <span className=" tracking-wide font-semibold text-sm text-[#000000] text-left cursor-pointer">What’s New with VMware vSphere 7?</span>
            </div>
            <div className='flex items-center '>
                <BsFillArrowRightCircleFill size={30}className='mr-2' /> <span className=" tracking-wide font-semibold text-sm text-[#000000] text-left cursor-pointer">What’s New with VMware vSphere 7?</span>
            </div>
            <div className='flex items-center '>
                <BsFillArrowRightCircleFill size={30}className='mr-2' /> <span className=" tracking-wide font-semibold text-sm text-[#000000] text-left cursor-pointer">What’s New with VMware vSphere 7?</span>
            </div>
            <div className='flex items-center '>
                <BsFillArrowRightCircleFill size={30}className='mr-2' /> <span className=" tracking-wide font-semibold text-sm text-[#000000] text-left cursor-pointer">What’s New with VMware vSphere 7?</span>
            </div>
            <div className='flex items-center '>
                <BsFillArrowRightCircleFill size={30}className='mr-2' /> <span className=" tracking-wide font-semibold text-sm text-[#000000] text-left cursor-pointer">What’s New with VMware vSphere 7?</span>
            </div>
            <div className='flex items-center '>
                <BsFillArrowRightCircleFill size={30}className='mr-2' /> <span className=" tracking-wide font-semibold text-sm text-[#000000] text-left cursor-pointer">What’s New with VMware vSphere 7?</span>
            </div>
        </div>
    );
};

export default BlogSideNav;