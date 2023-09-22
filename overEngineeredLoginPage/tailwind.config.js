/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
      },
      backgroundColor: {
        button: '#1A535C',
      },
    },
  },
  plugins: [],
};
