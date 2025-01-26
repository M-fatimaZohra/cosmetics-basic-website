import React from 'react'

import Link from "next/link";

 function Home() {
  return (
  <div className=" font-serif overflow-x-hidden ">
    <div className="w-full flex items-center justify-center bg-[url('/hannah.gif')] lg:h-screen h-[400px] bg-cover bg-no-repeat">
    <div className="block">
    <h1 className=" px-3 m-3 items-center text-white justify-center text-center lg:text-8xl md:text-6xl text-4xl w-screen mx-auto">HannaH</h1>
     <p className=" px-3 m-3 items-center text-white justify-center text-center lg:text-xl text-sm w-screen mx-auto ">Get Best Products Here</p>
   
    </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[url('/lipstick.gif')] bg-cover bg-no-repeat lg:h-[700px] h-[400px] m-0 p-0">
      <div className="block">
    <h1 className=" px-3 m-3 items-center text-white justify-center text-center lg:text-8xl md:text-6xl text-4xl mx-auto ">Lipsticks</h1>
     <p className=" px-3 m-3 items-center text-white justify-center text-center lg:text-xl md:text-sm text-[15px] mx-auto ">Get Best Lipsticks from here <br/><Link href="/Products/Lipsticks">SEE MORE...</Link></p>
   
      </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[url('/perfume.gif')] bg-cover bg-no-repeat lg:h-[700px] h-[400px] m-0 p-0">
      <div className="block">
    <h1 className=" px-3 m-3 items-center text-black justify-center text-center lg:text-8xl md:text-6xl text-4xl mx-auto ">Perfumes</h1>
     <p className=" px-3 m-3 items-center text-black justify-center text-center lg:text-xl md:text-sm text-[15px] mx-auto ">Get Best Perfumes from here <br/><Link href="/Products/Perfumes">SEE MORE...</Link></p>
   
      </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[url('/foundation.gif')] bg-cover bg-no-repeat lg:h-[700px] h-[400px] m-0 p-0">
      <div className="block">
    <h1 className=" px-3 m-3 items-center text-white justify-center text-center lg:text-8xl md:text-6xl text-4xl mx-auto ">Foundations</h1>
     <p className=" px-3 m-3 items-center text-white justify-center text-center lg:text-xl md:text-sm text-[15px] mx-auto ">Get Best Foundations from here <br/><Link href="/Products/Foundations">SEE MORE...</Link></p>
   
      </div>
      </div>
  </div>
  );
}

export default Home