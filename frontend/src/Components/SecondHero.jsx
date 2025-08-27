
import nepal from '../images/Form_nepal.png';
const SecondHero = () => {
  return (
    <div className='w-full bg-green-100 py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 ' src={nepal} alt="/" />
                <div className='flex flex-col justify-center px-4'>
                    <p className='text-[#4A90E2] font-bold'>Lorem ipsum dolor sit amet.</p>
                    <h1 className='md-text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae
                        delectus iure, optio, quas aut voluptatum nobis rerum aperiam maxime, ipsum ad ex. 
                        Voluptatibus quo expedita cumque deserunt voluptatem fugit.
                    </p>
                    <button className='bg-[#F8C165] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black md:mx-0'>View All</button>

                </div>
        </div>

    </div>
  )
}

export default SecondHero;
