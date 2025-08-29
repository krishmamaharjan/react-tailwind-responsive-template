// import React from 'react'

const Header = () => {
  return (
    <div className="">
        <header className="relative bg-[#4A90E2] text-black p-5 flex items-center justify-start" >
            <h1 className="text-xl font-bold">TourNepal</h1>
            <nav className="absolute left-1/2 transform -translate-x-1/2 space-x-4 flex justify-between items-center">
                <a href="" className="hover:underline">Home</a>
                <a href="" className="hover:underline">About</a>
                <a href="" className="hover:underline">Services</a>
            </nav>
        </header>
    </div>
  )
}

export default Header;
