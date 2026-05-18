/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8eb6ff',
          400: '#5a8fff',
          500: '#356bff',
          600: '#1f4ef0',
          700: '#173dd0',
          800: '#0f2a8a',
          900: '#0a1f5c',
          950: '#06133d',
        },
        accent: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        ink: {
          900: '#0b1220',
          800: '#101a2e',
          700: '#1a2741',
        },
      },
      backgroundImage: {
        'grid-light':
          "linear-gradient(to right, rgba(15,42,138,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,42,138,0.06) 1px, transparent 1px)",
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(45,212,191,0.18) 0%, rgba(10,31,92,0) 70%)',
        'hero-mesh':
          'radial-gradient(40% 50% at 20% 10%, rgba(53,107,255,0.35) 0%, rgba(6,19,61,0) 60%), radial-gradient(35% 45% at 85% 15%, rgba(45,212,191,0.35) 0%, rgba(6,19,61,0) 60%), radial-gradient(45% 60% at 50% 100%, rgba(31,78,240,0.30) 0%, rgba(6,19,61,0) 70%)',
      },
      boxShadow: {
        'glow': '0 10px 40px -10px rgba(45,212,191,0.45)',
        'card': '0 10px 30px -10px rgba(10,31,92,0.15)',
        'soft': '0 1px 2px rgba(10,31,92,0.04), 0 8px 24px -8px rgba(10,31,92,0.12)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%':     { transform: 'translate(-20px,30px) scale(0.97)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        blob: 'blob 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
