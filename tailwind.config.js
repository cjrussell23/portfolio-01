/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "tw-",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value> )",
        input: "hsl(var(--input) / <alpha-value> )",
        ring: "hsl(var(--ring) / <alpha-value> )",
        background: "hsl(var(--background) / <alpha-value> )",
        foreground: "hsl(var(--foreground) / <alpha-value> )",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value> )",
          foreground: "hsl(var(--primary-foreground) / <alpha-value> )",
          dark: "hsl(var(--primary-dark) / <alpha-value> )",
          light: "hsl(var(--primary-light) / <alpha-value> )",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value> )",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value> )",
          dark: "hsl(var(--secondary-dark) / <alpha-value> )",
          light: "hsl(var(--secondary-light) / <alpha-value> )",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value> )",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value> )",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value> )",
          foreground: "hsl(var(--muted-foreground) / <alpha-value> )",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value> )",
          foreground: "hsl(var(--accent-foreground) / <alpha-value> )",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value> )",
          foreground: "hsl(var(--popover-foreground) / <alpha-value> )",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value> )",
          foreground: "hsl(var(--card-foreground) / <alpha-value> )",
        },
      },
      zIndex: {
        "negative-10": "-10",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "steam-game": "460 / 215",
      },
      maxHeight: {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        1080: "1080px",
      },
      maxWidth: {
        "100vw": "100vw",
        "8xl": "90rem",
        1920: "1920px",
        "1/2": "50%",
      },
      width: {
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
      },
      height: {
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
