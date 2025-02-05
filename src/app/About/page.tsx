import React from "react";

function About() {
  return (
    <div className="font-serif px-[26px] bg-[#142428] py-32">
      <div className="text-white w-full flex items-center justify-center   h-auto ">
        <div className="flex flex-col gap-[16px] justify-between items-center w-full ">
          <h1 className="md:text-6xl lg:text-5xl text-xl  lg:p-5 p-2">
            About Us
          </h1>
          <p className="bg-[#f6efeb]  text-black  text-xs lg:p-10 p-5 lg:mx-10 mx-5  border-[#666666] border-[2px] border-solid  ">
            Welcome to HannaH, your one-stop destination for premium beauty
            products that are as unique and versatile as you are. Our mission is
            to inspire confidence and elegance with every product we offer,
            making beauty accessible and empowering for everyone. Each item in
            our collection is thoughtfully crafted to bring out your best, from
            enhancing your natural beauty to expressing your personality.
          </p>
          <a href="#go">
            
            <button className="bg-transparent text-[#FFFFFF] text-xs rounded-sm text-center border-solid border-[1px] active:bg-[#2b464d] border-[#E0E0E0] h-auto py-[8px] w-auto px-[16px] hover:scale-110 duration-500 drop-shadow-sm">
              Scroll Down ▼
            </button>
          </a>
        </div>
      </div>
      <br/> 
      <hr />

      <div id="go" className="  lg:p-10 p-5 lg:py-20 ">
        <h1 className="md:text-6xl lg:text-5xl text-xl  lg:p-5 p-2 text-white">
          Foundations:
        </h1>
        <p className="bg-[#f6efeb]  text-black  text-xs lg:p-10 p-5 lg:mx-10  border-[#666666] border-[2px] border-solid">
          Achieve the perfect canvas with our high-quality foundations, designed
          to suit a variety of skin types and tones. Our foundations offer
          buildable coverage, allowing you to go from a natural look to full
          glam with ease. Infused with nourishing ingredients, they blend
          seamlessly for a radiant, flawless finish that lasts all day, letting
          your true beauty shine through.
        </p>

        <h1 className="md:text-6xl lg:text-5xl text-xl  lg:p-5 p-2 text-white">
          Lipsticks:
        </h1>
        <p className="bg-[#f6efeb]  text-black  text-xs lg:p-10 p-5 lg:mx-10  border-[#666666] border-[2px] border-solid">
          Explore a world of color with our luxurious lipstick collection. From
          timeless nudes to daring reds and everything in between, our lipsticks
          are richly pigmented, long-lasting, and formulated to keep your lips
          soft and hydrated. Whether you’re looking to make a bold statement or
          add a subtle touch, we have the perfect shade for every mood and
          occasion.
        </p>

        <h1 className="md:text-6xl lg:text-5xl text-xl  lg:p-5 p-2 text-white">
          Perfumes:
        </h1>
        <p className="bg-[#f6efeb]  text-black  text-xs lg:p-10 p-5 lg:mx-10  border-[#666666] border-[2px] border-solid">
          Indulge your senses with our exclusive range of perfumes, crafted to
          evoke emotions, memories, and dreams. Each fragrance is a blend of
          high-quality ingredients, curated to be both captivating and
          long-lasting. From fresh florals to warm, seductive notes, our
          perfumes add an unforgettable touch to your style and elevate your
          daily ritual.
        </p>
      </div>
    </div>
  );
}

export default About;
