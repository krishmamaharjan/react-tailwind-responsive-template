import React from 'react'
import { useState } from 'react';
import '@fontsource/poppins';
import { FiAlignJustify , FiX} from "react-icons/fi";
const Navbar = () => {

    const [nav, setNav]= useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
// max-w-[1230px]
  return (
    <div className=' flex justify-between items-center h-24  text-black font-poppins bg-[#4A90E2] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold '>TravelNepal</h1>
        <ul className='hidden md:flex gap-9 mx-auto items-center' >
            <li className='p-4'>Home</li>
            <li className='p-4 whitespace-nowrap'>About Us</li>
            <li className='p-4 whitespace-nowrap'>Places to go</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Explore</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden ease-in duration-500'>
            {nav ? <FiX size={20} /> : <FiAlignJustify  size={20}/>}
            {/* <AiOutlineMenu size={20} /> */}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-{60%} border-r-gray-900 bg-gray-50 ease-in-out duration-500' : 'fixed left-[-100%]'} >
        <h1 className='w-full text-3xl font-bold m-8 '>TravelNepal</h1>

            <ul className='uppercase bg-green-50' >
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About Us</li>
                <li className='p-4 border-b border-gray-600'>Places to go</li>
                <li className='p-4 border-b border-gray-600'>Services</li>
                <li className='p-4 border-b border-gray-600'>Explore</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
