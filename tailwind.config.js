module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED1E25',
        light: '#F4F8FF',
      },
    }
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  darkMode: 'class',
  plugins: [

  ],
}

