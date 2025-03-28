
"use client"
import { useState, useRef } from 'react';
import Button from '../button/button';
import { useRouter } from 'next/navigation';// Your custom button component
import { user_forgotPassword } from '@/services/auth/register.service';
import { resetPassword } from '@/services/auth/register.service';
import { Eye, EyeOff, CircleChevronLeft } from "lucide-react";

const ForgotPassword = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [emailId, setEmailId] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]); // Array for 6-digit OTP input
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const toggleisPassword = () => setIsPassword(prevState => !prevState);
  const toggleisConfirm = () => setIsConfirm(prevState => !prevState);

  const router = useRouter();
  const handleEmailChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!/^[0-9]{1}$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && !e.metaKey) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);

      if (index !== -1) {
        setOtp((prevOtp) => {
          let updatedOtp = [...prevOtp];
          updatedOtp[index] = "";
          if (e.key === "Backspace" && index > 0) {
            inputRefs.current[index - 1].focus();
          } else if (e.key === "Delete" && index < updatedOtp.length - 1) {
            inputRefs.current[index + 1].focus();
          }

          return updatedOtp;
        });
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

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };


  const requestOtp = async () => {
    try {
      const response = await user_forgotPassword({ emailId });
      console.log("response data:", response.email);
      response.email.length > 0 ? nextStep() : console.log(response.message || 'Something went wrong');
    } catch (err) {
      console.log('Error requesting OTP');
      console.error(err);
    }
  };

  const handleSubmitPasswordReset = async () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }

    try {
      const response = await resetPassword({ otp: otp.join(''), password });
      if (response.status === 200) {
        onClose()
      } else {
        console.log(response.message);
      }
    } catch (err) {
      console.log('Error resetting password');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <div className="bg-white p-4 max-w-md w-full">
              <div className='flex justify-between items-center'>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl dark:text-white">
                  Your Email
                </h1>
                <div>
                  <CircleChevronLeft role="button" className="text-orange-600" size={24} onClick={() => onClose()} />
                </div>
              </div>
              {/* <h2 className="text-xl font-bold text-center text-orange-600 mb-4">Your Email</h2> */}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-start mt-2">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                value={emailId}
                onChange={handleEmailChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mt-2 flex justify-end">
              <Button onClick={requestOtp}>Send OTP</Button>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="bg-white p-4 max-w-md w-full">
              <h2 className="text-xl font-bold text-center text-orange-600 mb-4">Email Verification</h2>
              <p className="text-[15px] text-slate-500 mb-2">Enter the 6-digit verification code that was sent to your Email.</p>
              <div className="flex items-center justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="0"
                    maxLength={1}
                    value={digit}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-10 h-10 text-center text-sm font-bold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-2 outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                ))}
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <Button onClick={prevStep}>Back</Button>
              <Button onClick={nextStep}>Verify OTP</Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="bg-white p-4 max-w-md w-full">
              <h2 className="text-xl font-bold text-center text-orange-600 mb-4">Your Password</h2>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-start">Password</label>
              <div className="mt-1 relative">
                <input
                  type={isPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mt-4 text-start">Confirm Password</label>
              <div className="mt-1 relative">
                <input
                  type={isConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            </div>
            <div className="mt-2 flex justify-end">
              <Button onClick={prevStep}>Back</Button>
              <Button onClick={handleSubmitPasswordReset}>Reset Password</Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
    >
      <div className="mx-auto mt-2 w-[300px] sm:w-[400px] bg-white p-3 rounded-lg shadow-lg">
        {renderStepContent()}
      </div>
    </ div>
  );
};

export default ForgotPassword;
