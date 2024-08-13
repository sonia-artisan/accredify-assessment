/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#493DF5",
        subtitle: "#5B6270",
        sidebar: {
          background: "#151F32",
          active: "#353D4E",
        },
        icon: {
          active: "#fff",
          inactive: "#D0D2D6",
        } 
      }
    },
  },
  plugins: [],
}

