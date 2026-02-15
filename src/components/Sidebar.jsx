import React from 'react';
import {assets} from '../assets/assets';

const Sidebar = () =>{
    return (
        <div className='w-[25%] flex-col h-full p-2 gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.home_icon} alt="home" className='w-5'/>
                    <p className='text-sm font-semibold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.search_icon} alt="search" className='w-5'/>
                    <p className='text-sm font-semibold'>Search</p>
                </div>
            </div>

            <div className='h-[85%] bg-[#121212] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src={assets.stack_icon} alt="" />
                        <p className='font-semibold'>Your library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-4' src={assets.arrow_icon} alt="" />
                        <img className='w-4' src={assets.plus_icon} alt="" />
                        
                    </div>
                </div>
                <div className='bg-[#242424] p-4 rounded m-2 font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>it's easy we will help you</p>
                    <button className='bg-white text-black rounded-full px-4 py-1.5 mt-4 text-[15px]'>Create playlist</button>
                </div>
                <div className='bg-[#242424] p-4 rounded m-2 font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-2'>
                    <h1>let's find some podcast for you</h1>
                    <p className='font-light'>we will keep you updated with new podcasts</p>
                    <button className='bg-white text-black rounded-full px-4 py-1.5 mt-4 text-[15px]'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;