import React from 'react'
import Link from 'next/link'
function Menuitems({title,address,icon}){
  return (
    <>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-500'>
       <icon className='text-2xl sm:hidden mx-2'/>
        <span className='hidden sm:inline my-2 text-sm'>{title}</span>
      </Link>
    </>
  )
}

export default Menuitems
