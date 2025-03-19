"use client"

import { getShopItems } from "@/services/shop/shop";
import { useEffect, useState } from "react";
import Image from "next/image.js";
import Link from "next/link";
import Button from "../button/button";
export default function ShopNow() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await getShopItems();
      console.log('data', res.data)
      const filteredItems = res.data.filter(item =>
        item.item_name === "Double Tikki Burger" ||
        item.item_name === "Chocolate Mousse" ||
        item.item_name === "Peri Peri Fries" ||
        item.item_name === "Capsicum Pizza"
      );
      console.log('filteredItems', filteredItems)
      setFoods(filteredItems);
    }
    fetchPosts();
  }, []);
  return (
    // <section className="mx-auto" style={{
    //   backgroundImage: `url(backgroundss.jpg)`,
    //   width: '100%',
    //   height: '100%',
    // }}>
    //   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-4">
    //     {foods.map((item, index) => (
    //       <div
    //         key={index}
    //         role="button"
    //         className="border shadow-lg rounded-lg hover:scale-105 duration-300 bg-white"
    //         onClick={() => openModal(item)} // Open the modal when an item is clicked
    //       >
    //         <Image
    //           src={item.image_path}
    //           width={500}
    //           height={500}
    //           alt={item.item_name}
    //           className="w-full h-[200px] object-cover rounded-t-lg"
    //         />
    //         <div className="px-3 py-1">
    //           <p className="font-bold text-sm sm:text-lg">{item.item_name}</p>
    //           <p className="font-semibold text-gray-700 text-xs sm:text-sm line-clamp-2">{item.description}</p>
    //           <div className="flex justify-end py-2">
    //             <p>
    //               <span className="bg-orange-500 text-white p-1 rounded-full text-xs sm:text-sm">
    //                 Shop Now
    //               </span>
    //             </p>
    //           </div>
    //         </div>

    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="mx-auto" style={{
      backgroundImage: `url(backgroundss.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 'auto',
    }}>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-16" data-aos="fade-up" data-aos-duration="3000">
          <h1 className="text-orange-600 text-sm font-medium mb-2">CHOOSE FOOD</h1>
          <h1 className="title-font sm:text-4xl text-xl font-extrabold text-white mt-2">A HUGE VARIETY OF THE FRESHEST
            <br className="hidden lg:inline-block" />FOOD AND VEGETABLES
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {foods.map((item, index) => (
            <div
              key={index}
              role="button"
              className="border shadow-lg rounded-lg hover:scale-105 duration-300 bg-white"
            >
              <Image
                src={item.image_path}
                width={500}
                height={500}
                alt={item.item_name}
                className="w-[300px] h-[170px] object-cover rounded-t-lg"
              />
              <div className="px-3 py-1">
                <p className="font-bold text-sm sm:text-lg">{item.item_name}</p>
                <p className="font-semibold text-gray-700 text-xs sm:text-sm line-clamp-2">{item.description}</p>
                <div className="flex justify-end py-2">
                  <Link href="/shop">
                    <Button>Shop Now</Button>
                  </Link>
                  {/* <p>
                    <span className="bg-orange-500 text-white p-1 rounded-full text-xs sm:text-sm">
                      Shop Now
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  )
}