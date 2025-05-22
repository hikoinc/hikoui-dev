import storybookPlugin from "eslint-plugin-storybook";
import { config as baseConfig } from "@hikoui-dev/eslint-config-hikoui/react";

/** @type {import("eslint").Linter.Config} */
const config = [
  ...baseConfig,
  {
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: ["storybook-static"],
  },
];

export default config;
