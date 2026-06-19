/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003580',
          dark: '#002a66',
          light: '#0a4ea3',
          50: '#e6edf7',
        },
        accent: {
          DEFAULT: '#febb02',
          dark: '#e0a500',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#4a4a4a',
          muted: '#717171',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.14)',
        widget: '0 4px 20px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        xl2: '14px',
      },
    },
  },
  plugins: [],
};
