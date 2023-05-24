/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter-font)"],
        monospace: ["var(--jetbrains-mono-font)"],
      },

      colors: {
        primary: "#7a24ff",
        "primary-darker": "#6c12ef",
      },

      backgroundColor: {
        "background-primary": "#1F1F1F",
        "background-secundary": "#28292A",
        "background-tertiary": "#242526",
      },
      textColor: {
        normal: "#E3E3E3",
        weak: "#9f9f9f",
      },
      borderColor: {
        gray: "#353535",
      },

      animation: {
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
