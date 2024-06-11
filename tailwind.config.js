/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teAl: "#28c4dc",
        lightBlue: "#bae5df",
        offwhite: "#fff4d4",
        gray: "#121212",
        lightGray: "#ECECEC",
        brightPurple: "#804cfc",
        lightPurple: "#d8c4fc",
        lightOrange: "#e8a474",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
