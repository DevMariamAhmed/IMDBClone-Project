"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter()
  function handleSubmit(e){
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);

  }
  return (
    <div>
      <form  onSubmit={handleSubmit}className='flex max-w-6xl mx-auto justify-between items-center
px-5 '>
        <input 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        type="text" placeholder='search keywors 
        ...' className='w-full h-14 rounded-sm placeholder-gray-500 first-letter:
        outline-none bg-transparent '/>
        <button disabled={!search} type="submit"  className="text-amber-600
        disabled:text-gray-400 flex-1">search</button>
      </form>
    </div>
  )
}
