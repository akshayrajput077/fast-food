
import React from "react"
const Button = ({ children, disabled, loading, ...props }) => {
  return (
    <button
      className={`${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
        } text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600 m-1`}
      {...props}
    >
      {/* {loading && (
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          viewBox="0 0 24 24"
        ></svg>
      )} */}
      {loading ? "Loading..." : children}
    </button>
  )
}
export default Button;