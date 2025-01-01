/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'btn-primary': '#7F56D9',
        badge: '#E9D7FE',
        'badge-background': '#F9F5FF',
        text: '#6941C6',
        'secondary-text': '#475467',
        'btn-secondary': '#344054',
        'primary-text': '#101828',
        'team-bg': '#F9FAFB',
        'nav-primary': '#667085',
        'new-text': '#067647',
        'new-bg': '#ECFDF3',
        'new-border': '#ABEFC6',
      },
      screens: {
        mobile: '375px',
      },
    },
  },
  plugins: [],
};
