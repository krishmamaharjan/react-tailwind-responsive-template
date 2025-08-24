import React from 'react'
import {
    FaInstagramSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare
} from 'react-icons/fa';
const Footer2 = () => {
  return (
    <div className='bg-[#4A90E2] ma-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-black'>Travel Nepal</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi repellendus adipisci?</p>
            <div className='flex justify-between md:w-[75%] my-6'>
              <FaInstagramSquare  size={30}/>
              <FaFacebookSquare size={30}/>
              <FaGithubSquare size={30}/>
              <FaTwitterSquare  size={30} />
            </div>
        </div>

        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
              
            </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
              
            </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
              
            </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
              
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer2;
