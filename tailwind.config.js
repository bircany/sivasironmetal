/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ec1313",
        "background-light": "#ffffff",
        "background-dark": "#221010",
        "text-primary": "#1f2937",
        "text-secondary": "#6b7280",
      },
      fontFamily: {
        "display": ["'Chakra Petch'", "sans-serif"],
        "body": ["'Inter'", "sans-serif"],
        "sans": ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        'metal-gradient': 'linear-gradient(to right, #434343 0%, black 100%)',
        'red-gradient': 'linear-gradient(135deg, #ec1313 0%, #8a0a0a 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
