/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
    colors: {
      "primary-dark": "hsl(158, 36%, 37%)",
      "primary-light": "hsl(30, 38%, 92%)",
      "neutral-vdark": "hsl(212, 21%, 14%)",
      "neutral-dark": "hsl(228, 12%, 48%)",
      "neutral-white": "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
