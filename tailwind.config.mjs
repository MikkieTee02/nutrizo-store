/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3A8E54',
        'primary-dark': '#256B3F',
        'accent': '#F9A825',
        'background': '#FDFCFB',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568',
        'border-color': '#E2E8F0',
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
};
