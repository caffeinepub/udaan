import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Sora", "Outfit", "Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Geist Mono", "monospace"],
      },
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        udaan: {
          violet: "oklch(0.62 0.22 290)",
          "violet-light": "oklch(0.72 0.22 290)",
          "violet-dark": "oklch(0.48 0.22 290)",
          blue: "oklch(0.58 0.2 245)",
          "blue-light": "oklch(0.68 0.2 245)",
          cyan: "oklch(0.65 0.18 220)",
          gold: "oklch(0.78 0.18 60)",
          "bg-deep": "oklch(0.09 0.012 285)",
          "bg-mid": "oklch(0.12 0.018 285)",
          "bg-surface": "oklch(0.15 0.025 285)",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        glow: "0 0 30px oklch(0.62 0.22 290 / 0.3)",
        "glow-lg": "0 0 60px oklch(0.62 0.22 290 / 0.2), 0 0 120px oklch(0.62 0.22 290 / 0.1)",
        "glow-blue": "0 0 30px oklch(0.58 0.2 245 / 0.3)",
        card: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px oklch(0.62 0.22 290 / 0.1)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px oklch(0.62 0.22 290 / 0.3), 0 0 30px oklch(0.62 0.22 290 / 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px oklch(0.62 0.22 290 / 0.3)" },
          "50%": { boxShadow: "0 0 40px oklch(0.62 0.22 290 / 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
