import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-black px-8 '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Contact Us</h1>
                <p>To learn more about destinations, request tailored travel plans, or share your feedback.</p>
            </div>

            <div className='my-4 '>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    {/* <input className=' flex w-full text-black py-3 rounded-md font-medium my-6 mx-auto p-3'
                        type="email" 
                        placeholder='Enter E-mail' 
                    /> */}
                    <input className=' flex w-full text-black py-3 rounded-md font-medium my-6 mx-auto p-3'
                        type="text" 
                        placeholder='Message' 
                    />

                    <button className='bg-[#F8C165] w-[200px] rounded-md text-black font-medium my-4 mx-auto py-3  ml-4'>Send</button>
                </div>

                <p>Feel free to drop us a message. <span className='text-[#4A90E2]'>We’ll get back to you soon</span></p>
            </div>
        </div>

    </div>
  )
}

export default NewsLetter;
