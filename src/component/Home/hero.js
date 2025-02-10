"use client"
import { useEffect } from "react";
import React from "react";
import img from '../../../public/background.jpg'
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({})
    return () => {
      AOS.refresh();
    };
  }, [])
  return (
    <div className="mx-auto">
      <div className="max-h-[640px] relative">
        <div className=" absolute w-full h-full text-white max-h-[640px] flex flex-col justify-center" data-aos="fade-right" data-aos-duration="3000">
          <h1 className=" px-4 text-4xl text-2xl sm:text-7xl font-bold text-center">
            The <span className=" text-orange-500">Best</span> Foods
          </h1>
        </div>
        <Image
          className=" w-full max-h-[640px] object-cover "
          src={img}
          alt="Picture of burger"
        />
      </div>
    </div>
  );
}

export default Hero;