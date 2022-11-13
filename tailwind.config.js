/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#f3f3f3',
        secondary: '#b2b5b7',
        secondaryLight: '#858585',
        activeColor: '#e14f59',
        bgColor: '#090909',
        bgBoxColor: '#0e1011',
      },
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
      },
      container: {
        padding: '20px',
        center: true
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      boxShadow: {
        'xl': '0 0 10px #22d3ee',
        '2xl': '0 0 20px #22d3ee',
      },
    },
  },
  plugins: [],
}
