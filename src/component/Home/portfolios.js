'use client'
import React from "react"
import Link from 'next/link';
function Portfolios() {
  return (
    <section className="text-gray-600 body-font py-20" data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500" id='portfolios'>
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <h1 className="text-orange-600 text-sm font-medium mb-8">POPULAR DISHES
        </h1>
        <div className="flex w-full mb-12 flex-wrap">
          <h1 className="sm:text-4xl text-4xl font-extrabold title-font text-gray-900 lg:w-3/6 lg:mb-0 mb-4">POPULAR MENUS</h1>
          <p className="lg:pl-6 lg:w-3/6 mx-auto leading-relaxed text-base text-gray-900">Welcome too restaurant, where culinary excellence hospitality in every dish we serve. Nestled in the heart of City Name our eatery invites you on a journey</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">

            <div className="md:p-2 p-1 md:w-1/2 w-2/2 relative">
              <Link href="/dashboard/shop">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="big-cheeseburger.jpg" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 m-4 md:m-8">
                  <div className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2  md:m-0">
                    <button className="text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 md:h-8 md:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:p-2 p-1 md:w-1/2 w-2/2 relative">
              <Link href='/dashboard/shop'>
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="club-sandwich.jpg" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 m-3 md:m-8" data-aos="hover:zoom-in" data-aos-duration='1500'>
                  <div className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2 md:m-0">
                    <button className="text-orange-600" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 md:h-8 md:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:p-2 p-1 md:w-full w-2/2  relative">
              <Link href='/dashboard/shop'>
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="sahal-pizza.jpg" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 m-4 md:m-8" data-aos="hover:zoom-in" data-aos-duration='1500'>
                  <div className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2  md:m-0">
                    {/* <p className="md:font-bold md:text-xs md:text-white md:text-center font-normal text-xs text-white text-center">The</p>
                    <h2 className="text-base text-white text-center md:font-bold md:text-base md:text-white md:text-center">Onion Pizza</h2> */}
                    <button className="text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 md:h-8 md:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 md:w-full w-2/2 relative">
              <Link href='/dashboard/shop'>
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="momos.jpg" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 m-4 md:m-8" data-aos="hover:zoom-in" data-aos-duration='1500'>
                  <div className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2  md:m-0">
                    {/* <p className="md:font-bold md:text-xs md:text-white md:text-center font-normal text-xs text-white text-center">The</p>
                    <h2 className="text-base text-white text-center md:font-bold md:text-base md:text-white md:text-center">Steem Momos</h2> */}
                    <button className="text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 md:h-8 md:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:p-2 p-1 md:w-1/2 w-2/2 relative">
              <Link href='/dashboard/shop'>
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="spring-rolls.jpg" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 m-4 md:m-8" data-aos="hover:zoom-in" data-aos-duration='1500'>
                  <div className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2  md:m-0">
                    {/* <p className="md:font-bold md:text-xs md:text-white md:text-center font-normal text-xs text-white text-center">The</p>
                    <h2 className="text-base text-white text-center md:font-bold md:text-base md:text-white md:text-center">Spring Rolls</h2> */}
                    <button className="text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 md:h-8 md:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:p-2 p-1 md:w-1/2 w-2/2 relative">
              <Link href='/dashboard/shop'>
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="soft-drink.jpg" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 m-3 md:m-8" data-aos="hover:zoom-in" data-aos-duration='1500'>
                  <div className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2  md:m-0">
                    {/* <p className="md:font-bold md:text-xs md:text-white md:text-center font-normal text-xs text-white text-center">The</p>
                    <h2 className="text-base text-white text-center md:font-bold md:text-base md:text-white md:text-center">Soft Drink</h2> */}
                    <button className="text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 md:h-8 md:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolios;