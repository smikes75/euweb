/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B387A',
          light: '#2647A0',
          dark: '#142960'
        },
        accent: {
          DEFAULT: '#F49E00',
          light: '#FFB52E',
          dark: '#CC8400'
        }
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        scroll: 'scroll 25s linear infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};