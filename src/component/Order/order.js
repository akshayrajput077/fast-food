
'use client'
import React, { useState, useEffect } from "react";
import SignIn from "../Auth/Signin.js";
import { localData } from "@/services/auth/signIn.service.js";
import { useRazorpay } from "react-razorpay";
import { insertOrder } from "@/services/order/order.js";
import { CircleX } from 'lucide-react';
import Link from "next/link.js";
import { useRouter } from 'next/navigation';

function Order() {
  const [order, setOrders] = useState(); // To store the filtered foods
  const [signInModalOpen, setSignInModalOpen] = useState(false); // Modal visibility state
  const [paymentSuccess, setPaymentSuccess] = useState(true);
  const { error, isLoading, Razorpay } = useRazorpay();
  const router = useRouter();
  useEffect(() => {
    const storedOrderData = localStorage.getItem('orderData');
    if (storedOrderData) {
      const parsedOrderData = JSON.parse(storedOrderData);
      console.log("parsedOrderData", parsedOrderData);
      setOrders(parsedOrderData);
    } else {
      console.log("No order data found in localStorage");
    }
  }, []);

  const handleSignInClose = () => {
    setSignInModalOpen(false);
    Payment();
  };

  const clearOrderData = () => {
    localStorage.removeItem('orderData');
  };

  const Payment = async () => {
    const totalAmount = order.totalAmount;
    const user = await localData();
    const options = {
      key: "rzp_test_AtTqeHCbjhVOcl", // Replace with your Razorpay key
      amount: totalAmount * 100, // Amount in paise (multiply by 100)
      currency: "INR",
      name: "Fast Food",
      description: "Food Order Payment",
      handler: async (response) => {
        const payment_id = response.razorpay_payment_id;
        const orderData = {
          name: user.FirstName,
          emailId: user.EmailId,
          user_id: user.ID,
          order: order,
          payment_id: payment_id,
        };
        console.log("orderData", orderData);
        router.push('/record')
        setPaymentSuccess(false);
        clearOrderData();
        try {
          const response = await insertOrder(orderData);
          console.log(response); // You can log the response from the API to see what the server returns
        } catch (error) {
          alert("An error occurred while placing your order: " + error.message);
        }
      },
      prefill: {
        name: user.FirstName,
        email: user.EmailId,
        contact: user.Mobile,
      },
      theme: {
        color: "#93472", // Customize theme color
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  const handlePayment = async () => {
    const user = await localData();
    if (user) {
      Payment();
    } else {
      setSignInModalOpen(true);
    }
  };

  // Function to recalculate the total amount
  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.totalprice, 0);
  };

  // Function to remove an item from the order
  const removeItem = (itemId) => {
    const updatedItems = order.items.filter(item => item.id !== itemId);  // Remove the item by id
    const updatedTotalAmount = calculateTotalAmount(updatedItems); // Recalculate the total amount
    const updatedOrder = { ...order, items: updatedItems, totalAmount: updatedTotalAmount }; // Update the order object
    setOrders(updatedOrder); // Set the new order state
    localStorage.setItem('orderData', JSON.stringify(updatedOrder)); // Update local storage
  };

  // Check if the cart is empty or totalAmount is zero
  const isCartEmpty = order && order.items.length === 0 || order && order.totalAmount === 0;

  return (
    <div className="m-auto px-4 py-16 bg-stone">
      <div className="text-lg font-bold py-4 px-12 pb-4 uppercase">
        Cart
      </div>
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 sm:mr-10 mt-2 flex items-end justify-start relative">
          <img alt="restaurant" className="object-cover w-[300px] h-[300px] sm:w-[660px] sm:h-[500px] object-center block" src="Restaurant.png" />
        </div>

        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          {paymentSuccess && order && (
            <div>
              <div className="font-bold text-2xl uppercase">Your Cart</div>
              <div className="pt-4">
                <div className="border shadow-lg rounded-lg bg-white">
                  <div className="h-[211px] overflow-auto p-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="border-b py-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-bold">{item.item_name}</p>
                          </div>
                          <div>
                            <CircleX role="button" className="text-orange-600" size={24} onClick={() => removeItem(item.id)} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <p className="font-semibold text-gray-700 text-xs sm:text-sm line-clamp-2">{item.description}</p>
                          <p>₹{item.totalprice}/-</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <div className="mt-4 flex justify-between">
                      <div>
                        <p className="font-semibold text-lg">Subtotal</p>
                        <p className="font-semibold text-gray-500 text-xs sm:text-xs">Extra charge may apply</p>
                      </div>
                      <p className="font-semibold text-lg">₹{order.totalAmount}/-</p>
                    </div>

                    {!isCartEmpty && (
                      <div className="py-2">
                        <button
                          className="items-center text-white bg-orange-600 text-xl font-bold hover:text-orange-600 border border-orange-600 hover:bg-white outline-none focus:bg-white focus:text-orange-600 rounded-xl text-sm w-full h-[30px] text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-orange-600 dark:hover:bg-white dark:focus:bg-white mt-4 md:mt-0 uppercase"
                          onClick={handlePayment}
                        >
                          Payment
                        </button>
                      </div>
                    )}

                    {isCartEmpty && (
                      <div className="py-2">
                        <Link href={'/shop'}>
                          <button
                            className="items-center text-white bg-orange-600 text-xl font-bold hover:text-orange-600 border border-orange-600 hover:bg-white outline-none focus:bg-white focus:text-orange-600 rounded-xl text-sm w-full h-[30px] text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-orange-600 dark:hover:bg-white dark:focus:bg-white mt-4 md:mt-0 uppercase"
                          >
                            Add Item
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {signInModalOpen && <SignIn onClose={handleSignInClose} />}
    </div>
  );
}

export default Order;
