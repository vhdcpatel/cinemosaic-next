// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#020617',
        'black-test': '#04152d',
        'black2': '#040916',
        'black3': '#0f172a8b',
        'dark': 'rgba(12, 36, 141)',
        'dark2': 'rgba(4, 21, 45, 0)',
        'black-light': '#17212f',
        'black-lighter': '#192330',
        'pink': '#ec4899',
        'orange': '#f97316',
        'red1': '#b91c1c',
        'blue': '#1e3a8a',
        'red-theme': '#B91C1C',
        'red-theme2': '#FF0000',
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(90deg, #FF0000 5%, #B91C1C 95%)',
      },
      fontSize: {
        base: '1rem',
        m: '2rem',
        l: '3rem',
        xl: '4rem',
        '2xl': '5rem',
        '3xl': '6rem',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Tahoma', 'Verdana', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
