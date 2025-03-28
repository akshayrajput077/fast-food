
import Image from "next/image.js";
import Button from "../button/button";
export default function Modal({ item, onClose, onAddToCart }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex justify-center items-center z-[9999]">
      <div className="p-6 rounded-lg w-[300px] sm:w-[400px] space-y-4 bg-white md:space-y-6 sm:p-8">
        <button
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
        </button>
        <div className="grid justify-items-center">
          <Image
            src={item.image_path}
            width={200}
            height={200}
            alt={item.item_name}
            className="w-[300px] h-[200px] object-cover rounded-lg my-2"
          />
          <h2 className="sm:text-2xl font-bold">{item.item_name}</h2>
        </div>
        <div className="flex justify-between my-4">
          <div>
            <p className="text-orange-500 font-bold text-lg">₹{item.price}/-</p>
            <span className="">{item.category}</span>
          </div>
          <Button
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>

        </div>
      </div>
    </div>
  );
};