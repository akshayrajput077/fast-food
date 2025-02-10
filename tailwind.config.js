/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",


    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: () => ({
        pedigrey: "#E7E7E7",
      }),
    },
    // screens: {
    //   'sm': { 'min': '640px', 'max': '767px' },
    //   'md': { 'min': '768px', 'max': '1023px' },
    //   'lg': { 'min': '1024px', 'max': '1279px' },
    //   'xl': { 'min': '1280px', 'max': '1535px' },
    //   '2xl': { 'min': '1536px' },
    // }

  },
  plugins: [],
};
