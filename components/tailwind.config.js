import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#F5EFEF',
          500: '#6B3A3A',
          600: '#5A2F2F',
          900: '#3D2020',
        },
        neutral: {
          50: '#FAFAF8',
          100: '#F5F4F0',
          200: '#E8E6E0',
          500: '#9B9A94',
          700: '#4A4A45',
          900: '#1C1C19',
        },
        background: {
          primary: '#FAFAF8',
          surface: '#F5F4F0',
          elevated: '#FFFFFF',
        },
        semantic: {
          success: '#4A6B4A',
          error: '#8B4A4A',
          warning: '#B88A4A',
          info: '#4A5A6B',
        },
        // Keep existing shadcn colors for components
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', '-apple-system', 'sans-serif'],
        japanese: ['Noto Serif JP', 'serif'],
        'japanese-body': ['Noto Sans JP', 'sans-serif'],
        sans: ['Lato', ...fontFamily.sans],
      },
      fontSize: {
        'display': ['96px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'headline': ['64px', { lineHeight: '1.2' }],
        'headline-mobile': ['36px', { lineHeight: '1.2' }],
        'subhead': ['40px', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'body-large': ['24px', { lineHeight: '1.7' }],
        'body': ['18px', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'small': ['14px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
        '4xl': '128px',
        'hero': '160px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(28, 28, 25, 0.08), 0 2px 4px rgba(28, 28, 25, 0.04)',
        'hover': '0 12px 24px rgba(28, 28, 25, 0.12), 0 6px 12px rgba(28, 28, 25, 0.06)',
        'modal': '0 24px 48px rgba(28, 28, 25, 0.15), 0 12px 24px rgba(28, 28, 25, 0.08)',
      },
      transitionDuration: {
        'fast': '300ms',
        'base': '400ms',
        'slow': '500ms',
        'luxury': '600ms',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
