
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
      },
      colors: {
        background: '#010208',
        foreground: '#F8F8F8',
        gold: {
          DEFAULT: '#D4AF37',
          muted: 'rgba(212, 175, 55, 0.4)',
          glow: 'rgba(212, 175, 55, 0.1)',
        },
        night: {
          DEFAULT: '#020410',
          deep: '#010208',
          ethereal: '#050a24',
        },
        primary: {
          DEFAULT: '#D4AF37',
          foreground: '#010208',
        },
        border: 'rgba(212, 175, 55, 0.15)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
