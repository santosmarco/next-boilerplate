import tailwindAspectRatioPlugin from "@tailwindcss/aspect-ratio";
import tailwindContainerQueriesPlugin from "@tailwindcss/container-queries";
import tailwindFormsPlugin from "@tailwindcss/forms";
import tailwindTypographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindCssAnimatePlugin from "tailwindcss-animate";

const VAR_FONT_INTER = "var(--font-inter)";

const tailwindConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [VAR_FONT_INTER],
      },
    },
  },
  plugins: [
    tailwindAspectRatioPlugin,
    tailwindContainerQueriesPlugin,
    tailwindFormsPlugin,
    tailwindTypographyPlugin,
    tailwindCssAnimatePlugin,
  ],
};

export default tailwindConfig;
