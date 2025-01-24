
"use client"
import { useState } from 'react';
import { loginUser } from '@/services/signIn/signIn';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from "react-hook-form";

export default function SignIn() {
  const [error, setError] = useState('');
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const user = await loginUser(email, password);
    if (user) {
      router.push('/dashboard');
    } else {
      setError('Something went wrong');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  };

  return (
    <section className="bg-gray-50 text-center relative" style={{
      backgroundImage: `url('/eg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'auto',
    }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative">
        {error && <div className="fixed top-0 left-end right-0">
          <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">{error}</span>
            </div>
          </div>
        </div>
        }
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl dark:text-white">
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
              <div className='text-left'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
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
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className='text-left'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                  })}
                />
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
                <Link href="#" className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500">Forgot password?</Link>
              </div>
              {errors.remember && <p className="text-red-500 text-xs">{errors.remember.message}</p>}
              <button
                type="submit"
                className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href="/register" className="font-medium text-orange-600 hover:underline dark:text-orange-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
