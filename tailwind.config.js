/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Custom colors for the library theme
        'library-beige': '#F5F1E8',
        'library-brown': '#8B7355',
        'library-green': '#0F766E',
        'library-gold': '#B7935F',
        'library-red': '#DC2626',
      },
    },
  },
  plugins: [],
}; 