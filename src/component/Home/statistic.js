
'use client'
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Statistic() {
  const [counter, setCounter] = useState(false)

  return (

    <section className="body-font bg-cover bg-no-repeat bg-pedigrey p-16" data-aos="fade-down" data-aos-duration="3000">
      <div className="container px-5 -py-12 mx-auto">
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(true)}>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2 ">
              <h2 className="title-font font-bold md:text-5xl text-xl text-gray-900 underline underline-offset-8 decoration-orange-600 decoration-4">{counter && <CountUp start={0} end={25} duration={2.75}></CountUp>} <span className="md:text-2xl text-lg font-bold">yrs+</span></h2>
              <p className="leading-relaxed text-black mt-3 md:font-bold md:text-lg font-bold text-sm text-white">Experience</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold md:text-5xl text-xl text-gray-900 underline underline-offset-8 decoration-orange-600 decoration-4">{counter && <CountUp start={0} end={50} duration={2.75}></CountUp>}<span className="md:text-2xl text-lg font-bold">+</span></h2>
              <p className="leading-relaxed text-black mt-3 md:font-bold md:text-lg font-bold text-sm text-white">Dishes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold md:text-5xl text-xl text-gray-900 underline underline-offset-8 decoration-orange-600 decoration-4">{counter && <CountUp start={0} end={20} duration={2.75}></CountUp>}<span className="md:text-2xl text-lg font-bold">+</span></h2>
              <p className="leading-relaxed text-black mt-3 md:font-bold md:text-lg font-bold text-sm text-white">Favourite Dishes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold md:text-5xl text-xl text-gray-900 underline underline-offset-8 decoration-orange-600 decoration-4">{counter && <CountUp start={0} end={70} duration={2.75}></CountUp>} <span className="md:text-2xl text-lg font-bold">k+</span></h2>
              <p className="leading-relaxed text-black mt-3 md:font-bold md:text-lg font-bold text-sm text-white">Customer
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>

  )
}

export default Statistic;
