const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on class
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include source files for React components
    './node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}', // Include ShadCN UI components if used
    './node_modules/@nextui-org/theme/dist/components/navbar.js', // Ensure NextUI navbar is included
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
