/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,ttf,otf}"],
  theme: {
    extend: {
      colors:{
        grey:'#DDDDDD',
        blue: '#B1EEEB',
        yellow: '#FFFD99',
        chromeYellow:'#FFFF00',
        skyBlue: '#1E99A8',
      },
      fontFamily: {
        'aoMono': ['aoMono'],
        'vcrOsdMono': ['vcr-osd-mono'],
        'monospace': ['monospace'],
      },
      boxShadow: {
        'dark-sm': '0 1px 4px 0 rgba(255, 255, 255, 0.84)', //White shadow
        'hard' :'8px 8px #000000'
       
      },
    },
  },
  plugins: [],
};
