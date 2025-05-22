/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Library theme colors
        'library-green': '#4A7B50', // Lighter green
        'library-brown': '#7C5C38', // Warm brown
        'library-beige': '#F5E9DA', // Parchment beige
        'library-gold': '#C9A14A', // Gold accent
        'library-red': '#A94442', // Muted red
      },
    },
  },
  plugins: [],
}; 