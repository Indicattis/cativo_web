import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neon_red: "#ff0066",
        neon_purple: "#5005f2",
        neon_green: "#68fe9a",
        neon_blue: "#407cf3",
        neon_pink: "#f5618b",
        neon_green2: "#47ff0a",
        neon_pink2: "#d705f2",
        // 
        palette_gray: "#5E5F64",
        palette_dark: "#15161B",
        palette_black: "#060606",
        purple: "#151C36",

      },
      fontFamily: {
        'newake': ['newake', 'sans-serif'],
        'figtree': ['figtree'],
      },
    },
  },
  plugins: [],
};
export default config;
