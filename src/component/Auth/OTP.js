
"use client"
import { useState, useRef, useEffect } from 'react';
import { verifyOtp } from '@/services/auth/register.service';
import { useRouter } from 'next/navigation';
import { resendOtp } from '@/services/auth/register.service';

export default function OTP({ emailId, onClose }) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30); // Timer in seconds
  const [isResendAllowed, setIsResendAllowed] = useState(false); // Track whether resend is allowed
  const router = useRouter();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      setIsResendAllowed(true); // Allow resend after timer hits 0
    }
  }, [timer]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    try {
      const user = await verifyOtp({ emailId, otp: otpCode });
      if (user.data && user.data.email) {
        router.push('/shop');
        onClose();
      } else {
        console.log('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.response.data.errors);
    }
  };

  const handleResendOtp = async () => {
    if (isResendAllowed) {
      try {
        const response = await resendOtp({ emailId });
        if (response.data.email) {
          console.log('OTP', response.data.message);
          setTimer(30);
          setIsResendAllowed(false);
        } else {
          console.log('Failed to resend OTP. Please try again later.');
        }
      } catch (error) {
        console.log('Error resending OTP:', error.response.data);
      }
    } else {
      console.log('Please wait until the resend timer is over.');
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-center text-orange-600 mb-4">Email Verification</h2>
        <p className="text-[15px] text-slate-500 mb-2">Enter the 6-digit verification code that was sent to your Email.</p>
        <form id="otp-form" onSubmit={handleSubmit}>
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
          <div className="max-w-[260px] mx-auto mt-4">
            <button
              type="submit"
              className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600"
            >
              Verify Account
            </button>
          </div>
        </form>
        <div className="text-sm text-slate-500 mt-4">
          Didn't receive code?{' '}
          <a
            role="button"
            className={`font-medium text-orange-600 hover:text-orange-500 ${isResendAllowed ? '' : 'cursor-not-allowed'}`}
            onClick={handleResendOtp}
          >
            Resend {timer > 0 ? `(${timer}sec)` : ''}
          </a>
        </div>
      </div>
    </div>
  );
}
