/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#0f172a',
          accent: '#14b8a6',
          surface: '#f8fafc',
          muted: '#475569',
          line: '#e2e8f0',
          highlight: '#ecfeff',
        },
      },
      boxShadow: {
        soft: '0 20px 45px -24px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};
