import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050b16",
          900: "#07111f",
          800: "#0d1a2d"
        },
        skyglass: {
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "landing-grid":
          "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 26rem), radial-gradient(circle at top right, rgba(251,113,133,0.14), transparent 22rem), linear-gradient(180deg, #07111f 0%, #09162a 48%, #050b16 100%)"
      }
    }
  },
  plugins: []
};

export default config;
