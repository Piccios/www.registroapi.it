/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Refined Luxury Theme with better contrast
        'luxury': {
          'black': '#000000',
          'dark': '#0A0A0A',
          'gray': '#1A1A1A',
          'gray-light': '#2A2A2A',
          'gray-medium': '#4A4A4A',
          'gold': '#D4AF37', // More sophisticated gold
          'gold-light': '#E6C547',
          'gold-dark': '#B8941F',
          'white': '#FFFFFF',
          'cream': '#F5F5F0',
          'beige': '#F8F6F0',
          // New improved text colors for better readability
          'text-primary': '#FFFFFF', // Main text - pure white
          'text-secondary': '#E5E5E5', // Secondary text - light gray
          'text-muted': '#B0B0B0', // Muted text - medium gray
          'text-accent': '#D4AF37', // Accent text - gold
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'elegant-glow': 'elegantGlow 4s ease-in-out infinite alternate',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        elegantGlow: {
          '0%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.2), 0 0 40px rgba(212, 175, 55, 0.1)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      typography: {
        'luxury': {
          css: {
            '--tw-prose-body': '#E5E5E5',
            '--tw-prose-headings': '#D4AF37',
            '--tw-prose-links': '#D4AF37',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-counters': '#D4AF37',
            '--tw-prose-bullets': '#D4AF37',
            '--tw-prose-hr': '#4A4A4A',
            '--tw-prose-quotes': '#D4AF37',
            '--tw-prose-quote-borders': '#4A4A4A',
            '--tw-prose-captions': '#B0B0B0',
            '--tw-prose-code': '#D4AF37',
            '--tw-prose-pre-code': '#E5E5E5',
            '--tw-prose-pre-bg': '#1A1A1A',
            '--tw-prose-th-borders': '#4A4A4A',
            '--tw-prose-td-borders': '#4A4A4A',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 