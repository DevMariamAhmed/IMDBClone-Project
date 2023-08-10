"use client"

import React,{useState,useEffect} from 'react'
import{BsMoonFill} from 'react-icons/bs'
import{MdLightMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
function DarkMode() {
  const{systemTheme,theme,setTheme}=useTheme();
  const[mounted,setMounted] =useState(false)
  const currentTheme = theme === 'system' ? systemTheme : theme;
 useEffect(()=>setMounted(true),[])
  return (
    <>
      {mounted &&
       (currentTheme === "dark" ? (<MdLightMode 
       onClick={() => setTheme('light')} className="text-xl cursor-pointer hover:text-amber-600"
       />):(<BsMoonFill onClick={()=>setTheme('dark')}/>))}
    </>
  )
}

export default DarkMode

