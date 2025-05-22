import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  clean: true,
  target: "es2019",
  dts: true,
  banner: { js: '"use client";' },
});
