/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        red: '#F40000',
        light: '#7B7979' 
      },
    },
    fontFamily: {
      pressStart2PRegular: ['PressStart2P-Regular', 'sans-serif'],
      IbmMedium : ['IBMPlexMono-Medium', 'sans-serif']
    },
  },
  plugins: [],
}
