import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Blue: '#0D6EFD',
        Red: '#DC3545',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
}
