import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';


const SongItem = ({image,id,name,desc}) => {

  const {playerWithId}=useContext(PlayerContext);
  return (
    <div onClick={()=>playerWithId(id)} className='min-w-[180px] rounded cursor-pointer p-2 px-3 hover:bg-[#ffffff26]'>
      <img  className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm '>{desc}</p>
    </div>
  )
}

export default SongItem