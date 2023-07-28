/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '124px': '124px', 
        '128px': '128px',
      },
      height: {
        '98px': '98px',
      },
      gap: {
        '1px': '1px',
      }
    },
    transitionDuration: {
      '6000': '6000ms',
    },       
    transitionTimingFunction: {
      'custom': 'cubic-bezier(0.2, 0.3, 0.2, 1)',

    }
  },
  plugins: [],
}

