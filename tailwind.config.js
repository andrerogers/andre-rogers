/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#1B1E1B',       // Deep Forest Gray
          secondary: '#0F766E', // Deep Teal
          accent: '#059669',    // Emerald
          highlight: '#34D399', // Light Emerald
        },
      },
    },
  },
  plugins: [],
}
