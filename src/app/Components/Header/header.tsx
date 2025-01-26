import React from 'react'
import Link from 'next/link'

function header() {
  return (
    <div>
      <header className="lg:flex py-4 px-3 w-full lg:h-16 md:h-28 h-20  bg-white border-b-white border-b-2 bg-opacity-15 shadow-lg fixed top-0 left-0 z-10 shadow-zinc-500 ">
         <h1 className="lg:text-4xl text-white md:text-3xl text-2xl text-center font-serif lg:w-1/2 drop-shadow-lg"><Link href='./'> HannaH </Link></h1>
        <div className='lg:w-1/2'>
          <ul className='flex justify-center mx-auto items-center '>
                <li className=' lg:mx-4 md:mx-1 p-2 lg:text-sm  md:text-md text-xs text-white active:text-[#666666]'><Link href='/About'>&nbsp; About &nbsp;</Link></li>
                <li className=' lg:mx-4 md:mx-1 p-2 lg:text-sm  md:text-md text-xs text-white active:text-[#666666]' ><Link href='/Products'> Products</Link></li>
                <li className=' lg:mx-4 md:mx-1 p-2 lg:text-sm  md:text-md text-xs text-white active:text-[#666666]'><Link href='/Social'> Social Media</Link></li>
            </ul>
        </div>
    </header>
    </div>
  )
}

export default header
