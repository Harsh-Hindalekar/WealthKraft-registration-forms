/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#d4af37',
        'secondary-gold': '#cfa03f',
        'muted-text': '#7b7b7b',
        'surface-start': '#fdfbfb',
        'surface-end': '#ebedee',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 24px 60px rgba(20,20,30,0.08)',
        'input-focus': '0 12px 28px rgba(212,175,55,0.12)',
      }
    },
  },
  plugins: [],
}
