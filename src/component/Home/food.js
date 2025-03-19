
'use client'
import React, { useState, useEffect } from "react";
import { getShopItems, insert } from "@/services/shop/shop.js";
import Image from "next/image.js";
import Button from "../button/button.js";
import Link from "next/link.js";
import Modal from "../Common/modal.js";
import { useRouter } from 'next/navigation';
// import SignIn from "../Auth/Signin.js";
// import { localData } from "@/services/auth/signIn.service.js";
// import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
// import ForgotPassword from "../Auth/ForgotPassword.js";
function Food() {
  const [foods, setFoods] = useState([]); // This will display the filtered foods
  const [originalFoods, setOriginalFoods] = useState([]); // This will store the original list
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [cart, setCart] = useState([]);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    async function fetchPosts() {
      const res = await getShopItems();
      console.log(res.data);
      setOriginalFoods(res.data);  // Store the original data
      setFoods(res.data); // Set initial foods as the original list
    }
    fetchPosts();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const itemExists = prevCart.some((cartItem) => cartItem.id === selectedItem.id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === selectedItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...selectedItem, quantity: 1 }];
    });

    closeModal();
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };


  const checkout = async () => {
    const items = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      totalprice: parseFloat(item.price) * item.quantity,
      item_name: item.item_name,
      description: item.description,
    }));
    const existingCartData = JSON.parse(localStorage.getItem('orderData')) || { items: [], totalAmount: 0 };
    const updatedItems = [...existingCartData.items, ...items];

    const updatedTotalAmount = updatedItems.reduce((sum, item) => sum + item.totalprice, 0);
    const updatedOrderData = {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };

    console.log('Updated orderData', updatedOrderData);
    localStorage.setItem('orderData', JSON.stringify(updatedOrderData));
    router.push('/order', {
      query: {
        totalAmount: updatedOrderData.totalAmount,
        items: JSON.stringify(updatedOrderData.items),
      },
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const priceString = item.price;
      const price = parseFloat(priceString) || 0;
      return total + price * item.quantity;
    }, 0);
  };

  const filterType = (category) => {
    setActiveCategory(category);
    console.log("category", category)
    if (category === "All") {
      console.log('originalFoods', originalFoods)
      setFoods(originalFoods);
    } else {
      setFoods(
        originalFoods.filter((item) => item.category === category)
      );
    }
    console.log('originalFoods', originalFoods)
  };


  return (
    <div className="m-auto px-4 py-16 bg-stone">
      <div className="text-lg font-bold py-4 px-12 pb-4 uppercase">
        Menu
      </div>

      <div className="font-sans">
        <div className="flex justify-around flex-wrap border-b border-gray-400">
          <div
            role="button"
            className={`px-8 sm:mt-0 mt-3 ${activeCategory === "All" ? "border-b-2 border-orange-600" : ""}`}
            onClick={() => filterType("All")}
          >
            <div className="grid justify-items-center">
              <img alt="gallery" className="w-[58px] object-cover h-[51px] object-center block" src="all.jpeg" />
              <p className="text-center font-bold text-2xl">All</p>
            </div>
          </div>
          <div
            role="button"
            className={`px-8 sm:mt-0 mt-3 ${activeCategory === "Burgers" ? "border-b-2 border-orange-500" : ""}`}
            onClick={() => filterType("Burgers")}
          >
            <div className="grid justify-items-center">
              <img alt="burger" className="w-[58px] object-cover h-[51px] object-center block" src="burger.jpeg" />
              <p className="text-center font-bold text-2xl">Burgers</p>
            </div>
          </div>
          <div
            role="button"
            className={`px-8 sm:mt-0 mt-3 ${activeCategory === "Pizza" ? "border-b-2 border-orange-500" : ""}`}
            onClick={() => filterType("Pizza")}
          >
            <div className="grid justify-items-center">
              <img alt="pizza" className="w-[58px] object-cover h-[51px] object-center block" src="rusu_pizza.png" />
              <p className="text-center font-bold text-2xl">Pizza</p>
            </div>
          </div>
          <div
            role="button"
            className={`px-8 sm:mt-0 mt-3 ${activeCategory === "Desserts" ? "border-b-2 border-orange-500" : ""}`}
            onClick={() => filterType("Desserts")}
          >
            <div className="grid justify-items-center">
              <img alt="desserts" className="w-[58px] object-cover h-[51px] object-center block" src="dessert.jpeg" />
              <p className="text-center font-bold text-2xl">Desserts</p>
            </div>
          </div>
          <div
            role="button"
            className={`px-8 sm:mt-0 mt-3  ${activeCategory === "Beverages" ? "border-b-2 border-orange-500" : ""}`}
            onClick={() => filterType("Beverages")}
          >
            <div className="grid justify-items-center">
              <img alt="beverages" className="w-[58px] object-cover h-[51px] object-center block" src="Beverages.jpeg" />
              <p className="text-center font-bold text-2xl">Beverages</p>
            </div>
          </div>
          <div
            role="button"
            className={`px-8 sm:mt-0 mt-3  ${activeCategory === "Snacks" ? "border-b-2 border-orange-500" : ""}`}
            onClick={() => filterType("Snacks")}
          >
            <div className="grid justify-items-center">
              <img alt="snacks" className="w-[58px] object-cover h-[51px] object-center block" src="snacks.jpeg" />
              <p className="text-center font-bold text-2xl">Snacks</p>
            </div>
          </div>
          <div
            role="button"
            className={`px-8 sm:mt-0 mt-3 ${activeCategory === "Coffee" ? "border-b-2 border-orange-500" : ""}`}
            onClick={() => filterType("Coffee")}
          >
            <div className="grid justify-items-center">
              <img alt="coffee" className="w-[58px] object-cover h-[51px] object-center block" src="coffe.jpeg" />
              <p className="text-center font-bold text-2xl">Coffee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">

        <div className="lg:w-2/3 md:w-1/2 sm:mr-10 mt-8 flex items-end justify-start relative">
          <div className="absolute top-0 left-0">
            {activeCategory && (
              <div className="font-bold text-3xl uppercase">{activeCategory}</div>
            )}
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-12">
            {foods.length === 0 ? (
              <p className="text-xl font-semibold text-center w-full py-10">No items available in this category</p>
            ) : (
              foods.map((item, index) => (
                <div
                  key={index}
                  role="button"
                  className="border shadow-lg rounded-lg hover:scale-105 duration-300 bg-white"
                  onClick={() => openModal(item)} // Open the modal when an item is clicked
                >
                  <Image
                    src={item.image_path}
                    width={500}
                    height={500}
                    alt={item.item_name}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="px-3 py-1">
                    <p className="font-bold text-sm sm:text-lg">{item.item_name}</p>
                    <p className="font-semibold text-gray-700 text-xs sm:text-sm line-clamp-2">{item.description}</p>
                    <div className="flex justify-end py-2">
                      <p>
                        <span className="bg-orange-500 text-white p-1 rounded-full text-xs sm:text-sm">
                          ₹{item.price}/-
                        </span>
                      </p>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          {cart.length > 0 && (
            <div>
              <div className="font-bold text-2xl uppercase">Cart</div>
              <div className="pt-4">
                <div className="border shadow-lg rounded-lg bg-white p-4">
                  {cart.map((item, index) => (
                    <div key={index} className="border-b py-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold">{item.item_name}</p>
                        </div>
                        <div className="flex items-center rounded-3xl border-2 border-orange-600">
                          <button
                            type="button"
                            className="size-10 leading-10 text-orange-600 transition hover:opacity-75"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)} // Decrease quantity
                          >
                            &minus;
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            max="35"
                            min='1'
                            className="sm:h-10 sm:w-16 h-3 w-4 sm:text-sm text-orange-600 text-xs border-transparent text-center"
                            onChange={(e) => {
                              let newQuantity = parseInt(e.target.value, 10);
                              if (newQuantity > 25) newQuantity = 25;
                              if (newQuantity < 1) newQuantity = 1;
                              updateQuantity(item.id, newQuantity);
                            }}
                          />
                          <button
                            type="button"
                            className="size-10 leading-10 text-orange-600 transition hover:opacity-75"
                            onClick={() => updateQuantity(item.id, Math.min(item.quantity + 1, 25))}  // Increase quantity
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <p className="font-semibold text-gray-700 text-xs sm:text-sm line-clamp-2">{item.description}</p>
                        <p>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}/-</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 flex justify-between">
                    <div>
                      <p className="font-semibold text-lg">Subtotal</p>
                      <p className="font-semibold text-gray-500 text-xs sm:text-xs">Extra Charge may apply</p>
                    </div>
                    <p className="font-semibold text-lg">₹{calculateTotal()}/-</p>

                  </div>
                  <div className="py-2">
                    <button className="items-center text-white bg-orange-600 text-xl font-bold hover:text-orange-600 border border-orange-600 hover:bg-white outline-none focus:bg-white focus:text-orange-600 rounded-xl text-sm w-full h-[30px] text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-orange-600 dark:hover:bg-white dark:focus:bg-white mt-4 md:mt-0 uppercase" onClick={checkout}>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* {signInModalOpen && (
        <SignIn onClose={handleSignInClose} />
      )} */}

      {isModalOpen && selectedItem && (
        <Modal
          item={selectedItem}
          onClose={closeModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}


export default Food;
