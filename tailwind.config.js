module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pwr': '#ab1200'
      },
      fontFamily: {
        roboto: ['Roboto Mono']
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
