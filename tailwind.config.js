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
    extend: {
      colors: {
        skyBlue: '#CCE7F8',
        'btn-yellow': '#FAF1A2',
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
      },
    },
  },
  plugins: [],
};
