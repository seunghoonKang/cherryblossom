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
    extend: {
      colors: {
        skyBlue: '#CCE7F8',
        'btn-yellow': '#FAF1A2',
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out'
    },
      keyframes: {
        'pull-out': {
          '0%': { transform: 'translateY(20px) scale(0.9)', 'z-index': 10 },
          '50%': { transform: 'translateY(-80px) scale(0.9)', 'z-index': 20 },
          '100%': { transform: 'translateY(0px)' },
        },
        envelope: {
          '0%': { transform: 'rotateX(-180deg)' },
          '100%': { transform: 'rotateX(0)' },
        },
        fadeIn: {
          '0%': {
              opacity: '0',
              transform: 'translateX(-50%) translateY(-40%)'
              
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(-50%) translateY(-50%)'
          },
      }
      },
    },
  },
  plugins: [],
};
