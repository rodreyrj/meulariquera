/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1A1A1A',
        'secondary-dark': '#2B2B2B',
        'accent-gold': '#FFD700', // Oro
        'accent-orange': '#FF8C00', // Naranja
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(255, 215, 0, 0.1), 0 2px 4px -1px rgba(255, 215, 0, 0.06)',
      }
    },
  },
  plugins: [],
}