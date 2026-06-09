/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#004799",
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#004799",
          600: "#003a7a",
          700: "#002c5c",
          deep: "#003a7a",
          soft: "#8EC5FF",
          accent: "#2D7BBD",
        },
        ink: "#1F2937",
        muted: "#62748e",
        line: "#E5E7EB",
        surface: "#F3F6F4",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Manrope",
          "Inter",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Manrope",
          "Plus Jakarta Sans",
          "Inter",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 18px 40px -22px rgba(15, 23, 42, 0.25)",
        soft: "0 6px 18px -10px rgba(15, 23, 42, 0.25)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
