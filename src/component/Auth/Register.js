
"use client";
import { useState } from 'react';
import React from 'react';
import OTP from './OTP';
import { registration } from '@/services/auth/register.service';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, CircleChevronLeft } from "lucide-react";


export default function Register({ onClose }) {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailId, setEmailId] = useState("")
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const toggleisPassword = () => setIsPassword(prevState => !prevState);
  const toggleisConfirm = () => setIsConfirm(prevState => !prevState);
  const {
    register,
    handleSubmit,
    formState: { errors }, watch
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { firstName, lastName, emailId, mobile, address, city, password } = data;
      setEmailId(emailId);
      const user = await registration(firstName, lastName, emailId, mobile, address, city, password);

      console.log("User Data:", user.data);
      if (user.data && user.data.data.userData) {
        console.log("User:", user.data);
        setShowModal(true);
      } else {
        console.log("Registration failed. Please try again.");
      }
    } catch (error) {
      console.log('error', error.response.data.errors)
      if (error.response.data.errors.length > 0) {
        setErrorMessage(error.response.data.errors);
      } else {
        setErrorMessage(["Something went wrong"]);
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  const closeOtpModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center h-auto"
      >
        <div className="p-3 w-[300px] sm:w-[400px] bg-white rounded-lg sm:p-6 space-y-2 sm:space-y-6">
          {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl dark:text-white">
            Create your account
          </h1> */}
          <div className='flex justify-between items-center'>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl dark:text-white">
              Create your account
            </h1>
            <div>
              <CircleChevronLeft role="button" className="text-orange-600" size={24} onClick={() => onClose()} />
            </div>
          </div>
          <form className="space-y-2 sm:space-y-6 h-screen sm:h-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2 sm:mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="first-name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    {...register("firstName", { required: "First name is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="last-name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    {...register("lastName", { required: "Last name is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    placeholder="youremail@gmial.com"
                    {...register("emailId", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.emailId && (
                    <span className="text-red-500 text-sm">{errors.emailId.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="mobile"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    id="mobile"
                    placeholder="+91(00000-00000)"
                    {...register("mobile", {
                      required: "Mobile is required",
                      minLength: { value: 10, message: "Mobile number must be 10 digits" },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.mobile && (
                    <span className="text-red-500 text-sm">{errors.mobile.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="address"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    {...register("address", { required: "Address is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">{errors.address.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="city"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    {...register("city", { required: "City is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.city && (
                    <span className="text-red-500 text-sm">{errors.city.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={isPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "At least 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
                        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <button
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-500 rounded-e-md focus:outline-none focus-visible:text-orange-600 hover:text-orange-600 transition-colors"
                    type="button"
                    onClick={toggleisPassword}
                    aria-label={isPassword ? "Hide password" : "Show password"}
                    aria-pressed={isPassword}
                    aria-controls="password"
                  >
                    {isPassword ? (
                      <EyeOff size={20} aria-hidden="true" />
                    ) : (
                      <Eye size={20} aria-hidden="true" />
                    )}
                  </button>

                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
              </div>

              <div className="sm:col-span-3 text-left">
                <label
                  htmlFor="confirm-password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={isConfirm ? "text" : "password"}
                    id="confirm-password"
                    placeholder="••••••••"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) => value === watch('password') || 'Password do not match',
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-1 sm:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <button
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-500 rounded-e-md focus:outline-none focus-visible:text-orange-600 hover:text-orange-600 transition-colors"
                    type="button"
                    onClick={toggleisConfirm}
                    aria-label={isConfirm ? "Hide password" : "Show password"}
                    aria-pressed={isConfirm}
                    aria-controls="password"
                  >
                    {isConfirm ? (
                      <EyeOff size={20} aria-hidden="true" />
                    ) : (
                      <Eye size={20} aria-hidden="true" />
                    )}
                  </button>

                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600"
            >
              Sign Up
            </button>
          </form>
        </div>
        {showModal && <OTP emailId={emailId} onVerificationSuccess={closeOtpModal} onClose={onClose} />}
      </div>
    </>
  );
}
