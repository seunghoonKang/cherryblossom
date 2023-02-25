/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      blossom: {
        yellow: '#FAF1A2',
        green: '#AFE6AD',
        lightPink: '#FEEFF4',
        pink: '#FFC9D4',
        gray: '#D9D9D9',
        darkGray: '#868686',
        lightBlue: '#CCE7F8',
        white: '#ffffff',
      },
    },
    extend: {},
  },
  plugins: [],
};
