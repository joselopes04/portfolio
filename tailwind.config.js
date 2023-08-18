/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'console-red': '#ff5953',
        'console-yellow': '#e6c02a',
        'console-green': '#53c22b',
      },
    },
  },
  plugins: [],
}

