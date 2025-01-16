import React from "react";
import { categories } from "../Data/data.js";
import Image from "next/image";

function Category() {
  return (
    <div className=" m-auto px-4 py-12 ">
      <h1 className=" text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      {/* Category */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => (
          <div
            role="button"
            key={index}
            className=" bg-gray-100 rounded-lg p-4 flex justify-between items-center "
          >
            <h2 className=" font-bold sm:text-xl "> {item.name} </h2>
            <Image
              className=" w-20 "
              src={item.image}
              width={500}
              height={500}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;