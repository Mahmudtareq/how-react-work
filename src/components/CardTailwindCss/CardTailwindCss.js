import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { BsBook } from "react-icons/bs";

const CardTailwindCss = () => {
    return (
  <div className="my-5 p-3 max-w-md mx-auto hover:ring-offset-3 hover:ring-2 ring-slate-600  bg-[#DDDDDD] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-40 w-full hover:ring-offset-3 hover:ring-4  object-cover md:h-full md:w-48 rounded-lg" src="https://i.ibb.co/BPkczkN/login-1.png" alt="Modern building architecture"/></div>
          
              <div className="p-8 justify-center sm:space-y-4">
                <h2 className="uppercase tracking-wide font-bold text-sm text-[#000000] text-left">What’s New with VMware vSphere 7?
            </h2>
            <div className='sm:flex justify-between  items-center my-2 m-auto'>
              <div className='flex items-center '>
                <CiClock2   className=' mr-2 text-bold' size={25}/> <span className=' cursor-pointer text-[ #000000] font-semibold'>  14 oct 2014</span>
              
              </div>
              <div className='flex items-center cursor-pointer'>
                <BsBook className=' mr-2 text-bold' size={25} /><span className='cursor-pointer text-[ #000000] font-semibold'>Security Awarness Training</span>
              </div>
            </div>
                    <p className="mt-2 text-[ #000000] text-justify">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
          </div>
</div>
    );
};

export default CardTailwindCss;