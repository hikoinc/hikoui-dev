import type {StorybookConfig} from "@storybook/react-vite";

import {join, dirname} from "path";

/****
 * Returns the absolute directory path of a given package by resolving its `package.json`.
 *
 * Useful for environments like Yarn PnP or monorepos where package resolution requires explicit handling.
 *
 * @param value - The name of the package to resolve.
 * @returns The absolute path to the package's directory.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/experimental-addon-test"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
export default config;
