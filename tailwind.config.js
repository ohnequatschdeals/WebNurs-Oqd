/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F1F2D",
        secondary: "#7E3FFF",
        accent: "#00FFC8",
        hover: "#FF3D8D",
        premium: "#FFD166",
        text: "#E8E8FF"
      }
    }
  },
  plugins: []
}
