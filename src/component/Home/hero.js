"use client"
import { useEffect } from "react";
import React from "react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../button/button";

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
        <div className=" absolute w-full h-full max-h-[640px] flex flex-col justify-center top-16">
          <div className="container mx-auto flex sm:px-5 md:px-5 lg:px-5 xl:px-5 md:py-8 lg:py-12 xl:py-24 sm:py-48 md:flex-row flex-col items-center" data-aos="fade-down"
            data-aos-duration="3000">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font md:text-2xl lg:text-3xl xl:text-6xl sm:text-xl font-extrabold md:mb-2 lg:mb-2 xl:mb-4 sm:mb-2 text-white sm:mt-3 mt-0">Enjoy <span className="text-orange-600">Healthy</span> and
              </h1>
              <h1 className="title-font md:text-2xl lg:text-3xl xl:text-6xl sm:text-xl font-extrabold md:mb-2 lg:mb-2 xl:mb-4 sm:mb-2 text-white sm:mt-3 mt-0">Delicious Food
              </h1>
              <p className="mb-8 leading-relaxed md:text-sm lg:text-sm xl:text-lg sm:text-sm text-white mt-2 md:inline-flex hidden">Welcome to our culinary sanctuary, where every dish tells a story every <br className="hidden lg:inline-block" />bite is an adventure at our food website, we invite</p>
              <Link href="/shop">
                <Button>VIEW ALL MENU</Button>
              </Link>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:inline-flex hidden">
              <img className="object-cover md:w-[300px] md:h-[300px] lg:w-[600px] lg:h-[500px] object-center rounded animate-shake" alt="hero" src="Burgers.png" />
            </div>
          </div>

        </div>
        <img
          width={500}
          height={500}
          className="w-full max-h-[640px] object-cover "
          src="backgroundss.jpg"
          alt="Picture of burger"
        />
      </div>
    </div>
  );
}

export default Hero;