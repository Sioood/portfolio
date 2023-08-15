/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * BASE
         */
        primary: {
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
        },
        secondary: {
          100: "rgb(var(--color-secondary-100) / <alpha-value>)",
          200: "rgb(var(--color-secondary-200) / <alpha-value>)",
          300: "rgb(var(--color-secondary-300) / <alpha-value>)",
          400: "rgb(var(--color-secondary-400) / <alpha-value>)",
          500: "rgb(var(--color-secondary-500) / <alpha-value>)",
          600: "rgb(var(--color-secondary-600) / <alpha-value>)",
          700: "rgb(var(--color-secondary-700) / <alpha-value>)",
          800: "rgb(var(--color-secondary-800) / <alpha-value>)",
          900: "rgb(var(--color-secondary-900) / <alpha-value>)",
        },
        accent: {
          100: "rgb(var(--color-accent-100) / <alpha-value>)",
          200: "rgb(var(--color-accent-200) / <alpha-value>)",
          300: "rgb(var(--color-accent-300) / <alpha-value>)",
          400: "rgb(var(--color-accent-400) / <alpha-value>)",
          500: "rgb(var(--color-accent-500) / <alpha-value>)",
          600: "rgb(var(--color-accent-600) / <alpha-value>)",
          700: "rgb(var(--color-accent-700) / <alpha-value>)",
          800: "rgb(var(--color-accent-800) / <alpha-value>)",
          900: "rgb(var(--color-accent-900) / <alpha-value>)",
        },

        neutral: {
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
        },

        background: "rgb(var(--color-background) / <alpha-value>)",

        surface: "rgb(var(--color-surface) / <alpha-value>)",

        /**
         * SEMANTIC
         */

        warning: {
          disabled: "rgb(var(--color-warning-disabled) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
          hover: "rgb(var(--color-warning-hover) / <alpha-value>)",
          focus: "rgb(var(--color-warning-focus) / <alpha-value>)",
        },

        error: {
          disabled: "rgb(var(--color-error-disabled) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
          hover: "rgb(var(--color-error-hover) / <alpha-value>)",
          focus: "rgb(var(--color-error-focus) / <alpha-value>)",
        },

        success: {
          disabled: "rgb(var(--color-success-disabled) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
          hover: "rgb(var(--color-success-hover) / <alpha-value>)",
          focus: "rgb(var(--color-success-focus) / <alpha-value>)",
        },

        informative: {
          disabled: "rgb(var(--color-informative-disabled) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-informative) / <alpha-value>)",
          hover: "rgb(var(--color-informative-hover) / <alpha-value>)",
          focus: "rgb(var(--color-informative-focus) / <alpha-value>)",
        },
      },
    },
    fontFamily: {
      primary: "var(--font-primary)",
      secondary: "var(--font-secondary)",
    },
  },
  plugins: [],
};
