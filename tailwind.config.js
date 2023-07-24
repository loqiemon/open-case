/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128px': '128px',
      },
      height: {
        '98px': '98px',
      },
      gap: {
        '1px': '1px',
      }
    },
  },
  plugins: [],
}

