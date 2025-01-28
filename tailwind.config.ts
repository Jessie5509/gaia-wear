import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        green: {
          400: "#8CA87C",
        },
        beige: {
          400: "#F7F7F6",
        },
      },
      backgroundImage: {
        card: "url('/model1.jpg')",
        "arrow-right": "url('/arrow-right-solid.svg')",
        "arrow-left": "url('/arrow-left-solid.svg')",
        trash: "url('/trash.svg')",
        "water-drop": "url('/water-drop.svg')",
        cloud: "url('/cloud.svg')",
        bag: "url('/bag.svg')",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
