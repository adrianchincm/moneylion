module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bgPrimary: '#282c34',
      textgray: '#8899A6',
      black: '#000',
      white: '#fff',
      red: '#FF0000',
      dividerGray: '#46545e',
      bgPrimaryLight: '#393f4a',
      blue: '#BFEFFF'
    },
    extend: {
      width: {
        '300px': '300px', 
        '500px': '500px'              
      },
      height: {
        '1px': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
