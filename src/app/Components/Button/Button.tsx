import React from 'react'

function Button({props}:{props:string}) {
  return (
    <button className='bg-[#b09787] text-[16px] px-2 py-1 text-black rounded-sm w-auto hover:scale-105 duration-500 active:scale-100'>
        {props}
    </button>
  )
}

export default Button
