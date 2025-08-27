import {Typewriter} from 'react-simple-typewriter';
import {ReactTyped} from 'react-typed';
const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
        <p className='text-[#DC143C] text-2xl font-bold p-2'>Welcome to Nepal</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Explore Plan Travel</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold pr-2 py-4'>Explore</p>
          {/* <Typewriter strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop /> */}
          <ReactTyped 
            className='md:text-5xl sm:text-4xl text-xl font-bold pr-2 text-[#4A90E2]'
            strings={['Mountains','Adventures','Cultures','Festivals']} 
            typeSpeed={120} 
            backSpeed={140} 
            loop 
          /> 
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut, magni incidunt consequuntur quos aperiam soluta et laboriosam quaerat culpa impedit natus asperiores, placeat dignissimos labore in nisi neque. Accusamus?</p>


          <button className='bg-[#F8C165] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
      
    </div>
  )
}

export default Hero;
