/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/komponen/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "scrolling 30s linear infinite ",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
