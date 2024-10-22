/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'journal.html',
    './src/**/*.{html,js}',
    './modules/**/*.{html,js}',
  ], // Include any files that you want to apply the styles to
  theme: {
    extend: {},
  },
  plugins: [],
};
