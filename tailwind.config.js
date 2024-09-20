/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "parallax": "url('/src/assets/deepSpaceEarthPlanets.jpg')",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.text-shadow-cyan': {
          textShadow: '0px 0px 4px rgba(48,186,166, 0.9), 0px 0px 6px rgba(48,186,166, 0.5)',
        },
        '.text-shadow-green': {
          textShadow: '0px 0px 4px rgba(80,170,113, 0.9), 0px 0px 6px rgba(80,170,113, 0.5)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};