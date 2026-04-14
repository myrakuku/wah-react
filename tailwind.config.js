/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#FFFFFF',
        'text-primary': '#545454',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 保留無襯線字體用於正文
      },
    },
  },
  plugins: [],
}