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
        'primary': '#4CAF50',        // Fresh green for organic theme
        'primary-dark': '#2E7D32',   // Darker green for depth
        'primary-light': '#81C784',  // Light green for accents
        'accent': '#FF9800',         // Warm orange for energy/juices
        'accent-light': '#FFB74D',   // Light orange for highlights
        'secondary': '#8BC34A',      // Lime green for freshness
        'background': '#F8F9FA',     // Clean white with slight warmth
        'surface': '#FFFFFF',        // Pure white for cards
        'text-primary': '#2E3440',   // Dark charcoal for readability
        'text-secondary': '#5E6C84', // Medium gray for secondary text
        'text-muted': '#94A3B8',     // Light gray for muted text
        'border-color': '#E5E9F0',   // Soft gray borders
        'success': '#4CAF50',        // Green for success states
        'warning': '#FF9800',        // Orange for warnings
        'error': '#F44336',          // Red for errors
        'info': '#2196F3',           // Blue for info
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
};
