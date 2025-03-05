
"use client"
import { useState, useEffect } from 'react';
import { loginUser } from '@/services/auth/signIn.service';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
export default function SignIn({ onClose }) {

  useEffect(() => {
    AOS.init({})
    return () => {
      AOS.refresh();
    };
  }, [])

  const [error, setError] = useState('');
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(false);
  const toggleisPassword = () => setIsPassword(prevState => !prevState);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registerModalOpen, setRegisterInModalOpen] = useState(false);
  const [forgotModalOpen, setForgotInModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(true);
  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      const user = await loginUser(email, password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        // router.push('/shop');
        onClose()
      } else {
        setError('Something went wrong');
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const openRegisterModal = () => {
    setLoginModalOpen(false)
    setRegisterInModalOpen(true); // Open the register modal
  };

  const closeRegisterModal = () => {
    setLoginModalOpen(true)
    setRegisterInModalOpen(false); // Close the register modal
  };

  const openForgotModal = () => {
    setLoginModalOpen(false)
    setForgotInModalOpen(true); // Open the register modal
  };

  const closeForgotModal = () => {
    setLoginModalOpen(true)
    setForgotInModalOpen(false); // Close the register modal
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen sm:h-screen lg:py-0 relative">
          {loginModalOpen && (
            <div className="p-6 rounded-lg w-[300px] sm:w-[400px] space-y-4 bg-white md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl dark:text-white">
                Sign in
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
                <div className='text-left'>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="youremail@gmial.com"
                      {...register("email", {
                        required: "Email is required",
                        maxLength: { value: 50, message: "The email should have at most 50 characters" },
                        pattern: {
                          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                          message: "Email address must be a valid address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className='text-left'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <div className="mt-1 relative">
                    <input
                      type={isPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" }
                      })}
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
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input type="checkbox" className="accent-orange-600 w-4 h-4 border" {...register("remember", { required: "Please check 'Remember me' to continue" })} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-orange-600 hover:underline dark:text-orange-500" onClick={openForgotModal} >
                    Forgot password?
                  </div>
                </div>
                {errors.remember && <p className="text-red-500 text-xs">{errors.remember.message}</p>}
                <button
                  type="submit"
                  className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a
                    className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                    onClick={openRegisterModal} // Open the modal when clicked
                  >

                    Sign up

                  </a>
                </p>
              </form>
            </div>
          )}
        </div>
        {registerModalOpen && (
          <Register onClose={closeRegisterModal} />
        )}
        {forgotModalOpen && (
          <ForgotPassword onClose={closeForgotModal} />
        )}
      </div>
    </>
  );
}
