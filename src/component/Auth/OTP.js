"use client"
import { useState, useRef } from 'react';
import React from 'react'
export default function Opt() {

  const [otp, setOtp] = useState(Array(6).fill("")); // Array with 6 empty strings
  const inputRefs = useRef([]); // Array of refs for each input field

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-center text-orange-600 mb-4">Gmail Verification</h2>
        <p className="text-[15px] text-slate-500 mb-2">Enter the 6-digit verification code that was sent to your Gmail.</p>
        <form id="otp-form" >
          <div className="flex items-center justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-10 h-10 text-center text-sm font-bold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-2 outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            ))}
          </div>
          <div class="max-w-[260px] mx-auto mt-4">
            <button type="submit"
              className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600">Verify
              Account</button>
          </div>
        </form>
        <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-orange-600 hover:text-orange-500" href="#0">Resend</a></div>
      </div>
    </div>
  )
}