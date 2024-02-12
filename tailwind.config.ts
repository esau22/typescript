import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#631FD5",
        secundary: "#FCA311",
        dark: "#121212",
        "dark-light": "#181818",
      },
    },
  },
  plugins: [],
};
export default config;
