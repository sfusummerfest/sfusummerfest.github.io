const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-discord': '#7289DA',
        'brand-facebook': '#3B5998',
        'brand-instagram': '#262626',
        'brand-twitch': '#6441A5',
        'brand-twitter': '#1DA1F2',
        'brand-youtube': '#FF0000',
        'primary-dark': '#351211',
        'primary-orange': '#FBB767',
        'primary-purple': '#724E91',
        'primary-red': '#EC7462',
        'primary-yellow': '#FFCB76',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    }),
  ],
}
