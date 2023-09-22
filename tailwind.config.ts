import tailwindForms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [tailwindForms],
};

export default tailwindConfig;
