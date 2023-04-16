import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      exclude: [...(configDefaults.coverage.exclude || [])],
      all: true,
      src: ["src"],
      provider: "c8",
      reporter: ["text"],
    },
  },
});
