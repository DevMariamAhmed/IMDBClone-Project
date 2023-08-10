import React from 'react'
import Nabaritem from './Nabaritem'

function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
    <Nabaritem title={'Trending' }param='fetchTrending'/>
    <Nabaritem title={'top Rated' }param='fetchTopRated'/>
    </div>
   
  )
}

export default Navbar
