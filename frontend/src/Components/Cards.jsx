import React from 'react'
import Everest from "../images/Everest.png";
import Swayambhunath from "../images/Swayambhunath.png";
import Fewa from "../images/Fewa.png";
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-0 text-center rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Everest} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Mt. Everest</h2>
            <p className='text-center text-4xl font-bold'>lorem </p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
              <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>
              <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>
            </div>
            <button className='bg-[#F8C165] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black' >View More</button>
            
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 text-center rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Swayambhunath} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Mt. Everest</h2>
            <p className='text-center text-4xl font-bold'>lorem </p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
              <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>
              <p className='py-2 border-b mx-8 '>Lorem, ipsum dolor.</p>
            </div>
            <button className='bg-[#F8C165] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black' >View More</button>
            
        </div>

        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4  my-4 text-center rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Fewa} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 bg-transparent'>Mt. Everest</h2>
            {/* <p className='text-center text-4xl font-bold'>lorem </p> */}
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
              
            </div>
            <button className='bg-[#F8C165] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black' >View More</button>
            
        </div>
        
      </div>

      

      
      
    </div>
  )
}
export default Cards;
