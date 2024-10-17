/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1a5f7a',
        'kw-red': '#b40101',
        'charcoal': '#333333',
      },
      fontFamily: {
        'sans': ['Open Sans', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};