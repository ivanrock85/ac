/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Updated to a brighter blue
        secondary: "#4F46E5", // Added secondary purple/indigo
        accent: "#F59E0B",
        background: {
          light: "#F8FAFC", // Slightly cooler gray
          dark: "#0F172A"   // Slate 900
        },
        text: {
          dark: "#1E293B",
          secondary: "#64748B",
          light: "#94A3B8"
        },
        border: {
          gray: "#E2E8F0"
        },
        error: "#EF4444"
      },
      maxWidth: {
        content: "1200px"
      }
    }
  },
  plugins: []
};
