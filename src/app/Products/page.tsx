import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Catagory } from '@/libs/type'

const Catagories:Catagory[]=[{
  title: "Foundations",
  description: "Achieve a flawless complexion with our high-quality foundations, designed to blend seamlessly into your skin. Whether you prefer lightweight coverage or full glam, our formulas cater to all skin types and tones.",
  img:"/foundation/1.png",
  destination:"/Products/Foundations"

},
{
  title: "Lipsticks",
  description: "Enhance your beauty with our wide range of lipsticks, available in vibrant shades and luxurious finishes. From bold mattes to glossy nudes, we have the perfect color to suit every mood and occasion.",
  img:"/lipstick/1.png",
  destination:"/Products/Lipsticks"

},
{
  title: "Perfumes",
  description: "Discover captivating fragrances that leave a lasting impression. From fresh and floral to bold and sensual, our collection of perfumes complements your unique personality and style.",
  img: "/perfume/1.png",
  destination:"/Products/Perfumes"

}]
function Products() {
  return (
    <div className='font-serif bg-[#142428] py-32' >
      <div className=' flex flex-col gap-[16px] justify-center items-center  text-white h-full lg:h-screen md:h-screen'>
        <h1 className='text-white text-center lg:text-6xl md:text-5xl text-3xl'>Our Products</h1>
<div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center'>
  {Catagories.map((cata ,i)=>(
 <div key={i} className=' bg-[#f6efeb]  rounded-sm w-auto'>
 <Link href={cata.destination}>
   <div>
     <Image className='border-[#666666] border-[2px] border-solid rounded-sm' src={cata.img} width={220} height={100} alt={cata.title}/>
     <div className='flex flex-col text-black justify-between items-start px-2 py-4'>
     <p className='text-center  text-[18px]'>{cata.title}</p>
     <p className='text-[12px] w-[170px]'><b className='text-[16px]'>Description: </b>{cata.description}</p>
     </div>
    
   </div>
 </Link>
</div>
  ))}
 
 
</div>
        
      
      </div>

      
    </div>

  )
}

export default Products
