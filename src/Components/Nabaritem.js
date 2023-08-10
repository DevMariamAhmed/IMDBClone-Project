'use client'
import React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
function Nabaritem({title,param}) {
  const searchParams = useSearchParams()
  // const searchParams=useSearchparams()
  const genre =searchParams.get('genre')
  return (
    <div>
      <Link className={`m-4 hover:text-amber-600 font-semibold p-2 
      ${genre && genre===param &&
        'underline-offset-8 underline decoration-4  decoration-amber-600 rounded-lg'
      }`}
      href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default Nabaritem
