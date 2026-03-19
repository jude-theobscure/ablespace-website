import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#6C47FF',
          50: '#F3EFFF',
          100: '#E9E2FF',
          200: '#D4C5FF',
          300: '#B99EFF',
          400: '#9B77FF',
          500: '#7D50FF',
          600: '#6C47FF',
          700: '#5A35EE',
          800: '#4823DD',
          900: '#3611CC',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          alt: '#F4F3FF',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgb(0 0 0 / 0.06)',
        medium: '0 4px 20px 0 rgb(0 0 0 / 0.08)',
        large: '0 8px 40px 0 rgb(0 0 0 / 0.10)',
        glow: '0 0 50px rgb(108 71 255 / 0.18)',
        'glow-lg': '0 0 80px rgb(108 71 255 / 0.22)',
        card: '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 4px 16px 0 rgb(0 0 0 / 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6C47FF 0%, #9B77FF 100%)',
        'gradient-hero': 'linear-gradient(180deg, #F8F7FF 0%, #FFFFFF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
