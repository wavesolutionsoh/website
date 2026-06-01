import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{json,ts}",
  ],
  theme: {
    extend: {
      colors: {
        wave: {
          blue: "#0077C8",
          orange: "#F58220",
          navy: "#062A60",
          paper: "#FFFFFF",
          soft: "#F5F7FB",
          ink: "#102033",
        },
      },
      boxShadow: {
        service: "0 18px 45px rgba(6, 42, 96, 0.12)",
        panel: "0 26px 80px rgba(0, 0, 0, 0.28)",
      },
      maxWidth: {
        site: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
