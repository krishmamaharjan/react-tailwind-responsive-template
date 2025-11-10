import React from 'react'

export const TailwindExample = () => {
  return ( 
  <div className="bg-white dark:bg-black  text-black dark:text-white">
    <h1 className="bg-[#ev211f]">Dark mode disabled</h1>


    <div className="sm:bg-amber-500 md:bg-amber-700   " >
        <div className="card">
            <h1 className="text-center text-xl text-cyan-500 mt-2 font-mono font-extrabold text-[30px]">Welcome to learn Tailwindcss</h1>
        </div>

        <div className="grid grid-cols-5 gap-2 mt-2 mx-2">
            <div className="h-16 w-16 rounded-full bg-blue-500 "></div>
            <div className="h-16 w-16 rounded-full bg-red-500 "></div>
            <div className="h-16 w-16 rounded-full bg-green-500 "></div>
        </div>


    </div>
    <h1 className="bg-[#80D8C3] text-chestnut p-[20px] text-[20px]">Dark mode disabled</h1>

    </div>
  )
}

// flex flex-col  items-center justify-center space-y-6 mt-2