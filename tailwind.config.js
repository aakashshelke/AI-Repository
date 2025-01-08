/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan these files for Tailwind classes
  ],
  theme: {
    extend: {}, // Extend Tailwind defaults here
  },
  plugins: [], // Add Tailwind plugins if needed
};
