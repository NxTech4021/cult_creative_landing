/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      5: "-.6rem",
    },
    fontFamily: {
      aileron: ["aileron", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      times: ["Times New Roman Condensed"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(0%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      //   marquee2: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(0%)" },
      //   },
      // },
      // animation: {
      //   "spin-slow-30": "spin 30s linear infinite",
      //   "spin-slow-25": "spin 25s linear infinite",
      //   "spin-slow-10": "spin 10s linear infinite",
      //   "marquee-infinite": "marquee 25s linear infinite",
      // },
    },
  },
  plugins: [],
};
