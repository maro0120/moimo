/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js}',
    './src/*.{html,js}'
  ],
    theme: {
      extend: {
        backgroundImage: theme => ({
         'hero-img': "url('../dist/assets/top1.webp')",
        })
      }
    }
  }