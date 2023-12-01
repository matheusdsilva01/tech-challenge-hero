import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-libre-franklin)"],
        k2d: ["var(--font-k2d)"],
      },
      colors: {
        indigo: {
          800: "#48409E",
        },
        violet: {
          300: "#BFB9FF",
        },
        danger: "#FF7979",
      },
      height: {
        inherit: "inherit",
      },
      minHeight: {
        inherit: "inherit",
      },
      padding: {
        24: "90px",
      },
      fontSize: {
        xs: "1.125rem",
      },
      borderRadius: {
        xl: "0.625rem",
        "3xl": "1.25rem",
      },
      boxShadow: {
        nav: "4px 0px 30px 10px rgba(0, 0, 0, 0.05)", // 0.25rem 0 1.875rem 0.0625rem
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
