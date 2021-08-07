module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'jarra': "url('~assets/images/bgjarra.jpg')",
      }),
      fontFamily: {
        'source-sans-pro': ["'Source Sans Pro'"],
        'into-light': ["'Shadows Into Light'"],
        'indie': ["'Indie Flower'"],
        'kaushan': ["'Kaushan Script'"]
      },
      colors: {
        'i-gray': {
          DEFAULT: '#333030',
          100: "#d6d6d6",
          200: "#adacac",
          300: "#858383",
          400: "#5c5959",
          500: "#333030",
          600: "#292626",
          700: "#1f1d1d",
          800: "#141313",
          900: "#0a0a0a"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
