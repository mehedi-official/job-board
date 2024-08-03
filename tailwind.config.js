/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#666666',
          100: '#323232',
          200: '#000000'
        },
        silver: {
          50: 'rgba(255, 255, 255 , 0.6)',
          100: 'rgba(255, 255, 255, 0.9)',
          200: '#ffffff'
        },
        primary: '#88F32B'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};