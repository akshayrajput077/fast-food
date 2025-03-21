'use client'
import React from "react"
import Button from "../button/button"
import img from '../../../public/fresh-hamburger.png'
import Image from "next/image";
import Link from "next/link";
export default function GotoShop() {
  return (
    <section className="text-gray-600 bg-pedigrey body-font">
      <div className="container px-5 py-16 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center static" data-aos="fade-up" data-aos-duration="3000">
          <div className="absolute top-0 right-0 animate-bounce">
            <img alt="snacks" className="w-[58px] object-cover h-[51px] object-center block" src="Beverages.jpeg" />
          </div>
          <h1 className="text-orange-600 text-sm font-medium mt-5">
            CHOOSE FOOD
          </h1>
          <h1 className="title-font sm:text-xl md:text-2xl mb-5 font-extrabold text-white mt-5">A HUGE VARIETY OF THE FRESHEST
            <br className="hidden lg:inline-block" /> FOOD AND VEGETABLES
          </h1>

          <div className="flex md:justify-start sm:justify-center mt-5">
            <Link href="/shop">
              <Button>Shop Now</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center mx-auto static" data-aos="fade-up" data-aos-duration="3000">
          <Image
            role="button"
            className="w-full max-h-full object-cover hover:animate-shake"
            src={img}
            alt="Picture of burger"
          />
          <div className="absolute bottom-0 right-0 animate-bounce">
            <img alt="snacks" className="w-[58px] object-cover h-[51px] object-center block" src="snacks.jpeg" />
          </div>

        </div>
      </div>
    </section>
  )
}