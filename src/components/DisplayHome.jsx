import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='mb-4'>
        <h1 className='font-bold text-2xl my-5'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}></AlbumItem>))}
        </div>
        

      </div>
      <div className='mb-4'>
        <h1 className='font-bold text-2xl my-5'>Today's Biggest hits </h1>
        <div className='flex overflow-auto'>
          {songsData.map((items,index)=>(<SongItem key={index} name={items.name} desc={items.desc} image={items.image} id={items.id}></SongItem>))}
        </div>
        

      </div>


    </>
  )
}

export default DisplayHome