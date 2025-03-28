"use client"
import React from "react"
import Link from "next/link";
import Image from "next/image";
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: "CATEGORY",
      title: "Culinary Chronicles Exploring Gastronomic Wonders at",
      image: "/spring-rolls.jpg",
      link: "blog"
    },
    {
      id: 2,
      category: "CATEGORY",
      title: "Culinary Chronicles Exploring Gastronomic Wonders at",
      image: "/big-cheeseburger.jpg",
      link: "blog"
    },
    {
      id: 3,
      category: "CATEGORY",
      title: "Culinary Chronicles Exploring Gastronomic Wonders at",
      image: "/club-sandwich.jpg",
      link: "blog"
    }
  ];

  return (
    <section className="text-gray-600 body-font m-8" data-aos="fade-down" id="blog">
      <div className="container px-5 py-4 mx-auto" >
        <div className="flex flex-col text-center w-full mb-20" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="text-orange-600 text-sm font-medium mb-4">BLOG</h1>
          <h1 className="title-font xl:text-4xl lg:text-2xl md:text-xl sm:text-xl font-extrabold mb-4 text-gray-900 mt-3">WE PROVIDE AMAZING & QUALITY FOOD FOR
            <br className="hidden lg:inline-block" />YOUR GOOD HEALTH
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">

          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 md:w-1/3 animate-pulse" data-aos="zoom-in" data-aos-duration='1000'>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image} alt={post.title} width={400}
                  height={400} />
                <div className="p-8">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.category}</h2>
                  <h1 className="title-font xl:text-xl lg:text-lg md:text-lg sm:text-xs font-bold text-black mb-3">{post.title}</h1>
                  <Link href={post.link} className="text-black inline-flex items-center md:mb-2 lg:mb-0 fond-extrabold text-sm duration-300 hover:translate-x-2">Know More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
