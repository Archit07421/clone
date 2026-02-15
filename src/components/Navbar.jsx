import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className='w-full flex justify-between items-cneter font-semiblod'>
        <div className='flex items-center gap-2'>
          <img onClick={()=>navigate(-1)} className="w-8 rounded-2xl cursor-pointer p-2 bg-black" src={assets.arrow_left} alt="" />
          <img onClick={()=>navigate(1)} className="w-8 rounded-2xl cursor-pointer p-2 bg-black" src={assets.arrow_right} alt="" />

        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black rounded-2xl px-4 py-1 text-[15px] hidden cursor-pointer md:block'>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
          <p className='bg-purple-500 text-black rounded-full w-7 h-7 flex items-center justify-center'>A</p>

        </div>

      </div>
      <div className='flex items-center gap-2 mt-4 cursor-pointer'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar