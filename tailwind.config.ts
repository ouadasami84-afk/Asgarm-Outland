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
        code: ['monospace'],
      },
      colors: {
        background: '#080808',
        foreground: '#F8F8F8',
        obsidian: '#080808',
        midnight: '#1A1026',
        arcane: '#5A2D91',
        mystic: '#23395B',
        gold: '#D4AF37',
        silver: '#C8CDD7',
        primary: {
          DEFAULT: '#5A2D91',
          foreground: '#F8F8F8',
        },
        secondary: {
          DEFAULT: '#1A1026',
          foreground: '#F8F8F8',
        },
        accent: {
          DEFAULT: '#D4AF37',
          foreground: '#080808',
        },
        card: {
          DEFAULT: 'rgba(26, 16, 38, 0.4)',
          foreground: '#F8F8F8',
        },
        border: 'rgba(212, 175, 55, 0.2)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
