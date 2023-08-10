import React from 'react'
import Menuitems from './Menuitems'
import { AiFillHome,AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link';
import DarkMode from './DarkMode';

function Header() {
  return (
    <>
    
    <div className='flex justify-between mx-2 max-w-5xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <Menuitems title={'Home'} address={"/"} icon={AiFillHome}/>
        <Menuitems title={'About'} address={"/about"} icon={AiFillInfoCircle}/>
      </div>
      <div className='flex space-x-5 items-center'>
      <DarkMode ></DarkMode>
        <Link href="/">
            
            <h2 className='text2xl'>
                <span className='font-bold bg-amber-600 py-1 px-2 rounded-lg my-3'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </h2>
        </Link>
      </div>
      </div>  
     
    </>
  )
}

export default Header
