import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div className='w-[100%] text-white bg-[#121212] rounded overflow-auto m-2 px-6 pt-4 lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome></DisplayHome>} />
        <Route path='/album/:id' element={<DisplayAlbum></DisplayAlbum>} />
      </Routes>
    </div>
  )
}

export default Display