/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:
      {
        sm: "320px",
        md: "769px",
        lg: "1026px"
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        signika:["Signika", "sans-serif"],
        poppins:["Poppins", "sans-serif"]
        
      },
      colors:{
        bgpurple:"#2C2A32",
        bgpink:"#774069",
        white:"#FFFFFF"
      
      },
    },
  },
  plugins: [],
}
