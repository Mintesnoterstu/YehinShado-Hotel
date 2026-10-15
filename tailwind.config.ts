import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F",
        surface: "#16161C",
        gold: "#C9A961",
        amber: "#8B6F3D",
        ethiopian: "#B03030",
        cream: "#F5F1E8",
        parchment: "#FAF7F2",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        ethiopic: ["var(--font-noto)", "Noto Sans Ethiopic", "sans-serif"],
      },
      boxShadow: {
        gold: "0 12px 40px -12px rgba(201, 169, 97, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
