import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#ad2d49",
        darkBg: "#0a0a0a",
      },
      backgroundImage: {
        "gardient-cover":
          "linear-gradient(to right, #ff9966, #ff5e62);",
      }
    },
  },
  plugins: [],
} satisfies Config;
