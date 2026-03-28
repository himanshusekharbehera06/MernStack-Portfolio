/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050816",
        primary: "#7c3aed",
        secondary: "#06b6d4",
        accent: "#f472b6",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(124,58,237,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(6,182,212,0.25), transparent 30%)",
      },
    },
  },
  plugins: [],
};