/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#a855f7',
          light: '#c084fc',
          dark: '#9333ea',
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(40,40,60,0.7) 0%, rgba(20,20,35,0.7) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
