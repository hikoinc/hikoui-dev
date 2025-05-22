import storybookPlugin from "eslint-plugin-storybook";
import { config as reactConfig } from "@hikoui/eslint-config-hikoui/react";

/** @type {import("eslint").Linter.Config} */
const config = [
  ...reactConfig,
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
