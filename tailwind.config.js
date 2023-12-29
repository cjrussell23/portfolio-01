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
        border: {
          DEFAULT: "rgb(var(--border), <alpha-value> )",
        },
        input: {
          DEFAULT: "rgb(var(--foreground), 50 )",
        },
        ring: {
          DEFAULT: "rgb(var(--primary), <alpha-value> )",
        },
        background: {
          DEFAULT: "rgb(var(--background), <alpha-value> )",
        },
        foreground: {
          DEFAULT: "rgb(var(--copy), <alpha-value> )",
        },
        primary: {
          DEFAULT: "rgb(var(--primary), <alpha-value> )",
          foreground: "rgb(var(--primary-content), <alpha-value> )",
          dark: "rgb(var(--primary-dark), <alpha-value> )",
          light: "rgb(var(--primary-light), <alpha-value> )",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary), <alpha-value> )",
          foreground: "rgb(var(--secondary-content), <alpha-value> )",
          dark: "rgb(var(--secondary-dark), <alpha-value> )",
          light: "rgb(var(--secondary-light), <alpha-value> )",
        },
        destructive: {
          DEFAULT: "rgb(var(--warning), <alpha-value> )",
          foreground: "rgb(var(--warning-content), <alpha-value> )",
        },
        muted: {
          DEFAULT: "rgb(var(--foreground), 5 )",
          foreground: "rgb(var(--copy-lighter), <alpha-value> )",
        },
        accent: {
          DEFAULT: "rgb(var(--primary), <alpha-value> )",
          foreground: "rgb(var(--primary-content), <alpha-value> )",
        },
        popover: {
          DEFAULT: "rgb(var(--foreground), <alpha-value> )",
          foreground: "rgb(var(--copy), <alpha-value> )",
        },
        card: {
          DEFAULT: "rgb(var(--foreground), <alpha-value> )",
          foreground: "rgb(var(--copy), <alpha-value> )",
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
      },
      maxWidth: {
        "100vw": "100vw",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
