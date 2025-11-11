/** @type {import('tailwindcss').Config} */
export default {
  // Asegura que Tailwind escanee la carpeta src/ y el index.html
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // (Mantenemos los colores y estilos personalizados)
      colors: {
        'primary-dark': '#1A1A1A',
        'secondary-dark': '#2B2B2B',
        'accent-gold': '#FFD700', 
        'accent-orange': '#FF8C00',
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
