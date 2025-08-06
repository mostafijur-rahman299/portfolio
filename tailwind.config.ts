import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      // Enterprise breakpoints
      'mobile': {'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'desktop': {'min': '1024px'},
      'wide': {'min': '1440px'},
      'ultrawide': {'min': '1920px'}
    },
    extend: {
      colors: {
        // Corporate primary palette
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006'
        },
        // Executive accent colors
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407'
        },
        // Professional neutrals
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09'
        },
        // Enterprise blue for tech credibility
        tech: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        // Success green for achievements
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        // Executive typography
        'display-xs': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-lg': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-xl': ['3.75rem', { lineHeight: '4.25rem', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-2xl': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.025em', fontWeight: '700' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '320': '80rem'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem'
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em'
      },
      animation: {
         'fade-in': 'fadeIn 0.6s ease-out',
         'fade-in-up': 'fadeInUp 0.6s ease-out',
         'fade-in-down': 'fadeInDown 0.6s ease-out',
         'slide-in-left': 'slideInLeft 0.8s ease-out',
         'slide-in-right': 'slideInRight 0.8s ease-out',
         'slide-up': 'slideUp 0.4s ease-out',
         'slide-down': 'slideDown 0.4s ease-out',
         'scale-in': 'scaleIn 0.3s ease-out',
         'scale-out': 'scaleOut 0.3s ease-in',
         'float': 'float 6s ease-in-out infinite',
         'float-slow': 'float 8s ease-in-out infinite',
         'glow': 'glow 2s ease-in-out infinite alternate',
         'glow-pulse': 'glowPulse 3s ease-in-out infinite',
         'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
         'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
         'bounce-slow': 'bounce 3s infinite',
         'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
         'shimmer': 'shimmer 2s linear infinite',
         'gradient-shift': 'gradientShift 3s ease-in-out infinite',
         'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
         'accordion-down': 'accordion-down 0.2s ease-out',
         'accordion-up': 'accordion-up 0.2s ease-out',
         'spin-slow': 'spin 3s linear infinite',
         'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'
       },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
          '4xl': '2rem',
          '5xl': '2.5rem',
          '6xl': '3rem'
        },
        backdropBlur: {
          xs: '2px',
          '4xl': '72px'
        },
        boxShadow: {
          'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          'glass-lg': '0 25px 50px -12px rgba(31, 38, 135, 0.25)',
          'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          'premium-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
          'premium-xl': '0 45px 80px -12px rgba(0, 0, 0, 0.35)',
          'enterprise': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'enterprise-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          'glow-primary': '0 0 20px rgba(234, 179, 8, 0.3)',
          'glow-tech': '0 0 20px rgba(59, 130, 246, 0.3)',
          'glow-success': '0 0 20px rgba(34, 197, 94, 0.3)'
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-enterprise': 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
          'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%)'
        },
       keyframes: {
           fadeIn: {
             '0%': { opacity: '0' },
             '100%': { opacity: '1' }
           },
           fadeInUp: {
             '0%': { opacity: '0', transform: 'translateY(30px)' },
             '100%': { opacity: '1', transform: 'translateY(0)' }
           },
           fadeInDown: {
             '0%': { opacity: '0', transform: 'translateY(-30px)' },
             '100%': { opacity: '1', transform: 'translateY(0)' }
           },
           slideInLeft: {
             '0%': { opacity: '0', transform: 'translateX(-30px)' },
             '100%': { opacity: '1', transform: 'translateX(0)' }
           },
           slideInRight: {
             '0%': { opacity: '0', transform: 'translateX(30px)' },
             '100%': { opacity: '1', transform: 'translateX(0)' }
           },
           slideUp: {
             '0%': { transform: 'translateY(100%)' },
             '100%': { transform: 'translateY(0)' }
           },
           slideDown: {
             '0%': { transform: 'translateY(-100%)' },
             '100%': { transform: 'translateY(0)' }
           },
           scaleIn: {
             '0%': { opacity: '0', transform: 'scale(0.9)' },
             '100%': { opacity: '1', transform: 'scale(1)' }
           },
           scaleOut: {
             '0%': { opacity: '1', transform: 'scale(1)' },
             '100%': { opacity: '0', transform: 'scale(0.9)' }
           },
           float: {
             '0%, 100%': { transform: 'translateY(0px)' },
             '50%': { transform: 'translateY(-20px)' }
           },
           bounceSubtle: {
             '0%, 100%': { transform: 'translateY(0)' },
             '50%': { transform: 'translateY(-5px)' }
           },
           glow: {
             '0%': { boxShadow: '0 0 5px rgba(234, 179, 8, 0.5)' },
             '100%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.8)' }
           },
           glowPulse: {
             '0%, 100%': { boxShadow: '0 0 5px rgba(234, 179, 8, 0.3)' },
             '50%': { boxShadow: '0 0 30px rgba(234, 179, 8, 0.6)' }
           },
           shimmer: {
             '0%': { transform: 'translateX(-100%)' },
             '100%': { transform: 'translateX(100%)' }
           },
           gradientShift: {
             '0%, 100%': { backgroundPosition: '0% 50%' },
             '50%': { backgroundPosition: '100% 50%' }
           },
           typing: {
             'from': { width: '0' },
             'to': { width: '100%' }
           },
           'blink-caret': {
             'from, to': { borderColor: 'transparent' },
             '50%': { borderColor: 'currentColor' }
           },
           'accordion-down': {
             from: { height: '0' },
             to: { height: 'var(--radix-accordion-content-height)' }
           },
           'accordion-up': {
             from: { height: 'var(--radix-accordion-content-height)' },
             to: { height: '0' }
           }
         }
     }
   },
   plugins: [require('tailwindcss-animate')]
 }
 
 export default config;
