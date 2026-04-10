/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "neon-blue-gradient": "linear-gradient(to right, #165dfc, #a052ff)",
      },
    },
  },
  plugins: [],
};
