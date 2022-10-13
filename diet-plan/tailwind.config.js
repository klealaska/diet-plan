/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'#E58748',
        'green':'#3A664B',
        'black':'#2F312A'
      },
      fontFamily: {
        'serif': ['ui-serif', 'Cambria Math',]}
    
    },
  },
  plugins: [],
}
