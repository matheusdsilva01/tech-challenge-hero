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
        zinc: {
          100: "#F2F2F2",
        },
        neutral: {
          500: "#6F6F6F",
        },
        lime: {
          700: "#2BA700",
        },
        amber: {
          300: "#FFBA53",
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
        24: "5.625rem",
      },
      maxWidth: {
        "2xl": "42.625rem",
      },
      fontSize: {
        ss: ".875rem",
        xs: "1.125rem",
      },
      margin: {
        9: "2.1875rem",
      },
      borderRadius: {
        xl: "0.625rem",
        "3xl": "1.25rem",
      },
      boxShadow: {
        nav: ".25rem 0rem 1.875rem .625rem rgba(0, 0, 0, 0.05)", // 0.25rem 0 1.875rem 0.0625rem
        card: "0rem .25rem .625rem 0rem rgba(0, 0, 0, 0.10);", // Orem 0.25rem 0.625rem Orem
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
