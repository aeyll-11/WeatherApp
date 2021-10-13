module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#101014',
        'inputcolor': '#1f1f21',
      }),
      backgroundImage: {
        'background': "url('/src/image/cloudy.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
