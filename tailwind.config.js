/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts,css,scss,sass,less,style}"],
  theme: {
    colors: {
      transparent: "transparent",
      "common-primary-color": "var(--common-primary-color)",
      "common-secondary-color": "var(--common-secondary-color)",
      "common-primary-bg-color": "var(--common-primary-bg-color)",
      "common-primary-font-color": "var(--common-primary-font-color)",
      "common-secondary-font-color": "var(--common-secondary-font-color)",
      "common-primary-border-color": "var(--common-primary-border-color)",
      "common-secondary-border-color": "var(--common-secondary-border-color)",
      "common-primary-icon-color": "var(--common-primary-icon-color)",
      "common-border-color": "var(--common-border-color)",
      "common-main-bg-color": "var(--common-main-bg-color)",
      "common-secondary-bg-color": "var(--common-secondary-bg-color)",
      "common-tertiary-bg-color": "var(--common-tertiary-bg-color)",
      "common-green-color": "var(--common-green-color)",
      "common-green-bg-color": "var(--common-green-bg-color)",
      "common-green-secondary-bg-color":
        "var(--common-green-secondary-bg-color)",
      "common-primary-blue-color": "var(--common-primary-blue-color)",
      "common-primary-blue-bg-color": "var(--common-primary-blue-bg-color)",
      "common-primary-blue-secondary-bg-color":
        "var(--common-primary-blue-secondary-bg-color)",
      "common-blue-color": "var(--common-blue-color)",
      "common-blue-bg-color": "var(--common-blue-bg-color)",
      "common-primary-red-color": "var(--common-primary-red-color)",
      "common-red-color": "var(--common-red-color)",
      "common-red-bg-color": "var(--common-red-bg-color)",
      "common-red-secondary-bg-color": "var(--common-red-secondary-bg-color)",
      "common-yellow-color": "var(--common-yellow-color)",
      "common-yellow-bg-color": "var(--common-yellow-bg-color)",
      "common-yellow-secondary-bg-color":
        "var(--common-yellow-secondary-bg-color)",
      "common-checkbox-border-color": "var(--common-checkbox-border-color)",
      "common-checkbox-bg-color": "var(--common-checkbox-bg-color)",
      "common-checkbox-check-color": "var(--common-checkbox-check-color)",

      "common-toast-green-color": "var(--common-toast-green-color)",
      "common-toast-red-color": "var(--common-toast-red-color)",
      "common-toast-blue-color": "var(--common-toast-blue-color)",
      "common-toast-yellow-color": "var(--common-toast-yellow-color)",
      white: "#FFFFFF"
    },
    extend: {
      fontFamily: {
        karla: ["var(--karla)"],
        roboto: ["var(--roboto)"],
        nunitoSans: ["var(--nunito-sans)"]
      },
      boxShadow: {
        "common-button-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.06)", // example
        "common-box-shadow": "0px 4px 16px 0px rgba(0, 0, 0, 0.04)",
        "common-tab-bottom": "0px 5px 4px -4px rgba(45, 87, 237, 0.15)"
      },
      screens: {
        laptop: "1100px"
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))"
      },
      animation: {
        marquee: "marquee 25s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "group-hover"], // Enable background color variants
      opacity: ["responsive", "hover", "focus", "group-hover"] // Enable opacity variants
    }
  },
  plugins: []
};
