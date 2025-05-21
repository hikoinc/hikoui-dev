import type {UserConfig} from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  helpUrl: "https://www.conventionalcommits.org/en/v1.0.0",
  rules: {
    "type-case": [2, "always", "lower-case"],
    "subject-case": [2, "always", "lower-case"],
    "type-enum": [
      2,
      "always",
      ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"],
    ],
  },
};

export default commitlintConfig;
