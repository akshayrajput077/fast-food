"use client";
import React, { useState } from "react";

export default function payment() {
  const [showCardPaymenthtmlForm, setShowCardPaymenthtmlForm] = useState(false);
  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setShowCardPaymenthtmlForm(false);
  };
  return (
    <div className="m-auto px-4 py-12">
      {showCardPaymenthtmlForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
          <form>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="1234 5678 1234 5678"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="123"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  )
}