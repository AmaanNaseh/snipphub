/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-gradient-light": "linear-gradient(to right, #165dfc, #a052ff)",
      },
    },
  },
  plugins: [],
};
