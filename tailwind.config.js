module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'side-pink': '#FFFDF8',
        'primary-orange': '#F97B5C',
        'primary-black': '#282828',
        'dark-orange': '#FFF1D6',
        'secondary-pink': '#FFE0D9',
        'darker-orange': '#F97B5C',
      },
      fill: {
        current: 'currentColor',
      },
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif']
      },
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
    },

    animation: {
      fade: 'fadeIn  .5s ease-in-out',
      fadeOut: 'fadeOut  .5s ease-out',
      motionSafe: 'motion-safe',
    },

    keyframes: theme => ({
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeOut: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover','focus','active'],
      fontWeight: ['hover','focus','active'],
      textColor: ['visited','focus','active'],
      scale: ['responsive', 'hover', 'focus'],
      translate: ['responsive', 'hover', 'focus'],
      animation: ['motion-safe'],
      fill: ['hover'],
      stroke: ['hover'],
    }
  },
  plugins: [],
}

