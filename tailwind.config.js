/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': 'hsl(var(--color-text) / <alpha-value> )',
        'background': 'hsl(var(--color-background) / <alpha-value> )',
        'background-dark': 'hsl(var(--color-background-dark) / <alpha-value> )',
        'primary': 'hsl(var(--color-primary) / <alpha-value> )',
        'secondary': 'hsl(var(--color-secondary) / <alpha-value> )',
        'accent': 'hsl(var(--color-accent) / <alpha-value> )',
        'custom-gray-100': 'hsl(var(--color-custom-gray-100) / <alpha-value> )',
        'custom-gray-300': 'hsl(var(--color-custom-gray-300) / <alpha-value> )',
        'custom-gray-500': 'hsl(var(--color-custom-gray-500) / <alpha-value> )',
        'custom-gray-700': 'hsl(var(--color-custom-gray-700) / <alpha-value> )',
        'custom-gray-900': 'hsl(var(--color-custom-gray-900) / <alpha-value> )',
        'brown-500': 'hsl(var(--color-brown-500) / <alpha-value> )',
        'brown-700': 'hsl(var(--color-brown-700) / <alpha-value> )',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
