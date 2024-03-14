/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
     extend: {
      backgroundImage: {
        banner: "url('./src/assets/Shortner.png')",
      },
    },
  },
  plugins: [],
}
