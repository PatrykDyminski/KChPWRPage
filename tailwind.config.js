const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pwr': '#ab1200'
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
