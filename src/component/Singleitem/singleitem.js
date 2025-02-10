
"use client"
import React, { useState } from "react";
import Button from "../button/button";
import payment from "../Payment/payment";
const SingleItem = ({ item }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false); // State to toggle the modal visibility

  const handlePaymentClick = () => {
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <div className="m-auto px-4 py-20 bg-pedigrey">
      <h1 className="text-orange-600 font-bold text-4xl text-center">{item.name}</h1>
      <div className="flex justify-center py-4">
        {/* Uncomment if you want to show the image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-[300px] h-[300px] object-cover rounded-lg"
        />
      </div>
      <p className="pt-4 text-center font-semibold">{item.name}</p>
      <div className="pt-4 text-center text-orange-500">
        <button
          onClick={handlePaymentClick}
          className="text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-10 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600"
        >
          {item.price}
        </button>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-center text-orange-600 mb-4">Payment</h2>
            <p className="text-center mb-4">You are about to purchase "{item.name}" for {item.price}</p>
            <div className="flex justify-center space-x-3">
              <Button onClick={() => alert("Redirecting to Cash")}>Pay with Cash</Button>
              <Button onClick={() => alert("Redirecting to payment gateway")}>Pay with Card</Button>
              <Button onClick={() => alert("Redirecting to Upi")}>Pay with Upi</Button>
            </div>
            <div className="mt-4 text-center">
              <Button
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleItem;
