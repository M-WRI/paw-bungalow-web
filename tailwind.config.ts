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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#032233",
        secondary: "#FDF9E8",
      },
      fontFamily: {
        primary: ["var(--font-sofia-pro-soft)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
