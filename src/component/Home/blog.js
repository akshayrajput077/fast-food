"use client"
import React from "react"
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: "CATEGORY",
      title: "Culinary Chronicles Exploring Gastronomic Wonders at",
      image: "spring-rolls.jpg",
      // link: "#"
    },
    {
      id: 2,
      category: "CATEGORY",
      title: "Culinary Chronicles Exploring Gastronomic Wonders at",
      image: "big-cheeseburger.jpg",
      // link: "#"
    },
    {
      id: 3,
      category: "CATEGORY",
      title: "Culinary Chronicles Exploring Gastronomic Wonders at",
      image: "club-sandwich.jpg",
      // link: "#"
    }
  ];

  return (
    <section className="text-gray-600 body-font m-8" data-aos="fade-down" id="blog">
      <div className="container px-5 py-4 mx-auto" >
        <h1 className="text-orange-600 text-sm font-medium mb-8 font-sans">BLOG</h1>
        <div className="flex w-full mb-12 flex-wrap">
          <h1 className="sm:text-4xl text-4xl font-extrabold title-font text-gray-900 lg:w-3/6 lg:mb-0 mb-4">READ LATEST ARTICLES</h1>
          <p className="lg:pl-6 lg:w-3/6 mx-auto leading-relaxed text-base text-gray-900">Welcome too restaurant, where culinary excellence hospitality in every dish we serve. Nestled in the heart of City Name our eatery invites you on a journey</p>
        </div>
        <div className="flex flex-wrap -m-4">

          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 md:w-1/3 animate-pulse" data-aos="zoom-in" data-aos-duration='1000'>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image} alt={post.title} />
                <div className="p-8">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.category}</h2>
                  <h1 className="title-font xl:text-xl lg:text-lg md:text-sm text-base font-bold text-black mb-3">{post.title}</h1>
                  <a href={post.link} className="text-black inline-flex items-center md:mb-2 lg:mb-0 fond-extrabold text-sm duration-300 hover:translate-x-2">Know More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
