// Tailwind setup. We add our own theme colours here so we can use
// classes like bg-saffron, bg-leaf and bg-cream anywhere in the app.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#F4A300", // header / highlights
        leaf: "#2E7D32",    // main buttons / success
        cream: "#FFF9EC",   // page background
      },
    },
  },
  plugins: [],
};