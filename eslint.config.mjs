import { config } from "@lib/eslint-config-hikoui/base";

/** @type {import("eslint").Linter.Config} */
const configs = [
  {
    ignores: ["**/dist/**", "**/storybook-static/**"],
  },
  ...config,
];

export default configs;
