import React from "react";


function About() {
  return (
    <div className="font-serif px-[26px] bg-[#142428]">
      
      <div className="text-white w-full flex items-center justify-center   lg:h-[700px] h-screen ">
      <div className="flex flex-col justify-between items-center w-full ">
          <h1 className="md:text-6xl lg:text-5xl text-xl  lg:p-5 p-2">
            About Us
          </h1>
          <p className="bg-[#F5F5F5] text-[#524d4b] text-xs p-10 lg:mx-10 mx-5  border-solid border-[1px]  border-[#333333]  ">
            Welcome to HannaH, your one-stop destination for premium beauty
            products that are as unique and versatile as you are. Our mission is
            to inspire confidence and elegance with every product we offer,
            making beauty accessible and empowering for everyone. Each item in
            our collection is thoughtfully crafted to bring out your best, from
            enhancing your natural beauty to expressing your personality.
          </p>
    <a href="#go">      <button className="bg-[#FF69B4] text-[#FFFFFF] text-xs rounded-sm block text-center border-solid border-[1px] active:bg-[#FF1493] border-[#E0E0E0] h-10 w-32 my-5 mx-auto hover:w-36 hover:h-12 duration-500"  >Scroll Down ▼ </button></a>
        </div>
      </div>
   <hr/>

        <div id="go" className="block bg-[#cfcac4]  lg:p-10 p-5 lg:py-20 ">
          <h1 className="md:text-6xl lg:text-5xl text-3xl text-white  lg:p-5 p-2">
            Foundations:
          </h1>
          <p className="bg-[#a89e99] text-xs p-10 lg:mx-10 mx-5  rounded-xl border-solid border-4 border-[#524d4b]">
            Achieve the perfect canvas with our high-quality foundations,
            designed to suit a variety of skin types and tones. Our foundations
            offer buildable coverage, allowing you to go from a natural look to
            full glam with ease. Infused with nourishing ingredients, they blend
            seamlessly for a radiant, flawless finish that lasts all day,
            letting your true beauty shine through.
            
          </p>
        
        
          <h1 className="md:text-6xl lg:text-5xl text-3xl text-white  lg:p-5 p-2">
          Lipsticks:
          </h1>
          <p className="bg-[#a89e99] text-xs p-10 lg:mx-10 mx-5 rounded-xl border-solid border-4 border-[#524d4b]">
           Explore a world of color with our luxurious lipstick collection. From timeless nudes to daring reds and everything in between, our lipsticks are richly pigmented, long-lasting, and formulated to keep your lips soft and hydrated. Whether you’re looking to make a bold statement or add a subtle touch, we have the perfect shade for every mood and occasion.
          </p>
        
        
          <h1 className="md:text-6xl lg:text-5xl text-3xl text-white  lg:p-5 p-2">
            Perfumes:
          </h1>
          <p className="bg-[#a89e99] text-xs p-10 lg:mx-10 mx-5 rounded-xl border-solid border-4 border-[#524d4b]">
          Indulge your senses with our exclusive range of perfumes, crafted to evoke emotions, memories, and dreams. Each fragrance is a blend of high-quality ingredients, curated to be both captivating and long-lasting. From fresh florals to warm, seductive notes, our perfumes add an unforgettable touch to your style and elevate your daily ritual.
          </p>
        </div>
    </div>
  );
}

export default About;
