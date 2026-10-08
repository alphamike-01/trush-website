import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          950: "#070e18",
          900: "#0c1829",
          850: "#102037",
          800: "#162b48",
          700: "#1d3b64",
          600: "#274f85",
          500: "#3b69a6",
          400: "#5d8ac5",
          300: "#8fb2e0",
          200: "#c3d7f2",
          100: "#e4edf9",
          50: "#f3f7fc",
        },
        gold: {
          900: "#5c430e",
          800: "#7c5c16",
          700: "#9c7520",
          600: "#b98e2d",
          500: "#cfa53e",
          400: "#e0bb5b",
          300: "#ebd083",
          200: "#f4e4b0",
          100: "#faf4dc",
          50: "#fdfbf4",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
