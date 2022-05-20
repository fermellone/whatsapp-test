module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.html', './src/**/*.css', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
