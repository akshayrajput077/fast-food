
import React from "react";
import img from '../../../public/img.jpg'
import Image from "next/image";

function Hero() {
  return (
    <div className="  mx-auto p-4 ">
      <div className=" max-h-[500px] relative ">
        <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center ">
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            The <span className=" text-orange-500  ">Best</span>
          </h1>
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            <span className=" text-orange-500  ">Foods</span> Delivered
          </h1>
        </div>
        <Image
          className=" w-full max-h-[500px] object-cover "
          src={img}
          alt="Picture of burger"
        />
      </div>
    </div>
  );
}

export default Hero;