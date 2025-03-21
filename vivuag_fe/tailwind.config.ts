import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#011b2f', // Màu chính
          light: '#123a5a', // Sáng hơn
          dark: '#010d1f', // Tối hơn
        },
        ocean: {
          DEFAULT: '#002a45',
          light: '#004d75',
          dark: '#001624',
        },
        teal: {
          DEFAULT: '#00362f',
          light: '#00584a',
          dark: '#001f1b',
        },
        sun: {
          DEFAULT: '#ffd358',
          light: '#ffdf7d',
          dark: '#e6b933',
        },
        gold: {
          DEFAULT: '#f7ad19',
          light: '#ffbf4d',
          dark: '#d98e00',
        },
      },
    },
  },
  plugins: [],
};

export default config;