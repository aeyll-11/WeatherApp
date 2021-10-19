module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'grey': '#000000',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
