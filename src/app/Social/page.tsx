import React from 'react'
import Image from 'next/image'
function Social() {
  return (
    <div className='bg-[#142428] text-white w-fill py-32 h-screen '>
        <div className='flex  flex-col md:flex-row justify-center gap-[32px] items-center px-5 '>
        <div className=' md:w/2  '>
        <h1 className='text-white xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl '>Follow us on:</h1>
        <ul className='text-[8px] md:text-[15px] lg:text-[18px]' >
            <li className='hover:underline'>INSTAGRAM</li>
            <li className='hover:underline'>TICKTOK</li>
            <li className='hover:underline'>PINTERSET</li>
            <li className='hover:underline'>YOUTUBE</li>
            <li className='hover:underline'>FACEBOOK</li>
            
        </ul>
        </div>
        <div className='md:w/2  border-double border-8 '> <Image className="border-[#a89e99]" src="/perfume/5.png" width={300} height={300} alt="ICON"/></div>
        </div>
        
        

      
    </div>
  )
}

export default Social
