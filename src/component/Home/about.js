'use client'
import React from "react"
import { Apple } from 'lucide-react';
import { ChefHat } from 'lucide-react';
import rusu_pizza from '../../../public/rusu_pizza.png'
import Image from "next/image";
function About() {

  return (
    <section className="text-gray-600 body-font md:-mb-24" id="about us">
      <div className="container mx-auto flex px-3 py-4 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image className="object-cover object-center h-[250px] sm:h-[750px] rounded" src={rusu_pizza} alt="rusu_pizza" />
        </div>
        <div className="sm:flex-grow md:w-1/2 sm:pl-24 pl-4 flex flex-col md:items-start md:text-left items-start text-start mb-12" data-aos="fade-down"
          data-aos-duration="3000">
          <h1 className="text-orange-600 text-sm font-medium">ABOUT US</h1>
          <h1 className="title-font sm:text-4xl text-xl font-extrabold mb-4 text-gray-900 mt-3">THE AMAZING & QUALIYY FOOD
            <br className="hidden lg:inline-block" /> FOR YOUR GOOD HEALTH
          </h1>
          <p className="leading-relaxed mb-3 sm:text-lg text-sm">Welcome too restaurant, where culinary excellence meets warm
            <br className="hidden lg:inline-block" />hospitality in every dish we serve. Nestled in the heart of City Name our
            <br className="hidden lg:inline-block" />eatery invites you on a journey</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <div className="mb-3">
                <Apple className="text-orange-600" size={48} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Best Quality Food</h2>
                <p className="leading-relaxed text-base">Our talented chefs craft each dish precision sourcing</p>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <ChefHat className="text-orange-600" size={48} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 font-sans">Experience Our Chefs</h2>
                <p className="leading-relaxed text-base font-sans">Our talented chefs craft each dish precision sourcing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;