/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        first: ["Italiana", "sans-serif"],
        second: ["Cinzel", "serif"],
        third: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#f6e6cf",
        accent: "#101211",
        dark: "#f8f8f8",
        light: "#f8f8f8",
      },
      backgroundImage: {
        home: "url('./src/assets/images/back-img.jpg')",
        banner: "url('./src/assets/images/hero_img.png')",
        about: "url('./src/assets/images/about.jpg')",
        contact: "url('./src/assets/images/contact.jpg')",
      },
    },
  },
  plugins: [],
};
