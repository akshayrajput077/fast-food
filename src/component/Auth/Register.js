"use client"
import { useState, useRef } from 'react';
import React from 'react'
import Opt from './OTP';

export default function Register() {

  const [showModal, setShowModal] = useState(false);

  const handlePaymentClick = () => {
    setShowModal(true);
  };



  return (
    <>
      <section className="bg-gray-50 text-center" style={{
        backgroundImage: `url('/eg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
      }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl dark:text-white">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">

                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="first-name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <div className="mt-1">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>

                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="last-name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <div className="mt-1">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>

                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <div className="mt-1">
                      <input type="email" name="email" id="email" autocomplete="given-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>

                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="mobile" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                    <div className="mt-1">
                      <input type="text" name="mobile" id="mobile" autocomplete="family-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>

                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <div className="mt-1">
                      <input type="text" name="address" id="address" autocomplete="given-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>

                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="city" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">City</label>
                    <div className="mt-1">
                      <input type="text" name="city" id="city" autocomplete="family-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>

                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div className="mt-1">
                      <input type="password" name="password" id="password" autocomplete="given-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>

                  <div className="sm:col-span-3 text-left">
                    <label htmlFor="confirm-password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <div className="mt-1">
                      <input type="text" name="confirm-password" id="confirm-password" autocomplete="family-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                <button onClick={handlePaymentClick} type="submit" className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600">Sign in</button>
              </form>
            </div>
            {showModal && (
              <Opt />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
