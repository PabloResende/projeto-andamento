/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [],
  theme: {
    extend: {
      fontSize: {
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3.25rem'
      },
    },
  },
  plugins: [],
}
