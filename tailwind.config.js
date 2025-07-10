module.exports = {
  content: ['./**/*.liquid', './**/*.js'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '94': '22rem',
      },
      colors: {
        primary: '#4f46e5',
        secondary: '#f97316',
      },
      borderRadius: {
        button: '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
