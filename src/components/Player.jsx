import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

    const {seekBg,seekBar,playStatus,Play,Pause}=useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black text-white flex items-center justify-between'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                <img onClick={Play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img onClick={Pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />

            </div>
            <div className='flex items-center gap-5'>
                <p>1:06</p>
                <div ref={seekBg} className='w-[60vw] rounded-full bg-gray-300 cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>3:08</p>
            </div>
        </div>
    </div>
  )
}

export default Player;