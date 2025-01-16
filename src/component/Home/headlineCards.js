import React from "react";
import Image from "next/image";
import img from "../../../public/eg.jpg"
import img1 from "../../../public/pic-1.jpg";
import img2 from "../../../public/pic-2.jpg";

function HeadlineCards() {
  return (
    <div className=" mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* Card */}
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            Sun's Out, BOGO's Out
          </p>
          <p className=" px-2 ">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 px-2 absolute bottom-4 rounded-md">
            Order Now
          </button>
        </div>
        <Image
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src={img}
          alt="Picture of egg"
        />
      </div>
      {/* Card */}
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">New Restaurants</p>
          <p className=" px-2 ">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 px-2 absolute bottom-4 rounded-md">
            Order Now
          </button>
        </div>
        <Image
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src={img1}
          alt="Picture of egg"
        />
      </div>
      {/* Card */}
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            We Deliver Desserts Too
          </p>
          <p className=" px-2 ">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 px-2 absolute bottom-4 rounded-md">
            Order Now
          </button>
        </div>
        <Image
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src={img2}
          alt="Picture of egg"
        />
      </div>
    </div>
  );
}

export default HeadlineCards;