
'use client'
import React, { useState, useEffect } from "react";
import { getShopItems } from "@/services/shop/shop.js";
import Image from "next/image.js";
import Button from "../button/button.js";
import Link from "next/link.js";
import Modal from "../Common/modal.js";
import { useRouter } from 'next/navigation';
import SignIn from "../Auth/Signin.js";
import { localData } from "@/services/auth/signIn.service.js";

function Food() {
  const [foods, setFoods] = useState([]); // This will display the filtered foods
  const [originalFoods, setOriginalFoods] = useState([]); // This will store the original list
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [cart, setCart] = useState([]); // State to store the cart items
  const router = useRouter();

  // Fetch shop items
  const [signInModalOpen, setSignInModalOpen] = useState(false);
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



  const handleSignInClose = () => {
    setSignInModalOpen(false);
    router.push('/shop');// Close the sign-in modal
  };

  const handlePayment = async () => {
    const totalAmount = calculateTotal();
    console.log("totalAmount", totalAmount)
    const user = await localData()
    if (user) {
      const itemDetails = cart.map((item) =>
        `Item: ${item.item_name} (ID: ${item.id}) - ₹${(parseFloat(item.price) * item.quantity).toFixed(2)} ${item.quantity}`
      ).join('\n');
      console.log('itemDetails', itemDetails)
      setData(user)
      alert(`Total amount:${user.FirstName} ₹${totalAmount}. ${itemDetails} Proceed to payment.`);
    } else {
      setSignInModalOpen(true);
    }
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

  const filterPrice = (price) => {
    const numericPrice = parseFloat(price);
    setFoods(
      originalFoods.filter((item) => {
        const itemPrice = parseFloat(item.price);
        return itemPrice === numericPrice;
      })
    );
  };



  return (
    <div className="m-auto px-4 py-28 bg-white">
      <div className="text-lg font-bold py-4 px-12 pb-8 uppercase">
        Menu
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="font-sans">
          <div className="flex justify-between flex-wrap border-b border-gray-400">
            <div
              role="button"
              className={`px-8 ${activeCategory === "All" ? "border-b-2 border-orange-600" : ""}`}
              onClick={() => filterType("All")}
            >
              <div className="grid justify-items-center">
                <img alt="gallery" className="w-[58px] object-cover h-[51px] object-center block" src="all.jpeg" />
                <p className="text-center font-bold text-2xl">All</p>
              </div>
            </div>
            <div
              role="button"
              className={`px-8 ${activeCategory === "Burger" ? "border-b-2 border-orange-500" : ""}`}
              onClick={() => filterType("Burger")}
            >
              <div className="grid justify-items-center">
                <img alt="burger" className="w-[58px] object-cover h-[51px] object-center block" src="burger.jpeg" />
                <p className="text-center font-bold text-2xl">Burgers</p>
              </div>
            </div>
            <div
              role="button"
              className={`px-8 ${activeCategory === "Pizza" ? "border-b-2 border-orange-500" : ""}`}
              onClick={() => filterType("Pizza")}
            >
              <div className="grid justify-items-center">
                <img alt="pizza" className="w-[58px] object-cover h-[51px] object-center block" src="rusu_pizza.png" />
                <p className="text-center font-bold text-2xl">Pizza</p>
              </div>
            </div>
            <div
              role="button"
              className={`px-8 ${activeCategory === "Salad" ? "border-b-2 border-orange-500" : ""}`}
              onClick={() => filterType("Salad")}
            >
              <div className="grid justify-items-center">
                <img alt="salad" className="w-[58px] object-cover h-[51px] object-center block" src="salad.jpeg" />
                <p className="text-center font-bold text-2xl">Salad</p>
              </div>
            </div>
            <div
              role="button"
              className={`px-8 ${activeCategory === "Desserts" ? "border-b-2 border-orange-500" : ""}`}
              onClick={() => filterType("Desserts")}
            >
              <div className="grid justify-items-center">
                <img alt="desserts" className="w-[58px] object-cover h-[51px] object-center block" src="dessert.jpeg" />
                <p className="text-center font-bold text-2xl">Desserts</p>
              </div>
            </div>
            <div
              role="button"
              className={`px-8 ${activeCategory === "Beverages" ? "border-b-2 border-orange-500" : ""}`}
              onClick={() => filterType("Beverages")}
            >
              <div className="grid justify-items-center">
                <img alt="beverages" className="w-[58px] object-cover h-[51px] object-center block" src="Beverages.jpeg" />
                <p className="text-center font-bold text-2xl">Beverages</p>
              </div>
            </div>
            <div
              role="button"
              className={`px-8 ${activeCategory === "Snacks" ? "border-b-2 border-orange-500" : ""}`}
              onClick={() => filterType("Snacks")}
            >
              <div className="grid justify-items-center">
                <img alt="snacks" className="w-[58px] object-cover h-[51px] object-center block" src="snacks.jpeg" />
                <p className="text-center font-bold text-2xl">Snacks</p>
              </div>
            </div>
            <div
              role="button"
              className={`px-8 ${activeCategory === "Coffee" ? "border-b-2 border-orange-500" : ""}`}
              onClick={() => filterType("Coffee")}
            >
              <div className="grid justify-items-center">
                <img alt="coffee" className="w-[58px] object-cover h-[51px] object-center block" src="coffe.jpeg" />
                <p className="text-center font-bold text-2xl">Coffee</p>
              </div>
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
            {foods.map((item, index) => (
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
                <div className="flex justify-between px-2 py-4">
                  <p className="font-bold text-xs sm:text-sm">{item.item_name}</p>
                  <p>
                    <span className="bg-orange-500 text-white p-1 rounded-full text-xs sm:text-sm">
                      ₹{item.price}/-
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          {cart.length > 0 && (
            <div>
              <div className="font-bold text-2xl uppercase">Cart</div>
              <div className="pt-4">
                <div className="border shadow-lg rounded-lg bg-white p-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between border-b py-2">
                      <div>
                        <p className="font-semibold">{item.item_name}</p>
                        <p>{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center rounded-sm border border-gray-200">
                        <button
                          type="button"
                          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} // Decrease quantity
                        >
                          &minus;
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          className="h-10 w-16 border-transparent text-center"
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        />
                        <button
                          type="button"
                          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} // Increase quantity
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 flex justify-between">
                    <p className="font-semibold text-lg">Total: ₹{calculateTotal()}</p>
                    <Button
                      onClick={handlePayment}

                    >
                      Payment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {signInModalOpen && (
        <SignIn onClose={handleSignInClose} />
      )}

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

