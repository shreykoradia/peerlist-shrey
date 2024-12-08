import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXs: { max: "468px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxXlg: { max: "992px" },
        maxLg: { max: "1023px" },
        maxXl: { max: "1279px" },
        minMaxXxl: { min: "768px", max: "1366px" },
        minMaxMdXl: { min: "1024px", max: "1366px" },
        minMaxXl: { min: "1024px", max: "1100px" },
        minMaxLg: { min: "1024px", max: "1279px" },
        mac13Inch: { min: "1280px", max: "1365px" },
        minMaxMd: { min: "768px", max: "1023px" },
        minMaxSm: { min: "640px", max: "767px" },
      },
      colors: {
        background: "var(--background)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          dark: "var(--secondary-dark)",
          light: "var(--secondary-light)",
          grey: "var(--secondary-grey)",
          disabled: "var(--secondary-disabled)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        border: {
          DEFAULT: "var(--secondary-foreground)",
          accent: "var(--accent-foreground)",
        },
        input: {
          DEFAULT: "var(--primary-dark)",
          secondary: "var(--secondary-input)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".svg_secondary_stroke_muted > path": {
          stroke: "var(--secondary-grey)",
        },

        ".svg_secondary_fill_black > path": {
          fill: "var(--primary-dark)",
        },

        ".svg_secondary_stroke > g": {
          stroke: "var(--secondary-grey)",
        },

        ".svg_secondary_stroke g path:nth-child(2)": {
          fill: "var(--secondary-grey)",
        },
      });
    },
  ],
} satisfies Config;
