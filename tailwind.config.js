/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm earth tones (Japanese minimalist palette)
        primary: {
          50: '#faf8f5',   // Lightest beige
          100: '#f5f1eb',
          200: '#ebe4d8',
          300: '#ded2c0',
          400: '#d1bfa8',
          500: '#c9a688',  // Mid-tone soft brown
          600: '#b58a67',
          700: '#8b6f47',  // Darker earth
          800: '#6b5536',
          900: '#4a3b2a'   // Deep brown
        },
        accent: {
          DEFAULT: '#d4977b',  // Muted terracotta
          light: '#e5b89f',
          dark: '#b87f63'
        },
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
          900: '#1c1917'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem'
      },
      minHeight: {
        '44': '44px'  // Minimum touch target size
      },
      minWidth: {
        '44': '44px'  // Minimum touch target size
      }
    },
  },
  plugins: [],
}
