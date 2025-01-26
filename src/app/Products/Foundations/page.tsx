import React from "react";
import Image from "next/image";
import { foundations } from "./object";

function Foundation() {
  return (
    <div>
      <div className="font-serif flex justify-center items-center w-full h-full bg-[#142428]">
        <div className="lg:py-32 text-black h-full lg:h-full md:h-full">
          <div className=" my-[200px] lg:my-0 flex flex-col gap-4">
            <h1 className="text-white text-center lg:text-6xl md:text-5xl text-3xl block">
              Foundations
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center'>
             {foundations.map((cata ,i)=>(
            <div key={i} className=' bg-[#f6efeb]  rounded-sm w-auto'>
            <div>
              <div>
                <Image className='border-[#666666] border-[2px] border-solid rounded-sm' src={cata.img} width={220} height={100} alt={cata.title}/>
                <div className='flex flex-col text-black justify-between items-start px-2 py-4'>
                <p className='text-center  text-[18px]'>{cata.title}</p>
                <p className='text-[12px] w-[170px]'><b className='text-[16px]'>Description: </b>{cata.description}</p>
                </div>
               
              </div>
            </div>
           </div>
             ))}
            
            
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foundation;
