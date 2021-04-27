module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'react-blue': '#6ADCFB',
        'react-black': '#222222'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
