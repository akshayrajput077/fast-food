'use client'
import React, { useState } from "react";
import { data } from "@/component/Common/data.js"
import Image from "next/image.js";
import Button from "../button/button.js"
import Link from "next/link.js";
function Food() {
  const [foods, setFoods] = useState(data);

  //   Filter type burger/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className=" m-auto px-4 py-12 ">
      <h1 className=" text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu Items{" "}
      </h1>

      {/* Filter Row */}
      <div className=" flex flex-col lg:flex-row  justify-between ">
        {/* Filter type */}
        <div className="">
          <p className=" font-bold text-gray-700 ">Filter Type</p>
          <div className=" flex justify-between flex-wrap ">
            <Button
              onClick={() => setFoods(data)}
            >
              All
            </Button>
            <Button
              onClick={() => filterType("burger")}
            >
              Burgers
            </Button>
            <Button
              onClick={() => filterType("pizza")}
            >
              Pizza
            </Button>
            <Button
              onClick={() => filterType("salad")}
            >
              Salads
            </Button>
            <Button
              onClick={() => filterType("chicken")}
            >
              Chickens
            </Button>
          </div>
        </div>
        {/* Filter price */}
        <div className="">
          <p className=" font-bold text-gray-700 ">Filter price</p>
          <div className=" flex justify-between max-w-[390px] w-full ">
            <Button
              onClick={() => filterPrice("₹75")}
            >
              ₹75
            </Button>
            <Button
              onClick={() => filterPrice("₹100")}
            >
              ₹100
            </Button>
            <Button
              onClick={() => filterPrice("₹125")}
            >
              ₹125
            </Button>
            <Button
              onClick={() => filterPrice("₹250")}
            >
              ₹250
            </Button>
            <Button
              onClick={() => filterPrice("₹300")}
            >
              ₹300
            </Button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            role="button"
            className=" border shadow-lg rounded-lg hover:scale-105 duration-300 "
          >
            <Link href={`/dashboard/item/${item.id}`}>
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={item.name}
                className=" w-full h-[200px] object-cover rounded-t-lg "
              />
              <div className="flex justify-between px-2 py-4 ">
                <p className="font-bold text-xs sm:text-sm"> {item.name} </p>
                <p>
                  <span className=" bg-orange-500 text-white p-1 rounded-full text-xs sm:text-sm">
                    {item.price}
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;