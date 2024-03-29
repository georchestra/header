/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--georchestra-header-primary)',
        secondary: 'var(--georchestra-header-secondary)',
        'primary-light': 'var(--georchestra-header-primary-light)',
        'secondary-light': 'var(--georchestra-header-secondary-light)',
      },
    },
  },
  variants: {
    display: ['group-hover'],
  },
  plugins: [],
}
