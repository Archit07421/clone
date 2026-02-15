import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets';
import {useParams} from 'react-router-dom'

const DisplayAlbum = () => {

  const {id} = useParams();
  const albumData = albumsData[id]

  return (
    <>
      <Navbar></Navbar>
      <div className=''>

      </div>
    </>
  )
}

export default DisplayAlbum