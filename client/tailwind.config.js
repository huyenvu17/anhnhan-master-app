/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  trailingSlash: true,
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
