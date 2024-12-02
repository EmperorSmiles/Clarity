/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', "sans-serif"],
      },
      colors: {
        primary: {
          light: "#86B1A1",
          dark: "#68918A",
        },
        secondary: {
          light: "#C7DAD4",
          dark: "#4A6B66",
        },
        background: {
          light: "#F8F9FA",
          dark: "#1A1F25",
        },
        text: {
          light: "#2C3E50",
          dark: "#E8ECEF",
        },
      },
    },
  },
  plugins: [],
};

// Headings: Inter Semi-Bold (600)
// Body text: Inter Regular (400)
// Navigation: Inter Medium (500)
// Call-to-action buttons: Inter Medium (500)
// Small text/captions: Inter Regular (400)
