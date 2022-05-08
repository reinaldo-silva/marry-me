module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily: {
      galada: ["Galada", "ui-sans-serif"],
      gemunu: ["Gemunu Libre", "ui-sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wiggleReverse: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
        },
        fadeIn: {
          "0%, 100%": { opacity: 0 },
          "25%, 50%, 75%": { opacity: 1 },
        },
      },
      animation: {
        wiggle: "wiggle 20s ease-in-out infinite",
        wiggleReverse: "wiggleReverse 20s ease-in-out infinite",
        fadeIn: "fadeIn 8s infinite",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
