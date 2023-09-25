// @ts-check

/**
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions}
 */
const prettierConfig = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cva", "cn"],
  tailwindConfig: "./tailwind.config.ts",
};

export default prettierConfig;
