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
        primary: "#3E614A",
        secondary: "#66776C",
      },
      backgroundImage: {
        "arrow-right": "url('/arrow-right-solid.svg')",
        "arrow-left": "url('/arrow-left-solid.svg')",
        trash: "url('/trash.svg')",
        "water-drop": "url('/water-drop.svg')",
        cloud: "url('/cloud.svg')",
        bag: "url('/bag.svg')",
        close: "url('/close.svg')",
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
