/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueBG: "#01012a",
      },
      backgroundImage: {
        'homepage-BG': "url('/photos/homepage/stars.png')",
      },
      boxShadow: {
        'homePic-shadow': '0 8px 16px -8px lightblue',
        'homePic-hover': '0 10px 20px 2px rgba(111, 81, 218, 0.7)',
      },
      height: {
        'canvas-height': '550px',
      },
      width: {
        'canvas-width': '300px',
      },
      borderRadius: {
        'canvas-radius': '6rem',
      },
      fontFamily: {
        'canvas-font-title': ['Times New Roman', 'Arial', 'serif', 'Verdana', 'Tahoma'],
      },
      fontSize: {
        'canvas-md-size': '1.1rem'
      }
    },
  },
  plugins: [],
}

